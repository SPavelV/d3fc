# d3fc [![Build Status](https://travis-ci.org/d3fc/d3fc.svg?branch=master)](https://travis-ci.org/d3fc/d3fc) [![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html) [![npm version](https://badge.fury.io/js/d3fc.svg)](https://badge.fury.io/js/d3fc)

A collection of components that make it easy to build interactive charts with D3.

## Migration to D3 version 4

This project has recently upgraded to D3 version 4. Due to this there are a number of breaking changes. For more details, see the [release notes for version 12.0.0](https://github.com/d3fc/d3fc/releases/tag/v12.0.0).

## Installation and Documentation

For details of installation and general usage, visit the [d3fc project webpage](http://d3fc.io/).

## Developing

[yarn](https://yarnpkg.com/), a package manager for [Node.js](https://nodejs.org/), is used to manage the project's dependencies. The project is built and tested via `package.json` scripts, with all commits following the conventions from [semantic release](https://github.com/semantic-release/semantic-release) (which we will re-adopt once [semantic release supports lerna](https://github.com/lerna/lerna/blob/v2.9.0/README.md#independent-mode---independent)).

This project acts as a bundler for the individual d3fc packages, which can be found in the `packages` directory. If you want to contribute features or fixes to d3fc you should locate the correct package and make your changes there.

## License

These components are licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Sponsors

Project supported by [Scott Logic](http://www.scottlogic.com).
