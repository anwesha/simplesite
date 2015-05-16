var gulp    = require("gulp");

// plugins
var concat      = require("gulp-concat");
var uglify      = require("gulp-uglify");
var rename      = require("gulp-rename");
var compass     = require("gulp-compass");
var imagemin    = require("gulp-imagemin");
var cache       = require("gulp-cache");

gulp.task("scripts", function () {
    return gulp.src([
           "./src/components/jquery/dist/jquery.js",
           "./src/components/angular/angular.js",
           "./src/components/angular-animate/angular-animate.js",
           "./src/components/angular-route/angular-route.js",
           "./src/components/angular-resource/angular-resource.js",
           "./src/js/*.js"
           ])
           .pipe(concat("main.js"))
           .pipe(rename({suffix: ".min"}))
           .pipe(uglify())
           .pipe(gulp.dest("./build/js"));
});

gulp.task("compass", function () {
    return gulp.src("./src/scss/*.scss")
           .pipe(compass({
              config_file: "./config.rb",
              css: "./src/css",
              sass: "./src/scss"
           }))
           .pipe(rename({suffix: ".min"}))
           .pipe(gulp.dest("./build/css"));
});

gulp.task("optimize-images", function () {
    return gulp.src("./src/images/*")
           .pipe(cache(imagemin({
               optimizationLevel: 5,
               progressive: true,
               interlaced: true
           })))
           .pipe(gulp.dest('build/img'));
});

gulp.task("default",  ["scripts", "compass", "optimize-images"]);
