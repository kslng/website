header fix for mdbook in toc.js:

```js
if (!current_page.endsWith(".html")) {
	current_page += ".html";
}
```
