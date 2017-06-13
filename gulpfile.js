var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");
// var browserSync = require('browser-sync').create();

gulp.task('webpack', function() {
    return gulp.src('./server.js')
        .pipe(gulp.dest('dist/'))
        // .pipe(webpackStream(webpackConfig, webpack))
});

gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('webpack-dev-server', function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    // Start a webpack-dev-server
    console.log("PATH: " + webpackConfig.output.publicPath);
    new WebpackDevServer(webpackStream(webpack(webpackConfig), {
        publicPath: "/" + webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    })).listen(3000, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        // gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/build/index.html");
    });
});


gulp.task('default', ['lint', 'sass', 'scripts', 'watch',  'webpack-dev-server', 'webpack']);
