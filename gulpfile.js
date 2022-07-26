const gulp = require('gulp');
const browserSync = require('browser-sync').create(); 
const pug = require('gulp-pug');
const sass= require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

const app = 'app/';
const dist = 'dist/';

const config = {
    app: {
        html : app + 'components/*.pug',
        css : app + 'css/style.scss',
        js : app + 'js/main.js',
        img : app + 'img/**/*.*',
        fonts : app + 'fonts/*.*'
    },
    dist : {
        html : dist,
        css : dist + 'css/',
        js : dist + 'js/',
        img : dist + 'img/',
        fonts : dist + 'fonts/'
    },
    watch : {
        html : app + 'components/**/*.pug',
        css : app + 'css/**/*.scss',
        js : app + 'js/**/*.js',
        img : app + 'img/**/*.*',
        fonts : app + 'fonts/*.*'
    }

}

const webServ = () => {
    browserSync.init ({
        server : {
            baseDir : dist
        },
        port : 4000,
        host : 'localhost',
        notify : false 
    });
}


const pugTask = () => {
    return gulp.src(config.app.html)
        .pipe(pug({
            pretty : true,
        }))
        .pipe(gulp.dest(config.dist.html))
        .pipe(browserSync.reload({stream : true}))
}

const scssTask = () => {
    return gulp.src(config.app.css)
        
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.dist.css))
        .pipe(browserSync.reload({stream : true}))
}

const jsTask = () => {
    return gulp.src(config.app.js)
        .pipe(gulp.dest(config.dist.js))
        .pipe(browserSync.reload({stream : true}))
}

const imgTask = () => {
    return gulp.src(config.app.img)
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 3,
        }))
        .pipe(gulp.dest(config.dist.img))
        .pipe(browserSync.reload({stream : true}))
}

const fontsTask = () => {
    return gulp.src(config.app.fonts)
        .pipe(gulp.dest(config.dist.fonts))
        .pipe(browserSync.reload({stream : true}))
}

const watchFiles = () => {
    gulp.watch([config.watch.html], gulp.series(pugTask));
    gulp.watch([config.watch.css], gulp.series(scssTask));
    gulp.watch([config.watch.js], gulp.series(jsTask));
    gulp.watch([config.watch.img], gulp.series(imgTask));
    gulp.watch([config.watch.fonts], gulp.series(fontsTask));
}

const start = gulp.series(pugTask, scssTask, jsTask, imgTask, fontsTask);

exports.default =  gulp.parallel(start, watchFiles, webServ);