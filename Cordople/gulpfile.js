var gulp = require("gulp");

gulp.task('tslint', function () {

    // Built-in rules are at
    // https://github.com/palantir/tslint#supported-rules
    var tslintConfig = {
        "rules": {
            "semicolon": true,
            "requireReturnType": true,
            "requireParameterType": true,
            "jsdoc-format": true,
            "quotemark": [true, "single"],
            "variable-name": [true,"allow-leading-underscore"]
        }
    };

    return gulp.src(['scripts/**/*.ts', '!scripts/typings/**'])
    //Custom rules can be added to configuration. rulesDirectory: 'folder/folder'
    .pipe(tslint({ configuration: tslintConfig }))
    .pipe(tslint.report('verbose', { emitError: true, reportLimit: 0 }));
});

require('es6-promise').polyfill();

gulp.task('build.css.sass', function () {
    gulp.src('./docs/md/scripts/components/materials/components/**/*.scss')
    // Guilp-Sass runs the pre processor on the .scss files using Sass. 
    // Gulp-AutoPrefixer post processes the .css files using PostCSS. 
    // CSS and Folder structure is saved to destination folder. 
    .pipe(sass().on('error', sass.logError)).pipe(prefixer({ browsers: ['last 2 versions'], cascade: false })).pipe(gulp.dest('./docs/md/www/css'));
});

gulp.task('install.tsd', function (callback) {
    ts({
        command: 'reinstall',
        config: './docs/md/tsd.json'
    }, callback);
});

var browserSync = require('browser-sync');

gulp.task('browser.sync', function() {
    browserSync.init({
        server: {
            baseDir: "./docs/md/www/"
        }
    });
});