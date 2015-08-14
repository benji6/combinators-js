import tape from 'tape';
import {
  B,
  C,
  I,
  K,
  S,
  V,
  W,
} from './index.es6';

const createTestData = K(K(K(K(() => {}))));

const a = createTestData();
const b = createTestData();
const c = createTestData();

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
