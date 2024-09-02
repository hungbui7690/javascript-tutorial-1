# Promise.all

The `Promise.all()` static method takes an iterable of promises:

```js
Promise.all(iterable)
```

The `Promise.all()` method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input promises:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.all-Fulfilled-1.svg)

In this diagram, the `promise1` resolves to a value `v1` at `t1` and the `promise2` resolves to a value `v2` at `t2`. Hence, the `Promise.all(promise1, promise2)` returns a promise that resolves to an array containing the results of the `promise1` and `promise2` `[v1, v2]` at `t2`.

In other words, the `Promise.all()` waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises.

If one of the input promises is rejected, the `Promise.all()` method immediately returns a promise that is rejected with an error of the first rejected promise:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.all-Rejected.svg)

In this diagram, the `promise2` rejects at `t1` with an `error`. Therefore, the `Promise.all()` returns a new promise that is immediately rejected with the same error. Also, the `Promise.all()` doesn’t care about other input promises, whether they will be resolved or rejected.

In practice, the `Promise.all()` is useful to aggregate the results from multiple asynchronous operations.



# Promise.race()

The `Promise.race()` static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

Here’s the syntax of the `Promise.race()` method:

```js
Promise.race(iterable)
```

In this syntax, the iterable is an iterable object that contains a list of promises.

The name of `Promise.race()` implies that all the promises race against each other with a single winner, either resolved or rejected.

See the following diagram:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise-Race-Fulfilled.svg)

In this diagram:
- The `promise1` is fulfilled with the value `v1` at `t1`.
- The `promise2` is rejected with the `error` at `t2`.
- Because the `promise1` is resolved earlier than the `promise2`, the promise1 wins the race. Therefore, the `Promise.race([promise1, promise2])` returns a new promise that is fulfilled with the value `v1` at `t1`.

See another diagram:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise-Race-Rejected.svg)

In this diagram:
- The `promise1` is fulfilled with `v1` at `t2`.
- The `promise2` is rejected with `error` at `t1`.
- Because the `promise2` is resolved earlier than the `promise1`, the `promise2` **wins the race**. Therefore, the `Promise.race([promise1, promise2])` returns a new promise that is rejected with the `error` at `t1`.




# Promise.any

The `Promise.any()` method accepts a list of Promise objects as an iterable object:

```js
Promise.any(iterable);
```

If one of the promises in the iterable object is fulfilled, the `Promise.any()` returns a single promise that resolves to a value which is the result of the fulfilled promise:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.any-Fulfilled.svg)

In this diagram:
- The `promise1` resolves to a value `v1` at `t1`.
- The `promise2` resolves to a value `v2` at `t2`.
- The `Promise.any()` returns a promise that resolves to a value `v1`, which is the result of the `promise1`, at `t1`

The `Promise.any()` **returns a promise that is fulfilled with any first fulfilled promise even if some promises in the iterable object are rejected**:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.any-rejected.svg)

In this diagram:
- The `promise1` is rejected with an `error` at `t1`.
- The `promise2` is fulfilled to value `v2` at `t2`.
- The `Promise.any()` returns the promise that resolves to a value `v2` which is the result of the `promise2`. Note that the `Promise.any()` method **ignores the rejected promise** (`promise1`).

If all promises in the iterable object are rejected or if the iterable object is empty, the `Promise.any()` return a promise that is rejected with an `AggregateError` containing all the rejection reasons. The `AggregateError` is a subclass of `Error`.

![IMG](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.any-all-rejected.svg)

In this diagram:
- The `promise1` is rejected for an `error1` at `t1`.
- The `promise2` is rejected for an `error2` at `t2`.
- The `Promise.any()` returns a promise that is rejected at `t2` with an `AggregateError` containing the `error1` and `error2` of all the rejected promises.


# Promise.allSettled

ES2020 introduced the `Promise.allSettled()` method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

The following shows the syntax of the `Promise.allSettled()` method:

```js
Promise.allSettled(iterable);
```

The iterable contains the promises. The `Promise.allSettled()` returns a pending promise that will be asynchronously fulfilled once every input promise has settled.

The `Promise.allSettled()` method returns a promise that resolves to an array of objects that each describes the result of the input promise.

Each object has two properties: `status` and `value` (or `reason`).
- The `status` can be either `fulfilled` or `rejected`.
- The `value` if case the promise is `fulfilled` or `reason`) if the promise is `rejected`.

The following diagram illustrates how the `Promise.allSettled()` method works:

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.allSettled.svg)

In this diagram:
- The `promise1` rejects to the `error` at `t1`.
- The `promise2` resolves to a `value` at `t2`.
- The `Promise.allSettled()` method resolves to an array containing objects that describe the statuses and outcomes of the `promise1` and `promise2`.



# Promise `finally()` method

The `finally()` method of a Promise instance allows you to schedule a function to be executed when the promise is settled.

Here’s the syntax for calling the `finally()` method:

```js
promise.finally(onFinally)
```

In this syntax:
```js
  `onFinally` is a function that executes asynchronously when the promise
  becomes settled.
```

The `finally()` method returns a Promise object, allowing you to conveniently chain calls to other methods of the Promise instance.

The `finally()` method was introduced in ES2018. With the `finally()` method, you can place the code that cleans up resources when the promise is settled, regardless of its outcome.

By using the `finally()` method, you can avoid duplicate code in the `then()` and `catch()` methods like this:

```js
promise
    .then(result => {
        // process the result
        // clean up the resources
    })
    .catch(error => {
        // handle the error
        // clean up the resources
    });
```

Now, you can move the clean up the resources part to the `finally()` method as follows:

```js
promise
    .then(result => {
        // process the result
    })
    .catch(error => {
        // handle the error
    })
    .finally(() => {
        // clean up the resources
    });
```

The `finally()` method is similar to the finally block in the try...catch...finally statement.

In synchronous code, you use the finally block to clean up the resources. In asynchronous code, you use the `finally()` method instead.