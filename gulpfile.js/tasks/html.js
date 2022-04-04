import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpHtmlImgWrapper from 'gulp-html-img-wrapper';

import {config} from '../config.js'
const {src, dest} = gulp

export const html = () => {
  return src( config.path.html.src )
    .pipe( gulpHtmlImgWrapper() )
    .pipe( htmlmin( config.plugin.htmlmin ) )
    .pipe( dest( config.path.html.dest ) )
}