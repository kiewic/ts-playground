var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var foo = JSON.parse("{\"x\":1999}");
// Is there any difference between the two types of casts?
console.log(foo);
console.log(foo);
