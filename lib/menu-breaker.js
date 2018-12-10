(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MenuBreaker", [], factory);
	else if(typeof exports === 'object')
		exports["MenuBreaker"] = factory();
	else
		root["MenuBreaker"] = factory();
})(global, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/menu-breaker.js");
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
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/menu-breaker.js":
/*!*****************************!*\
  !*** ./src/menu-breaker.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuBreaker; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuBreaker =
/*#__PURE__*/
function () {
  function MenuBreaker(element) {
    var _this = this;

    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MenuBreaker);

    _defineProperty(this, "onWindowResize", function () {
      return _this.changeMenu();
    });

    this.element = element;
    this.settings = this.extendSettings(settings);

    if (typeof this.settings.onInit === 'function') {
      this.settings.onInit();
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

      items.forEach(function (item) {
        var parentWidth = item.parentNode.clientWidth;
        var subMenuWidth = item.clientWidth;

        if (item.parentNode.offsetLeft + subMenuWidth > window.innerWidth) {
          item.style.marginLeft = "".concat(-subMenuWidth + parentWidth, "px");
        } else {
          item.style.marginLeft = 0;
        } // side of next level submenu


        var subItems = item.querySelectorAll('li > ul');
        subItems.forEach(function (subItem) {
          var subSubMenuWidth = subItem.offsetWidth;

          if (subItem.parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > window.innerWidth) {
            subItem.style.marginLeft = "".concat(-subSubMenuWidth, "px");
          } else {
            subItem.style.marginLeft = "".concat(subSubMenuWidth, "px");
          }
        });
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.mobileMenu.classList.add(this.settings['open-class']);
      this.isOpen = true;

      if (typeof this.settings.onMenuOpen === 'function') {
        this.settings.onMenuOpen();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.mobileMenu.classList.remove(this.settings['open-class']);
      this.isOpen = false;

      if (typeof this.settings.onMenuClose === 'function') {
        this.settings.onMenuClose();
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

        if (typeof this.settings.isMobile === 'function') {
          this.settings.isMobile();
        }
      } else {
        this.desktop();

        if (typeof this.settings.isDesktop === 'function') {
          this.settings.isDesktop();
        }
      }
    }
  }, {
    key: "extendSettings",
    value: function extendSettings(settings) {
      var defaultSettigs = {
        'navbar-height': 70,
        // max height of navbar
        'open-class': 'open',
        // name of class added to mobile menu, after click data-open or data-open-close element
        onInit: null,
        // callback on plugin init
        onMenuOpen: null,
        // callback on mobile menu open
        onMenuClose: null,
        // callback on mobile menu close
        isMobile: null,
        // callback when is mobile menu
        isDesktop: null // callback when is desktop menu

      };
      var newSettings = {};
      Object.keys(defaultSettigs).forEach(function (property) {
        if (property in settings) newSettings[property] = settings[property];else newSettings[property] = defaultSettigs[property];
      });
      return newSettings;
    }
  }]);

  return MenuBreaker;
}();


var scope;
if (typeof window !== 'undefined') scope = window;else if (typeof global !== 'undefined') scope = global;

if (scope && scope.jQuery) {
  var $ = scope.jQuery;

  $.fn.menuBreaker = function (element, options) {
    return new MenuBreaker(element[0], options);
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=menu-breaker.js.map