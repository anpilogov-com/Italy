const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const svgo = require("gulp-svgo");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const fonter = require("gulp-fonter");
const csso = require("gulp-csso");

/** Generating a cascading style file */

gulp.task("gen-scss", () => {
   return gulp
      .src("./styles/scss/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("Error: ", sass.logError))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./styles/css/"));
});

/** Generating a otf2ttf format fonts */

gulp.task("gen-font-ttf", () => {
   return gulp
      .src("./fonts/**/*.otf")
      .pipe(fonter({ formats: ["ttf"] }))
      .pipe(gulp.dest("./fonts/"));
});

/** Generating a all2woff format fonts */

gulp.task("gen-font", () => {
   gulp
      .src(["./fonts/**/*.ttf"])
      .pipe(ttf2woff())
      .pipe(gulp.dest("./fonts/woff"));
   return gulp
      .src(["./fonts/**/*.ttf"])
      .pipe(ttf2woff2())
      .pipe(gulp.dest("./fonts/woff"));
});

/** Minimizing a CSS file */

gulp.task("gen-css", function () {
   return gulp
      .src("./styles/css/index.css")
      .pipe(csso())
      .pipe(gulp.dest("./styles/css/"));
});

/** Optimizing vector images */

gulp.task("gen-svg", () => {
   return gulp
      .src("./images/unoptimized/*")
      .pipe(svgo())
      .pipe(gulp.dest("./images/optimized/"));
});

/** Observers */

gulp.task("observe", () => {
   gulp.watch("./styles/scss/**/*.scss", gulp.series("gen-scss"));
   gulp.watch("./images/unoptimized/**/*.svg", gulp.series("gen-svg"));
});

gulp.task("observe-scss", () => {
   gulp.watch("./styles/scss/**/*.scss", gulp.series("gen-scss"));
});

gulp.task("observe-svg", () => {
   gulp.watch("./images/unoptimized/**/*.svg", gulp.series("gen-svg"));
});
