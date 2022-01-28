let done = false

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
});

isItDoneYet
  .then(x => console.log('fulfilled 1 called', x), x => (console.log('rejected 1 called', x), Promise.reject('two')))
  .then(x => console.log('fulfilled 2 called', x), x => console.log('rejected 2 called', x))
  .then(x => console.log('fulfilled 3 called', x), x => console.log('rejected 3 called', x))
  .catch(x => console.log('then 1 called', x))
  .then(x => console.log('fulfilled 4 called', x), x => console.log('rejected 4 called', x))
  .then(x => console.log('fulfilled 5 called', x), x => console.log('rejected 5 called', x))
  .finally(() => console.log('finally 1 called'))

/*

Conclusions
===========

* When there are NO rejected handlers:
  * When a promise is rejected, no fulfilled handler is called, until a catch handler is called, then fulfilled handler are called as normal.
* When, YES, there are rejected handlers:
  * Only one rejected handler is called, and the rest is not called. Not even a catch handler is called after a rejected handler is called.
  * The value returned by a rejected handler is passed to the next fulfilled handler.
  * To call a second rejected handler, the first rejected handler has to return a rejected promise.

*/
