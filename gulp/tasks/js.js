var gulp = require('gulp'),
    browserify  = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    watchify = require('watchify'),
    sync = require('browser-sync');

gulp.task('js', function() {

    var bundler = watchify('./src/scripts/main');
    bundler.transform('debowerify');
    bundler.on('update', rebundle);

    function rebundle() {

        return bundler.bundle({debug: true})
              .on('error', function(err) {
                console.log( err );
              })
              .pipe(source('bundle.js'))
              .pipe(streamify(uglify()))
              .pipe(gulp.dest('./dist/scripts/'))
              .pipe(sync.reload({
                stream:true
              }));

    }

    return rebundle();

});
