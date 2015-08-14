# Combinators

Here are some combinators:

```javascript
const B = a => b => c => a(b(c));
const C = a => b => c => a(c)(b);
const I = a => a;
const K = a => b => a;
const S = a => b => c => a(c)(b(c));
const V = a => b => c => c(a)(b);
const W = a => b => a(b)(b);
const Y = a => (b => a(c => b(b)(c)))(b => a(c => b(b)(c)));
```

Here are some tests:

```javascript
test('B')(B)(S(K(S))(K));
test('C')(C)(S(S(K(S(K(S))(K)))(S))(K(K)));
test('I')(I)(S(K)(K));
test('K')(K)(K);
test('S')(S)(S);
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
