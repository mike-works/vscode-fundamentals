<img align='right' height=100 src='../../public/vscode.jpg'>

# Using Visual Studio Code: Tasks

* [Debugging](./debugging.md)
* [Launch Configurations](./launch-configuration.md)
* [Awesome Documents](./markdown.md)
* [Type Checking](./type-checking.md)
* **Tasks**


## About Tasks

* Run build steps, linting, testing, deploying scripts from within VS Code
* Anything in a `Gruntfile`, `Gulpfile`, [`package.json`](../../package.json) ("scripts") should be auto-detected
* Where's the best place for these to live?
  * Main stuff: package.json or [Scripty](https://github.com/testdouble/scripty)
  * VS Code specifics layered on top
* Ability to parse "problems" from output, linking to file and line number

<br><br><br><br>

## [tasks.json](../../.vscode/tasks.json)
* Similar 