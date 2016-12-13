var gulp = require('gulp'),
del = require('del'),
merge = require('merge-stream'),

tsc = require('gulp-typescript'),
tsProject = tsc.createProject('tsconfig.json'),
SystemBuilder = require('systemjs-builder'),
jsMinify = require('gulp-uglify'),

mocha = require('gulp-mocha'),
concat = require('gulp-concat'),
imagemin = require('gulp-imagemin');

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('shims', () => {
  return gulp.src([
    'node_modules/core-js/client/shim.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js'
  ]).pipe(concat('shims.js'))
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('system-build', [ 'tsc' ], () => {
  var builder = new SystemBuilder();

  return builder.loadConfig('system.config.js')
  .then(() => builder.buildStatic('app', 'dist/js/bundle.js'))
  .then(() => del('build'));
});

gulp.task('tsc', () => {
  del('build');

  return gulp.src('app/**/*.ts')
  .pipe(tsProject())
  .pipe(gulp.dest('build/'));
});

gulp.task('html', () => {
  return gulp.src('**/**.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('images', () => {
  return gulp.src('images/**/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/'));
});

gulp.task('minify', () => {
  var js = gulp.src('dist/js/bundle.js')
  .pipe(jsMinify())
  .pipe(gulp.dest('dist/js/'));

/*  var css = gulp.src('dist/css/styles.css')
  .pipe(cssMinify())
  .pipe(gulp.dest('dist/css/'));*/

  //return merge(js, css);
  return js;
});

gulp.task('default', [
  'shims',
  'system-build',
  'html',
  'images',
]);
