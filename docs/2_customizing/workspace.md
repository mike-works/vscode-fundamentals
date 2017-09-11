<img align='right' height=100 src='../../public/vscode.png'>

## Customizing Visual Studio Code

* 🎨 **Workspace Customization**
* ☑️ [Tasks](./tasks.md)
* 🚀 [Launch Configuration](./launch-configuration.md)

---

## Why Customize Your Workspace?
* Developers spend LOTS of time in their editor 📝
* What can configuration do for you?
  * Speed up your workflow
  * Make it easier to read code
  * Spot errors
  * Reduce fatigue

<br><br><br><br>

### Levels of customization
*  💻 Workspace `./.vscode/settings.json`
* 🙍 User
  * Windows `%APPDATA%\Code\User\settings.json`
  * Mac `$HOME/Library/Application Support/Code/User/settings.json`
  * Linux `$HOME/.config/Code/User/settings.json`
* [Defaults](https://code.visualstudio.com/docs/getstarted/settings#_copy-of-default-settings) that ship with the editor
* Edit via <kbd>Cmd + ,</kbd>

<br><br><br><br>

### Themes
* 🎨 Color Theme
* 🗂 File Icon Theme
* ⚙️ Customize colors in settings
* 📚 [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense), a variety of code editing features will be helpful  here
```js
"workbench.colorCustomizations": {
  "contrastActiveBorder": "#0ff"
}
```
* 🖍 Syntax Highlighting Customizations
```js
"editor.tokenColorCustomizations": {
  "comments": "#aaa",
  "types": "#f66",
  "textMateRules": [{
    "scope": "variable.parameter",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#FF0000"
    }
  }],
  "functions": {
    "fontStyle": "italic"
  }
}
```

<br><br><br><br>

### Setting up a custom font
* Lots of FREE fonts specifically for developers
  * [Fira Code](https://github.com/tonsky/FiraCode)
  * [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)
  * [Terminus](http://terminus-font.sourceforge.net/)
  * [Hack](http://sourcefoundry.org/hack/)
  * [Input](http://input.fontbureau.com/)

```js
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true, // optional
"terminal.integrated.fontLigatures": true, // optional
```

### Keybindings
* Start with a Keymap from your preferred editor
  * Search for extensions: `@recommended:keymaps`
* Basic customizations in Keyboard Shortcuts <kbd>⌘ K</kbd> <kbd>⌘ S</kbd>
* Advanced customizations in `keybindings.json`
```js
{
  "key": "cmd+z",
  "command": "undo",
  "when": "editorTextFocus && !editorReadonly"
}
```

<br><br><br><br>

### Code Snippets
* Prefix is what you'll type (and then hit <kbd>Tab</kbd>)
* `${1:300}` means "first placeholder, which initially has a value of 300"
* When filling out this template, repeated use of a given placeholder is updated
```js
"For Loop": {
  "prefix": "for",
  "body": [
    "for (var ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
    "\tvar ${3:element} = ${2:array}[${1:index}];",
    "\t$0",
    "}"
  ],
  "description": "For Loop"
},
```

<br><br><br><br>

## Exercise 5: Tune Your Editor
> * Make some UI color customizations, that apply across all projects
>   * Panel: background `#033`
>   * Badge: foreground `#000`, background: `#ff0`
>   * Status bar while debugging: foreground `#000`, background: `#ff0`
>   * Currently active editor tab: foreground: `#0ff`
>   * Peek editor: background: `#311`
> * Design your own syntax highlighting scheme. If you need ideas: https://coolors.co/browser/best/1
> * Disable the minimap
> * Disable the indent guides
> * Create a code snippet for a placeholder image in HTML files
>    * Shortcut: `ph`
>    * Result: `<img src='http://placecorgi.com/{x}/{y}' />` where x and y default to 300

---

NEXT: ☑️ [Tasks](./tasks.md)