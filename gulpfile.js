"use strict";
// Load plugins
const gulp = require('gulp');
const connect = require('gulp-connect-php');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

// Build 11ty site
function eleventy (gulpCallBack){
    const spawn = require('child_process').spawn;
    const eleventy = spawn("npx", ["@11ty/eleventy", "--quiet"], {stdio: 'inherit'});
    eleventy.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Eleventy process exited with code: '+code);
    });
}

// SASS + Sourcemaps
function sass() {
  return gulp.src('_sass/style.scss')
    .pipe(sourcemaps.init()) 
    .pipe(gulpSass({
      outputStyle: 'compressed'
    })
      .on('error', gulpSass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.stream());
}

// Start Browsersync with PHP
function php() {
  connect.server({
    base: './_site'
    },function (){
      browserSync({
        proxy: '127.0.0.1:8000',
        notify: false,
        port: 3030
      });
  }); 
}

// BrowserSync reload
function reload (done) {
  browserSync.reload({
  });
  done();
}

// Watch files
function watch() {
 gulp.watch("_sass/*.scss", sass);
 gulp.watch(
   [
      "**/*.html",
      "!_site/**/*.html",
     // "js/*.js",
     // "serviceworker.js",
     // "**/*.md",
     // "_config.yml",
     // "img/*"
   ],
   gulp.series(eleventy, reload)
 );
}

// Export tasks
exports.default = gulp.series(eleventy, sass, gulp.parallel(watch, php));