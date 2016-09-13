module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            templates: {
                files: ['jade/*.jade', 'jade/*.pug'],
                tasks: ['pug'],
                options: {
                    spawn: false
                }
            },
              styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/min/all.js': [
                        'js/jquery1.10.js',
                        'js/jquery-ui-1.11.4.js',
                        'js/jquery.validationEngine.js',
                        'js/jquery.validationEngine-ru.js',
                        'js/script.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'styles/styles.css': 'sass/styles.scss',
                    'styles/main_global.css': 'sass/main_global.scss'
                }
            }
        },
        pug: {
            release: {
                options: {
                    data: {
                        client: true,
                        debug: false,
                        pretty: false
                    }
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: false
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
};