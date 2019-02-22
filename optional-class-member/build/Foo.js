"use strict";
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo(bar, baz) {
        this.bar = bar;
        this.baz = baz;
        console.log(bar, baz);
    }
    return Foo;
}());
exports.Foo = Foo;
new Foo('hello', 'world');
new Foo('Tahini');
