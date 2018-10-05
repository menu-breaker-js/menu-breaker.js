export default class MenuBreaker {
  constructor(element, settings = {}) {
    this.element = element;

    this.settings = this.settings(settings);

    this.mobileMenu = document.querySelector('[data-mobile]');
    this.openButton = document.querySelector('[data-open]');
    this.closeButton = document.querySelector('[data-close]');
    this.openCloseButton = document.querySelector('[data-open-close]');

    this.isOpen = false;

    this.changeMenu();
    this.menuButton(true);
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.changeMenu();
  }

  subLevels() {
    const items = this.element.querySelectorAll(':not(li) > ul > li > ul');

    // side of first level submenu
    for (const item of items) {
      const parentWidth = item.parentNode.clientWidth;
      const subMenuWidth = item.clientWidth;

      if (item.parentNode.offsetLeft + subMenuWidth > window.innerWidth) {
        item.style.marginLeft = `${-subMenuWidth + parentWidth}px`;
      } else {
        item.style.marginLeft = '0px';
      }

      // side of next level submenu
      const subItems = item.querySelectorAll('li > ul');

      for (const subItem of subItems) {
        const subSubMenuWidth = subItem.offsetWidth;

        if (
          subItem.parentNode.parentNode.parentNode.offsetLeft +
            subSubMenuWidth +
            subMenuWidth >
          window.innerWidth
        ) {
          subItem.style.marginLeft = `${-subSubMenuWidth}px`;
        } else {
          subItem.style.marginLeft = `${subSubMenuWidth}px`;
        }
      }
    }
  }

  open() {
    this.mobileMenu.classList.add(this.settings['open-class']);
    this.isOpen = true;

    if (typeof this.settings.onMenuOpen === 'function') {
      this.settings.onMenuOpen();
    }
  }

  close() {
    this.mobileMenu.classList.remove(this.settings['open-class']);
    this.isOpen = false;

    if (typeof this.settings.onMenuClose === 'function') {
      this.settings.onMenuClose();
    }
  }

  menuButton(init) {
    if (init) {
      if (this.openButton) {
        this.openButton.addEventListener('click', () => this.open());
      }

      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => this.close());
      }

      if (this.openCloseButton) {
        this.openCloseButton.addEventListener('click', () => {
          if (!this.isOpen) this.open();
          else this.close();
        });
      }
    }

    if (this.isOpen) this.mobileMenu.classList.add(this.settings['open-class']);
  }

  desktop() {
    if (this.mobileMenu.classList.contains(this.settings['open-class']) > 0) {
      this.mobileMenu.classList.remove(this.settings['open-class']);
    }

    this.subLevels();
  }

  changeMenu() {
    // detect and switch menu
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

  settings(settings) {
    const defaults = {
      'navbar-height': 70, // max height of navbar
      'open-class': 'open', // name of class added to mobile menu, after click data-open or data-open-close element

      onMenuOpen: null, // callback on mobile menu open
      onMenuClose: null, // callback on mobile menu close
      isMobile: null, // callback when is mobile menu
      isDesktop: null // callback when is desktop menu
    };

    const custom = {};

    for (const setting in defaults) {
      if (setting in settings) custom[setting] = settings[setting];
      else custom[setting] = defaults[setting];
    }

    return custom;
  }
}

// jQuery
let scope;

if (typeof window !== 'undefined') scope = window;
else if (typeof global !== 'undefined') scope = global;

if (scope && scope.jQuery) {
  const $ = scope.jQuery;

  $.fn.menuBreaker = function(options) {
    new MenuBreaker(this[0], options);
  };
}
