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

## Custom tasks in [tasks.json](../../.vscode/tasks.json)
* Define one or more things in the `tasks` array
* Basic Example of a `"type": "shell"` task
```js
{
  "version": "2.0.0",
  "tasks": [
    {
      "taskName": "echo",
      "type": "shell",
      "command": "echo Hello"
    }
  ]
}
```

<br><br>

* It's best to use the `"args"` property to ensure arguments are properly quoted

```js
{
  "taskName": "echo",
  "type": "shell",
  "command": "echo",
  "args": [
    "I said, 'Hello world'"
  ]
}
```
<br><br>

* We can add a working directory option as well, to ensure this runs at our project root folder

```js
{
  "taskName": "echo",
  "type": "shell",
  "command": "echo",
  "args": [
    "I said, 'Hello world'"
  ],
  "options": {
    "cwd": "${workspaceRoot}"
  }
}
```
<br><br>

* If the output of this command printed indications of problems in our code (at a particular file/line), there are a variety of parsers we could take advantage of

```js
  "taskName": "echo",
  "type": "shell",
  "command": "echo",
  "args": [
    "I said, 'Hello world'"
  ],
  "options": {
    "cwd": "${workspaceRoot}"
  }
```

