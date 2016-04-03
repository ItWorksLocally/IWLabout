module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'assets/js/*.js']
    },
    sass : {
      build: {
        options: {
          outputStyle: 'compressed',
          sourceMap  : false
        },
        files  : [
          {
            expand: true,
            cwd   : 'assets/scss',
            src   : ['*.scss'],
            dest  : 'assets/css',
            ext   : '.css'
          }
        ]
      }
    },
    watch : {
      css: {
        files  : 'public/asset/scss/**/*.scss',
        tasks  : ['sass'],
        options: {
          livereload: true
        }
      },
      js : {
        files: ['assets/js/**'],
        tasks: ['requirejs','uglify']
      }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'assets/js/main.min.js': 'assets/js/main.js'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'assets/css/style.min.css': 'assets/css/style.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
