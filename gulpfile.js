'use strict';
const gulp = require('gulp');
const exec = require('child_process').exec;
const path = require('path');

gulp.task('test:client', function (done) {
  var karmaServer = require('karma').Server;
  new karmaServer({
        configFile: path.normalize(__dirname +'/karma.conf.js'),
    }, done).start();
});