# menuBreaker

Break menu on resize (desktop to mobile)

## How to use?

Place the following code in the .js file and customize the prameters:

```
$(document).ready(function() {
  $('.desktop' /* Your desktop menu id or class */).menuBreaker({
    mobileMenu: '.mobile', // Your mobile menu id or class
    openCloseButton: '#openMenu', // Mobile menu open/close button
    navbarHeight: 70 // Navbar height
  });
});
```

## License

This project is licensed under the MIT License
