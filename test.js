import tape from 'tape'
import * as combinators from './index.es6'

const {K, S, Y} = combinators
const [a, b, c, d, e] = Array.from({length: 5}, () => K(K(K(K(K(K(K)))))))

const equal = x => y => t => {
  t.equal(x(a)(b)(c)(d)(e), y(a)(b)(c)(d)(e))
  t.end()
}
const test = x => y => tape(x, equal(combinators[x])(y))

test('B')(S(K(S))(K))
test('C')(S(S(K(S(K(S))(K)))(S))(K(K)))
test('D')(S(K(S(K(S))(K))))
test('E')(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))))
test('F')(S(K(S(S(K)(K))(K(S(K(S(S(K)(K))))(K)))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K))))(S(K(S(S(K)(K))))(K))))
test('G')(S(K(S(K(S))(K)))(S(S(K(S(K(S))(K)))(S))(K(K))))
test('H')(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K)))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))
test('I')(S(K)(K))
test('J')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))))))))
test('K')(K)
test('L')(S(S(K(S))(K))(K(S(S(K)(K))(S(K)(K)))))
test('M')(S(S(K)(K))(S(K)(K)))
test('O')(S(S(K)(K)))
test('Q')(S(K(S(S(K(S))(K))))(K))
test('R')(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K)))
test('S')(S)
test('T')(S(K(S(S(K)(K))))(K))
test('U')(S(K(S(S(K)(K))))(S(S(K)(K))(S(K)(K))))
test('V')(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K)(K))))(K)))
test('W')(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K))
test('Y')(Y)
// test('Y')(Y)(S(S)(K)(S(K(S(S)(S(S(S))(K)))))(K))
