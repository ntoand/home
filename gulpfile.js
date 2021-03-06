var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var run = require('gulp-run');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

js_files = ['src/js/index.js', 'src/js/work.js',
            'src/js/publication.js', 'src/js/lib/timeline.js'];

function getArg(key) {
  var index = process.argv.indexOf(key);
  var next = process.argv[index + 1];
  return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}

var dir = 'preview';
var env = getArg("--env");
console.log(env);
if (env === "production")
  dir = 'docs';

gulp.task('clean', function () {
  del.sync([dir + '/**/*']);
});

gulp.task('copy', function () {
  gulp.src(['src/css/**/*','src/imgs/**/*','src/js/particles.json','src/js/lib/mixitup.min.js'],
                  { "base" : "./src" })
            .pipe(gulp.dest(dir + '/public'));

  if (env === "production")
    gulp.src(['CNAME']).pipe(gulp.dest(dir));
});

gulp.task('compress', function () {
  return gulp.src(js_files, { "base" : "./src" })
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(dir + '/public'));
});

gulp.task('genhtml', function () {
  var type = 'preview';
  if (env === "production")
    type = 'production';
  return run('node genhtml.js ' + type).exec();
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dir + '/public/css'));
});

gulp.task('default', ['copy', 'compress', 'genhtml', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch(['src/views/**/*.ejs', 'src/views/**/*.md', 'data.js'], ['genhtml']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});
