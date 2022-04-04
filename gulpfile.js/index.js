import gulp from 'gulp'

import {cleaning} from "./tasks/cleaning.js";
import {html} from "./tasks/html.js";
import {css} from "./tasks/css.js";
import {js} from "./tasks/js.js";
import {img} from "./tasks/img.js";
import {font} from "./tasks/font.js";
import {favicon} from "./tasks/favicon.js";
import {watch} from "./tasks/watch.js";
import {server} from "./tasks/server.js";

const {series, parallel} = gulp

export const build = (cb) => {
  series(
    cleaning,
    parallel(html, css, js, img, font, favicon),
  )(cb)
}

export const buildAndRun = (cb) => {
  series(
    cleaning,
    parallel(html, css, js, img, font, favicon),
    parallel(server, watch)
  )(cb)
}

export const clean = (cb) => series(cleaning)(cb)