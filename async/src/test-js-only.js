// Test: two thens, two async/awaits
async function foo() {
    console.log("Hello foo");
    let result = await new Promise((resolve, _reject) => {
        setTimeout(() => resolve(1234), 2000);
    }).then(
        (value) => { console.log("Then 1A", value); return value + 1; },
        (reason) => { console.log("Then 1B", reason); return -1; },
    ).then(
        (value) => { console.log("Then 2A", value); return value + 1; },
        (reason) => { console.log("Then 2B", reason); return -1; },
    );
    console.log("Goodbye foo", result);
    return result + 1;
}

async function bar() {
    console.log("Hello bar");
    let result = await foo();
    console.log("Goodbye bar", result);
    return result + 1;
}

bar();
