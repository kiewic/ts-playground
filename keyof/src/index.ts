interface Foo {
  text: string;
}

interface Bar {
  foo1: Foo,
  foo2: Foo,
  foo3: Foo,
  foo4?: Foo,
  foo5?: Foo,
}

let bar1: Bar;

let bar2: { [p in keyof Bar]: Foo }; // This creates the same object as Bar

let bar3: { [p in keyof Partial<Bar>]: Foo }; // This creates the same object as Partial<Bar>

let bar4: Partial<Bar>;

// The next line gives error:
//
//   Property 'foo1' is optional in type '{ foo1?: Foo; foo2?: Foo; foo3?: Foo; foo4?: Foo; foo5?: Foo; }'
//   but required in type '{ foo1: Foo; foo2: Foo; foo3: Foo; foo4?: Foo; foo5?: Foo; }'. ts(2322)
//
// bar2 = bar3;

bar3 = bar4;
