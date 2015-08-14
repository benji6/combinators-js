import tape from 'tape';
import {
  B,
  C,
  I,
  K,
  S,
  V,
} from './index.es6';

const test = a => b => tape(a, b);
const createTestData = K(K(K(() => () => {})));

const a = createTestData();
const b = createTestData();
const c = createTestData();

const equal = x => y => t => {
  t.equal(x(a)(b)(c), y(a)(b)(c));
  t.end();
};

test('B')(equal(B)(S(K(S))(K)));
test('C')(equal(C)(S(S(K(S(K(S))(K)))(S))(K(K))));
test('I')(equal(I)(S(K)(K)));
test('K')(equal(K)(K));
test('S')(equal(S)(S));
test('V')(equal(V)(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K)(K))))(K))));
