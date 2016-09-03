var gulp = require('gulp'),
    sync = require('browser-sync');

gulp.task('sync', ['js'], function() {

    sync.init(['./dist/*.{html,css,js,jpg}'], {
        server: {
            baseDir: './dist/'
        },
        open: false,
        notify: false,
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
        }
    });

});
