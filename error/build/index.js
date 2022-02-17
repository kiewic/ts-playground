/**
 * Extending Error class and transpilling to ES5
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Using nothing */
var MyError1 = /** @class */ (function (_super) {
    __extends(MyError1, _super);
    function MyError1() {
        return _super.call(this) || this;
    }
    return MyError1;
}(Error));
/** Using this.name */
var MyError2 = /** @class */ (function (_super) {
    __extends(MyError2, _super);
    function MyError2() {
        var _this = _super.call(this, 'MyError2 message') || this;
        _this.name = "MyError2Name";
        return _this;
    }
    return MyError2;
}(Error));
/** Using setPrototypeOf() */
var MyError3 = /** @class */ (function (_super) {
    __extends(MyError3, _super);
    function MyError3() {
        var _newTarget = this.constructor;
        var _this = this;
        var proto = _newTarget.prototype;
        _this = _super.call(this) || this;
        Object.setPrototypeOf(_this, proto);
        return _this;
    }
    return MyError3;
}(Error));
/** Subclass of class using setPrototypeOf() */
var MyError4 = /** @class */ (function (_super) {
    __extends(MyError4, _super);
    function MyError4() {
        return _super.call(this) || this;
    }
    return MyError4;
}(MyError3));
/** Object that does not extend Error */
var MyError5 = /** @class */ (function () {
    function MyError5() {
    }
    return MyError5;
}());
function runWithinTryCatch(doStuff) {
    try {
        console.log('Hello World');
        doStuff();
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('The error is an instance of Error');
        }
        if (error instanceof MyError1) {
            console.log('The error is an instance of MyError1');
        }
        if (error instanceof MyError2) {
            console.log('The error is an instance of MyError2');
        }
        if (error instanceof MyError3) {
            console.log('The error is an instance of MyError3');
        }
        if (error instanceof MyError4) {
            console.log('The error is an instance of MyError4');
        }
        if (error instanceof MyError5) {
            console.log('The error is an instance of MyError5');
        }
        console.log(error);
    }
}
runWithinTryCatch(function () {
    throw new MyError1(); // Only matches Error
});
runWithinTryCatch(function () {
    throw new MyError2(); // Only matches Error
});
runWithinTryCatch(function () {
    throw new MyError3(); // Matches Error and MyError3
});
runWithinTryCatch(function () {
    throw new MyError4(); // Matches Error, MyError3 and MyError4
});
runWithinTryCatch(function () {
    throw new MyError5(); // Only matches MyError5
});
