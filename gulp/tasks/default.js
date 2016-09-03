var gulp = require('gulp');

gulp.task('default', ['html', 'sync', 'css'], function () {
    gulp.watch('./src/scripts/**/*.js', ['js']);
    gulp.watch('./src/styles/**/*.scss', ['css']);
    gulp.watch('./src/*.html', ['html']);
});

gulp.task('html', function () {
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
});
