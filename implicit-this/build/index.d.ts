declare namespace foo {
    class Dog {
        bark(text: string): void;
    }
    function fooWithThis(msg: string): void;
    function fooWithoutThis(msg: string): void;
    function bar(message: string): void;
    function createModelFactory(): {
        fooWithThis: typeof fooWithThis;
        fooWithoutThis: typeof fooWithoutThis;
        bar: typeof bar;
    };
}
declare let dog: foo.Dog;
