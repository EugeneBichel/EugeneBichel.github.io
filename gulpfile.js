var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('build-sass', function() {
    "use strict";
    return gulp.src('./src/assets/styles/src/**/*scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/styles/'));
});

gulp.task('copy-bootstrap-css', function() {
    "use strict";
   return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
       .pipe(gulp.dest('./dist/assets/styles/'));
});

gulp.task('copy-bootstrap-js', function() {
    "use strict";
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-jquery', function() {
    "use strict";
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-angular', function() {
    "use strict";
    return gulp.src('./node_modules/angular/angular.min.js')
            .pipe(gulp.dest('./dist/'));

});

gulp.task('build-scripts', function() {
    "use strict";
    return gulp.src('./src/app/app.js')
        .pipe(concat('monkeyTricks.js'))
        .pipe(gulp.dest('./dist/'));

});

gulp.task('default', ['copy-bootstrap-css',
    'build-sass',
    'copy-jquery',
    'copy-bootstrap-js',
    'build-scripts',
    'copy-angular']);
