module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ReactMustache',
    jsNext: true,
    umd: true
  }
}
