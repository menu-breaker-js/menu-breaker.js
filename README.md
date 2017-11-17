# menuBreaker

Break menu on resize (desktop to mobile)

## How to use?

Place the following code in the .js file and customize the prameters:

**USE JAVASCRIPT:**

```
var elem = document.querySelectorAll('.desktop');
var menuBreaker = new MenuBreaker(elem);
```

**OR JQUERY:**

```
$('.desktop').MenuBreaker();
```

## Options
|Name|Default|Type|
|-----|-----|----|
|mobileMenu|'.mobile'|String|
|openCloseButton|'#openMenu'|String|
|overlay|'.overlay'|String|
|navbarHeight|70|Number|

## Questions & Answers
Does the plugin require jQuery?   
**NO**

## License

This project is licensed under the MIT License
