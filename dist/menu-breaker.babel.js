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

    this.update();
    this.addEventListeners();
  }

  _createClass(MenuBreaker, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.onWindowResizeBind = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.onWindowResizeBind);
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.update();
    }
  }, {
    key: 'openMobileMenu',
    value: function openMobileMenu() {
      if (this.firstClick === false) {
        this.mobileMenu.classList.add('open');
        this.overlay.style.opacity = 1;
        this.overlay.style.display = 'block';
        this.firstClick = true;
      } else {
        this.mobileMenu.classList.remove('open');
        this.overlay.style.opacity = 0;
        this.firstClick = false;
      }
    }
  }, {
    key: 'closeMobileMenu',
    value: function closeMobileMenu() {
      this.mobileMenu.classList.remove('open');
      this.overlay.style.opacity = 0;
      this.firstClick = false;
    }
  }, {
    key: 'update',
    value: function update() {
      var windowWidth = window.innerWidth;

      this.checkSize = this.element.offsetHeight;

      this.mobileMenu = document.querySelector(this.settings['mobile-menu']);
      this.openCloseButton = document.querySelector(this.settings['open-close-button']);
      this.overlay = document.querySelector(this.settings.overlay);

      if (this.checkSize > this.settings['navbar-height']) {
        this.firstClick = false;

        this.openCloseButton.style.display = 'block';
        this.element.style.opacity = 0;
        this.element.style.visibility = 'hidden';

        if (this.mobileMenu.classList.contains('open')) {
          this.mobileMenu.style.display = 'block';
          this.overlay.style.display = 'block';
        }

        this.mobileMenuBind = this.openMobileMenu.bind(this);
        this.openCloseButton.addEventListener('click', this.mobileMenuBind);

        this.closeMobileMenuBind = this.closeMobileMenu.bind(this);
        this.overlay.addEventListener('click', this.closeMobileMenuBind);
      } else {
        if (this.mobileMenu.classList.contains('open')) {
          this.mobileMenu.style.display = 'none';
          this.overlay.style.display = 'none';
        }

        this.openCloseButton.style.display = 'none';
        this.element.style.opacity = 1;
        this.element.style.visibility = 'visible';
      }

      this.listEl = elem.querySelectorAll(':not(li) > ul > li > ul');

      // FIRST LEVEL SUBMENU DETECT SIDE
      for (var a = 0; a < this.listEl.length; a++) {
        var parentWidth = this.listEl[a].parentNode.clientWidth;
        var subMenuWidth = this.listEl[a].clientWidth;
        if (this.listEl[a].parentNode.offsetLeft + subMenuWidth > windowWidth) {
          this.listEl[a].style.marginLeft = -subMenuWidth + parentWidth + 'px';
        } else {
          this.listEl[a].style.marginLeft = '0px';
        }

        // NEXT LEVEL SUBMENU DETECT SIDE
        this.subListEl = this.listEl[a].querySelectorAll('li > ul');

        for (var b = 0; b < this.subListEl.length; b++) {
          var subSubMenuWidth = this.subListEl[b].offsetWidth;
          if (this.subListEl[b].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > windowWidth) {
            this.subListEl[b].style.marginLeft = -subSubMenuWidth + 'px';
          } else {
            this.subListEl[b].style.marginLeft = subSubMenuWidth + 'px';
          }
        }
      }
    }
  }, {
    key: 'settings',
    value: function settings(_settings) {
      var defaults = {
        'mobile-menu': '.mobile',
        'open-close-button': '#openMenu',
        overlay: '.overlay',
        'navbar-height': 70
      };

      var custom = {};

      for (var setting in defaults) {
        if (setting in _settings) {
          custom[setting] = _settings[setting];
        } else if (this.element.getAttribute('data-' + setting)) {
          var attribute = this.element.getAttribute('data-' + setting);
          try {
            custom[setting] = JSON.parse(attribute);
          } catch (e) {
            custom[setting] = attribute;
          }
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