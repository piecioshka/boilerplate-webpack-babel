# boilerplate-babel-webpack

[![npm version](https://badge.fury.io/js/boilerplate-babel-webpack.svg)](https://badge.fury.io/js/boilerplate-babel-webpack)
[![downloads count](https://img.shields.io/npm/dt/boilerplate-babel-webpack.svg)](https://www.npmjs.com/~piecioshka)

:fork_and_knife: Starter with Babel.js and Webpack

## Features

* :white_check_mark: Webpack `v4.42.1`
* :white_check_mark: Babel (Core) `v7.9.0`
* :white_check_mark: Support syntax `ES2015+`
* :white_check_mark: Static directory `dist/`
* :white_check_mark: Development with `webpack-dev-server`
* :white_check_mark: Hosting with `http-server`
* :white_check_mark: Analysis of bundle file weight (`source-map-explorer`)
* :white_check_mark: Two build strategies: **dev** (with source maps) & **prod** (compress file)

## Getting started

You can start in two ways:

### Use Git

```bash
mkdir PROJECT_NAME
cd $_     # Note: "$_" is last argument of previous command
git init  # Note: branch "master" is created
git remote add boilerplate git@github.com:piecioshka/boilerplate-babel-webpack.git
git pull boilerplate master
git remote remove boilerplate
```

or ...

### Use Zip

1. Download package file:<br/>
    <https://github.com/piecioshka/boilerplate-babel-webpack/archive/master.zip>
2. Extract it to your project directory.

## How to build an application?

* development

    ```bash
    npm run build
    ```

* production

    ```bash
    npm run build:production
    ```

Open `dist/` directory in browser by `npm start`.

## How to develop an application?

```bash
npm run dev     # use webpack-dev-server
npm run watch   # use webpack -w
```

Open `dist/` directory in browser by `npm start`.

## Remove generated directory

If you would like to remove `dist/` directory:

```bash
npm run clear
```

If you would like to remove `node_modules/` and remove `dist/`

```bash
npm run clear:all
```

## Count LOC (Lines of Code)

If you would like to know how many lines of code you write:

```bash
npm run count
```

## Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```bash
npm run build
npm run audit
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
