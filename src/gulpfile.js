var gulp = require('gulp');
    browserify = require('gulp-browserify'),
    // notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    ngmin = require('gulp-ngmin'),
    plumber = require('gulp-plumber'),
    lr = require('tiny-lr'),
    server = lr();


// js
gulp.task('js', function(){
  gulp
    .src('js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload(server));
});

// js min
gulp.task('js-min', function () {
  gulp
    .src('js/main.js')
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); }
    }))
    .pipe(browserify({
      insertGlobals : false,
      debug : false
    }))
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(ngmin())
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// css
gulp.task('css', function () {
  gulp
    .src('css/main.sass')
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); }
    }))
    .pipe(sass({
      sourceMap: true
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload(server));
});

// css min
gulp.task('css-min', function () {
  gulp
    .src('css/main.sass')
    .pipe(sass({
      sourceMap: false
    }))
    .pipe(concat('bundle.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'));
});


// publish
gulp.task('publish', ['js', 'js-min', 'css', 'css-min'], function () {
  //console.log('publish done')
});


// clean
gulp.task('clean', function() {
  gulp.src(['./dist/js/bundle.js',
            './dist/js/bundle.min.js',
            './dist/css/bundle.css',
            './dist/css/bundle.min.css'], {read: false})
    .pipe(clean());
});


// watch
gulp.task('watch', function () {
  var paths = {
    js: ['js/**/*.js'],
    css: ['css/**/*.sass', 'css/**/*.css']
  };
  server.listen(35730, function (err) {
    if (err) {
      return console.log(err);
    }
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
  });
});


// default task
gulp.task('default', ['watch']);
