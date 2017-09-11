<img align='right' height=100 src='../../../public/vscode.png'>

# Using Visual Studio Code

* 📄 **Awesome Documents**
* ⏩ [Emmet](./emmet.md)
* 🎛 [Refactoring](./refactoring.md)
* ✅ [Type-Checking](./type-checking.md)
* 🐞 [Debugging](./debugging.md)

---

## Images

Normal markdown images
```md
![VS Code](../../public/vscode.png)
```
> ![VS Code](../../public/vscode.png)

The HTML [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag can be used as well. Many attributes will be respected in most markdown renderers (including GitHub)

```html
<img src="../../public/vscode.png" height=50 align=right vspace=20/>
<img src="../../public/vscode.png" height=100/>
```
> <img src="../../public/vscode.png" height=50 align=right vspace=20/>
> <img src="../../public/vscode.png" height=100/>

👉 Keep in mind that, in this case, GitHub wraps each image in 
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

If you wrap multiple inline elements in a `<p>` tag, it's possible to do some interesting things with vertical `align` attribute values

```html
<p>
  <img src="../../public/vscode.png" height=50 align=top />
  <img src="../../public/vscode.png" height=50 align=bottom />
  <img src="../../public/vscode.png" height=100/>
</p>
```
> <p>
>   <img src="../../public/vscode.png" height=50 align=top />
>   <img src="../../public/vscode.png" height=50 align=bottom />
>   <img src="../../public/vscode.png" height=100/>
> </p>

## Lists

### Unordered Lists

These can be nested to create a multi-level outline

```md
* one
* two
  * three
    * four
```
> * one
> * two
>   * three
>     * four

### Ordered Lists

These cannot be nested in most markdown rendering engines

```md
1. first
1. second
1. third
```
> 1. first
> 1. second
> 1. third

but, if you use HTML, you can fix this, and customize the list "type"

```html
<ol type='A' >
  <li> first </li>
  <li> second </li>
  <li> third</li>
  <ol type='a' >
    <li> fourth </li>
    <ol type='i' >
      <li> fifth </li>
    </ol>
  </ol>
</ol>
```
> <ol type='A' >
>   <li> first </li>
>   <li> second </li>
>   <li> third</li>
>   <ol type='a' >
>     <li> fourth </li>
>     <ol type='i' >
>       <li> fifth </li>
>     </ol>
>   </ol>
> </ol>

### [Description Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) (`<dl>`)

```html
<dl>
  <dt>Images</dt>
  <dd>.jpg, .gif, .png</dd>
  <dt>Styles</dt>
  <dd>.css</dd>
  <dt>Scripts</dt>
  <dd>.js</dd>
  <dt>Documents</dt>
  <dd>.html</dd>
</dl>
```

> <dl>
>   <dt>Images</dt>
>   <dd>.jpg, .gif, .png</dd>
>   <dt>Styles</dt>
>   <dd>.css</dd>
>   <dt>Scripts</dt>
>   <dd>.js</dd>
>   <dt>Documents</dt>
>   <dd>.html</dd>
> </dl>

## [Details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)/Summary

````html
<details>
  <summary>Click me for something absolutely amazing</summary>

```ts
  let Hello : string = 'World';
```
</details>
````


> <details>
>  <summary>Click me for something absolutely amazing</summary>
>
>```ts
>  let Hello : string = 'World';
>```
> </details>


| Item      | Price | Quantity |
|-----------|-------|----------|
| 🍇 Grapes | $2.99 | 3        |
| 🍐 Pears  | $4.15 | 1        |
| 🍋 Lemons | $0.99 | 2        |

> ```md
> | Item      | Price | Qty |
> |-----------|-------|-----|
> | 🍇 Grapes | $2.99 | 3   |
> | 🍐 Pears  | $4.15 | 1   |
> | 🍋 Lemons | $0.99 | 2   |
> ```

---
#### Thanks to folks who posted tips I didn't know about!
* [@mxstbr](https://github.com/mxstbr)  for [hanging indentation](https://github.com/mxstbr/github-markdown-tricks#hanging-indendation)

---
NEXT: ⏩ [Emmet](./emmet.md)