<img align='right' height=100 src='../../../public/vscode.png'>

# Using Visual Studio Code

* 📄 [Awesome Documents](./markdown.md)
* ⏩ [Emmet](./emmet.md)
* 🎛 [Refactoring](./refactoring.md)
* ✅ **Type-Checking**
* 🐞 [Debugging](./debugging.md)

---

## Typechecking

* VS Code has TypeScript at its core
* TypeChecking is becoming increasingly popular
  * React's [proptypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) (runtime)
  * Facebook's [flow](https://github.com/facebook/flow) (static)
  * Microsoft's [TypeScript](https://www.typescriptlang.org/) (static)

<br><br><br>

* TypeScript is a *typed superset* of JavaScript
  * It heavily relies on [type inference](https://en.wikipedia.org/wiki/Type_inference) - the automatic deduction of the data type of an expression.
* As of [TypeScript 2.3](https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files) VS Code can apply type checking to your JavaScript
* Type information can be added via [JSDoc](http://usejsdoc.org/) comments!

<br><br><br><br>

## Why would I want to use Types?

* Catch more bugs at compile time
* Better developer experience
* Your code becomes a better expression of your intent
```js
function add(x, y) { /* ? */ }
```
* Avoid common situations where your code is de-optimized

<br><br><br><br>

## Categories of Type Systems

#### Nominal Typing
Decisions about whether types are equivalent are made based on their **name** - [Nominal type system](https://en.wikipedia.org/wiki/Nominal_type_system).

#### Structural Typing
Decisions about whether types are equivalent are made based on their **structure** - [Structural type system](https://en.wikipedia.org/wiki/Structural_type_system).
```ts
interface CartItem {
  item: {
    name: string
    description: string
    price: number
  }
  quantity: number
}
```

Because VS Code uses TypeScript to check our code, it uses **structural** type system.

<br><br><br><br>

## Activating Type-Checking in VSCode

* If your project already is set up for typescript, just add `"checkJs": true` to your `tsconfig.json`
* Otherwise, add a comment at the top of your JS file
```js
// @ts-check
```

<br><br><br><br>


## Annotating Types with JSDoc
* Types can be added with comments 📝
```js
/** @type {number} */
let value;

value = 21;   // ✅ Ok
value = '21'; // 🚫 Not Ok
```
* Constructors are regarded as types too!
* Remember, this is still structural!
  * TypeScript has a built-in type definition for the DOM API and other common JavaScript constructs

```js
/** @type {Element} */
let x = document.querySelector('.passwordField');
```

<br><br><br>

* Sometimes we work with code that provides us with a less specific type than what we want

```js
getFruit('orange'); // 🍊
getFruit('pear');   // 🍐
getFruit('grapes'); // 🍇
```

* In the above class, perhaps we really wanted the JavaScript representation of an `<input>`, not just a generic element!

```js
/** @type {HTMLInputElement} */
let x = document.querySelector('.passwordField');
// 🛑 Type 'Element' is not assignable to type 'HTMLInputElement'
// 🛑 Property 'accept' is missing in type 'Element'.
```
* This would be no problem if `Element`'s structure was a superset of `HTMLInputElement`'s, but it's the other way around.
* The TypeScript compiler has found that `Element` is lacking the [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) property
* We can perform an explicit type conversion ([type casting](https://en.wikipedia.org/wiki/Type_conversion))

```js
/** @type {HTMLInputElement} */
let x = /** @type {HTMLInputElement} */(
  document.querySelector('passwordField')
);
```
* At this point, the explicit declaration doesn't add any value

```js
let x = /** @type {HTMLInputElement} */(
  document.querySelector('passwordField')
);
```

<br><br><br><br>

## Functions

* Function is a first-class value type
* We can also define a structure of a function (arguments)

```js
/** @type {function(MouseEvent)[]} */
let mouseListeners = [];

addEventListener('keypress', function(evt) {
  mouseListeners.forEach(ml => {
    ml(evt);
    // 🛑 Argument of type 'KeyboardEvent' is not assignable to parameter of type 'MouseEvent'.
    //    Property 'button' is missing in type 'KeyboardEvent'.
  });
});
```
* Arrow functions `=>` can also be used to define argument types
```js
/** @type {(request: Request) => Response} */
let requestHandler = function(x) {
  return new Response('<h1>Hello World</h1>')
};
```
* Note that we have defined a return type as well here. We could also have used `@return`
* **keep in mind:** this is just static analysis. Functions passed as arguments aren't checked for argument type alignment.

<br><br><br><br>

## Generics 

* Operate across many types
* Still maintain compile-time type safety

```js
/**
 * Returns an array containing 5 of whatever you want
 * @template T
 * @param {T} item
 * @return {T[]} 
 */
function gimmieFive(item) {
  return new Array(5).fill(item, 0, 5);
}

let students = gimmieFive('students');
students.push('teacher'); // ✅

let objects = gimmieFive({key: 'Object'});
objects.push({});
// 🛑 Argument of type '{}' is not assignable to parameter of type '{ key: string; }'.
//   Property 'key' is missing in type '{}'.
```

* Promises and other things that wrap other values (which have their own types) are defined using this concept of generics
* Be careful when mixing types with [JSX](https://facebook.github.io/react/docs/introducing-jsx.html)!
```js
/** @type {PromiseLike<string>} */
let x;
x = Promise.resolve('hello world');
```

<br><br><br><br>

## Defining our own named types
* We can use `@typedef` to create a new named type of our own
* Two ways to do this:
```js
/**
 * @typedef {Object} InventoryItem
 * @prop {string} name
 * @prop {number} price
 */
 
/**
 * @typedef {{qty: number, item: InventoryItem}} InvoiceItem
 */

/** @type {InvoiceItem[]} */
let invoice = [];
invoice.push({
  qty: 2,
  item: {
    name: 'Apple',
    price: 1.32
  }
}); // ✅

invoice.push({bad: 'thing'}); // 🛑
```

# Exercise 3: Data Layer Types
> * Update the [TypeScript compiler configuration](../../tsconfig.json) to
>   * `"checkJs": true` - Type-check JavaScript files
>   * `"noImplicitAny": true` - Complain about "implicit any" types (i.e., require us to provide an explicit type in spots where the compiler can't infer well enough)
> * Add a variety of JSDoc type annotations to
>   * [client/data/listener-support.js](../../client/data/listener-support.js)
>     * Type of `this._listeners` be an array of function **with argument types specified** 
>   * [client/data/grocery-item-store.js](../../client/data/grocery-item-store.js)
>   * [client/data/cart-store.js](../../client/data/cart-store.js)
>     * You may find that you need to define a "grocery item" type in this file **and** `grocery-item-store.js`. This is fine.
>   * [client/data/order-store.js](../../client/data/order-store.js)
> * Eliminate all complaints about implicit use of the `any` type (visible in the `problems` and `terminal`)
> * HINT: `ArrayLike<T>` covers things like `ReadonlyArraay<T>` and `Array<T>`

---
NEXT: 🐞 [Debugging](./debugging.md)
