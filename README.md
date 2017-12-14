# menu-breaker.js

JavaScript & jQuery plugin to switch between mobile and desktop menu and change submenus side on browser window resize.

## How to use?

Place the following code in the .js file and customize the prameters:

**USE JAVASCRIPT:**

```
var elem = document.querySelector('.desktop');
var menuBreaker = new MenuBreaker(elem);
```

**OR JQUERY:**

```
$('.desktop').MenuBreaker();
```

## Options
|Name|Type|Default|Description|
|-----|-----|----|
|'navbar-height'|number|70|Desktop menu height|
|show|boolean|true|Show (true) or hide (false) mobile menu overlay|
|opacity|number|0.5|Opacity of mobile menu overlay|
|cursor|string|'pointer'|Cursor style on hover on mobile menu overlay|
|transition|string|'all 300ms ease'|Transition of mobile menu overlay during opening and closing|
|'background-color'|string|'#000'|Background color of mobile menu overlay|

## Questions & Answers
Does the plugin require jQuery?   
**NO**

## License

This project is licensed under the MIT License
