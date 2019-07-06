import gulp from 'gulp';
import gpug from 'gulp-pug';
import del from 'del';
import ws from 'gulp-webserver';
import image from 'gulp-image';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import miniCSS from 'gulp-csso';

sass.compiler = require('node-sass');
// routes
const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img: {
        src: "src/img/*",
        dest: "build/img"
    },
    scss: {
        watch: "src/scss/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    }
}

// tasks
const pug = () => 
    gulp
        .src(routes.pug.src)
        .pipe(gpug())
        .pipe(gulp.dest(routes.pug.dest));
const clean = () => del(["build"]);
const webserver = () => 
    gulp
        .src("build")
        .pipe(ws({
            livereload: true,
            // directoryListing: true,
            open: true
        }));

const img = () => 
    gulp
        .src(routes.img.src)
        .pipe(image())
        .pipe(gulp.dest(routes.img.dest));
const styles = () => 
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(miniCSS())
        .pipe(gulp.dest(routes.scss.dest));

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
};
// series
const prepare = gulp.series([clean, img]);
const assets = gulp.series([pug, styles]);
const postDev = gulp.series([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);
