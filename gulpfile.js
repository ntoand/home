var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var run = require('gulp-run');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

js_files = ['src/js/index.js', 'src/js/publication.js','src/js/lib/timeline.js'];

gulp.task('clean', function () {
  del.sync(['dist/**/*']);
});

gulp.task('copy', function () {
  return gulp.src(['src/css/**/*','src/imgs/**/*','src/js/particles.json','src/js/lib/mixitup.min.js'], { "base" : "./src" })
            .pipe(gulp.dest('dist/public'));
});

gulp.task('compress', function () {
  return gulp.src(js_files, { "base" : "./src" })
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('dist/public'));
});

gulp.task('compile', function () {
  return run('node ejs2html.js').exec();
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('default', ['copy', 'compress', 'compile', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch('src/views/**/*.ejs', ['compile']);
  gulp.watch('src/css/**/*.scss', ['sass']);
});
