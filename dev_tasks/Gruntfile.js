module.exports = function(grunt){

    grunt.initConfig({
        prettify: {
            options: {
                "indent": 4,
                "condense": true,
                "indent_inner_html": true,
                "unformatted": [
                    "a",
                    "pre"
                ]
            },
            one: {
                src: 'input.html',
                dest: 'index.html'
            }
        }
    });


    grunt.loadNpmTasks('grunt-prettify');
    grunt.registerTask('default', ['prettify'])

};
