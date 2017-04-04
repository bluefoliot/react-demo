'use strict';
var rewrite = require('connect-modrewrite');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env: {
            dev: {
                NODE_ENV: 'development'
            },

            prod: {
                NODE_ENV: 'production'
            }
        },

        browserify: {
            options: {
              transform: [["babelify", {"presets": ["es2015", "react"]}]]
            },

            dev:{
                options:{
                    watch: true,
                    livereload: true
                },
                files: {
                  "js/bundle.js": ["app/*.js"]
                }
            },
            prod: {
                files: {
                  "js/bundle.js": ["app/*.js"]
                }
            }


        },

        bower_concat: {
            all:{
                dest:{
                    css: 'css/styles.css'
                }
            }
        },

        uglify: {
            options: {
                sourceMap: false,
                mangle: true,
                compress: true
            },
            prod: {
                files: {
                    'js/bundle.js': ['js/bundle.js']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 8003,
                    base: '',
                    // http://danburzo.ro/grunt/chapters/server/
                    middleware: function(connect, options, middlewares) {
                        // 1. mod-rewrite behavior
                        var rules = [
                            '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html'
                        ];
                        middlewares.unshift(rewrite(rules));
                        return middlewares;
                      }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['env:dev', 'connect', 'bower_concat', 'browserify:dev', 'watch']);
    grunt.registerTask('prod', ['env:prod', 'connect', 'bower_concat', 'browserify:prod', 'uglify:prod']);

};
