## Adding a new page

1. Prepare the pages by copying the text to e.g. notepad and save as [name].md, where name will be the name of the page
2. At the top of this page, next to the '<> Code' button, press the button saying 'Add new files' (it might just be a plus)
3. Press 'upload files' and upload the pages
4. Go to `assets/js/pageChecker.js` and add each [name] to the validPages list. For example, if we want to add the pages `planet.md` and `ship-42.md` to the site, we change

```javascript
const validPages = [
    "sample",
];
```

into

```javascript
const validPages = [
    "sample",
    "planet",
    "ship-42",
];
```

Make sure the filenames match the names in the list!