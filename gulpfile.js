var gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("default", function () {
  console.log("Hooray - you created a Gulp task");
});

gulp.task("html", function () {
  console.log("Imagine something useful being done to your HTML");
});

gulp.task("watch", function () {
  watch("./app/index.html", function () {
    gulp.start("html");
  });
});
