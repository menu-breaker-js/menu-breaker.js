/*!
* menuBreaker v1.0
* Copyright 2017 Jakub Biesiada
* MIT License
*/

(function (root, factory) {

  let pluginName = 'MenuBreaker';

  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if (typeof exports === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }

}(this, function(pluginName) {
  'use strict';

  class Plugin {

    constructor(elem, options) {

      let _this = this;

      let el = elem;

      const defaults = {};

      if (options !== undefined && options.mobileMenu !== undefined && typeof options.mobileMenu === 'string') {
        defaults.mobileMenu = options.mobileMenu;
      } else {
        defaults.mobileMenu = '.mobile';
      }

      if (options !== undefined && options.openCloseButton !== undefined && typeof options.openCloseButton === 'string') {
        defaults.openCloseButton = options.openCloseButton;
      } else {
        defaults.openCloseButton = '#openMenu';
      }

      if (options !== undefined && options.overlay !== undefined && typeof options.overlay === 'string') {
        defaults.overlay = options.overlay;
      } else {
        defaults.overlay = '.overlay';
      }

      if (options !== undefined && options.navbarHeight !== undefined && typeof options.navbarHeight === 'number') {
        defaults.navbarHeight = options.navbarHeight;
      } else {
        defaults.navbarHeight = 70;
      }

      _this.breakMenu(el, defaults);

      window.addEventListener('resize', function () {
        _this.breakMenu(el, defaults);
      });

    }

    breakMenu(elem, options) {

      let windowWidth = window.innerWidth;

      let checkSize = elem.offsetHeight;

      let mobileMenu = document.querySelector(options.mobileMenu);
      let openCloseButton = document.querySelector(options.openCloseButton);
      let overlay = document.querySelector(options.overlay);

      if (checkSize > options.navbarHeight) {

        var firstClick = false;

        openCloseButton.style.display = 'block';
        elem.style.opacity = 0;
        elem.style.visibility = 'hidden';

        if (mobileMenu.classList.contains('open')) {
          mobileMenu.style.display = 'block';
          overlay.style.display = 'block';
        }

        openCloseButton.addEventListener('click', function(index) {
          if (firstClick == false) {
            mobileMenu.classList.add('open');
            overlay.style.opacity = 1;
            overlay.style.display = 'block';
            firstClick = true;
          } else {
            mobileMenu.classList.remove('open');
            overlay.style.opacity = 0;
            firstClick = false;
          }
        });

        overlay.addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          overlay.style.opacity = 0;
          firstClick = false;
        });

      } else {

        if (mobileMenu.classList.contains('open')) {
          mobileMenu.style.display = 'none';
          overlay.style.display = 'none';
        }

        openCloseButton.style.display = 'none';
        elem.style.opacity = 1;
        elem.style.visibility = 'visible';

      }

      let listEl = elem.querySelectorAll(':not(li) > ul > li > ul');

      // FIRST LEVEL SUBMENU DETECT SIDE
      for (var a = 0; a < listEl.length; a++) {
        let parentWidth = listEl[a].parentNode.clientWidth;
        let subMenuWidth = listEl[a].clientWidth;
        if (listEl[a].parentNode.offsetLeft + subMenuWidth > windowWidth) {
          listEl[a].style.marginLeft = -subMenuWidth + parentWidth + 'px';
        } else {
          listEl[a].style.marginLeft = 0 + 'px';
        }

        // NEXT LEVEL SUBMENU DETECT SIDE
        let subListEl = listEl[a].querySelectorAll('li > ul');

        for (var b = 0; b < subListEl.length; b++) {
          let subSubMenuWidth = subListEl[b].offsetWidth;
          if (subListEl[b].parentNode.parentNode.parentNode.offsetLeft + subSubMenuWidth + subMenuWidth > windowWidth) {
            subListEl[b].style.marginLeft = -subSubMenuWidth + 'px';
          } else {
            subListEl[b].style.marginLeft = subSubMenuWidth + 'px';
          }
        }
      }
    }
  }

  // JQUERY PLUGIN CALL IF JQUERY LOADED
  if (window.jQuery) {

    let $ = window.jQuery;

    $.fn[pluginName] = function (options) {

      new Plugin(this[0], options);

    }

  }

  return Plugin;

}));
