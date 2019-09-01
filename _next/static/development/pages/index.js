(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Alphas.js":
/*!******************************!*\
  !*** ./components/Alphas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _alphas_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alphas.scss */ "./components/alphas.scss");
/* harmony import */ var _alphas_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alphas_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.scss */ "./components/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Alphas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Alphas = function Alphas() {
  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "alphas",
    header: "Pic Alphas",
    copy: "Pic Alphas are community volunteers who support our awesome new games.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    className: "bg",
    src: __webpack_require__(/*! ../images/alphas/alphas.svg */ "./images/alphas/alphas.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    className: "desc typo secondary typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "As an Alpha, your task will be to look after and help Pic Labs grow. Click below to find out more."), __jsx("div", {
    className: "btn secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "BE AN ALPHA"), __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\xA9 PicLabs. All rights reserved."), __jsx("div", {
    className: "social twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    className: "bg",
    src: __webpack_require__(/*! ../images/twitter.svg */ "./images/twitter.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Alphas);

/***/ }),

/***/ "./components/Block.js":
/*!*****************************!*\
  !*** ./components/Block.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Block.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Block = function Block(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      header = _ref.header,
      copy = _ref.copy;
  return __jsx("div", {
    className: "content ".concat(classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, classes === 'hero' ? __jsx("div", {
    className: "hero-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "typo typo-bold logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "PIC LABS"), __jsx("div", {
    className: "hero-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/hero/hero-girls.svg */ "./images/hero/hero-girls.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "typo typo-bold login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "FAQ"))) : '', __jsx("div", {
    className: "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "typo typo-regular header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, header), copy ? __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, copy) : ''), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/Economics.js":
/*!*********************************!*\
  !*** ./components/Economics.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _economics_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./economics.scss */ "./components/economics.scss");
/* harmony import */ var _economics_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_economics_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Economics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var features = [{
  icon: __jsx("div", {
    className: "eth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/econs/big-eth.svg */ "./images/econs/big-eth.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })),
  stat: {
    value: 15,
    denom: '%'
  },
  desc: 'There is a daily lottery where players compete for 15% of all revenues across Pic Lab games.'
}, {
  icon: __jsx("div", {
    className: "burn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/econs/burn.svg */ "./images/econs/burn.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })),
  stat: {
    value: 35,
    denom: '%'
  },
  desc: 'Each month, Pic Labs will use 35% of its revenues to buy back and burn PIC.'
}];

var Feature = function Feature(_ref) {
  var icon = _ref.icon,
      stat = _ref.stat,
      desc = _ref.desc;
  return __jsx("div", {
    className: "feature-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, icon), __jsx("div", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "desc typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, desc), __jsx("div", {
    className: "stat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, stat.value, stat.denom)));
};

var Economics = function Economics() {
  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: "economics",
    header: "Token Economics",
    copy: "Players can earn PIC tokens by enjoying all the games made by PicLabs.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "feat-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, features.map(function (feat, i) {
    return __jsx(Feature, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, feat, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Economics);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.scss */ "./components/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hero = function Hero() {
  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "hero",
    header: "The internet's popularity contest",
    copy: "Pic One is the first game created by Pic Labs. Season Beta coming soon.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "btn primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "PIC ONE"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Team.js":
/*!****************************!*\
  !*** ./components/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _team_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team.scss */ "./components/team.scss");
/* harmony import */ var _team_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_team_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Team.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var profiles = [{
  name: 'Pratyush Buddiga, CEO',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/prat.png */ "./images/team/prat.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  },
  description: "Former professional poker player who has over $6 million in winnings and was ranked #2 in the world. Prior to that, he won two national competitions before the age of sixteen including the National Spelling Bee competition.",
  links: [{
    type: 'twitter',
    url: 'https://twitter.com/pratyushbuddiga?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
  }]
}, {
  name: 'Timothy Sharng, Operation',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/tim.png */ "./images/team/tim.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  },
  description: 'Formerly on the business development team at Binance. Prior to that, he worked for the Government of Ontario and McKinsey. He studied Economics at Brown University.',
  links: [{
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/tsharng/'
  }]
}, {
  name: 'Adil Iqbal, Developer',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/adil.jpeg */ "./images/team/adil.jpeg"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  },
  description: 'Formerly a blockchain developer at DGB Technologies. Graduated with a computer science degree from Lahore University of Management Sciences.',
  links: [{
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/adiliqb/'
  }]
}, {
  name: 'Wai Chung Wong, Developer',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/wai.png */ "./images/team/wai.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  },
  description: 'Built an award-winning website in Nestbloom and worked for Jungle, the first UK p2p betting platform. Previously a blockchain lead developer at NextID and Hastings Tech Metals. ',
  links: [{
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/wai1chung/'
  }]
}, {
  name: 'Sterling Ginther, Marketing',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/anon.png */ "./images/team/anon.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  },
  description: 'Growth hacker at Bomaye Media and product manager at FocusTime Technologies. ',
  links: [{
    type: 'linkedin',
    url: 'https://google.com'
  }]
}, {
  name: 'Wess2kak, R&D',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/anon.png */ "./images/team/anon.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    });
  },
  description: 'Independent programmer who has been involved in the crypto space since 2012. ',
  links: [{
    type: 'linkedin',
    url: 'https://google.com'
  }]
}, {
  name: 'Tadleer, Community Lead',
  avatar: function avatar() {
    return __jsx("img", {
      className: "avatar",
      src: __webpack_require__(/*! ../images/team/anon.png */ "./images/team/anon.png"),
      alt: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    });
  },
  description: 'Admin of Crypto Cartel, the largest crypto trading Discord on the web (16k+ members)',
  links: [{
    type: 'linkedin',
    url: 'https://google.com'
  }]
}];

function determineIconType(type) {
  switch (type) {
    case 'twitter':
      return __jsx("div", {
        className: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../images/twitter.svg */ "./images/twitter.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }));

    case 'linkedin':
      return __jsx("div", {
        className: "linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../images/linkedin.svg */ "./images/linkedin.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }));

    default:
      return __jsx("div", {
        className: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../images/twitter.svg */ "./images/twitter.svg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }));
  }
}

var ProfileCard = function ProfileCard(_ref) {
  var name = _ref.name,
      avatar = _ref.avatar,
      description = _ref.description,
      links = _ref.links,
      active = _ref.active;
  return __jsx("div", {
    className: "profile-card ".concat(active ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, avatar()), __jsx("div", {
    className: "words",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, name, " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "|")), links.map(function (link, i) {
    return __jsx("a", {
      key: i,
      href: link.url,
      target: "_blank",
      className: "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, determineIconType(link.type));
  })), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, description)));
};

var Team = function Team() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var clickHandler = function clickHandler(i) {
    return function (e) {
      e.preventDefault();
      setActive(i);
    };
  };

  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: "team",
    header: "The Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "profile-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, profiles.map(function (profile, i) {
    return __jsx(ProfileCard, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, profile, {
      key: i,
      active: i === active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "slider-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, profiles.map(function (profile, i) {
    return __jsx("span", {
      onClick: clickHandler(i),
      key: i,
      className: "".concat(active === i ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./components/Technology.js":
/*!**********************************!*\
  !*** ./components/Technology.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _technology_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technology.scss */ "./components/technology.scss");
/* harmony import */ var _technology_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_technology_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Technology.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Technology = function Technology() {
  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "technology",
    header: "Technology",
    copy: "Pic One is built on the ethereum network. Players can login via Metamask or Dapper.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "infographics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "fox fragment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/tech/meta.svg */ "./images/tech/meta.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Metamask")), __jsx("div", {
    className: "dapp fragment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/tech/dap.svg */ "./images/tech/dap.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Dapper")), __jsx("div", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "eth fragment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/tech/eth.svg */ "./images/tech/eth.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Ethereum Network")), __jsx("div", {
    className: "pic fragment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/tech/small-pic.svg */ "./images/tech/small-pic.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Pic One Platform"))), __jsx("div", {
    className: "formulae",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "feature typo typo-regular subcopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Provibly fair"), __jsx("div", {
    className: "var typo typo-light header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "RNG")), __jsx("div", {
    className: "method plus typo typo-regular subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "+"), __jsx("div", {
    className: "component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "feature typo typo-regular subcopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Verified by"), __jsx("div", {
    className: "var typo typo-light header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "SHA256")), __jsx("div", {
    className: "method typo typo-regular subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "="), __jsx("div", {
    className: "component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "feature typo typo-regular subcopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Random distribution"), __jsx("div", {
    className: "var typo typo-light header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "[0, 100]"))), __jsx("div", {
    className: "write-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "part-one typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "We combined two different SHA256 hashes and transformed the resulting hash into a number that lies within a uniform, random distribution from [0,100]. A series of games to be played is generated in a large chain, where each element in the chain is the previous element passed through the hashing function."), __jsx("div", {
    className: "part-two typo typo-regular copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "10 million games were generated with this mechanism. The games are played in reverse order so the ten millionth result is Game 1 and so on. Anyone can verify that previous games match up with the corresponding hashed number with simple javascript in a browser.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Technology);

/***/ }),

/***/ "./components/Updates.js":
/*!*******************************!*\
  !*** ./components/Updates.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./components/Block.js");
/* harmony import */ var _updates_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updates.scss */ "./components/updates.scss");
/* harmony import */ var _updates_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_updates_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/components/Updates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Updates = function Updates() {
  return __jsx(_Block__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "updates",
    header: "Latest Updates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/updates/logo.svg */ "./images/updates/logo.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    className: "season typo typo-regular header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Season Beta begins September 1st."), __jsx("div", {
    className: "demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../images/updates/demo.svg */ "./images/updates/demo.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Updates);

/***/ }),

/***/ "./images/alphas/alphas.svg":
/*!**********************************!*\
  !*** ./images/alphas/alphas.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alphas-409dbdceed9f541f7d988eaba2ac12de.svg";

/***/ }),

/***/ "./images/econs/big-eth.svg":
/*!**********************************!*\
  !*** ./images/econs/big-eth.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iRXRoZXJldW1fbG9nb18yMDE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDguNzY0IiBoZWlnaHQ9IjE3Ny4xMjciIHZpZXdCb3g9IjAgMCAxMDguNzY0IDE3Ny4xMjciPgogIDxwYXRoIGlkPSJQYXRoXzE3ODkiIGRhdGEtbmFtZT0iUGF0aCAxNzg5IiBkPSJNMTI2LjM1MywwbC0xLjE4Nyw0LjAzNlYxMjEuMTU3bDEuMTg3LDEuMTg1TDE4MC43Miw5MC4yMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzEuOTg4KSIgZmlsbD0iI2RiZGJkYiIvPgogIDxwYXRoIGlkPSJQYXRoXzE3OTAiIGRhdGEtbmFtZT0iUGF0aCAxNzkwIiBkPSJNNTQuMzY2LDAsMCw5MC4yMDZsNTQuMzY2LDMyLjEzNlYwWiIgZmlsbD0iI2RiZGJkYiIvPgogIDxwYXRoIGlkPSJQYXRoXzE3OTEiIGRhdGEtbmFtZT0iUGF0aCAxNzkxIiBkPSJNMTI3LjA1NSwyNjguNzA3bC0uNjY5LjgxNnY0MS43MjFsLjY2OSwxLjk1NSw1NC40LTc2LjYxMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03Mi42OSAtMTM2LjA3KSIgZmlsbD0iI2RiZGJkYiIvPgogIDxwYXRoIGlkPSJQYXRoXzE3OTIiIGRhdGEtbmFtZT0iUGF0aCAxNzkyIiBkPSJNNTQuMzY2LDMxMy4yVjI2OC43TDAsMjM2LjU4NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEzNi4wNjkpIiBmaWxsPSIjZGJkYmRiIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTc5MyIgZGF0YS1uYW1lPSJQYXRoIDE3OTMiIGQ9Ik0xMjcuOTYxLDIxMWw1NC4zNjUtMzIuMTM1LTU0LjM2NS0yNC43MTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzMuNTk1IC04OC42NjMpIiBmaWxsPSIjZGJkYmRiIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTc5NCIgZGF0YS1uYW1lPSJQYXRoIDE3OTQiIGQ9Ik0wLDE3OC44Nyw1NC4zNjYsMjExVjE1NC4xNTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDEgLTg4LjY2MykiIGZpbGw9IiNkYmRiZGIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./images/econs/burn.svg":
/*!*******************************!*\
  !*** ./images/econs/burn.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjIuOTAxIiBoZWlnaHQ9IjE3Ny41MjEiIHZpZXdCb3g9IjAgMCAxMjIuOTAxIDE3Ny41MjEiPgogIDxwYXRoIGlkPSJfaW9uaWNvbnNfc3ZnX2lvcy1mbGFtZSIgZD0iTTE1OC4xMjcsNDhDMTcwLjUsMTA1LjQzOCwxMTEuNTcsMTA0LjI4NiwxMTIsMTYyLjEwOGMuMzQxLDQ3LjM2Nyw1MC41MjUsNjMuNDEyLDYxLjY2Myw2My40MTJzNTcuNTIzLTEwLjA3MSw2MS4wNjUtNjMuNDEyQzIzNy43NTUsMTE2LjcsMTk5Ljg2MSw3My4zNDgsMTU4LjEyNyw0OFptMzEuNzA2LDE1MS4zNjJjLTQuMzUzLDE2LjYtMjguMTY0LDE2LjY0My0zMi42LjA0M2EyOC45MzIsMjguOTMyLDAsMCwxLTEuMDI0LTcuNDY4YzAtMTcuNSwxNy4zMjUtMzcuNjgsMTcuMzI1LTM3LjY4czE3LjI0LDIwLjE4NCwxNy4yNCwzNy42OGEyNi44NDksMjYuODQ5LDAsMCwxLS45MzksNy40MjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjk5NSAtNDgpIiBmaWxsPSIjZGJkYmRiIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/hero/hero-girls.svg":
/*!************************************!*\
  !*** ./images/hero/hero-girls.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-girls-c0accd4ca2b2ba60556c2c58aeff7fca.svg";

/***/ }),

/***/ "./images/linkedin.svg":
/*!*****************************!*\
  !*** ./images/linkedin.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij4KICA8cGF0aCBpZD0iX2lvbmljb25zX3N2Z19sb2dvLWxpbmtlZGluIiBkPSJNNzkuNjQsNjRINjUuNDUyQTEuMzg3LDEuMzg3LDAsMCwwLDY0LDY1LjMyNFY3OS41NDNBMS41LDEuNSwwLDAsMCw2NS40NTIsODFINzkuNjM2QTEuNDIsMS40MiwwLDAsMCw4MSw3OS41NDNWNjUuMzI0QTEuMywxLjMsMCwwLDAsNzkuNjQsNjRaTTY5LjI3LDc4LjE3SDY2LjgzNFY3MC42SDY5LjI3Wm0tMS4xMzQtOC43MjRoLS4wMThhMS4zMjQsMS4zMjQsMCwxLDEsLjAxOCwwWk03OC4xNyw3OC4xN0g3NS43MzVWNzQuMDNjMC0uOTkyLS4zNTQtMS42NjktMS4yMzUtMS42NjlhMS4zMzMsMS4zMzMsMCwwLDAtMS4yNDkuOSwxLjY0LDEuNjQsMCwwLDAtLjA4NC42Vjc4LjE3SDcwLjczMVY3MC42aDIuNDM2djEuMDU0YTIuNDY1LDIuNDY1LDAsMCwxLDIuMi0xLjIzMWMxLjYsMCwyLjgwNywxLjA1NCwyLjgwNywzLjMyNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NCAtNjQpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/team/adil.jpeg":
/*!*******************************!*\
  !*** ./images/team/adil.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/adil-dfc8d01b1afc2336125b2f0f8a52522b.jpeg";

/***/ }),

/***/ "./images/team/anon.png":
/*!******************************!*\
  !*** ./images/team/anon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/anon-c744dc50be9ee48dfcbc9e86432b31de.png";

/***/ }),

/***/ "./images/team/prat.png":
/*!******************************!*\
  !*** ./images/team/prat.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/prat-2b7323ba46572caf5c7f84a8f068ae1d.png";

/***/ }),

/***/ "./images/team/tim.png":
/*!*****************************!*\
  !*** ./images/team/tim.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tim-71465dda8855968df16ff666609c0272.png";

/***/ }),

/***/ "./images/team/wai.png":
/*!*****************************!*\
  !*** ./images/team/wai.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wai-c6ff998b8aa1ec1678e27a7a1913c072.png";

/***/ }),

/***/ "./images/tech/dap.svg":
/*!*****************************!*\
  !*** ./images/tech/dap.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4Ni4yMTMiIGhlaWdodD0iMjMuMTc1IiB2aWV3Qm94PSIwIDAgODYuMjEzIDIzLjE3NSI+CiAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC00KSI+CiAgICA8ZyBpZD0ibG9nb19kYXBwZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNCkiPgogICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik03Ni40NTUsNS44MzJoMy4zVjcuNDA2QTMuMDQ5LDMuMDQ5LDAsMCwxLDgyLjcsNS41NzRhMy4zNDUsMy4zNDUsMCwwLDEsMy41MTIsMy42MTMsNi4yODIsNi4yODIsMCwwLDEtLjE4MSwxLjUyM0g4Mi45MDlhMy45NDEsMy45NDEsMCwwLDAsLjEtLjkyOSwxLjQ3MSwxLjQ3MSwwLDAsMC0xLjU0OS0xLjUyM2MtMS4wMzQsMC0xLjcuNy0xLjcsMS45MzZ2Ny44NzFoLTMuM1ptLTcuODEsOS42NTJhMi42ODQsMi42ODQsMCwwLDAsMi44NDEtMi4wOUw3NC4zLDE0LjVhNS42MjksNS42MjksMCwwLDEtNS43MDYsMy44Miw2LjE0NCw2LjE0NCwwLDAsMS02LjQ3OS02LjQ1Miw2LjAwOSw2LjAwOSwwLDAsMSw2LjA5My02LjNjMy4zODEsMCw1LjY3OSwyLjExNiw1LjY3OSw1LjVhNi44MzIsNi44MzIsMCwwLDEtLjE1NSwxLjVINjUuNDE4YTIuOTgzLDIuOTgzLDAsMCwwLDMuMjI3LDIuOTE1Wm0tLjQzOC03LjI1M2EyLjc0NywyLjc0NywwLDAsMC0yLjc4OSwyLjE0M2g1LjI0MWEuMjY3LjI2NywwLDAsMCwuMDI2LS4xQzcwLjY4NSw5LjAzMiw2OS42NzgsOC4yMzIsNjguMjA3LDguMjMyWm0tMjEuMjM0LTIuNGgzLjE3NlY3LjY2NEE1LjA3LDUuMDcsMCwwLDEsNTQuMiw1LjU3NGMzLjMsMCw1Ljc1OCwyLjU1NCw1Ljc1OCw2LjQyNnMtMi41MzEsNi4zMjMtNS45MzgsNi4zMjNhNC4xODUsNC4xODUsMCwwLDEtMy43NDQtMS44MzN2Ni42ODVoLTMuM1pNNTAuMTQ5LDEyYTMuMjYyLDMuMjYyLDAsMSwwLDYuNTA1LDAsMy4yNjgsMy4yNjgsMCwxLDAtNi41MDUsMFpNMzEuODMyLDUuODMyaDMuMTc1VjcuNjY0YTUuMDcsNS4wNywwLDAsMSw0LjA1NC0yLjA5YzMuMywwLDUuNzU3LDIuNTU0LDUuNzU3LDYuNDI2cy0yLjUzMSw2LjMyMy01LjkzOCw2LjMyM2E0LjE4NSw0LjE4NSwwLDAsMS0zLjc0NC0xLjgzM3Y2LjY4NWgtMy4zWk0zNS4wMDYsMTJhMy4yNjMsMy4yNjMsMCwxLDAsNi41MDYsMCwzLjI2OSwzLjI2OSwwLDEsMC02LjUwNiwwWk0yMS44NCwxOC4zMjNhMy44MTgsMy44MTgsMCwwLDEtNC4wMjctMy43OTRjMC0yLjcwOSwyLjAxNC0zLjkyMyw0Ljc3Ni0zLjkyM2E4LjI3OCw4LjI3OCwwLDAsMSwyLjA5MS4yNThsMS4wODQuMjU4di0uNzc1YzAtMS40MTktMS4wMzQtMi4xOTQtMi41LTIuMTk0YTIuNSwyLjUsMCwwLDAtMi42NTksMi4wNGwtMi44NjYtLjc3NWMuNjQ1LTIuMjcsMi41LTMuODQ2LDUuNTUxLTMuODQ2LDMuNzQyLDAsNS42MjgsMS44MDcsNS42MjgsNC45NTZ2Ny41MzZIMjUuODkzVjE2LjE4MUE0LjE4NCw0LjE4NCwwLDAsMSwyMS44NCwxOC4zMjNabTEuMzE2LTIuNTNjMS40NzIsMCwyLjYwOC0uOCwyLjYwOC0yLjI0NXYtLjFsLS43NDgtLjIzMmE2LjQ2NSw2LjQ2NSwwLDAsMC0xLjkxLS4zNjJjLTEuMTYyLDAtMS45MzcuNDkxLTEuOTM3LDEuNDcxQzIxLjE2OCwxNS4xNzQsMjEuODE0LDE1Ljc5MywyMy4xNTYsMTUuNzkzWk0wLDE4LjA2NFYwSDYuOTdjNi4wNjgsMCw5LjM3MiwzLjc0Miw5LjM3Miw5LjE2MiwwLDUuMDg0LTMuMzU2LDguOS05LjI5Myw4LjlIMFpNMy40ODYsMy4xNDhWMTQuODkxSDYuOTdjNCwwLDUuODg2LTIuNTgxLDUuODg2LTUuNzMsMC0zLjU2MS0xLjkzNi02LjAxMy01LjkzOC02LjAxM1oiIGZpbGw9IiM5MDJlZjUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/tech/eth.svg":
/*!*****************************!*\
  !*** ./images/tech/eth.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iRXRoZXJldW1fbG9nb18yMDE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMS45MyIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDMxLjkzIDUyIj4KICA8cGF0aCBpZD0iUGF0aF8xNzg5IiBkYXRhLW5hbWU9IlBhdGggMTc4OSIgZD0iTTEyNS41MTUsMGwtLjM0OSwxLjE4NVYzNS41NjhsLjM0OS4zNDgsMTUuOTYtOS40MzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjU1NCkiIGZpbGw9IiNkYmRiZGIiLz4KICA8cGF0aCBpZD0iUGF0aF8xNzkwIiBkYXRhLW5hbWU9IlBhdGggMTc5MCIgZD0iTTE1Ljk2LDAsMCwyNi40ODJsMTUuOTYsOS40MzRWMFoiIGZpbGw9IiNkYmRiZGIiLz4KICA8cGF0aCBpZD0iUGF0aF8xNzkxIiBkYXRhLW5hbWU9IlBhdGggMTc5MSIgZD0iTTEyNi41ODIsMjQ2LjAxNmwtLjIuMjM5VjI1OC41bC4yLjU3NCwxNS45Ny0yMi40OTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwLjYyMiAtMjA3LjA3OCkiIGZpbGw9IiNkYmRiZGIiLz4KICA8cGF0aCBpZD0iUGF0aF8xNzkyIiBkYXRhLW5hbWU9IlBhdGggMTc5MiIgZD0iTTE1Ljk2LDI1OS4wNzZWMjQ2LjAxNEwwLDIzNi41ODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yMDcuMDc2KSIgZmlsbD0iI2RiZGJkYiIvPgogIDxwYXRoIGlkPSJQYXRoXzE3OTMiIGRhdGEtbmFtZT0iUGF0aCAxNzkzIiBkPSJNMTI3Ljk2MSwxNzAuODQ3bDE1Ljk2LTkuNDM0LTE1Ljk2LTcuMjU0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMi4wMDEgLTEzNC45MzEpIiBmaWxsPSIjZGJkYmRiIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTc5NCIgZGF0YS1uYW1lPSJQYXRoIDE3OTQiIGQ9Ik0wLDE2MS40MTNsMTUuOTYsOS40MzRWMTU0LjE1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMSAtMTM0LjkzMSkiIGZpbGw9IiNkYmRiZGIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./images/tech/meta.svg":
/*!******************************!*\
  !*** ./images/tech/meta.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meta-cb352bb54f6e95f9ec0496835f5367a8.svg";

/***/ }),

/***/ "./images/tech/small-pic.svg":
/*!***********************************!*\
  !*** ./images/tech/small-pic.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMy4zODkiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCAzMy4zODkgNTIiPgogIDxnIGlkPSJHcm91cF8yODQzIiBkYXRhLW5hbWU9Ikdyb3VwIDI4NDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjEuMTcyIC03NCkiPgogICAgPGcgaWQ9Ikdyb3VwXzgiIGRhdGEtbmFtZT0iR3JvdXAgOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTIxLjE3MiA3NCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTY5Ny45LDE3Mi4wMTZoMS40MTZhNC43OCw0Ljc4LDAsMCwxLDIuODM2LDEuMzkyLDMuNDIzLDMuNDIzLDAsMCwxLDMuODA2LjM5My45MjIuOTIyLDAsMCwwLC4zNjkuMTYxYzIuNTk1LjMsNC4zMDgsMS41NTUsNS4wMTQsMy45djEuNDNhNS4yNzMsNS4yNzMsMCwwLDEtMi42NTQsMy40MjJjLS41NDUuMjg0LTEuMTI2LjUwNy0xLjY4Ni43NTVhMTEuOTE5LDExLjkxOSwwLDAsMSwxLjgxNyw5LjQxNywxMi40MzcsMTIuNDM3LDAsMCwxLTUuMDc3LDcuNTY0LDEuNjc2LDEuNjc2LDAsMCwwLS41NzcuNyw5LjU1Niw5LjU1NiwwLDAsMC0uNCw0LjA0MiwyNS40MDgsMjUuNDA4LDAsMCwwLDIuNTg4LDguNTExYy40MzYuOS45MDYsMS43ODksMS4zNTYsMi42NzItLjA0OC4wNDEtLjA2MS4wNjMtLjA3OS4wNjUtLjA5LjAxMi0uMTg2LjAyMy0uMjc3LjAyN2E5LjQxNiw5LjQxNiwwLDAsMC03LjUsMy42NzIsOS4xNTcsOS4xNTcsMCwwLDEtNS45LDMuODc4aC0xLjU1N2MtLjQzNy0uMTItLjg3Ni0uMjQtMS4zNTItLjM2OS4xMDYtLjIyMi4xNzctLjM3OS4yNTctLjUyOWExNy45MzEsMTcuOTMxLDAsMCwwLDEuMDMxLTE1LjU5MiwyLjgsMi44LDAsMCwwLTIuNTU1LTEuODQsMTEuMjA5LDExLjIwOSwwLDAsMC0xLjc1OC4wOTFjLTEuMzQ5LjE3LTIuNjg2LjQ2OS00LjAzNS41NDMtMS40MjUuMDc3LTIuMDg2LS43NjUtMS44Mi0yLjA1Mi4xMjItLjU4NS4xMzYtMS4wODYtLjY0MS0xLjM3My0uNjU4LS4yNDMtLjY3Ni0uODg3LS4xMDktMS4yOTIuMTQ3LS4xMDYuMzE4LS4xODkuNTA2LS4zLTEuMzYyLS42MDctMS4zNDYtLjYtLjk2LTEuOTRhLjcuNywwLDAsMC0uNDEzLS45MDksMTEuOTQyLDExLjk0MiwwLDAsMS0xLjU5MS0xLjIxOXYtLjY0OWMuMzQ5LS4zNDQuNzE4LS42NzMsMS4wNDUtMS4wMzUuNTU1LS42MTEsMS4xMDgtMS4yMjUsMS42MTQtMS44Ny4yNS0uMzE4LjIxNS0uNjM2LS4xMzctLjk3NWE0Ljk4Niw0Ljk4NiwwLDAsMS0uNy0xLjEzMmMuMDM0LS4wMTIuMDY3LS4wMjYuMS0uMDQxbC43ODkuNzc3LjE2NS0uMDc0Yy0uMDg3LS4zODctLjE1NS0uNzgxLS4yNjktMS4xNjJhNi44LDYuOCwwLDAsMSwxLjA0Ni02LjU1NC45LjksMCwwLDAsLjA2NC0uNzEyYy0uNjMxLTIuMzQxLjI4NC00LjIxLDIuNjM3LTUuMjc2QTkuOCw5LjgsMCwwLDEsNjg1LjgyLDE3OGEyMS44NDcsMjEuODQ3LDAsMCwxLDYuMjItLjU4Yy44NzguMDIxLDEuNzU3LDAsMi40OTIsMGExMC43MTksMTAuNzE5LDAsMCwxLS4wNjQtMi4zMTdBMy44LDMuOCwwLDAsMSw2OTcuOSwxNzIuMDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3Ny45NDggLTE3Mi4wMTYpIiBmaWxsPSIjZGJkYmRiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/twitter.svg":
/*!****************************!*\
  !*** ./images/twitter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy41MTQiIGhlaWdodD0iMTQuMjUyIiB2aWV3Qm94PSIwIDAgMTcuNTE0IDE0LjI1MiI+CiAgPHBhdGggaWQ9Il9pb25pY29uc19zdmdfbG9nby10d2l0dGVyXzJfIiBkYXRhLW5hbWU9Il9pb25pY29uc19zdmdfbG9nby10d2l0dGVyICgyKSIgZD0iTTM3LjYxNCw2NS42ODlhNy4yNjUsNy4yNjUsMCwwLDEtMi4wNjQuNTY4LDMuNjA2LDMuNjA2LDAsMCwwLDEuNTgxLTEuOTg5LDcuMTQsNy4xNCwwLDAsMS0yLjI4My44NzJBMy41OTIsMy41OTIsMCwwLDAsMjguNjMzLDY3LjZhMy41MTgsMy41MTgsMCwwLDAsLjA5My44MiwxMC4xODMsMTAuMTgzLDAsMCwxLTcuNDA4LTMuNzYsMy42LDMuNiwwLDAsMCwxLjExNyw0LjhBMy41MDksMy41MDksMCwwLDEsMjAuOCw2OS4wMXYuMDQ1YTMuNiwzLjYsMCwwLDAsMi44ODQsMy41MjYsMy42MTcsMy42MTcsMCwwLDEtLjk0Ni4xMjYsMy4zOSwzLjM5LDAsMCwxLS42NzUtLjA2NywzLjYsMy42LDAsMCwwLDMuMzU5LDIuNSw3LjIsNy4yLDAsMCwxLTQuNDY1LDEuNTQsNy4yODIsNy4yODIsMCwwLDEtLjg1Ny0uMDUyLDEwLjA0NCwxMC4wNDQsMCwwLDAsNS41LDEuNjI2QTEwLjE2MywxMC4xNjMsMCwwLDAsMzUuODMzLDY4LjAxNmMwLS4xNTYsMC0uMzEyLS4wMTEtLjQ2NEE3LjMxNSw3LjMxNSwwLDAsMCwzNy42MTQsNjUuNjg5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjEgLTY0KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./images/updates/demo.svg":
/*!*********************************!*\
  !*** ./images/updates/demo.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-70ecdf584a801f93fb1434860fb7b6d9.svg";

/***/ }),

/***/ "./images/updates/logo.svg":
/*!*********************************!*\
  !*** ./images/updates/logo.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Ni4xOTEiIGhlaWdodD0iNzEuOTM4IiB2aWV3Qm94PSIwIDAgNDYuMTkxIDcxLjkzOCI+CiAgPGcgaWQ9Ikdyb3VwXzI4MjUiIGRhdGEtbmFtZT0iR3JvdXAgMjgyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyMS4xNzEgLTc0KSI+CiAgICA8ZyBpZD0iR3JvdXBfOCIgZGF0YS1uYW1lPSJHcm91cCA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MjEuMTcyIDc0KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzMiIGRhdGEtbmFtZT0iUGF0aCAzIiBkPSJNNzA1LjU0NCwxNzIuMDE2SDcwNy41YzEuNDYxLjM5MSwyLjk4MS42ODYsMy45MjMsMS45MjZhNC43MzYsNC43MzYsMCwwLDEsNS4yNjYuNTQzLDEuMjc2LDEuMjc2LDAsMCwwLC41MS4yMjNjMy41OS40MTYsNS45NTksMi4xNTEsNi45MzYsNS40djEuOTc5YTcuMjk0LDcuMjk0LDAsMCwxLTMuNjcyLDQuNzM0Yy0uNzU0LjM5My0xLjU1Ny43LTIuMzMzLDEuMDQ1YTE2LjQ4OCwxNi40ODgsMCwwLDEsMi41MTMsMTMuMDI4Yy0uODE1LDQuMzMxLTMuNDE0LDcuNjg4LTcuMDIzLDEwLjQ2NGEyLjMxOSwyLjMxOSwwLDAsMC0uOC45NjIsMTMuMjIxLDEzLjIyMSwwLDAsMC0uNTUzLDUuNTkyLDM1LjE1NiwzNS4xNTYsMCwwLDAsMy41ODEsMTEuNzc0Yy42LDEuMjQ2LDEuMjU0LDIuNDc1LDEuODc2LDMuNy0uMDY2LjA1Ny0uMDg0LjA4OC0uMTA5LjA5MS0uMTI0LjAxNy0uMjU3LjAzMi0uMzgzLjAzOGExMy4wMjcsMTMuMDI3LDAsMCwwLTEwLjM3NCw1LjA4Yy0yLjA2OCwyLjY4Ni00LjUxOCw0Ljc2Ny04LjE2OCw1LjM2NmgtMi4xNTNjLS42LS4xNjYtMS4yMTItLjMzMi0xLjg3LS41MTEuMTQ3LS4zMDguMjQ0LS41MjQuMzU1LS43MzIsMy43MTItNy4wMTEsNC4zMTQtMTQuMTkzLDEuNDI3LTIxLjU3MWEzLjg3OCwzLjg3OCwwLDAsMC0zLjUzNC0yLjU0NiwxNS41MTUsMTUuNTE1LDAsMCwwLTIuNDMyLjEyNmMtMS44NjYuMjM1LTMuNzE1LjY0OS01LjU4My43NTEtMS45NzEuMTA2LTIuODg2LTEuMDU5LTIuNTE4LTIuODM4LjE2OC0uODA5LjE4OC0xLjUtLjg4Ny0xLjktLjkxLS4zMzYtLjkzNS0xLjIyNy0uMTUxLTEuNzg3LjItLjE0Ny40MzktLjI2Mi43LS40MTQtMS44ODQtLjg0LTEuODYyLS44MzYtMS4zMjgtMi42ODRhLjk3Mi45NzIsMCwwLDAtLjU3MS0xLjI1OCwxNi41MDYsMTYuNTA2LDAsMCwxLTIuMi0xLjY4NnYtLjljLjQ4Mi0uNDc2Ljk5My0uOTMxLDEuNDQ1LTEuNDMxLjc2OC0uODQ1LDEuNTMzLTEuNjk1LDIuMjMzLTIuNTg4LjM0NS0uNDQxLjMtLjg4LS4xOS0xLjM0OWE2Ljg5Miw2Ljg5MiwwLDAsMS0uOTYyLTEuNTY2Yy4wNDctLjAxNy4wOTMtLjAzNi4xNC0uMDU2LjM2Mi4zNTguNzI4LjcxNywxLjA5MSwxLjA3NWwuMjI4LS4xYy0uMTItLjUzNi0uMjE1LTEuMDgtLjM3Mi0xLjYwOC0uOTUzLTMuMjE4LS43NjUtNi4yNjgsMS40NDctOS4wNjdhMS4yNSwxLjI1LDAsMCwwLC4wODgtLjk4NWMtLjg3My0zLjIzOS4zOTMtNS44MjQsMy42NDgtNy4zYTEzLjU1NCwxMy41NTQsMCwwLDEsMi4wOTMtLjc0LDMwLjIyMywzMC4yMjMsMCwwLDEsOC42MDUtLjhjMS4yMTQuMDI5LDIuNDMxLjAwNSwzLjQ0Ny4wMDVhMTQuODM0LDE0LjgzNCwwLDAsMS0uMDg4LTMuMjA2QzcwMS4yNDIsMTczLjg3LDcwMi45NTksMTcyLjUsNzA1LjU0NCwxNzIuMDE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3Ny45NDggLTE3Mi4wMTYpIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwongwaichung%2FDesktop%2FPic%20One%2Fp1-website%2Fpages%2Findex.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwongwaichung%2FDesktop%2FPic%20One%2Fp1-website%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Team */ "./components/Team.js");
/* harmony import */ var _components_Updates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Updates */ "./components/Updates.js");
/* harmony import */ var _components_Technology__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technology */ "./components/Technology.js");
/* harmony import */ var _components_Economics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Economics */ "./components/Economics.js");
/* harmony import */ var _components_Alphas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Alphas */ "./components/Alphas.js");
var _jsxFileName = "/Users/wongwaichung/Desktop/Pic One/p1-website/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Team__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_Updates__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_Technology__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_Economics__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_Alphas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
});

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fwongwaichung%2FDesktop%2FPic%20One%2Fp1-website%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fwongwaichung%2FDesktop%2FPic%20One%2Fp1-website%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwongwaichung%2FDesktop%2FPic%20One%2Fp1-website%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_129a35c7ec57967eb265":
/*!*******************************************!*\
  !*** external "dll_129a35c7ec57967eb265" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_129a35c7ec57967eb265;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map