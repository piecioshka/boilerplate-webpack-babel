# boilerplate-webpack-babel

🍴 Starter with Webpack & Babel.js

## Features

* :white_check_mark: Webpack `v4.43.0`
* :white_check_mark: Babel (Core) `v7.10.2`
* :white_check_mark: Support syntax `ES2015+`
* :white_check_mark: Static directory `dist/`
* :white_check_mark: Development with `webpack-dev-server`
* :white_check_mark: Hosting with `http-server`
* :white_check_mark: Bundle file size analytics with `webpack-bundle-analyzer`
* :white_check_mark: Two build strategies: **dev** (with source maps) & **prod** (compress file)

## Getting started

You can start in two ways:

### Use Git

```bash
mkdir PROJECT_NAME
cd $_     # Note: "$_" is the last argument of the previous command
git init  # Note: branch "master" is created
git remote add boilerplate git@github.com:piecioshka/boilerplate-webpack-babel.git
git pull boilerplate master
git remote remove boilerplate
```

or ...

### Use Zip

1. Download package file:
    <https://github.com/piecioshka/boilerplate-webpack-babel/archive/master.zip>
2. Extract it to your project directory.

## How to build an application?

```bash
npm run build               # Development mode
npm run build:production    # Production mode
```

_Open `dist/` directory in browser by `npm start`._

## How to develop an application?

```bash
npm run dev     # Use webpack-dev-server
npm run watch   # Use webpack -w
```

_Open `dist/` directory in browser by `npm start`._

## Remove generated directory

```bash
npm run clear       # Remove only dist/
npm run clear:all   # Remove dist/ & node_modules/
```

## 🧪 Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```bash
npm run build:development -- --env.addons bundleanalyzer
npm run build:production -- --env.addons bundleanalyzer
```

## 🧩 Webpack Addons

When would you like a modified Webpack configuration, please add a new "addon"
to [webpack/addons/](webpack/addons/) directory.

Each addon will be merge via `webpack-merge`.

See examples:

* [webpack.bundleanalyzer.js](webpack/addons/webpack.bundleanalyzer.js)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017-2020
