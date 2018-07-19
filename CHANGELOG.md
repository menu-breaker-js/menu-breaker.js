# menu-breaker.js Changelog

## 1.1.0 (2018-07-20)
#### Internal
- changed some global variables to const
- changed for loops to for-of
- code cleaned up

## 1.1.0 rc 1 (2018-07-18)
#### Repository changes
- switched from Gulp to Webpack
- updated Babel to v7
- only 2 dist version
- changed main file from menu-breaker.js to menu-breaker.min.js
- moved demo to gh-pages branch

## 1.0.1 (2018-07-05)
#### Documentation
- updated README.md and CHANGELOG.md

#### More
- updated devDependencies
- small internal improvements

## 1.0.0 beta 2 (2018-04-14) / 1.0.0 (2018-04-30)
#### New Feature
- added `data-open-close` (the same input to close and open mobile menu)
- added callbacks `onMenuOpen`, `onMenuClose`, `isMobile`, `isDesktop`
- added `open-class` option

#### Change
- renamed jQuery plugin from MenuBreaker() to menuBreaker()
- removed overlay

#### Bug Fix
- fixed bug with mobile menu after resize (now menu reacts every time on `data-open` and `data-close` click)
- fixed bug with jQuery and Node.js compatibility

## 1.0.0 beta 1 (2017-11-18)
#### Change
- rewritten with ES6
- jQuery is not required
- 2 versions: minified and standard
