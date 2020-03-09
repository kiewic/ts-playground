// Source:
// https://github.com/microsoft/TypeScript/pull/29510
//
var x = 10; // Type 10
var y = [10, 20]; // Type readonly [10, 20]
var z = { text: "hello" }; // Type { readonly text: "hello" }
// y.push(30); // Property push does not exist
// y[0] = 3; // Cannot assign to '0' because it is a read-only property.
//z.text = "foo"; // Cannot assign to 'text' because it is a read-only property.
// y = [10]; // Property '1' is missing in type '[10]' but required in type 'readonly [10, 20]'.ts(2741)
// y = [10, 10]; // Type '10' is not assignable to type '20'.ts(2322)
var obj;
obj = { x: 10, y: [20, 30], z: { a: { b: 42 } } };
console.log(obj);
