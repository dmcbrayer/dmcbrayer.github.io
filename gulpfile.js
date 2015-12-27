var gulp            = require('gulp');
var cp              = require('child_process');
var minifyCss       = require('gulp-minify-css');
var notify          = require("gulp-notify") 
var sass            = require('gulp-ruby-sass') ;
var bower           = require('gulp-bower');
var browserSync     = require('browser-sync');
var imagemin        = require('gulp-imagemin');
var cache           = require('gulp-cache');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

var config          = require('./gulp-config');

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDirectory)) 
});

gulp.task('jekyll-build', ['css','scripts','images','icons','bower'], function (done) {
    browserSync.notify(config.messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
             .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('icons', function() { 
    return gulp.src(config.src.icons) 
        .pipe(gulp.dest(config.jekyllDest.icons))
        .pipe(gulp.dest(config.siteDest.icons)); 
});

gulp.task('css', function() { 
    return sass(config.src.sassFile, {
             style: 'compressed',
             loadPath: [
                 config.src.sass,
                config.bowerDirectory + '/normalize.scss/',
                config.bowerDirectory + '/fontawesome/scss',
             ],
            compass: true
         }) 
        .pipe(minifyCss())
        .pipe(gulp.dest(config.jekyllDest.sass))
         .pipe(gulp.dest(config.siteDest.sass))
        .pipe(browserSync.stream()); 
});

gulp.task('scripts', function() {
  return gulp.src(config.src.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jekyllDest.scripts))
    .pipe(gulp.dest(config.siteDest.scripts));
});

gulp.task('images', function() {
  return gulp.src(config.src.images)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.jekyllDest.images))
    .pipe(gulp.dest(config.siteDest.images));
});

gulp.task('build', ['bower', 'icons', 'images', 'scripts','css','jekyll-build']);
gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./_site"
        }
    });

    // Start a watch for rebuilds
    gulp.watch(config.watchAssetFiles, ['jekyll-rebuild']);
    gulp.watch(config.watchHtmlFiles, ['jekyll-rebuild']);
});


gulp.task('default', ['serve']);