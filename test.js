import tape from 'tape';
import {
  B,
  C,
  I,
  K,
  S,
  V,
  W,
  Y,
} from './index.es6';

const a = K(K(K(K(K(K(K))))));
const b = K(K(K(K(K(K(K))))));
const c = K(K(K(K(K(K(K))))));

const equal = x => y => t => {
  t.equal(x(a)(b)(c), y(a)(b)(c));
  t.end();
};
const test = a => b => c => tape(a, equal(b)(c));

test('B')(B)(S(K(S))(K));
test('C')(C)(S(S(K(S(K(S))(K)))(S))(K(K)));
test('I')(I)(S(K)(K));
test('K')(K)(K);
test('S')(S)(S);
test('V')(V)(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K)(K))))(K)));
test('W')(W)(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K));
// test('Y')(Y)(S(S)(K)(S(K(S(S)(S(S(S))(K)))))(K));
