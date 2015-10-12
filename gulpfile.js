var gulp = require('gulp'),
    data = require('gulp-data'),
    jade = require('gulp-jade');

gulp.task('templates', function() {
    return gulp.src('src/*.jade')
        .pipe(data(function(file) {
            return require('./src/data.json');
        }))
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
});

gulp.task('webpages', function() {
    return gulp.src('src/includes/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
});

gulp.task('officers', function() {
    return gulp.src('src/includes/officers/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
    gulp.src('src/css/**')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/Archive/**')
        .pipe(gulp.dest('dist'));
    gulp.src('src/fonts/**')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/js/**')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['templates', 'webpages', 'officers', 'copy']);
