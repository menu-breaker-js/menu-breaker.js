(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MenuBreaker", [], factory);
	else if(typeof exports === 'object')
		exports["MenuBreaker"] = factory();
	else
		root["MenuBreaker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuBreaker = _interopRequireDefault(__webpack_require__(/*! ./menu-breaker */ "./src/menu-breaker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _menuBreaker.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/menu-breaker.js":
/*!*****************************!*\
  !*** ./src/menu-breaker.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuBreaker =
/*#__PURE__*/
function () {
  function MenuBreaker(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MenuBreaker);

    // set menu element
    this.element = element; // set settings

    this.settings = this.settings(settings);
    this.mobileMenu = document.querySelector('[data-mobile]');
    this.openButton = document.querySelector('[data-open]');
    this.closeButton = document.querySelector('[data-close]');
    this.openCloseButton = document.querySelector('[data-open-close]');
    this.isOpen = false;
    this.changeMenu();
    this.menuButton(true); // call events function

    this.addEventListeners();
  }

  _createClass(MenuBreaker, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      // resize event
      window.addEventListener('resize', function () {
        return _this.onWindowResize();
      });
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.changeMenu();
    }
  }, {
    key: "subLevels",
    value: function subLevels() {
      var items = this.element.querySelectorAll(':not(li) > ul > li > ul'); // side of first level submenu

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var parentWidth = item.parentNode.clientWidth;
          var subMenuWidth = item.clientWidth;

          if (item.parentNode.offsetLeft + subMenuWidth > window.innerWidth) {
            item.style.marginLeft = "".concat(-subMenuWidth + parentWidth, "px");
          } else {
            item.style.marginLeft = '0px';
          } // side of next level submenu


          var subItems = item.querySelectorAll('li > ul');
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = subItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var subItem = _step2.value;
              var subSubMenuWidth = subItem.offsetWidth;

              if (subItem.parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > window.innerWidth) {
                subItem.style.marginLeft = "".concat(-subSubMenuWidth, "px");
              } else {
                subItem.style.marginLeft = "".concat(subSubMenuWidth, "px");
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.mobileMenu.classList.add(this.settings['open-class']);
      this.isOpen = true;
      if (typeof this.settings.onMenuOpen === 'function') this.settings.onMenuOpen();
    }
  }, {
    key: "close",
    value: function close() {
      this.mobileMenu.classList.remove(this.settings['open-class']);
      this.isOpen = false;
      if (typeof this.settings.onMenuClose === 'function') this.settings.onMenuClose();
    }
  }, {
    key: "menuButton",
    value: function menuButton(init) {
      var _this2 = this;

      if (init) {
        if (this.openButton !== null) this.openButton.addEventListener('click', function () {
          return _this2.open();
        });
        if (this.closeButton !== null) this.closeButton.addEventListener('click', function () {
          return _this2.close();
        });

        if (this.openCloseButton !== null) {
          this.openCloseButton.addEventListener('click', function () {
            if (!_this2.isOpen) _this2.open();else _this2.close();
          });
        }
      }

      if (this.isOpen) this.mobileMenu.classList.add(this.settings['open-class']);
    }
  }, {
    key: "desktop",
    value: function desktop() {
      if (this.mobileMenu.classList.contains(this.settings['open-class']) > 0) this.mobileMenu.classList.remove(this.settings['open-class']);
      this.subLevels();
    }
  }, {
    key: "changeMenu",
    value: function changeMenu() {
      // detect and switch menu
      if (this.element.offsetHeight > this.settings['navbar-height']) {
        this.menuButton(false);
        if (typeof this.settings.isMobile === 'function') this.settings.isMobile();
      } else {
        this.desktop();
        if (typeof this.settings.isDesktop === 'function') this.settings.isDesktop();
      }
    }
  }, {
    key: "settings",
    value: function settings(_settings) {
      // defaults
      var defaults = {
        'navbar-height': 70,
        // max height of navbar
        'open-class': 'open',
        // Name of class added to mobile menu, after click data-open or data-open-close element
        onMenuOpen: null,
        // call function on mobile menu open
        onMenuClose: null,
        // call function on mobile menu close
        isMobile: null,
        // call function when is mobile menu
        isDesktop: null // call function when is desktop menu

      };
      var custom = {};

      for (var setting in defaults) {
        if (setting in _settings) {
          custom[setting] = _settings[setting];
        } else {
          custom[setting] = defaults[setting];
        }
      }

      return custom;
    }
  }]);

  return MenuBreaker;
}(); // jQuery


exports.default = MenuBreaker;
var scope;
if (typeof window !== 'undefined') scope = window;else if (typeof global !== 'undefined') scope = global;

if (scope && scope.jQuery) {
  var $ = scope.jQuery;

  $.fn.menuBreaker = function (options) {
    new MenuBreaker(this[0], options);
  };
}

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=menu-breaker.js.map