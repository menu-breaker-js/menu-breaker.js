# [menu-breaker.js](https://github.com/jb1905/menu-breaker.js)

[![NPM version](http://img.shields.io/npm/v/menu-breaker.svg?style=flat-square)](https://www.npmjs.com/package/menu-breaker)
[![NPM downloads](http://img.shields.io/npm/dm/menu-breaker.svg?style=flat-square)](https://www.npmjs.com/package/menu-breaker)

## About

### Demo
**[See plugin in action](https://jb1905.github.io/menu-breaker.js/)**

## How to Install
First, install the library in your project by npm:
```bash
$ npm install menu-breaker
```

Or Yarn:
```bash
$ yarn add menu-breaker
```

**You can also connect script via one of CDNs:**<br>
bundle.run: `https://bundle.run/menu-breaker`<br>
jsDelivr: `https://cdn.jsdelivr.net/npm/menu-breaker/`<br>
unpkg: `https://unpkg.com/menu-breaker/`

## Getting Started
**Connect libary with project using script tag in HTML:**
```html
<script src="/path/to/menu-breaker.js"></script>
```

**ES6 import:**
```js
import MenuBreaker from 'menu-breaker';
```

**Or CommonJS:**
```js
const MenuBreaker = require('menu-breaker');
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elem = document.querySelector('.desktop');
const menuBreaker = new MenuBreaker({
  element: elem,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});
```

**&bull; or jQuery e.g:**

*Connect jQuery in HTML*
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

*or include via command line and CommonJS*
```sh
$ npm install jquery
$ yarn add jquery
$ bower install jquery
```

```js
const jQuery = require('jquery');
```

*and call plugin on element*
```js
$('.desktop').menuBreaker({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});
```

## Options
### Settings
Name | Type | Default | Description | Available options
-|-|-|-|-
**navbar-height** | number | `70` | Desktop menu height | e.g: `50`, `86`, etc.
**open-class** | string | `open` | Name of the class added to the mobile menu after clicking `open` or `open-close` element | Name of class

### Callbacks
Name | Description | Available options
-|-|-
**onInit** | Callback on plugin init | `() => { /* code */ }`
**onMenuOpen** | Callback on mobile menu open | `() => { /* code */ }`
**onMenuClose** | Callback on mobile menu close | `() => { /* code */ }`
**isMobile** | Callback when is mobile menu | `() => { /* code */ }`
**isDesktop** | Callback when is desktop menu | `() => { /* code */ }`

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
