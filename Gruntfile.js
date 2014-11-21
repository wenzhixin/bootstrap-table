'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('bootstrap-table.jquery.json'),
        banner: '/*\n' +
                '* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage : "" %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                '* Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                '*/\n',
        // Task configuration.
        clean: ['dist', 'docs/dist'],
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            my_target: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/<%=pkg.name %>.js']
                }
            },
            locale_target: {
                files: [{
                    expand: true,
                    cwd: 'src/locale',
                    src: '**/*.js',
                    dest: 'dist/locale',
                    ext: '.min.js' // replace .js to .min.js
                }]
            },
            extensions_target: {
                files: [{
                    expand: true,
                    cwd: 'src/extensions',
                    src: '**/*.js',
                    dest: 'dist/extensions',
                    ext: '.min.js' // replace .js to .min.js
                }]
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'dist/<%= pkg.name %>.min.css': ['src/<%=pkg.name %>.css']
                }
            }
        },
        copy: {
            files: {
                cwd: 'dist',            // set working folder / root to copy
                src: '**/*',            // copy all files and subfolders
                dest: 'docs/dist',      // destination folder
                expand: true            // required when using cwd
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy']);
};
