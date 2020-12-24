var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FooPromise = /** @class */ (function () {
    function FooPromise(executor) {
        var _this = this;
        this.status = 0 /* Pending */;
        this.chained = [];
        executor(function (value) {
            _this.resolveInternal(value);
        }, function (reason) {
            _this.rejectInternal(reason);
        });
    }
    FooPromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        // TODO: support multiple calls to then
        return new FooPromise(function (resolve, reject) {
            var _onFulfilled = function (res) {
                resolve(onFulfilled(res));
            };
            var _onRejected = function (err) {
                reject(onRejected(err));
            };
            if (_this.status === 1 /* Resolved */) {
                _onFulfilled(_this.value);
            }
            else if (_this.status === 2 /* Rejected */) {
                _onRejected(_this.value);
            }
            else {
                // Push into the chain array, so resolve() or reject() can call them
                _this.chained.push({
                    onFulfilled: _onFulfilled,
                    onRejected: _onRejected,
                });
            }
        });
    };
    FooPromise.prototype.resolveInternal = function (value) {
        if (this.status !== 0 /* Pending */) {
            return;
        }
        this.status = 1 /* Resolved */;
        this.value = value;
        for (var _i = 0, _a = this.chained; _i < _a.length; _i++) {
            var onFulfilled = _a[_i].onFulfilled;
            onFulfilled(value);
        }
        // if (isPromise(value)) {
        //   let then = value.then;
        //   then.call(
        //     value,
        //     (value: T) => this.resolveInternal(value),
        //     (reason: any) => this.rejectInternal(reason));
        // }
        // else {
        //   this.status = Status.Resolved;
        //   this.value = value;
        //   // TODO: schedule process queue
        //   console.error('oops');
        // }
    };
    FooPromise.prototype.rejectInternal = function (reason) {
        if (this.status !== 0 /* Pending */) {
            return;
        }
        this.status = 2 /* Rejected */;
        this.value = reason;
        for (var _i = 0, _a = this.chained; _i < _a.length; _i++) {
            var onRejected = _a[_i].onRejected;
            onRejected(reason);
        }
    };
    return FooPromise;
}());
function isPromise(value) {
    return typeof value == 'object' &&
        value.then !== undefined &&
        typeof value.then === 'function';
}
// Test: two thens, two async/awaits
function foo() {
    return __awaiter(this, void 0, FooPromise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Hello foo");
                    return [4 /*yield*/, new FooPromise(function (resolve, _reject) {
                            setTimeout(function () { return resolve(1234); }, 2000);
                        }).then(function (value) { console.log("Then 1A", value); return value + 1; }, function (reason) { console.log("Then 1B", reason); return -1; }).then(function (value) { console.log("Then 2A", value); return value + 1; }, function (reason) { console.log("Then 2B", reason); return -1; })];
                case 1:
                    result = _a.sent();
                    console.log("Goodbye foo", result);
                    return [2 /*return*/, result + 1];
            }
        });
    });
}
function bar() {
    return __awaiter(this, void 0, FooPromise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Hello bar");
                    return [4 /*yield*/, foo()];
                case 1:
                    result = _a.sent();
                    console.log("Goodbye bar", result);
                    return [2 /*return*/, result + 1];
            }
        });
    });
}
bar();
