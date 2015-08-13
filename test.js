import test from 'tape';
import {
  I,
  K,
  S,
} from './index.es6';

const f = ()=>{};

test('I', (t) => {
  t.equal(I(f), S(K)(K)(f));
  t.end();
});
