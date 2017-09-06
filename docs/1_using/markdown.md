
## Images

Normal markdown images
```md
![VS Code](../../public/vscode.png)
```
![VS Code](../../public/vscode.png)

The HTML [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag can be used as well. Many attributes will be respected in most markdown renderers (including GitHub)

```html
<img src="../../public/vscode.png" height=50 align=right vspace=20/>
<img src="../../public/vscode.png" height=100/>
```
<img src="../../public/vscode.png" height=50 align=right vspace=20/>
<img src="../../public/vscode.png" height=100/>

👉 Keep in mind that GitHub wraps images in 
```html
<p>
  <a href="./myimage.jpg">
    <!--image-->
  </a>
</p>
```

## Alignment

The `align` attribute can be used on a variety of HTML tags
```html
<p align=right>right ➡</p>
<p align=center>⬅ center ➡</p>
<p align=left>⬅ left</p>
```
> <p align=right>right ➡</p>
> <p align=center>⬅ center ➡</p>
> <p align=left>⬅ left</p>

```html
```
<p align=bottom>
<img src="../../public/vscode.png" height=50 align=top/>
<img src="../../public/vscode.png" height=50 align=right/>
<img src="../../public/vscode.png" height=100/>
</p>





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
