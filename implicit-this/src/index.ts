namespace foo {
  export class Dog {
    public bark(text: string): void {
      console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
      fooWithThis(text);
    }
  }

  export function fooWithThis(msg: string): void {
    console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
    this.bar(msg);
  }

  export function fooWithoutThis(msg: string): void {
    console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
    bar(msg);
  }

  export function bar(message: string): void {
    console.log(Object.keys(this), Object.keys(this).length, this instanceof Dog);
    console.log(message);
  }

  export function createModelFactory() {
    return {
      fooWithThis: fooWithThis,
      fooWithoutThis: fooWithoutThis,
      bar: bar,
    };
  }
}

foo.fooWithThis("test 1");

foo.fooWithoutThis("test 2");

foo.createModelFactory().fooWithThis("test 3");

foo.createModelFactory().fooWithoutThis("test 4");

// This fails because it changes the type of `this`
let dog = new foo.Dog();
dog.bark("test 5");
