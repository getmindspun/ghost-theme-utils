const gulp = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const gls = require('gulp-live-server');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const open = require('open');

function serve(done) {
    const server = gls.new('./app.js');
    server.start();

    gulp.watch(['dist', 'docs'])
        .on('change', function (path) {
            console.log(path);
            server.notify.call(server, { path });
        });

    open('http://localhost:8080');
    done();
}

function cleaner(done) {
    pump([
        gulp.src(['dist'], {read: false}),
        clean()
    ], done);
}

function scss(done) {
    pump([
        gulp.src('scss/*.scss', {sourcemaps: true}),
        sass({
            outputStyle: 'expanded'
        }),
        gulp.dest('dist/css/', {sourcemaps: '.'}),
    ], done);
}

function js(done) {
    pump([
        gulp.src(
            ['js/gs.js', 'js/subscribe.js'],
            {sourcemaps: true}
        ),
        concat('ghost-theme-utils.js'),
        gulp.dest(
            'dist/js/',
            {sourcemaps: '.'}
        )
    ], done);
}

const scssWatcher = () => gulp.watch(['scss/**/*.scss'], scss);
const jsWatcher = () => gulp.watch(['js/**'], js);
const watcher = gulp.parallel(scssWatcher, jsWatcher);
const build = gulp.series(scss, js);
const dev = gulp.series(build, serve, watcher);

exports.build = build;
exports.default = dev;
exports.clean = cleaner;
