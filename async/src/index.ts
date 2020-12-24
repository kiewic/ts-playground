const enum Status {
  Pending = 0,
  Resolved = 1,
  Rejected = 2,
}

interface ChainedCallback {
  onFulfilled: Function;
  onRejected: Function;
}

class FooPromise<T> {
  private status: Status;
  private value: T;
  private chained: ChainedCallback[];

  constructor(executor: Function) {
    this.status = Status.Pending;
    this.chained = [];
    executor(
      (value: T) => {
        this.resolveInternal(value);
      },
      (reason: any) => {
        this.rejectInternal(reason);
      }
    );
  }

  public then<TResult1 = T, TResult2 = never>(
    onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): FooPromise<TResult1 | TResult2> {

    // TODO: support multiple calls to then
    return new FooPromise((resolve: Function, reject: Function) => {
      const _onFulfilled = res => {
        resolve(onFulfilled(res));
      }
      const _onRejected = err => {
        reject(onRejected(err));
      };
      if (this.status === Status.Resolved) {
        _onFulfilled(this.value);
      }
      else if (this.status === Status.Rejected) {
        _onRejected(this.value);
      }
      else {
        // Push into the chain array, so resolve() or reject() can call them
        this.chained.push({
          onFulfilled: _onFulfilled,
          onRejected: _onRejected,
        });
      }
    });
  }

  private resolveInternal(value: T): void {
    if (this.status !== Status.Pending) {
      return;
    }

    if (isPromise(value)) {
      let then = value.then;
      then.call(
        value,
        (value: T) => this.resolveInternal(value),
        (reason: any) => this.rejectInternal(reason));
    }
    else {
      this.status = Status.Resolved;
      this.value = value;
      for (const { onFulfilled } of this.chained) {
        onFulfilled(value);
      }
    }
  }

  private rejectInternal(reason: any): void {
    if (this.status !== Status.Pending) {
      return;
    }
    this.status = Status.Rejected;
    this.value = reason;
    for (const { onRejected } of this.chained) {
      onRejected(reason);
    }
  }
}

function isPromise<T>(value: any): value is Promise<T> {
  return typeof value == 'object' &&
    (value as Promise<T>).then !== undefined &&
    typeof (value as Promise<T>).then === 'function';
}

// Test: two thens, two async/awaits
async function foo(): FooPromise<number> {
  console.log("Hello foo");
  let result = await new FooPromise<number>((resolve, _reject) => {
    setTimeout(() => resolve(1234), 2000);
  }).then(
    (value: number) => { console.log("Then 1A", value); return value + 1; },
    (reason) => { console.log("Then 1B", reason); return -1; },
  ).then(
    (value: number) => { console.log("Then 2A", value); return value + 1; },
    (reason) => { console.log("Then 2B", reason); return -1; },
  );
  console.log("Goodbye foo", result);
  return result + 1;
}

async function bar(): FooPromise<number> {
  console.log("Hello bar");
  let result = await foo();
  console.log("Goodbye bar", result);
  return result + 1;
}

bar();
