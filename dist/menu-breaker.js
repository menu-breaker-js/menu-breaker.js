/*!
* menu-breaker.js v1.0
* Copyright 2017 Jakub Biesiada
* MIT License
*/

'use strict';

class MenuBreaker {
  constructor(element, settings = {}) {
    this.element = element;

    this.settings = this.settings(settings);

    this.update();
    this.addEventListeners();
  }

  addEventListeners() {
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.onWindowResizeBind);
  }

  onWindowResize() {
    this.update();
  }

  openMobileMenu() {
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

  closeMobileMenu() {
    this.mobileMenu.classList.remove('open');
    this.overlay.style.opacity = 0;
    this.firstClick = false;
  }

  update() {
    let windowWidth = window.innerWidth;

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
      let parentWidth = this.listEl[a].parentNode.clientWidth;
      let subMenuWidth = this.listEl[a].clientWidth;
      if (this.listEl[a].parentNode.offsetLeft + subMenuWidth > windowWidth) {
        this.listEl[a].style.marginLeft = `${-subMenuWidth + parentWidth}px`;
      } else {
        this.listEl[a].style.marginLeft = '0px';
      }

      // NEXT LEVEL SUBMENU DETECT SIDE
      this.subListEl = this.listEl[a].querySelectorAll('li > ul');

      for (var b = 0; b < this.subListEl.length; b++) {
        let subSubMenuWidth = this.subListEl[b].offsetWidth;
        if (this.subListEl[b].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > windowWidth) {
          this.subListEl[b].style.marginLeft = `${-subSubMenuWidth}px`;
        } else {
          this.subListEl[b].style.marginLeft = `${subSubMenuWidth}px`;
        }
      }
    }
  }

  settings(settings) {
    let defaults = {
      'mobile-menu': '.mobile',
      'open-close-button': '#openMenu',
      overlay: '.overlay',
      'navbar-height': 70
    }

    let custom = {};

    for (var setting in defaults) {
      if (setting in settings) {
        custom[setting] = settings[setting];
      } else if (this.element.getAttribute(`data-${setting}`)) {
        let attribute = this.element.getAttribute(`data-${setting}`);
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
}

// JQUERY PLUGIN CALL IF JQUERY LOADED
if (window.jQuery) {
  let $ = window.jQuery;

  $.fn.MenuBreaker = function (options) {
    new MenuBreaker(this[0], options);
  }
}
