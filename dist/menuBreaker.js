/*!
* menuBreaker v0.5
* Copyright 2017 Jakub Biesiada
* MIT License
*/

(function($) {

  $.fn.menuBreaker = function(options) {

    // PLUGIN OPTIONS
    var options = $.extend({
      mobileMenu: '.mobile',
      openCloseButton: '#openMenu',
      navbarHeight: 70
    }, options);

    return this.each(function() {

      const $this = $(this),
      windowWidth = $(window).width(),
      mobileMenu = $(options.mobileMenu),
      openCloseButton = $(options.openCloseButton),
      checkSize = $this.show().height(),
      navbar = $(options.navbar),
      navbarHeight = options.navbarHeight;

      // DETECT MOBILE/DESKTOP MENU
      if(checkSize > navbarHeight) {
        openCloseButton.show();
        $this.fadeTo(0, 0).css('visibility', 'hidden');
        openCloseButton.on('click', function() {
          if(mobileMenu.hasClass('open')) {
            mobileMenu.removeClass('open');
          } else {
            mobileMenu.addClass('open');
          }
        });
      } else {
        if(mobileMenu.hasClass('open')) {
          mobileMenu.removeClass('open');
        }

        openCloseButton.hide();
        $this.fadeTo(0, 1).css('visibility', 'visible');
      }

      // FIRST LEVEL SUBMENU DETECT SIDE
      $this.find('> li > ul').each(function() {
        const subMenu = $(this),
        parentWidth = $(this).parent().width(),
        subMenuWidth = subMenu.width();
        if($(this).parent().offset().left + subMenuWidth > windowWidth) {
          $(this).css('margin-left', -subMenuWidth + parentWidth);
        } else {
          $(this).css('margin-left', 0);
        }

        // NEXT LEVEL SUBMENU DETECT SIDE
        subMenu.find('> li > ul').each(function() {
          const subSubMenuWidth = $(this).width();
          if($(this).parent().offset().left + subSubMenuWidth + subMenuWidth > windowWidth) {
            $(this).css('margin-left', -subSubMenuWidth);
          } else {
            $(this).css('margin-left', subMenuWidth);
          }
        });

      });

    });

  }

})(jQuery);
