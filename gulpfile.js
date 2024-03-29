const GulpClient = require("gulp");
const uglify = require("gulp-uglify");

const { watch, series, src, dest } = require("gulp");
// const sass = require("gulp-sass");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

const browserSync = require("browser-sync").create();

// sass.complier = require(`node-sass`);

function runSass() {
  // place code for your default task here
  // we want to run "css css/app.scss app.css --watch"
  return src("src/css/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function html() {
  return src("src/*.html").pipe(dest("dist"));
}

function javascript() {
  return src("src/js/*.js").pipe(uglify()).pipe(dest("dist"));
}

function fonts() {
  return src("src/fonts/*").pipe(dest("dist/fonts"));
}

function images() {
  return src("src/img/*").pipe(dest("dist/img"));
}

function watchSass() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });

  watch("src/*.html", html).on("change", browserSync.reload);
  watch("src/js/*.js", javascript);
  watch("src/css/app.scss", runSass);
  watch("src/fonts/*", fonts);
  watch("src/img/*", images);
}

exports.default = series(html, javascript, runSass, fonts, images, watchSass);
