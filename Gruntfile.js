const sass = require('node-sass');
module.exports = function (grunt) {
    // Configuration
    grunt.initConfig({
        concat: {
            js: {
                src: ["js/*.js"],
                dest: "build/script.js"
            },
            css: {
                src: ["css/reset.css", "css/bootstrap.css", "css/styles.css"],
                dest: "build/styles.css"
            }
        },

        sass: {
            options: {
                implementation: sass,
            },
            dist: {
                files: [{
                    src: "css/sass/styles.scss",
                    dest: "css/styles.css"
                }]
            }
        },

        uglify: {
            build: {
                files: [{
                    src: "build/script.js",
                    dest: "build/script.js"
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Register tasks
    grunt.registerTask("concat-js", ["concat:js"]);
    grunt.registerTask("concat-css", ["concat:css"]);

};