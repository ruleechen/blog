var gulp = require('gulp');
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    ngmin = require('gulp-ngmin'),
    lr = require('tiny-lr'),
    server = lr();


// js
gulp.task('js', function(){
  gulp
    .src('app/js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/dist/js'))
    .pipe(livereload(server));
});

// js min
gulp.task('js-min', function () {
  gulp
    .src('app/js/main.js')
    .pipe(plumber({
      errorHandler: notify.onError("js error: <%= error.message %>")
    }))
    .pipe(browserify({
      insertGlobals : false,
      debug : false
    }))
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(ngmin())
    // .pipe(uglify())
    .pipe(gulp.dest('./app/dist/js'));
});

// css
gulp.task('css', function () {
  gulp
    .src('app/css/main.sass')
    .pipe(plumber({
      errorHandler: notify.onError("css error: <%= error.message %>")
    }))
    .pipe(sass({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./app/dist/css'))
    .pipe(livereload(server));
});

// css min
gulp.task('css-min', function () {
  gulp
    .src('app/css/main.sass')
    .pipe(sass({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./app/dist/css'));
});


// publish
gulp.task('publish', ['js', 'js-min', 'css', 'css-min'], function () {
  //console.log('publish done')
});


// clean
gulp.task('clean', function() {
  gulp.src(['./app/dist/js/bundle.js',
            './app/dist/js/bundle.min.js',
            './app/dist/css/bundle.css',
            './app/dist/css/bundle.min.css'], {read: false})
    .pipe(clean());
});


// watch
gulp.task('watch', function () {
  var paths = {
    js: ['app/js/**/*.js'],
    css: ['app/css/**/*.sass', 'app/css/**/*.css']
  };
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
  });
});


// default task
gulp.task('default', ['watch']);
