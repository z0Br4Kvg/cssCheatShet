import _browserSync from 'browser-sync'
import {config} from "../config.js";

const browserSync = _browserSync.create()

export const server = () => {
  browserSync.init(config.plugin.browserSync)
}

export {browserSync}