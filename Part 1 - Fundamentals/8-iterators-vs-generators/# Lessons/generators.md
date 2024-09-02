# Introduction to JavaScript Generators

In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause midway and then continues from where it paused. For example:

```js
function foo() {
    console.log('I');
    console.log('cannot');
    console.log('pause');
}
```

The `foo()` function executes from top to bottom. The only way to exit the `foo()` is by returning from it or throwing an error. If you invoke the `foo()` function again, it will start the execution from the top to bottom.

```js
foo();
```

Output:
```js
I
cannot
pause
```


ES6 introduces a new kind of function that is different from a regular function: function generator or generator.

A generator can pause midway and then continues from where it paused. For example:

```js
function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
```

Let’s examine the `generate()` function in detail.
- First, you see the asterisk (`*`) after the function keyword. The asterisk denotes that the `generate()` is a generator, not a normal function.
- Second, the `yield` statement **returns a value and pauses** the execution of the function.

The following code invokes the `generate()` generator:

```js
let gen = generate();
```

When you invoke the generate() generator:
- First, you see nothing in the console. If the `generate()` were a regular function, you would expect to see some messages.
- Second, you get something back from `generate()` as a returned value.

Let’s show the returned value on the console:

```js
console.log(gen);
```

Output:

```js
Object [Generator] {}
```

So, a generator returns a `Generator` object without executing its body when it is invoked.

The `Generator` object returns another object with two properties: done and value. In other words, a `Generator` object is iterable.

The following calls the `next()` method on the `Generator` object:

```js
let result = gen.next();
console.log(result);
```

Output:

```js
invoked 1st time
{ value: 1, done: false }
```

As you can see, the Generator object executes its body which outputs message '`invoked 1st time`' at line 1 and returns the value 1 at line 2.

The yield statement returns 1 and pauses the generator at line 2.

Similarly, the following code invokes the `next()` method of the `Generator` second time:

```js
result = gen.next();
console.log(result);
```

Output:

```js
invoked 2nd time
{ value: 2, done: false }
```

This time the `Generator` resumes its execution from line 3 that outputs the message '`invoked 2nd time`' and returns (or yield) 2.

The following invokes the `next()` method of the generator object a third time:

```js
result = gen.next();
console.log(result);
```

Output:

```js
{ value: undefined, done: true }
```

Since a generator is iterable, you can use the for...of loop:

```js
for (const g of gen) {
    console.log(g);
}
```

Here is the output:

```js
invoked 1st time
1
invoked 2nd time
2
```