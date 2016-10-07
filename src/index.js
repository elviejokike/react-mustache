import React, { Component } from 'react';
const Mustache = require('mustache');

export default class ReactMustache extends React.Component {

  compileTemplate(template, data) {
    // lazy template compiling
    return Mustache.render(template,data);
  }

  render() {
    const { template, data, Component } = this.props;

    if (!template) return false

    const __html = this.compileTemplate(template, data);

    return (
      <Component dangerouslySetInnerHTML={{__html}}/>
    )
  }
}

ReactMustache.defaultProps = {
  data: {},
  Component: 'div'
}
