# menu-breaker.js Changelog

### [CHANGELOG.md for v1 here](https://github.com/JB1905/menu-breaker.js/blob/v1/CHANGELOG.md)

## 2.0.1 (2019-03-21)
#### Bug Fix
- fixed CDN undefined bug

## 2.0.0 beta 1 / 2.0.0 (2019-02-23)
#### Breaking Changes
- splitted `options` prop into `settings` and `callbacks`

#### New Feature
- added `onInit` callback

#### Internal
- renamed method `settings()` to `extendSettings()` to avoid conflict with variable `settings`

#### Repository Changes
- updated npm scripts
- cleaned up Webpack config
- removed unused dependencies
- added Travis CI config
- added Prettier config
- added ESLint config

#### Bug Fix
- fixed `window is not defined`
- fixed `global` error (CDN)
