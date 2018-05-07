# Curio

Web automation and tooling experiments based on the usecase of creating a web interface for the Curio framework.

The project is set up to take static `HTML` files from the `src/` directory and output a minified static `HTML` files into the `bundle/` directory.

Livereloading can be used during development to speed up the workflow.

## Setup

Run the following from the root directory of this project to get set up:

```sh
# install node package manager client and command line interface
brew install npm

# install javascript dependencies
npm install
```

## Run

Start a browserync server with live reloading while watching for source changes.
```sh
npm run serve
```

## Demo

1. Start a browserync server with live reloading while watching for source changes.
```sh
npm run serve
```
2. Open `localhost:3000` in your browser of choice.
3. Edit any HTML files in the `src/` directory and see `localhost:3000` livereload with minified HTML.
