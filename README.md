# combinators-js

[![npm version](https://badge.fury.io/js/combinators-js.svg)](http://badge.fury.io/js/combinators-js)

Here are some instructions:

```bash
npm i -S combinators-js
```

Here are some combinators:

```javascript
const B = a => b => c => a(b(c));
const C = a => b => c => a(c)(b);
const D = a => b => c => d => a(b)(c(d));
const E = a => b => c => d => e => a(b)(c(d)(e));
const F = a => b => c => c(b)(a);
const G = a => b => c => d => a(d)(b(c));
const H = a => b => c => a(b)(c)(b);
const I = a => a;
const J = a => b => c => d => a(b)(a(d)(c));
const K = a => b => a;
const L = a => b => a(b(b));
const M = a => a(a);
const O = a => b => b(a(b));
const Q = a => b => c => b(a(c));
const R = a => b => c => b(c)(a);
const S = a => b => c => a(c)(b(c));
const T = a => b => b(a);
const U = a => b => b(a(a)(b));
const V = a => b => c => c(a)(b);
const W = a => b => a(b)(b);
const Y = a => (b => a(c => b(b)(c)))(b => a(c => b(b)(c)));
```

Here are some tests:

```javascript
test('B')(B)(S(K(S))(K));
test('C')(C)(S(S(K(S(K(S))(K)))(S))(K(K)));
test('D')(D)(S(K(S(K(S))(K))));
test('E')(E)(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))));
test('F')(F)(S(K(S(S(K)(K))(K(S(K(S(S(K)(K))))(K)))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K))))(S(K(S(S(K)(K))))(K))));
test('G')(G)(S(K(S(K(S))(K)))(S(S(K(S(K(S))(K)))(S))(K(K))));
test('H')(H)(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K)))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))));
test('I')(I)(S(K)(K));
test('J')(J)(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))))))));
test('K')(K)(K);
test('L')(L)(S(S(K(S))(K))(K(S(S(K)(K))(S(K)(K)))));
test('M')(M)(S(S(K)(K))(S(K)(K)));
test('O')(O)(S(S(K)(K)));
test('Q')(Q)(S(K(S(S(K(S))(K))))(K));
test('R')(R)(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K)));
test('S')(S)(S);
test('T')(T)(S(K(S(S(K)(K))))(K));
test('U')(U)(S(K(S(S(K)(K))))(S(S(K)(K))(S(K)(K))));
test('V')(V)(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K)(K))))(K)));
test('W')(W)(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K));
```

Here are some ideas:

```javascript
// LISP data structures
const cons = (a, b) => V(a)(b);
const car = T(K);
const cdr = T(K(I));

car(cons(0, 1)) === 0;
cdr(cons(0, 1)) === 1;

const list = (...args) => args.reverse().reduce((l, arg) => V(arg)(l), null);

car(list(0, 1, 2)) === 0;
car(cdr(list(0, 1, 2))) === 1;
car(cdr(cdr(list(0, 1, 2)))) === 2;

```

```javascript
// recursion of anonymous functions
const factorial = Y(recur => x => (x === 1 ? 1 : x * recur(x - 1)));
```

```javascript
// omega bird (mock a mockingbird)
M(M);
```

Here are some practical ideas:

```javascript

```

Here are some resources:

- http://www.angelfire.com/tx4/cus/combinator/birds.html
- https://github.com/raganwald/oscin.es
- http://raganwald.com/2015/02/13/functional-quantum-electrodynamics.html
- http://dkeenan.com/Lambda/
