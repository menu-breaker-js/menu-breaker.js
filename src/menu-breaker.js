/*!
* menu-breaker.js v1.0
* Copyright 2017 Jakub Biesiada
* MIT License
*/

class MenuBreaker {
  constructor(element, settings = {}) {
    this.element = element;

    this.settings = this.settings(settings);

    this.firstClick = false;

    this.overlay();
    this.changeMenu();
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.changeMenu();
  }

  overlay() {
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

  subLevels() {
    this.listEl = this.element.querySelectorAll(':not(li) > ul > li > ul');

    // FIRST LEVEL SUBMENU DETECT SIDE
    for (var i = 0; i < this.listEl.length; i++) {
      let parentWidth = this.listEl[i].parentNode.clientWidth;
      let subMenuWidth = this.listEl[i].clientWidth;
      if (this.listEl[i].parentNode.offsetLeft + subMenuWidth > this.windowWidth) {
        this.listEl[i].style.marginLeft = `${-subMenuWidth + parentWidth}px`;
      } else {
        this.listEl[i].style.marginLeft = '0px';
      }

      // NEXT LEVEL SUBMENU DETECT SIDE
      this.subListEl = this.listEl[i].querySelectorAll('li > ul');

      for (var j = 0; j < this.subListEl.length; j++) {
        let subSubMenuWidth = this.subListEl[j].offsetWidth;
        if (this.subListEl[j].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > this.windowWidth) {
          this.subListEl[j].style.marginLeft = `${-subSubMenuWidth}px`;
        } else {
          this.subListEl[j].style.marginLeft = `${subSubMenuWidth}px`;
        }
      }
    }
  }

  menuButton() {
    this.openButton.addEventListener('click', () => {
      if (this.firstClick === false) {
        this.mobileMenu.classList.add('open');
        this.overlay.style.opacity = this.settings.overlay.opacity;
        this.overlay.style.display = 'block';
        this.firstClick = true;
      } else {
        this.mobileMenu.classList.remove('open');
        this.overlay.style.opacity = 0;
        this.firstClick = false;
      }
    });
  }

  overlayClose() {
    this.overlay.addEventListener('click', () => {
      this.mobileMenu.classList.remove('open');
      this.overlay.style.opacity = 0;
      this.firstClick = false;
    });
  }

  mobile() {
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

  desktop() {
    if (this.mobileMenu.classList.contains('open')) {
      this.mobileMenu.style.display = 'none';
      this.overlay.style.display = 'none';
    }

    this.openButton.style.display = 'none';
    this.element.style.opacity = 1;
    this.element.style.visibility = 'visible';

    this.subLevels();
  }

  changeMenu() {
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

  settings(settings) {
    let defaults = {
      overlay: {
        show: true,
        opacity: 0.5,
        cursor: 'pointer',
        transition: 'all 300ms ease',
        'background-color': '#000'
      },
      'navbar-height': 70
    }

    let custom = {};

    for (var setting in defaults) {
      if (setting in settings) {
        custom[setting] = settings[setting];
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
