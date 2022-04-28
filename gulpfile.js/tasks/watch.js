import gulp from "gulp";

import {html} from "./html.js";
import {css} from "./css.js";
import {img} from "./img.js";
import {js} from "./js.js";
import {font} from "./font.js";
import {favicon} from "./favicon.js";

import {config} from "../config.js";
import {browserSync} from "./server.js";

export const watch = () => {
  gulp.watch( config.path.html.watch, gulp.parallel(html)).on('all', browserSync.reload)
  gulp.watch( config.path.css.watch, gulp.parallel(css)).on('all', browserSync.reload)
  gulp.watch( config.path.js.watch, gulp.parallel(js))
  gulp.watch( config.path.ts.watch, gulp.parallel(js))
  gulp.watch( config.path.img.watch, gulp.parallel(img)).on('all', browserSync.reload)
  gulp.watch( config.path.font.watch, gulp.parallel(font)).on('all', browserSync.reload)
  gulp.watch( config.path.favicon.watch, gulp.parallel(favicon)).on('all', browserSync.reload)
}