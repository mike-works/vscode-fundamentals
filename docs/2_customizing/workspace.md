<img align='right' height=100 src='../../public/vscode.jpg'>

# Using Visual Studio Code: Tasks

* [Debugging](./debugging.md)
* [Launch Configurations](./launch-configuration.md)
* [Awesome Documents](./markdown.md)
* [Type Checking](./type-checking.md)
* **Tasks**


## Why Customize Your Workspace?
* Developers spend LOTS of time in thier editor
* What can configuration do for you?
  * Speed up your workflow
  * Make it easier to read code
  * Spot errors
  * Reduce fatigue

<br><br><br><br>

### Levels of customization
* Workspace `./.vscode/settings.json`
* User
  * Windows `%APPDATA%\Code\User\settings.json`
  * Mac `$HOME/Library/Application Support/Code/User/settings.json`
  * Linux `$HOME/.config/Code/User/settings.json`
* [Defaults](https://code.visualstudio.com/docs/getstarted/settings#_copy-of-default-settings) that ship with the editor
* Edit via <kbd>Cmd + ,</kbd>

<br><br><br><br>

### Themes
* Color Theme
* File Icon Theme
* Customize colors in settings
* Intellisense will help a lot here
```js
"workbench.colorCustomizations": {
} 
```
* Syntax Hilighting Customizations
```js
"editor.tokenColorCustomizations": {
    "comments": "#aaa"
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

<br><br><br><br>

## Exercise: Tune Your Editor
> * Make some UI color customizations, that apply across all projects
>   * Panel: background `#033`
>   * Badge: foreground `#000`, background: `#ff0`
>   * Status bar while debugging: foreground `#000`, background: `#ff0`
>   * Currently active editor tab: foreground: `#0ff`
>   * Peek editor: background: `#311`
> * Design your own syntax highlighting scheme. If you need ideas: https://coolors.co/browser/best/1
> * Disable the minimap
> * Disable the indent guides
