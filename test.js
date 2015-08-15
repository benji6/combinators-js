import tape from 'tape';
import {
  B, C, D, E, F, G, H, I, J, K, L, M, O, Q, R, S, T, U, V, W, Y,
} from './index.es6';

const a = K(K(K(K(K(K(K))))));
const b = K(K(K(K(K(K(K))))));
const c = K(K(K(K(K(K(K))))));
const d = K(K(K(K(K(K(K))))));
const e = K(K(K(K(K(K(K))))));

const equal = x => y => t => {
  t.equal(x(a)(b)(c)(d)(e), y(a)(b)(c)(d)(e));
  t.end();
};
const test = a => b => c => tape(a, equal(b)(c));

test('B')(B)(S(K(S))(K));
test('C')(C)(S(S(K(S(K(S))(K)))(S))(K(K)));
test('D')(D)(S(K(S(K(S))(K))));
test('E')(E)(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))));
test('F')(F)(S(K(S(S(K)(K))(K(S(K(S(S(K)(K))))(K)))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K))))(S(K(S(S(K)(K))))(K))));
test('G')(G)(S(K(S(K(S))(K)))(S(S(K(S(K(S))(K)))(S))(K(K))));
test('H')(H)(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K)))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))));
test('I')(I)(S(K)(K));
test('J')(J)(J);
// test('J')(J)(J);
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
test('Y')(Y)(Y);
// test('Y')(Y)(S(S)(K)(S(K(S(S)(S(S(S))(K)))))(K));
