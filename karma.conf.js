module.exports = function(config) {
    config.set({
        basePath: 'src',
        frameworks: ['mocha', "chai"],
        preprocessors: {
            '*.html': ['ng-html2js']
        },
        files: [
            "../lib/angular/angular.min.js",
            "../lib/angular/angular-mocks.js",
            "*.js",
            "*.html",
            "../test/*.js"
        ],

        ngHtml2JsPreprocessor: {
            // remove this from the file path
            //stripPrefix: 'src/',

            // add this from the file path
            //prependPrefix: '/src/'
        },

        // or define a custom transform function
        // - cacheId returned is used to load template
        //   module(cacheId) will return template at filepath
        /*cacheIdFromPath: function(filepath) {
            var cacheId = filepath.strip('public/', '');
            return cacheId;
        },*/

        autoWatch: true,
        reporters: ['mocha'],
        browsers: ['Chrome']
    });
};
