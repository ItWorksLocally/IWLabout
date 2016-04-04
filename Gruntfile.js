module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'assets/js/*','!assets/js/*.min.js','!assets/js/dist.js','!assets/js/libs']
    },
    sass              : {
      dist: {
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
        files  : ['asset/scss/**'],
        tasks  : ['sass','cssmin'],
        options: {
          livereload: true
        }
      },
      js : {
        files: ['assets/js/**'],
        tasks: ['jshint','requirejs']
      }
    },
    requirejs         : {
      compile: {
        options: {
          mainConfigFile: "assets/js/main.js",
          name: "main",
          out: "assets/js/dist.js",
          preserveLicenseComments: false,
        }
      }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'assets/js/dist.min.js': 'assets/js/dist.js'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('dev',['sass','cssmin','jshint','requirejs:compile','uglify',]);
  grunt.registerTask('default', ['jshint']);
};
