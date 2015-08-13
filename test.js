import test from 'tape';
import {
  B,
  C,
  I,
  K,
  S,
} from './index.es6';

const equal = (x, y) => t => {
  t.equal(x, y);
  t.end();
};

const createTestData = K(K(K(() => () => {})));

const a = createTestData();
const b = createTestData();
const c = createTestData();

test('B', equal(B(a)(b)(c), S(K(S))(K)(a)(b)(c)));
test('C', equal(C(a)(b)(c), S(S(K(S(K(S))(K)))(S))(K(K))(a)(b)(c)));
test('I', equal(I(a), S(K)(K)(a)));
test('K', equal(K, K));
test('S', equal(S, S));
