<img align='right' height=100 src='../../public/vscode.png'>

## Customizing Visual Studio Code

* 🎨 [Workspace Customization](./workspace.md)
* ☑️ [Tasks](./tasks.md)
* 🚀 **Launch Configuration**

---

## Launch Configuration
* [launch.json](../../.vscode/launch.json) is where launch configurations live
* We've dealt with launch & config in Debugging exercise 4
* Let's break it down 🕺:
```js
{
  "type": "node", // Use the "node" debugger
  "request": "attach", // "attach" instead of "launch"
  "name": "Start my app",
  "sourceMaps": true, // Use sourcemaps for breakpoints
  "port": 9229, // Connect on :9229
  "protocol": "inspector" // Use the V8 inspector protocol, not the old V8 debugger protocl
}
```
<br><br><br><br>

### `"type:" ?`
* 🤔 You will only need to worry about two types for now:
  * `"node"` for Node
  * `"chrome"` for Chrome
* 🔌 Others can be added via extensions

<br><br><br><br>

### `"runtimeExecutable:" ?`
* 🏃 This is the runtime that you pass your code into, to run
* Default value: determined by `"type"` of debugger
* Practical Example: `./node_modules/.bin/ts-node`
* Usually accompanied by something like `"program": "./index.js"`

<br><br><br><br>

### `"restart:" ?` (Node)
* 💻 Automatically re-executes the command when Node terminates
* In an `"attach"` mode, VS Code will start listening for connections again and preserve your breakpoints


<br><br><br><br>

### Console Options
* 👾 Where does the output go?
```js
"console": "integratedTerminal" // "Terminal"
  | "externalTerminal" // your own terminal (must config)
  | "integratedConsole" // "Debug Console"
```
* 🗄 How the console at the bottom of the editor is dealt with:
```js
"internalConsoleOptions": "neverOpen" // Don't open
  | "openOnFirstSessionStart" // Open at first
  | "openOnSessionStart" // Open on every "restart"
```

<br><br><br><br>

### Arguments & Environment
* 🗣 `"args": []` property takes care of quoting properly
* `"env": {}` object is for environment variables
* `"cwd": "./"` for working directory
  * Defaults to `"${workspaceRoot}"`

<br><br><br><br>

### Variables 
* `${workspaceRoot}` - the path of the folder opened in VS Code
* `${workspaceRootFolderName}` - the name of the folder opened in VS  Code without any slashes (/)
* `${file}` - the current opened file
* `${relativeFile}` - the current opened file relative to workspaceRoot
* `${fileBasename}` - the current opened file's basename
* `${fileBasenameNoExtension}` - the current opened file's basename with no file extension
* `${fileDirname}` - the current opened file's dirname
* `${fileExtname}` - the current opened file's extension
* `${cwd}` - the task runner's current working directory on startup
* `${lineNumber}` - the current selected line number in the active file



## Exercise 7: Analyze & Monitor
> ### Build two new launch configurations
>  * Show a bundle analysis visualization
>    * Ultimately this command needs to be run `ANALYIZE=true node ./server/index.js` (ANALYZE is an environment variable)
>    * We don't want to have to "attach" to this. Just let it run
>  * Launch our server, but use `nodemon` to have it restart as we save files
>    * You'll need to install the `nodemon` npm package globally (`npm install -g nodemon`)
>    * Ultimately the command you'll need to run is something like   `nodemon ./server/index.js`
>    * Running this should result in the debug console opening, but only when we "launch", not on every restart
>    * We shouldn't have to "attach" to this. It should be a one-click launch
