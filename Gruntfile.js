/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> by CampGladiator */ \n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: 'src/js/**/*.js',
                dest: 'dist/js/<%= pkg.name %>.js'
            },
            css: {
                src: ['src/css/reset.css', 'src/css/fonts.css', 'src/css/global.css'],
                dest: 'dist/css/cg-global-ui.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/css/cg-global-ui.min.css': ['src/css/reset.css', 'src/css/fonts.css', 'src/css/global.css'],
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: 'fonts/*',
                dest: 'dist/'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);

};