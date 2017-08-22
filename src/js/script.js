(function($) {
  $(window).on('load resize', function() {
    $('.desktop').menuBreaker();
    $('.mobile').height($(window).height() - $('nav').height());
  });
})(jQuery);
