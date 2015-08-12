# combinators
Some combinators

```javascript
export const B = a => b => c => a(b(c));
export const C = a => b => c => a(c)(b);
export const I = a => a;
export const K = a => b => a;
export const S = a => b => c => a(c)(b(c));
export const W = a => b => a(b)(b);
```
