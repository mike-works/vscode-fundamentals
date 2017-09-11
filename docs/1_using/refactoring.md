<img align='right' height=100 src='../../../public/vscode.png'>

# Using Visual Studio Code

* 📄 [Awesome Documents](./markdown.md)
* ⏩ [Emmet](./emmet.md)
* 🎛 **Refactoring**
* ✅ [Type-Checking](./type-checking.md)
* 🐞 [Debugging](./debugging.md)

---

## Navigating & Refactoring

### Go To

* ...file
* ...definition
* ...type definition
* ...symbol
  * ...in file
  * ...in workspace
* ...line (by number)

<br><br><br><br>

### Selection

* Select All <kbd>Cmd + A</kbd>
* Select Next Occurrence <kbd>Your KB Here</kbd>
* Select All Occurrences <kbd>Your KB Here</kbd>

<br><br>

### Multi-Cursor

* Add cursor @ position <kbd>Opt + Click</kbd>
* Box select <kbd>Opt + Shift + Click</kbd>
* Undo last cursor <kbd>Cmd + U</kbd>

<br><br>

### Line Manipulation

* Move Line Up <kbd>Opt + ⬆️</kbd>
* Move Line Down <kbd>Opt + ⬇️</kbd>
* Copy Line Below <kbd>Opt + Shift + ⬇️</kbd>


<br><br><br><br>

### Peek

* Opens up a split in editor
* Peek at type definition
* Find all References

<br><br><br><br>

### Rename

* Level 1: Find/Replace
* Level 2: <kbd>Cmd + D</kbd> for selection
* Level 3: "Extract into function" and <kbd>F2</kbd> for rename in ALL FILES

<br><br><br><br>

# Exercise 2: Refactoring
> * Make the following changes to [/client/data/listener-support.js](/client/data/listener-support.js)
>   * `register` and `unregister` should be changed to `registerListener` and `unregisterListener`, respectively
>   * `fire` should be passed an object of the structure `{data: object[]}`
>      * Ensure that all places in the code that call `fire` are updated to use this new structure
>      * No code that registers listeners should need to be altered as a consequence of this change

---

NEXT: ✅ [Type-Checking](./type-checking.md)