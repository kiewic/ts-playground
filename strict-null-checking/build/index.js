"use strict";
function foo(a, b) {
    console.log(a, b);
}
foo("Hello", 2017);
foo(null, 2017);
// foo(null, null); // error TS2345: Argument of type 'null' is not assignable to parameter of type 'number'.
