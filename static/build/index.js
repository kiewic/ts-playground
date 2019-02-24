var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.baz = function (name) {
        console.log("Hello " + name);
    };
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
    }
    Bar.prototype.baz = function (name) {
        console.log("Hello " + name);
    };
    return Bar;
}());
Foo.baz("Pedro");
(new Bar()).baz("Peter");
