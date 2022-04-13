"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function foo() {
    return rxjs_1.of(false);
}
console.log(foo().pipe(rxjs_1.take(2)).subscribe(function (next) { return console.log('Callback', next); }));
