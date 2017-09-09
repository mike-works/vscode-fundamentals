<img align='right' height=100 src='../../public/vscode.jpg'>

# Using Visual Studio Code: Type Checking

* [Debugging](./debugging.md)
* [Launch Configurations](./launch-configuration.md)
* [Awesome Documents](./markdown.md)
* **Type Checking**

---

## Navigating & Refactoring

### Go To

* ...implementation
* ...definition
* ...symbol
  * ...in file
  * ...in workspace
* ...line (by number)

<br><br><br><br>

### Selection

* Select All `Cmd + A`
* Select Next Occurrence `Cmd + D`
* Select All Occurrences `Cmd + Shift + L`

### Multi-Cursor

* Add cursor @ position `Opt + Click`
* Box select  `Opt + Shift + Click`
* Undo last cursor `Cmd + U`

### Line Manipulation

* Copy Line Below `Opt + Shift + ⬇️`
* Move Line Up `Opt + ⬆️`
* Move Line Down `Opt + ⬇️`

<br><br><br><br>

### Peek

* Opens up a split in editor
* Peek at type definition
* Find all References

<br><br><br><br>

### Rename

* Level 1: Find/Replace
* Level 2: `Cmd + D` for selection
* Level 3: `F2` for rename in ALL FILES

<br><br><br><br>

# Exercise: Refactoring
> * Make the following changes to [/client/data/listener-support.js](/client/data/listener-support.js)
>   * `register` and `unregister` should be changed to `registerListener` and `unregisterListener`, respectively
>   * `fire` should be passed an object of the structure `{data: object[]}`
>      * Define a new type for this structure, using `@typedef`
>      * Ensure that all places in the code that call `fire` are updated to use this new structure
>      * No code that registers listeners should need to be altered as a consequence of this change
