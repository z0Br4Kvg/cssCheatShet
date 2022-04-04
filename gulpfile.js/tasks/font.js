import gulp from "gulp";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import {config} from "../config.js";
const {src, dest} = gulp

export const font = () => {
  return src( config.path.font.src )
    .pipe( newer(config.path.font.dest) )
    .pipe( fonter( config.plugin.fonter ) )
    .pipe( dest(config.path.font.dest) )
    .pipe( ttf2woff2() )
    .pipe( dest(config.path.font.dest) )
}