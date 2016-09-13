module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
              styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/jquery1.10.js',
                    'js/jquery-ui-1.11.4.js',
                    'js/select2.js',
                    'js/script.js'
                ],
                dest: 'js/min/all.js'
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'stylesheets/screen.css': 'sass/screen.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
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