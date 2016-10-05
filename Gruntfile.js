/* jslint node: true */
'use strict'

module.exports = function (grunt) {
    // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    }
  })

    // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit')

    // Default task.
  grunt.registerTask('test', ['nodeunit'])
  grunt.registerTask('default', ['test'])
}
