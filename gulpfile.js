"use strict";

var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var htmlmin = require("gulp-htmlmin");

gulp.task("css", function() {
  return gulp
    .src("./source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./build/css"))
    .pipe(server.stream())
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task("server", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("images", function() {
  return gulp
    .src("source/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}").pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function() {
  return gulp
    .src("source/img/icon-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function() {
  return gulp
    .src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp
    .src(["source/fonts/**/*.{woff,woff2}", "source/img/**", "source/js/**"], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "sprite", "copy", "css", "html"));
gulp.task("start", gulp.series("build", "server"));
