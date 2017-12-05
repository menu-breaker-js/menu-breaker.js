/*!
* menu-breaker.js v1.0
* Copyright 2017 Jakub Biesiada
* MIT License
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuBreaker = function () {
  function MenuBreaker(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MenuBreaker);

    this.element = element;

    this.settings = this.settings(settings);

    this.firstClick = false;

    this.overlay();
    this.changeMenu();
    this.addEventListeners();
  }

  _createClass(MenuBreaker, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this = this;

      window.addEventListener('resize', function () {
        return _this.onWindowResize();
      });
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.changeMenu();
    }
  }, {
    key: 'overlay',
    value: function overlay() {
      if (this.settings.overlay.show === true) {
        this.overlay = document.createElement('div');
        this.overlay.classList.add('overlay');
        document.body.appendChild(this.overlay);

        Object.assign(this.overlay.style, {
          'top': '0px',
          'transition': this.settings.overlay.transition,
          'cursor': this.settings.overlay.cursor,
          'width': '100%',
          'height': '100%',
          'position': 'absolute',
          'display': 'none',
          'opacity': 0,
          'background-color': this.settings.overlay['background-color']
        });
      }
    }
  }, {
    key: 'subLevels',
    value: function subLevels() {
      this.listEl = this.element.querySelectorAll(':not(li) > ul > li > ul');

      // FIRST LEVEL SUBMENU DETECT SIDE
      for (var i = 0; i < this.listEl.length; i++) {
        var parentWidth = this.listEl[i].parentNode.clientWidth;
        var subMenuWidth = this.listEl[i].clientWidth;
        if (this.listEl[i].parentNode.offsetLeft + subMenuWidth > this.windowWidth) {
          this.listEl[i].style.marginLeft = -subMenuWidth + parentWidth + 'px';
        } else {
          this.listEl[i].style.marginLeft = '0px';
        }

        // NEXT LEVEL SUBMENU DETECT SIDE
        this.subListEl = this.listEl[i].querySelectorAll('li > ul');

        for (var j = 0; j < this.subListEl.length; j++) {
          var subSubMenuWidth = this.subListEl[j].offsetWidth;
          if (this.subListEl[j].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > this.windowWidth) {
            this.subListEl[j].style.marginLeft = -subSubMenuWidth + 'px';
          } else {
            this.subListEl[j].style.marginLeft = subSubMenuWidth + 'px';
          }
        }
      }
    }
  }, {
    key: 'menuButton',
    value: function menuButton() {
      var _this2 = this;

      this.openButton.addEventListener('click', function () {
        if (_this2.firstClick === false) {
          _this2.mobileMenu.classList.add('open');
          _this2.overlay.style.opacity = _this2.settings.overlay.opacity;
          _this2.overlay.style.display = 'block';
          _this2.firstClick = true;
        } else {
          _this2.mobileMenu.classList.remove('open');
          _this2.overlay.style.opacity = 0;
          _this2.firstClick = false;
        }
      });
    }
  }, {
    key: 'overlayClose',
    value: function overlayClose() {
      var _this3 = this;

      this.overlay.addEventListener('click', function () {
        _this3.mobileMenu.classList.remove('open');
        _this3.overlay.style.opacity = 0;
        _this3.firstClick = false;
      });
    }
  }, {
    key: 'mobile',
    value: function mobile() {
      this.openButton.style.display = 'block';
      this.element.style.opacity = 0;
      this.element.style.visibility = 'hidden';

      if (this.mobileMenu.classList.contains('open')) {
        this.mobileMenu.style.display = 'block';
        this.overlay.style.display = 'block';
      }

      this.menuButton();
      this.overlayClose();
    }
  }, {
    key: 'desktop',
    value: function desktop() {
      if (this.mobileMenu.classList.contains('open')) {
        this.mobileMenu.style.display = 'none';
        this.overlay.style.display = 'none';
      }

      this.openButton.style.display = 'none';
      this.element.style.opacity = 1;
      this.element.style.visibility = 'visible';

      this.subLevels();
    }
  }, {
    key: 'changeMenu',
    value: function changeMenu() {
      this.windowWidth = window.innerWidth;
      this.checkSize = this.element.offsetHeight;

      this.mobileMenu = document.querySelector('[data-mobile]');
      this.openButton = document.querySelector('[data-open]');
      this.closeButton = document.querySelector('[data-close]');

      if (this.checkSize > this.settings['navbar-height']) {
        this.mobile();
      } else {
        this.desktop();
      }
    }
  }, {
    key: 'settings',
    value: function settings(_settings) {
      var defaults = {
        overlay: {
          show: true,
          opacity: 0.5,
          cursor: 'pointer',
          transition: 'all 300ms ease',
          'background-color': '#000'
        },
        'navbar-height': 70
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
}();

// JQUERY PLUGIN CALL IF JQUERY LOADED


if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.MenuBreaker = function (options) {
    new MenuBreaker(this[0], options);
  };
}