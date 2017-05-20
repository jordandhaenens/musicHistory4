module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['./*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    // sass: { //setup sass compilation
    //   dist: {
    //     files: {
    //       '../css/main.css': '../scss/main.scss'//modify to reflect actual filepath
    //     }
    //   }
    // },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['./*.js'],//modify to reflect actual filepath
        tasks: ['jshint']
      }
      // sass: {
      //   files: ['../scss/**/*.scss'],//modify to reflect actual filepath
      //   tasks: ['sass']
      // }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', /*'sass',*/ 'watch']);
};