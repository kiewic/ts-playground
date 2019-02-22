let promise1 = new Promise<string>((resolve, reject) => {
  resolve('a string');
});

let promise2 = new Promise<string>((resolve, reject) => {
  reject({ foo: true, bar: false });
});

function onfulfilled(value: string) {
  console.log(value);
}

// `reject` accepts `any` argument. This results from the fact that a promise
// can be rejected by throwing inside `then` or `catch` (this is a preferable way
// to reject existing promise), and this cannot be handled by typing system.
//
// Source: https://stackoverflow.com/a/50071254/27211
function onrejected(reason: any) {
  console.log(reason);
}

promise1.then(onfulfilled, onrejected);
promise2.then(onfulfilled, onrejected);
