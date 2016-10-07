import React, { Component } from 'react';
const Mustache = require('mustache');

class ReactMustache extends React.Component {

  compileTemplate(template, data) {
    // lazy template compiling
    return Mustache.render(template,data);
  }

  render() {
    const { template, data } = this.props;

    if (!template) return false

    const __html = this.compileTemplate(template, data);

    return (
      <Component dangerouslySetInnerHTML={{__html}}/>
    )
  }
}

ReactMustache.defaultProps = {
  data: {},
  Component: 'div',
}


export default ReactMustache;
