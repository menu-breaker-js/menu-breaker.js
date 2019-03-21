(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MenuBreaker", [], factory);
	else if(typeof exports === 'object')
		exports["MenuBreaker"] = factory();
	else
		root["MenuBreaker"] = factory();
})(typeof window !== "object" ? global.window = global : window, function() {
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
exports['default'] = _menuBreaker.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/menu-breaker.js":
/*!*****************************!*\
  !*** ./src/menu-breaker.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuBreaker =
/*#__PURE__*/
function () {
  function MenuBreaker() {
    var _this = this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MenuBreaker);

    _defineProperty(this, "onWindowResize", function () {
      return _this.changeMenu();
    });

    this.element = data.element;
    this.callbacks = data.callbacks || {};
    this.settings = this.extendSettings(data.settings || {});

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit();
    }

    this.mobileMenu = document.querySelector('[data-mobile]');
    this.openButton = document.querySelector('[data-open]');
    this.closeButton = document.querySelector('[data-close]');
    this.openCloseButton = document.querySelector('[data-open-close]');
    this.isOpen = false;
    this.changeMenu();
    this.menuButton(true);
    this.addEventListeners();
  }

  _createClass(MenuBreaker, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      window.addEventListener('resize', this.onWindowResize);
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
            item.style.marginLeft = 0;
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

      if (typeof this.callbacks.onMenuOpen === 'function') {
        this.callbacks.onMenuOpen();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.mobileMenu.classList.remove(this.settings['open-class']);
      this.isOpen = false;

      if (typeof this.callbacks.onMenuClose === 'function') {
        this.callbacks.onMenuClose();
      }
    }
  }, {
    key: "menuButton",
    value: function menuButton(init) {
      var _this2 = this;

      if (init) {
        if (this.openButton) {
          this.openButton.addEventListener('click', function () {
            return _this2.open();
          });
        }

        if (this.closeButton) {
          this.closeButton.addEventListener('click', function () {
            return _this2.close();
          });
        }

        if (this.openCloseButton) {
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
      if (this.mobileMenu.classList.contains(this.settings['open-class'])) {
        this.mobileMenu.classList.remove(this.settings['open-class']);
      }

      this.subLevels();
    }
  }, {
    key: "changeMenu",
    value: function changeMenu() {
      if (this.element.offsetHeight > this.settings['navbar-height']) {
        this.menuButton(false);

        if (typeof this.callbacks.isMobile === 'function') {
          this.callbacks.isMobile();
        }
      } else {
        this.desktop();

        if (typeof this.callbacks.isDesktop === 'function') {
          this.callbacks.isDesktop();
        }
      }
    }
  }, {
    key: "extendSettings",
    value: function extendSettings(settings) {
      var defaultSettings = {
        'navbar-height': 70,
        // max height of navbar
        'open-class': 'open' // name of class added to mobile menu, after click data-open or data-open-close element

      };
      var newSettings = {};

      for (var property in defaultSettings) {
        if (property in settings) newSettings[property] = settings[property];else newSettings[property] = defaultSettings[property];
      }

      return newSettings;
    }
  }]);

  return MenuBreaker;
}();

exports.default = MenuBreaker;

if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.menuBreaker = function (_ref) {
    var settings = _ref.settings,
        callbacks = _ref.callbacks;
    new MenuBreaker({
      element: this,
      settings: settings,
      callbacks: callbacks
    });
  };
}

/***/ })

/******/ });
});
//# sourceMappingURL=menu-breaker.js.map