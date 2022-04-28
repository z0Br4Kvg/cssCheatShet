import gulp from "gulp";
import babel from "gulp-babel";
import webpack from "webpack-stream";

import {config} from "../config.js";
import {browserSync} from "./server.js";

const {src, dest} = gulp

export const js = () => {
  return src( config.path.js.src)
    .pipe( babel() )
    .pipe( webpack( config.plugin.webpack ) )
    .pipe( dest(config.path.js.dest) )
    .pipe( browserSync.stream() )
}