/**
 * Extending Error class and transpilling to ES5
 */

/** Using nothing */
class MyError1 extends Error {
  constructor() {
    super();
  }
}

/** Using this.name */
class MyError2 extends Error {
  constructor() {
    super('MyError2 message');
    this.name = "MyError2Name";
  }
}

/** Using setPrototypeOf() */
class MyError3 extends Error {
  constructor() {
    const proto = new.target.prototype;
    super();
    (Object as any).setPrototypeOf(this, proto);
  }
}

/** Subclass of class using setPrototypeOf() */
class MyError4 extends MyError3 {
  constructor() {
    super();
  }
}

/** Object that does not extend Error */
class MyError5 {
  constructor() {
  }
}


function runWithinTryCatch(doStuff: () => void) {
  try {
    console.log('Hello World');
    doStuff();
  }
  catch (error) {
    if (error instanceof Error) {
      console.log('The error is an instance of Error');
    }
    if (error instanceof MyError1) {
      console.log('The error is an instance of MyError1');
    }
    if (error instanceof MyError2) {
      console.log('The error is an instance of MyError2');
    }
    if (error instanceof MyError3) {
      console.log('The error is an instance of MyError3');
    }
    if (error instanceof MyError4) {
      console.log('The error is an instance of MyError4');
    }
    if (error instanceof MyError5) {
      console.log('The error is an instance of MyError5');
    }
    console.log(error);
  }
}

runWithinTryCatch(() => {
  throw new MyError1(); // Only matches Error
});

runWithinTryCatch(() => {
  throw new MyError2(); // Only matches Error
});

runWithinTryCatch(() => {
  throw new MyError3(); // Matches Error and MyError3
});

runWithinTryCatch(() => {
  throw new MyError4(); // Matches Error, MyError3 and MyError4
});

runWithinTryCatch(() => {
  throw new MyError5(); // Only matches MyError5
});
