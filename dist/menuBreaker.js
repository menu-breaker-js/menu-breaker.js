/*!
* menuBreaker v0.6.1
* Copyright 2017 Jakub Biesiada
* MIT License
*/

(function ($) {

  $.fn.menuBreaker = function (options) {

    // PLUGIN OPTIONS
    var options = $.extend({
      mobileMenu: '.mobile',
      openCloseButton: '#openMenu',
      overlay: '.overlay',
      navbarHeight: 70,
    }, options);

    var $this = $(this);

    return this.each(function () {

      function update() {

        var windowWidth = $(window).width();

        const $mobileMenu = $(options.mobileMenu);
        const $openCloseButton = $(options.openCloseButton);
        const $checkSize = $this.height();
        const $overlay = $(options.overlay);
        const $navbar = $(options.navbar);
        const $navbarHeight = options.navbarHeight;

        // DETECT MOBILE/DESKTOP MENU
        if ($checkSize > $navbarHeight) {

          var firstClick = false;

          $openCloseButton.show();
          $this.fadeTo(0, 0).css('visibility', 'hidden');

          if ($mobileMenu.hasClass('open')) {
            $mobileMenu.show();
            $overlay.show();
          }

          $openCloseButton.on('click', function (index) {
            if (firstClick == false) {
              $mobileMenu.addClass('open');
              $overlay.fadeIn(300);
              firstClick = true;
            } else {
              $mobileMenu.removeClass('open');
              $overlay.fadeOut(300);
              firstClick = false;
            }
          });

          $overlay.on('click', function () {
            $mobileMenu.removeClass('open');
            $overlay.fadeOut(300);
            firstClick = false;
          });

        } else {
          if ($mobileMenu.hasClass('open')) {
            $mobileMenu.hide();
            $overlay.hide();
          }

          $openCloseButton.hide();
          $this.fadeTo(0, 1).css('visibility', 'visible');
        }

        // FIRST LEVEL SUBMENU DETECT SIDE
        $this.find('> li > ul').each(function () {
          parentWidth = $(this).parent().width(),
          subMenuWidth = $(this).width();
          if ($(this).parent().offset().left + subMenuWidth > windowWidth) {
            $(this).css('margin-left', -subMenuWidth + parentWidth);
          } else {
            $(this).css('margin-left', 0);
          }

          // NEXT LEVEL SUBMENU DETECT SIDE
          $(this).find('> li > ul').each(function () {
            const subSubMenuWidth = $(this).width();
            if ($(this).parent().offset().left + subSubMenuWidth + subMenuWidth > windowWidth) {
              $(this).css('margin-left', -subSubMenuWidth);
            } else {
              $(this).css('margin-left', subMenuWidth);
            }
          });

        });

      }

      update();

      $(window).resize(function () {
        update();
      });

    });

  };

})(jQuery);
