// Karma configuration
// Generated on Thu Jun 11 2015 00:00:16 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../bower_components/supersonic/supersonic.js',
      '../bower_components/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../bower_components/webcomponentsjs/webcomponents.js',
      'jquery-1.11.2.min.js',
      '../app/example/views/res/js/bootstrap.js',
      '../app/example/views/res/js/bootstrap.min.js',
      '../app/example/views/res/js/case-study.js',
      '../app/example/views/res/js/flowchart.js',
      '../app/example/views/res/js/index.js',
      '../app/example/views/res/js/log.js',
      '../app/example/views/res/js/main.js',
      '../app/example/views/res/js/prototype.js',
      //'../app/example/views/res/js/test.js',
      './unit/*.js',
      './endtoend/*.js',
      '../dist/app/example.js'

      //'bower_components/angular/angular.js',
      //'../bower_components/angular/angular.js',
      //'../bower_components/angular-mocks/angular-mocks.js',
      //'../bower_components/supersonic/supersonic.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
