const elem = document.querySelector('.desktop');
const menuBreaker = new MenuBreaker(elem, {
  isMobile: () => {
    if (document.body.classList.contains('desktop-device') > 0)
     document.body.classList.remove('desktop-device');

    if (document.querySelector('.mobile').classList.contains('open') > 0)
     document.querySelector('.overlay').style.visibility = 'visible';

    document.body.classList.add('mobile-device');
  },

  isDesktop: () => {
    if (document.body.classList.contains('mobile-device') > 0)
     document.body.classList.remove('mobile-device');

    if (document.querySelector('.overlay').style.opacity !== 0)
     document.querySelector('.overlay').style.visibility = 'hidden';

    document.body.classList.add('desktop-device');
  },

  onMenuOpen: () => {
    Object.assign(document.querySelector('.overlay').style, {
      'visibility': 'visible',
      'opacity': 0.6
    });
  },

  onMenuClose: () => {
    document.querySelector('.overlay').style.opacity = 0;

    setTimeout(() => {
      document.querySelector('.overlay').style.visibility = 'hidden';
    }, 300);
  }
});
