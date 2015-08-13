# Combinators
Some combinators

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

# Ideas

```javascript
I = S(K)(K)
B = S(K(S))(K)
```

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
