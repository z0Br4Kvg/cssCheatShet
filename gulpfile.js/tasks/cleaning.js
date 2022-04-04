import gulp from 'gulp'

import clean from "gulp-clean";
import {config} from "../config.js";

export const cleaning = () => {
  return gulp.src(config.dest, {allowEmpty: true})
    .pipe( clean( config.plugin.clean ) )
}