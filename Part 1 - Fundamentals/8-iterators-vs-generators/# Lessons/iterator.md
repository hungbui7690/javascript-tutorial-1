# Iteration protocols

There are two iteration protocols: `iterable protocol` and `iterator protocol`.


## Iterator protocol

An object is an iterator when it implements an interface (or API) that answers two questions:

- Is there any element left?
- If there is, what is the element?

Technically speaking, an object is qualified as an iterator when it has a next() method that returns an object with two properties:

- `done`: a boolean value indicating whether or not there are any more elements that could be iterated upon.
- `value`: the current element.

Each time you call the `next()`, it returns the next value in the collection:

```js
{ value: 'next value', done: false }
```

If you call the `next()` method after the last value has been returned, `the next()` returns the result object as follows:

```js
{done: true: value: undefined}
```


The value of the `done` property indicates that there is no more value to return and the value of the property is set to `undefined`.


## Iterable protocol

An object is iterable when it contains a method called `[Symbol.iterator]` that takes no argument and returns an object that conforms to the iterator protocol.

The `[Symbol.iterator]` is one of the built-in well-known `symbols` in ES6.