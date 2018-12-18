<div align="center">
<h1> Next.js 🧳</h1>
A starting point for my Nextjs Project with default config and components 🧳
</div>
<hr />

## Contents

- [Installation](#Installation)
- [Get Started](#GetStarted)

## Quick Overview

```sh
degit https://github.com/casprine/backpack\#nextjs my-app
cd my-app
yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `yarn build` or `npm run build`.

## Get Started

This project scaffold is created manaully with inspiration from <a href="https://github.com/segmentio/create-next-app">creat-next-app.</a> Project is clonend with <a href="https://github.com/Rich-Harris/degit">degit.</a> Make sure you have it installed globally.

```sh
degit https://github.com/casprine/backpack\#nextjs my-app
```

### What's in my-app

degit will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure.

```
.
├── LICENSE
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _document.js
│   └── index.js
├── server.js
├── static
│   ├── fonts
│   │   └── ciruclar.ttf
│   └── sass
│       └── index.scss
├── todo.md
├── utils
│   ├── helpers.js
│   ├── index.js
│   └── localStorage.js
└── yarn.lock
```

Once the cloning is complete, enter the directory and install dependencies.

```sh
cd my-app
yarn
```

or

```sh
cd my-app
npm install
```

Once the installation is finished, you can run some commands in your project:

### `npm run start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Starts the application in production mode.
The application should be compiled with `npm run build` first.

Now you're ready to code & deploy your app!
