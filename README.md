# boilerplate-webpack-babel

🍴 Starter with Webpack & Babel.js

## Features

- ✅ Webpack
- ✅ Babel (Core)
- ✅ Support syntax `ES2015+`
- ✅ Distribution directory `dist/`
- ✅ Directory with files as-is without changes `static/` (they will copied to `dist/static/`)
- ✅ Development with `webpack-dev-server`
- ✅ Hosting with `http-server`
- ✅ Bundle file size analytics with `webpack-bundle-analyzer`
- ✅ Two build strategies: **dev** (with source maps) & **prod** (compress file)

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
npm run build:development   # Development mode
npm run build:production    # Production mode
```

_TIP: Serve `dist/` directory by `npm start`_

## How to develop an application?

```bash
npm run dev     # Use webpack-dev-server
```

or

```bash
npm run watch   # Use webpack -w
```

_TIP: Serve `dist/` directory by `npm start`_

## Remove generated directory

```bash
npm run clear       # Remove only dist/
npm run clear:all   # Remove dist/ & node_modules/
```

## 🧩 Webpack Addons

When would you like a modified Webpack configuration, please add a new "addon"
to [webpack/addons/](webpack/addons/) directory.

- [webpack.bundleAnalyzer.js](webpack/addons/webpack.bundleAnalyzer.js) - Analysis of bundle file weight
- [webpack.copyStatic.js](webpack/addons/webpack.copyStatic.js) - Copy directory `static/` to `dist/static/` _(Enabled by default)_

### How to run addons?

```bash
# Single addon
npm run dev -- --env addons=singleAddon
npm run build -- --env addons=singleAddon
npm run watch -- --env addons=singleAddon
npm run build:development -- --env addons=singleAddon
npm run build:production -- --env addons=singleAddon

## Multiple addons
npm run dev -- --env addons=firstAddon,secondAddon
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2017
