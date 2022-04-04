import gulp from "gulp";
import favicons from "gulp-favicons";
import filter from "gulp-filter";

import {config} from "../config.js";
const {src, dest} = gulp

export const favicon = () => {
  return src( config.path.favicon.src )
    .pipe( favicons(config.plugin.favicons) )
    .pipe( dest(config.path.favicon.dest) )
    .pipe( src( config.path.favicon.src ) )
    .pipe( dest(config.path.favicon.dest) )
    .pipe( filter(config.plugin.filter) )
    .pipe( dest( config.dest ) )
}