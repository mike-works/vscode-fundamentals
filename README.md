<p align='center'>
  <a href="https://mike.works" target='_blank'>
    <img height=40 src='https://assets.mike.works/img/login_logo-33a9e523d451fb0d902f73d5452d4a0b.png' />
  </a> 
</p>
<p align='center'>
  <a href="https://mike.works/course/vs-code-607be6c" target='_blank'>
    <img height=150 src='https://user-images.githubusercontent.com/558005/29501029-30794568-85da-11e7-9163-698aa235e74e.png' />
  </a>
</p>

<p align='center'>
  <a href="https://travis-ci.org/mike-works/vscode-fundamentals" title="Build Status">
    <img title="Build Status" src="https://travis-ci.org/mike-works/vscode-fundamentals.svg?branch=solution"/>
  </a>
  <a href="https://github.com/mike-works/vscode-fundamentals/releases" title="Version">
    <img title="Version" src="https://img.shields.io/github/tag/mike-works/vscode-fundamentals.svg" />
  </a>
</p>
<p align='center'>
This is the example project used for the <a title="Mike Works, Inc." href="https://mike.works">Mike Works</a> <a title="Visual Studio Code Fundamentals" href="https://mike.works/course/vs-code-607be6c">Visual Studio Code</a> course.
</p>

# Course outline and slides
 * [View course outline here](https://mike.works/course/vs-code-607be6c)
 * [View slides here](https://github.com/mike-works/vscode-fundamentals/tree/master/docs)

# About This Workshop

Visual Studio Code is a modern, lightweight and full-featured code editor, built from the ground up to suit the needs of web developers, and JavaScript developers in particular. In this course, we'll dive deep into using, customizing and extending it.


# What will we do?

We’ll begin by taking a look at how we can get this fantastic tool to do as much heavy lifting for us as possible. Recent improvements have perfected the ability to attach directly to browsers and Node.js for a truly excellent debugging experience.

If you spend all day looking at and manipulating code, you may as well have your settings exactly the way you want them. We’ll go deep into customizations that’ll affect embedded feedback from static code analysis, the look and feel of the editor and study a few of the best and most useful extensions.

Because VS Code is built with web technology, it’s easy for JavaScript and TypeScript developers to customize and extend. We’ll build two extensions of our own, unlocking extra productivity when working on common tasks.


#### By coding along with this two day (split into four half-days) workshop, you will:

* Get hands on experience with debugging in a variety of scenarios
* Learn how to use launch configurations to execute programs run shell scripts
* Unlock extra productivity by consolidating your terminal, debugger and editor into one tool
* Learn about deep customization options that make a **REAL** difference in how you get your work done
* Get a tour of plugins so powerful, after using them you’ll wonder how you ever lived without them!
* Build your own “code snippet” extension
And more…

# Setup

Please make sure you have the following software installed before arriving at the workshop or beginning the course.

## General Packages

Please make sure you have the following general software installed

| Required | Library | Version Range | Notes |
| ------------- | ------------- | ---| --- |
| ✔ | [Node.js](http://nodejs.org/)  | >= 8.0 | [nvm](https://github.com/creationix/nvm) is highly recommended for managing multiple node versions on a single machine |
| ✔ | [Visual Studio Code](https://code.visualstudio.com/)  | >= 1.14 | We'll be using several specific features of the VS Code editor. We can't force you to use it, but you'll miss out if you don't! |
| ✔ | [Yarn](https://yarnpkg.com/)  | >= 0.24 | An alternative to [npm](https://github.com/npm/npm) (if you are using nvm: `brew install yarn --without-node`, else use `brew install yarn`) |
| ✔ | [SQLite](https://sqlite.org/)  | >= 3 | An embedded relational database (hint: `brew install sqlite3`)|

## VS Code Extensions

Additionally, to take advantage of syntax hilighting, static code analysis and other editor features, you'll want to install the latest version of the following VS Code extensions

| Required | Extension | Notes |
| ------------- | ------------- | --- |
| ✔ | [sass-indented](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented) | Syntax highlighting and code completion support for [Sass](http://sass-lang.com) stylesheets |
| ✔ | [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Static code analysis for JavaScript and JSX files |
| ✔ | [jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) | Syntax highlighting for [Jest snapshot testing](https://facebook.github.io/jest/docs/snapshot-testing.html) and in-editor test pass/fail statuses |
| ✔ | [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) | Allows us to attach to Chrome for debugging |
|   | [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) | Better file and folder icons |
|   | [rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) | An in-editor REST client, so we can experiment with our API effortlessly |

## Global Node.js Packages

Make sure you have these npm packages installed globally. This can be done by running

```
npm install -g <package-name>
```

| Required | Library | Version Range |
| ------------- | ------------- | ---|
| ✔ | [babel-eslint](https://github.com/babel/babel-eslint)  | ^7.0.0 |
| ✔ | [eslint](https://github.com/eslint/eslint) | ^4.0.0 |
| ✔ | [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)  | ^4.0.0 |
| ✔ | [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)  | ^7.1.0 |

## Project setup

First, clone this project from Github

```
git clone https://github.com/mike-works/vscode-fundamentals vscode
cd vscode
```

Finally, while in the top-level folder of this project, download the and install this project's dependencies by running

```
yarn
```

To start the app, run

```
npm start
```

and you should see something on `http://localhost:3000`

### Troubleshooting

#### What if I have an older version of Node.js?

You may run into problems during the workshop! An easy way to deal with this is to...

* install [nvm](https://github.com/creationix/nvm) by running

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
```
or Wget:

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
```
* then restart your terminal
* then run
```sh
nvm install stable
nvm use stable
nvm alias default stable
```

#### What if I get an error like `Please install sqlite3 package manually`?

If you use OS X, it can be installed with [homebew](https://brew.sh/)

```sh
brew install sqlite3
```

Windows and Linux users, please install the appropriate [official release](https://sqlite.org/download.html).


## Files and Folders

This is a free-standing client/server system, including

* A database
* A REST API
* A single-page-app web client

````
 Project
 │
 ├─ client/            📱 React web client
 │  ├─ components/     📊 React components
 │  │  │
 │  │  ├─ my-thing/index.jsx        Component implementation
 │  │  ├─ my-thing/index.test.js    Component tests
 │  │  └─ my-thing/styles.scss      Component styles
 │  │
 │  ├─ routes/         🔝 Top-level React components, each corresponding to a "page" in our app
 │  ├─ sass/           💅 Global Sass stylesheets
 │  ├─ app.jsx         🎁 React "App" component  
 │  ├─ index.js        🎬 Web client entry point
 │  └─ index.ejs       📄 Template for web client index.html
 │
 ├─ db/                💾 SQLite databases
 ├─ dist/              📦 Web client development/production builds
 ├─ server/            🛒 Node.js API to support the web client
 ├─ webpack/           ⚙️ Build configuration
 └─ .vapid.json        🔐 VAPID private and public keys
````

## What are the pieces?

* [Webpack 3](https://webpack.js.org)
* [Babel](http://babeljs.io/) 7.x, setup with the [babel-preset-env](https://github.com/babel/babel/tree/7.0/packages/babel-preset-env) plugins, compiling to ES5 JavaScript
* [TSLint](https://palantir.github.io/tslint/) for linting TypeScript
* [sass-loader](https://github.com/webpack-contrib/sass-loader) for traditional management of [Sass](http://sass-lang.com/) styles
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) so compiled styles are external stylesheets instead of inline style blocks
* [React](http://facebook.github.io/react/) as a component library
* [MUI](https://www.muicss.com/) as a lightweight (6.6K) Material Design inspired UI kit
* [Jest](http://facebook.github.io/jest/) as a testing platform
* [SQLite3](https://www.sqlite.org/) - as a lightweight, embedded database (for API)
* [Koa](http://koajs.com/) - as a HTTP server for our API.

## License
While the general license for this project is the BSD 3-clause, the exercises
themselves are proprietary and are licensed on a per-individual basis, usually
as a result of purchasing a ticket to a public workshop, or being a participant
in a private training.

Here are some guidelines for things that are **OK** and **NOT OK**, based on our
understanding of how these licenses work:

### OK
* Using everything in this project other than the exercises (or accompanying tests) 
to build a project used for your own free or commercial training material
* Copying code from build scripts, configuration files, tests and development 
harnesses that are not part of the exercises specifically, for your own projects
* As an owner of an individual license, using code from tests, exercises, or
exercise solutions for your own non-training-related project.

### NOT OK (without express written consent)
* Using this project, or any subset of 
exercises contained within this project to run your own workshops
* Writing a book that uses the code for these exercises
* Recording a screencast that contains one or more of this project's exercises 


## Copyright

&copy; 2018 [Mike Works, Inc.](https://mike.works), All Rights Reserved

###### This material may not be used for workshops, training, or any other form of instructing or teaching developers, without express written consent

