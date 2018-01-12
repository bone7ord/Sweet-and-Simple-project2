const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


gulp.task('sass', () =>
  gulp.src('public/assets/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/assets/css'))
      .pipe(browserSync.stream())
);

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch(['public/assets/scss/*.scss', 'public/assets/scss/modules/*.scss'], ['sass']);
  gulp.watch('public/*.html', browserSync.reload);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './public'
    },
  })
});
