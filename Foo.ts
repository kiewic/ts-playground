export class Foo {
    constructor(
        public readonly bar: string,
        public readonly baz?: string,
    ) {
        console.log(bar, baz);
    }
}

new Foo('hello', 'world');
new Foo('Tahini');
