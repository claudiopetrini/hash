module.exports = {

  options: {
    preserveComments: false
  },

  'lib': {
    options: {
      sourceMap: true
    },
    files: {
      './dist/js/libs.min.js': ['./dist/js/libs.min.js']
    }
  }

};