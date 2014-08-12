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
        clean: ['dist'],
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'uglify', 'cssmin']);
};
