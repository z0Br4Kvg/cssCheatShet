import gulp from "gulp";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";

import {config} from "../config.js";
const {src, dest} = gulp


export const img = () => {
  return src( config.path.img.src )
    .pipe( newer(config.path.img.dest) )
    .pipe( webp() )
    .pipe( dest(config.path.img.dest) )
    .pipe( src(config.path.img.src ) )
    .pipe( newer(config.path.img.dest) )
    .pipe( gulpif( config.isProd, imagemin(config.plugin.imagemin)) )
    .pipe( dest(config.path.img.dest) )
}