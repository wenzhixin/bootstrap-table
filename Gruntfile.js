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
        concat: {
            basic_target: {
                src: ['src/<%= pkg.name %>.js', 'src/extensions/**/*.js'],
                dest: 'dist/<%= pkg.name %>-all.js'
            },
            locale_target: {
                src: ['src/locale/**/*.js'],
                dest: 'dist/<%= pkg.name %>-locale-all.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            basic_target: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/<%=pkg.name %>.js'],
                    'dist/<%= pkg.name %>-all.min.js': ['dist/<%=pkg.name %>-all.js'],
                    'dist/<%= pkg.name %>-locale-all.min.js': ['dist/<%=pkg.name %>-locale-all.js']
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
            source: {
                cwd: 'src',                     // set working folder / root to copy
                src: ['**/*.js', '**/*.css'],   // copy all files and subfolders
                dest: 'dist',                   // destination folder
                expand: true                    // required when using cwd
            },
            files: {
                cwd: 'dist',            // set working folder / root to copy
                src: '**/*',            // copy all files and subfolders
                dest: 'docs/dist',      // destination folder
                expand: true            // required when using cwd
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'copy']);
};
