
## Images

Normal markdown images
```md
![VS Code](../../public/vscode.png)
```
![VS Code](../../public/vscode.png)

The HTML [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag can be used as well. Many attributes will be respected in most markdown renderers (including GitHub)

```html
<img src="../../public/vscode.png" height=100 align=top hspace=30/>
<img src="../../public/vscode.png" height=100 align=right vspace=20/>
```
<img src="../../public/vscode.png" height=100 align=top hspace=30/>
<img src="../../public/vscode.png" height=100 align=right vspace=20/>

## Alignment

> <p align=right>right ➡</p>
> <p align=center>⬅ center ➡</p>
> <p align=left>⬅ left</p>

## [Description Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) (`<dl>`)

> <dl>
>  <dt>This is a list</dt>
>  <dd>With hanging indentation</dd>
> </dl>

## [Details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)/Summary

> <details>
>  <summary>Click me for something absolutely amazing</summary>
>
>```ts
>  let Hello : string = 'World';
>```
> </details>


---
#### Thanks to folks who posted tips I didn't know about!
* [@mxstbr](https://github.com/mxstbr)  for [hanging indentation](https://github.com/mxstbr/github-markdown-tricks#hanging-indendation)