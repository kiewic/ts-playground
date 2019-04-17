var foo;
(function (foo) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.bark = function (text) {
            console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
            fooWithThis(text);
        };
        return Dog;
    }());
    foo.Dog = Dog;
    function fooWithThis(msg) {
        console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
        this.bar(msg);
    }
    foo.fooWithThis = fooWithThis;
    function fooWithoutThis(msg) {
        console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
        bar(msg);
    }
    foo.fooWithoutThis = fooWithoutThis;
    function bar(message) {
        console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
        console.log(message);
    }
    foo.bar = bar;
    function createModelFactory() {
        return {
            fooWithThis: fooWithThis,
            fooWithoutThis: fooWithoutThis,
            bar: bar,
        };
    }
    foo.createModelFactory = createModelFactory;
})(foo || (foo = {}));
foo.fooWithThis("test 1");
foo.fooWithoutThis("test 2");
foo.createModelFactory().fooWithThis("test 3");
foo.createModelFactory().fooWithoutThis("test 4");
// This fails because it changes the type of `this`
var dog = new foo.Dog();
dog.bark("test 5");
