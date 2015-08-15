# Combinators

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
V(0)(1)(K) === 0;
V(0)(1)(K(I)) === 1
```

```javascript
V(0)(V(1)(V(2)()))(K) === 0;
V(0)(V(1)(V(2)()))(K(I))(K) === 1;
V(0)(V(1)(V(2)()))(K(I))(K(I))(K) === 2;
```

```javascript
const factorial = Y(recur => x => (x === 1 ? 1 : x * recur(x - 1)));
```

Here are some practical ideas:

```javascript

```
