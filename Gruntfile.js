﻿//grunt tasks for playground

module.exports = function (grunt) {
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //web server
        connect: {
            options: {
                port: 9090,
                hostname: '*',
                directory: null,
                keepalive: false,
                livereload: true,
                base: ['.', './playground/src']

            },
            devServer: {
                options: {
                    open: "http://localhost:9090/index.html",
                    //middleware: function (connect, options) {
                    //    return [
                    //        modRewrite(['^[^\\.]*$ /index.html [L]']),
                    //        //serveStatic('.tmp'),
                    //        serveStatic('./src')
                    //    ];
                    //}
                }
            },
            buildServer: {

            }

        },

        //watch
        watch: {
            options: {
                livereload: 35729
            },
            all: [
				'palyground/src/**'
            ],
            //gruntfile: {
            //    files: 'Gruntfile.js',
            //    tasks: ['jshint:gruntfile']
            //},
            //src: {
            //    files: 'src/**/*.js',
            //    tasks: ['jshint:src', 'jasmine']
            //},
            //test: {
            //    files: 'test/**/*.js',
            //    tasks: ['jshint:test', 'jasmine']
            //}

        },  //watch end

        //jshint: {
        //    options: {
        //        jshintrc: '.jshintrc',
        //        browser: true,            // browser environment
        //        devel: true,
        //        ignores: ['src/vendor/**']
        //    },
        //    gruntfile: 'Gruntfile.js',
        //    src: 'src/**/*.js',
        //    test: 'test/**/*.js'
        //},

        jasmine: {
            options: {
                keepRunner: true,
                specs: [
                    'playground/test/**/*_spec.js'
                ],
                host: 'http://localhost:9090',
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfigFile: 'playground/src/main.js',
                    requireConfig: {
                        baseUrl: './playground/src',
                        paths: {
                            
                        },
                        shim: {
                            
                        }
                    }
                }
            },
            app: {
            }
        },//jasmine end


        requirejs: {
            compile: {
                options: {
                    dir: 'dist/godkingweb',
                    modules: [{
                        name: 'main'
                    }],
                    removeCombined: true,
                    mainConfigFile: 'playground/src/main.js'
                }
            },

        },//requirejs end

        clean: {
            dist: ['dist/**']
        },//clean end

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['connect:devServer','jasmine','watch']);
};
