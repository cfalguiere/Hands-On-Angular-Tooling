module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: {
        src: [
          'Gruntfile.js',
          'scripts/{,*/}*.js'
        ]
      }
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

  // Hello task
  grunt.registerTask('hello', 'Say Hello', function() {
    grunt.log.write('Hello World!').ok();
  });

};




