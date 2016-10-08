# react-mustache

[![npm package][npm-badge]][npm]
[npm-badge]: https://img.shields.io/npm/v/react-mustache.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-mustache

[![Build Status](https://travis-ci.org/elviejokike/react-mustache.svg?branch=master)](https://travis-ci.org/elviejokike/react-mustache)

React wrapper-component for mustache. Can be used to render templates inside a react component.

## Usage

```
import ReactMustache from 'react-mustache'
```

```
<ReactMustache template="Welcome {{title}}" data={{title: 'Mr. Gregory'}} />
```
