const tape = require('tape')
const combinators = require('.')

const {K, S} = combinators
const [a, b, c, d, e] = (function* () { while(true) yield K(K(K(K(K(K(K)))))) })()

const equal = x => y => t => (t.equal(x(a)(b)(c)(d)(e), y(a)(b)(c)(d)(e)), t.end())
const test = x => y => tape(x, equal(combinators[x])(y))

test('B')(S(K(S))(K))
test('B1')(S(K(S(K(S))(K)))(S(K(S))(K)))
test('B2')(S(K(S(K(S(K(S))(K)))(S(K(S))(K))))(S(K(S))(K)))
test('B3')(combinators.B3)
test('C')(S(S(K(S(K(S))(K)))(S))(K(K)))
test('C_')(S(K(S(S(K(S(K(S))(K)))(S))(K(K)))))
test('C__')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K)))))))
test('D')(S(K(S(K(S))(K))))
test('D1')(S(K(S(K(S(K(S))(K))))))
test('D2')(S(K(S(K(S))(K)))(S(K(S(K(S))(K)))))
test('E')(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))))
test('F')(S(K(S(S(K)(K))(K(S(K(S(S(K)(K))))(K)))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K))))(S(K(S(S(K)(K))))(K))))
test('F_')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K)))))))
test('F__')(S(K(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K)))))))))
test('G')(S(K(S(K(S))(K)))(S(S(K(S(K(S))(K)))(S))(K(K))))
test('H')(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K)))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))
test('I')(S(K)(K))
test('I_')(S(S(K)))
test('I__')(combinators.I__)
test('J')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(K(S(K(S))(K)))(S(K(S))(K)))))))))
test('K')(K)
test('L')(S(S(K(S))(K))(K(S(S(K)(K))(S(K)(K)))))
test('M')(S(S(K)(K))(S(K)(K)))
test('M2')(S(K(S(S(K)(K))(S(K)(K)))))
test('O')(S(S(K)(K)))
test('Q')(S(K(S(S(K(S))(K))))(K))
test('Q1')(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S))(K)))
test('Q2')(S(K(S(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S))(K)))))(K))
test('Q3')(S(K(S(K(S(S(K)(K))))(K))))
test('Q4')(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S))(K)))))(K)))
test('R')(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K)))
test('R_')(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))
test('R__')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))))
test('S')(S)
test('T')(S(K(S(S(K)(K))))(K))
test('U')(S(K(S(S(K)(K))))(S(S(K)(K))(S(K)(K))))
test('V')(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K)(K))))(K)))
test('V_')(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K))))))))))
test('W')(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K))
test('W_')(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K))))
test('W__')(S(K(S(K(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K))))))
test('W1')(S(K(S(S(K(S(S(K(S(S(K)(K))(S(K)(K))))(S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))))))(K))))(K))
test('Y')(combinators.Y)
