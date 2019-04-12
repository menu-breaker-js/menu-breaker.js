# menu-breaker.js Changelog

## 1.1.5 (2019-04-12)
#### Repository Changes
- removed unused devDependencies

#### Documentation
- updated README.md

#### Bug Fix
- fixed CDN undefined bug

## 1.1.5 beta 1 (2018-12-10)
#### New Feature
- added `onInit` callback

#### Internal
- renamed method `settings()` to `extendSettings()` to avoid conflict with variable `settings`

#### Repository Changes
- added Travis CI config
- added Prettier config
- added ESLint config

## 1.1.3 / 1.1.4 (2018-11-10)
#### Bug Fix
- fixed bug with `window` global variable in Node.js

## 1.1.1 / 1.1.2 (2018-09-06)
#### Documentation
- updated README.md

## 1.1.1 beta 1 (2018-09-02)
#### Dependencies
- updated Babel to `^7.0.0` stable
- updated babel-plugin-add-module-exports to `^0.3.3`
- updated Webpack to `^4.17.1`
- updated babel-loader to `^8.0.0` stable

#### Repository Changes
- removed map for production version

## 1.1.0 (2018-07-20)
#### Internal
- changed some global variables to const
- changed for loops to for-of
- code cleaned up

## 1.1.0 rc 1 (2018-07-18)
#### Repository Changes
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
