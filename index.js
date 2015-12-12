"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var B = function B(a) {
  return function (b) {
    return function (c) {
      return a(b(c));
    };
  };
};
exports.B = B;
var C = function C(a) {
  return function (b) {
    return function (c) {
      return a(c)(b);
    };
  };
};
exports.C = C;
var C_ = function C_(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a(b)(d)(c);
      };
    };
  };
};
exports.C_ = C_;
var C__ = function C__(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a(b)(c)(e)(d);
        };
      };
    };
  };
};
exports.C__ = C__;
var D = function D(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a(b)(c(d));
      };
    };
  };
};
exports.D = D;
var E = function E(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a(b)(c(d)(e));
        };
      };
    };
  };
};
exports.E = E;
var F = function F(a) {
  return function (b) {
    return function (c) {
      return c(b)(a);
    };
  };
};
exports.F = F;
var G = function G(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a(d)(b(c));
      };
    };
  };
};
exports.G = G;
var H = function H(a) {
  return function (b) {
    return function (c) {
      return a(b)(c)(b);
    };
  };
};
exports.H = H;
var I = function I(a) {
  return a;
};
exports.I = I;
var I_ = function I_(a) {
  return function (b) {
    return a(b);
  };
};
exports.I_ = I_;
var I__ = function I__(a) {
  return function (b) {
    return function (c) {
      return a(b)(c);
    };
  };
};
exports.I__ = I__;
var J = function J(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a(b)(a(d)(c));
      };
    };
  };
};
exports.J = J;
var K = function K(a) {
  return function (b) {
    return a;
  };
};
exports.K = K;
var L = function L(a) {
  return function (b) {
    return a(b(b));
  };
};
exports.L = L;
var M = function M(a) {
  return a(a);
};
exports.M = M;
var O = function O(a) {
  return function (b) {
    return b(a(b));
  };
};
exports.O = O;
var Q = function Q(a) {
  return function (b) {
    return function (c) {
      return b(a(c));
    };
  };
};
exports.Q = Q;
var Q1 = function Q1(a) {
  return function (b) {
    return function (c) {
      return a(c(b));
    };
  };
};
exports.Q1 = Q1;
var Q3 = function Q3(a) {
  return function (b) {
    return function (c) {
      return c(a(b));
    };
  };
};
exports.Q3 = Q3;
var R = function R(a) {
  return function (b) {
    return function (c) {
      return b(c)(a);
    };
  };
};
exports.R = R;
var S = function S(a) {
  return function (b) {
    return function (c) {
      return a(c)(b(c));
    };
  };
};
exports.S = S;
var T = function T(a) {
  return function (b) {
    return b(a);
  };
};
exports.T = T;
var U = function U(a) {
  return function (b) {
    return b(a(a)(b));
  };
};
exports.U = U;
var V = function V(a) {
  return function (b) {
    return function (c) {
      return c(a)(b);
    };
  };
};
exports.V = V;
var W = function W(a) {
  return function (b) {
    return a(b)(b);
  };
};
exports.W = W;
var W_ = function W_(a) {
  return function (b) {
    return function (c) {
      return a(b)(c)(c);
    };
  };
};
exports.W_ = W_;
var W__ = function W__(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a(b)(c)(d)(d);
      };
    };
  };
};
exports.W__ = W__;
var W1 = function W1(a) {
  return function (b) {
    return b(a)(a);
  };
};
exports.W1 = W1;
var Y = function Y(a) {
  return (function (b) {
    return b(b);
  })(function (b) {
    return a(function (c) {
      return b(b)(c);
    });
  });
};
exports.Y = Y;
