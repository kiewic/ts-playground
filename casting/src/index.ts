class Foo {
  x: string;
}

let foo = JSON.parse("{\"x\":1999}");

// Is there any difference between the two types of casts?
console.log(<Foo>foo);
console.log(foo as Foo);
