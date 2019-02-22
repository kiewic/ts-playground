"use strict";
exports.__esModule = true;
var Colors2;
(function (Colors2) {
    Colors2[Colors2["Red"] = 0] = "Red";
    Colors2[Colors2["Green"] = 1] = "Green";
    Colors2[Colors2["Blue"] = 2] = "Blue";
})(Colors2 = exports.Colors2 || (exports.Colors2 = {}));
// Use Colors1
console.log(0 /* Red */);
console.log(0 /* Red */.toString());
// Use Colors2
console.log(Colors2.Red);
console.log(Colors2[Colors2.Red]);
console.log(Colors2.Red.toString());
// Use Colors3
console.log("finished" /* Finished */);
