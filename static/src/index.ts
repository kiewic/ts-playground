class Foo {
  public static baz(name: string) {
      console.log(`Hello ${name}`);
  }
}

class Bar {
  public baz(name: string) {
      console.log(`Hello ${name}`);
  }
}

Foo.baz("Pedro");
(new Bar()).baz("Peter");
