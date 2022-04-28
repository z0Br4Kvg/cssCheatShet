import path from "path";

export const isProd = process.argv.includes('--production')
export const isDev = !isProd

const IMG_EXTENSIONS = ['png','jpg','jpeg','gif','svg', 'ico']
const FONT_EXTENSIONS = ['eot', 'ttf', 'otf','otc','ttc','woff','woff2','svg']

let config = {
  isProd: isProd,
  isDev: isDev,
  src: '../src',
  dest: '../dist',
}

config.path = {
  html: {
    src: config.src + '/*.html',
    watch: config.src + '/**/*.html',
    dest: config.dest
  },
  css: {
    src: config.src + '/*.{css,scss}',
    watch: config.src + '/**/*.{css,scss}',
    dest: config.dest,
  },
  js: {
    index: config.src + '/index.js',
    src: config.src + '/*.js',
    watch: config.src + '/**/*.js',
    dest: config.dest,
  },
  ts: {
    index: config.src + '/index.tsx',
    src: config.src + '/*.{ts,tsx}',
    watch: config.src + '/**/*.{ts,tsx}',
    dest: config.dest,
  },
  img: {
    src: config.src + `/img/*.{${IMG_EXTENSIONS.join(',')}}`,
    watch: config.src + `/img/*.{${IMG_EXTENSIONS.join(',')}}`,
    dest: config.dest + '/img',
  },
  font: {
    src: config.src + `/font/*.{${FONT_EXTENSIONS.join(',')}}`,
    watch: config.src + `/font/**/*.{${FONT_EXTENSIONS.join(',')}}`,
    dest: config.dest + '/font',
  },
  favicon: {
    src: config.src + `/img/favicon/*.svg`,
    watch: config.src + `/img/favicon/*.svg`,
    dest: config.dest + `/img/favicon/`,
  }
}

config.plugin =  {
  browserSync: {
    server: {
      baseDir: config.dest
    }
  },

  rename: {
    css: {
      min: () => {
        return {
          dirname: '/',
          basename: 'index',
          extname: '.min.css'
        }
      },
      normal: () => {
        return {
          dirname: '/',
          basename: 'index',
          extname: '.css'
        }
      },
    }
  },

  webpack: {
    mode: config.isDev? 'development' : 'production',
    devtool: 'inline-source-map',
    entry: config.path.ts.index,
    output: {
      filename: "bundle.js",
      path: path.resolve('', config.dest)
    },
    optimization: {
      splitChunks: {
        maxSize: 200,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/env'],
                ['@babel/preset-typescript'],
                ['@babel/preset-react', {"development": config.isDev}]
              ],
              "plugins": [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          },

        }
      ]
    },
    resolve: {extensions: ['.tsx', '.ts', '.js']}
  },

  imagemin: {
    verbose: true
  },

  gulpHtmlImgWrapper: {
    classMove: true,
    extensions: IMG_EXTENSIONS.map(ext => `.${ext}`), // write your own extensions pack (case insensitive)
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'evg']
  },

  ttf2woff2: {

  },

  htmlmin: {
    collapseWhitespace: config.isProd
  },

  favicons: {
    appName: 'myApp',
    appDescription: 'myApp desc',
    html: 'index.html',
    version: 1.0,
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
    path: 'img/favicon/'
  },

  filter: ['favicon.ico', 'apple-touch-icon.png', 'manifest.json'],

  clean: {
    force: true
  }
}

export {config}