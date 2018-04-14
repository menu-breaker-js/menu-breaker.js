/*!
* menu-breaker.js v1.0.0 beta 2
* Copyright 2017-2018 Jakub Biesiada
* MIT License
*/

class MenuBreaker {
  constructor(element, settings = {}) {
    // set menu element
    this.element = element;

    // set settings
    this.settings = this.settings(settings);

    this.mobileMenu = document.querySelector('[data-mobile]');
    this.openButton = document.querySelector('[data-open]');
    this.closeButton = document.querySelector('[data-close]');
    this.openCloseButton = document.querySelector('[data-open-close]');

    this.isOpen = false;

    this.changeMenu();

    this.menuButton(true);

    // call events function
    this.addEventListeners();
  }

  addEventListeners() {
    // resize event
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.changeMenu();
  }

  subLevels() {
    this.items = this.element.querySelectorAll(':not(li) > ul > li > ul');

    // side of first level submenu
    for (let i = 0; i < this.items.length; i++) {
      let parentWidth = this.items[i].parentNode.clientWidth;
      let subMenuWidth = this.items[i].clientWidth;

      if (this.items[i].parentNode.offsetLeft + subMenuWidth > window.innerWidth) {
        this.items[i].style.marginLeft = `${-subMenuWidth + parentWidth}px`;
      } else {
        this.items[i].style.marginLeft = '0px';
      }

      // side of next level submenu
      this.subItems = this.items[i].querySelectorAll('li > ul');

      for (let j = 0; j < this.subItems.length; j++) {
        let subSubMenuWidth = this.subItems[j].offsetWidth;

        if (this.subItems[j].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > window.innerWidth) {
          this.subItems[j].style.marginLeft = `${-subSubMenuWidth}px`;
        } else {
          this.subItems[j].style.marginLeft = `${subSubMenuWidth}px`;
        }
      }
    }
  }

  open() {
    this.mobileMenu.classList.add(this.settings['open-class']);
    this.isOpen = true;

    if (typeof this.settings.onMenuOpen === 'function') this.settings.onMenuOpen();
  }

  close() {
    this.mobileMenu.classList.remove(this.settings['open-class']);
    this.isOpen = false;

    if (typeof this.settings.onMenuClose === 'function') this.settings.onMenuClose();
  }

  menuButton(val) {
    if (val) {
      if (this.openButton !== null)
       this.openButton.addEventListener('click', () => this.open());

      if (this.closeButton !== null)
       this.closeButton.addEventListener('click', () => this.close());

      if (this.openCloseButton !== null) {
        this.openCloseButton.addEventListener('click', () => {
          if (!this.isOpen) {
            this.open();
          } else {
            this.close();
          }
        });
      }
    }

    if (this.isOpen) this.mobileMenu.classList.add(this.settings['open-class']);
  }

  desktop() {
    if (this.mobileMenu.classList.contains(this.settings['open-class']) > 0)
     this.mobileMenu.classList.remove(this.settings['open-class']);

    this.subLevels();
  }

  changeMenu() {
    // detect and switch menu
    if (this.element.offsetHeight > this.settings['navbar-height']) {
      this.menuButton(false);

      if (typeof this.settings.isMobile === 'function') this.settings.isMobile();
    } else {
      this.desktop();

      if (typeof this.settings.isDesktop === 'function') this.settings.isDesktop();
    }
  }

  settings(settings) {
    // defaults
    let defaults = {
      'navbar-height': 70, // max height of navbar
      'open-class': 'open', // Name of class added to mobile menu, after click data-open or data-open-close element

      onMenuOpen: null, // call function on mobile menu open
      onMenuClose: null, // call function on mobile menu close
      isMobile: null, // call function when is mobile menu
      isDesktop: null // call function when is desktop menu
    };

    let custom = {};

    for (let setting in defaults) {
      if (setting in settings) {
        custom[setting] = settings[setting];
      } else {
        custom[setting] = defaults[setting];
      }
    }

    return custom;
  }
}

// jQuery
let scope;

if (typeof window !== 'undefined')
 scope = window;
else if (typeof global !== 'undefined')
 scope = global;

if (scope && scope.jQuery) {
  let $ = scope.jQuery;

  $.fn.menuBreaker = function(options) {
    new MenuBreaker(this[0], options);
  }
}

// AMD
if (typeof define === 'function' && define.amd) {
  define('MenuBreaker', [], function() {
    return MenuBreaker;
  });

// CommonJS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = MenuBreaker;
  }
  exports.default = MenuBreaker;
}
