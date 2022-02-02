namespace example2 {
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

  // One promise can be forked into multiple chains
  isItDoneYet
    .then(x => console.log('fulfilled 1.1 called', x), x => console.log('rejected 1.1 called', x))
    .then(x => console.log('fulfilled 1.2 called', x), x => console.log('rejected 1.2 called', x))
    .catch(x => console.log('then 1 called', x))
    .finally(() => console.log('finally 1 called'));

  isItDoneYet
    .then(x => console.log('fulfilled 2.1 called', x), x => console.log('rejected 2.1 called', x))
    .then(x => console.log('fulfilled 2.2 called', x), x => console.log('rejected 2.2 called', x))
    .catch (x => console.log('then 2 called', x))
    .finally(() => console.log('finally 2 called'));

  // Note, it would be an error to call finally() without a catch() call
  isItDoneYet
    .catch(x => console.log('catch 3 called', x))
    .finally(() => console.log('finally 3 called'));
}

/*

Conclusions
===========

* A rejection/catch handler will be called on each forked promise chain

*/
