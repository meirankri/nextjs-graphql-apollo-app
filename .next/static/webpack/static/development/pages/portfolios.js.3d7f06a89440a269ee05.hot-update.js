webpackHotUpdate("static\\development\\pages\\portfolios.js",{

/***/ "./pages/portfolios/index.js":
/*!***********************************!*\
  !*** ./pages/portfolios/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _apollo_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apollo/queries */ "./apollo/queries/index.js");
/* harmony import */ var _components_portfolios_portfolioCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/portfolios/portfolioCard.js */ "./components/portfolios/portfolioCard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hoc_withApollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/hoc/withApollo */ "./hoc/withApollo.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var graphUpdatePortfolio = function graphUpdatePortfolio(id) {
  var query = "\n  mutation updatePortfolio {\n    updatePortfolio(id: \"".concat(id, "\", input: {\n       title: \"Update Job\"\n        company: \"update Company\"\n        companyWebsite: \"update Website\"\n        location: \"update Location\"\n        jobTitle: \"update Job Title\"\n        description: \"update Desc\"\n        startDate: \"12/12/2012\"\n        endDate: \"14/11/2013\"\n\n    }){\n      _id\n      title\n      company\n      companyWebsite\n      location\n      jobTitle\n      description\n      startDate\n        endDate\n    }\n  }");
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/graphql', {
    query: query
  }).then(function (_ref) {
    var graph = _ref.data;
    return graph.data;
  }).then(function (data) {
    return data.updatePortfolio;
  });
};

var graphDeletePortfolio = function graphDeletePortfolio(id) {
  var query = "\n  mutation deletePortfolio {\n    deletePortfolio(id: \"".concat(id, "\")\n  }");
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/graphql', {
    query: query
  }).then(function (_ref2) {
    var graph = _ref2.data;
    return graph.data;
  }).then(function (data) {
    return data.deletePortfolio;
  });
};

var Portfolios = function Portfolios() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      portfolios = _useState[0],
      setPortfolios = _useState[1];

  var _useLazyQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"])(_apollo_queries__WEBPACK_IMPORTED_MODULE_6__["GET_PORTFOLIOS"]),
      _useLazyQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useLazyQuery, 2),
      getPortfolios = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_apollo_queries__WEBPACK_IMPORTED_MODULE_6__["CREATE_PORTFOLIO"], {
    update: function update(cache, _ref3) {
      var createPortfolio = _ref3.data.createPortfolio;

      // get data from the cache
      var _cache$readQuery = cache.readQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_6__["GET_PORTFOLIOS"]
      }),
          portfolios = _cache$readQuery.portfolios; //write on the cache the same data with the new data that we create


      cache.writeQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_6__["GET_PORTFOLIOS"],
        data: {
          portfolios: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(portfolios), [createPortfolio])
        }
      });
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      createPortfolio = _useMutation2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getPortfolios();
  }, []);

  if (data && data.portfolios.length > 0 && (portfolios.length === 0 || data.portfolios.length !== portfolios.length)) {
    setPortfolios(data.portfolios);
  }

  if (loading) {
    return 'Loading...';
  }

  var updatePortfolio = function updatePortfolio(id) {
    var updated, index, newPortfolios;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePortfolio$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(graphUpdatePortfolio(id));

          case 2:
            updated = _context.sent;
            console.log(updated);
            index = portfolios.findIndex(function (p) {
              return p._id === id;
            });
            newPortfolios = portfolios.slice();
            newPortfolios[index] = updated;
            setPortfolios(newPortfolios);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var deletePortfolio = function deletePortfolio(id) {
    var deletedPortfolio, index, newPortfolios;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deletePortfolio$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(graphDeletePortfolio(id));

          case 2:
            deletedPortfolio = _context2.sent;
            index = portfolios.findIndex(function (p) {
              return p._id === deletedPortfolio;
            });
            newPortfolios = portfolios.slice();
            newPortfolios.splice(index, 1);
            setPortfolios(newPortfolios);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("section", {
    className: "section-title"
  }, __jsx("div", {
    className: "px-2"
  }, __jsx("div", {
    className: "pt-5 pb-4"
  }, __jsx("h1", null, "Portfolios")))), __jsx("button", {
    onClick: createPortfolio,
    className: "btn btn-primary"
  }, "create protfolio"), __jsx("section", {
    className: "pb-5"
  }, __jsx("div", {
    className: "row"
  }, portfolios.map(function (portfolio) {
    return __jsx("div", {
      key: portfolio._id,
      className: "col-md-4"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/portfolios/[id]",
      as: "/portfolios/".concat(portfolio._id)
    }, __jsx("a", {
      className: "card-link"
    }, __jsx(_components_portfolios_portfolioCard_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      portfolio: portfolio
    }))), __jsx("button", {
      className: "btn btn-warning",
      onClick: function onClick() {
        return updatePortfolio(portfolio._id);
      }
    }, "update portfolio"), __jsx("button", {
      onClick: function onClick() {
        return deletePortfolio(portfolio._id);
      },
      className: "btn btn-danger"
    }, "delete portfolio"));
  }))));
}; // Portfolios.getInitialProps = async () =>{
//   const portfolios = await fetchPortfolios()
//   return {
//     data: {portfolios}
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withApollo__WEBPACK_IMPORTED_MODULE_9__["default"])(Portfolios));

/***/ })

})
//# sourceMappingURL=portfolios.js.3d7f06a89440a269ee05.hot-update.js.map