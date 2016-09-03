var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync');

gulp.task('css', function () {

    gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(sync.reload({stream:true}));
});
