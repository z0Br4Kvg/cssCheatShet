import gulp from "gulp";
import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import gcmq from "gulp-group-css-media-queries";
import rename from "gulp-rename";
import csso from "gulp-csso";
import gulpSass from "gulp-sass";
import dartSass from "sass";

import {config} from "../config.js";
import {browserSync} from "./server.js";

const {src, dest} = gulp
const sass = gulpSass(dartSass)

export const css = () => {
  return src( config.path.css.src, {sourcemaps: config.isDev} )
    .pipe( sassGlob() )
    .pipe( sass() )
    .pipe( webpCss() )
    .pipe( autoprefixer() )
    .pipe( shorthand() )
    .pipe( gcmq() )
    .pipe( dest(config.path.css.dest, {sourcemaps: config.isDev}) )
    .pipe( rename(config.plugin.rename.css.normal()) )
    .pipe( csso() )
    .pipe( rename(config.plugin.rename.css.min()) )
    .pipe( dest(config.path.css.dest, {sourcemaps: config.isDev}) )
    .pipe( browserSync.stream() )
}