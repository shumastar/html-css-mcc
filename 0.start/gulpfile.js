const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const del = require('del');
const cache = require('gulp-cache');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('sass', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('scripts', () => {
	return gulp.src('src/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('src/js-min'));
});

gulp.task('css-min', ['sass'], () => {
	return gulp.src('src/css/*.css')
		.pipe(cssnano())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
	gulp.watch('src/styles/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('clean', () => {
	return del.sync('dist');
});

gulp.task('clean-temp', () => {
	return del.sync(['src/css', 'src/js-min']);
});

gulp.task('img', () => {
	return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['clean', 'clean-temp', 'css-min', 'scripts', 'img', 'sass'], () => {

	const buildCss = gulp.src('src/css/styles.min.css')
		.pipe(gulp.dest('dist/css'));

	const buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	const buildJs = gulp.src('src/js-min/*.js')
		.pipe(gulp.dest('dist/js'));

	const buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', (callback) => {
	return cache.clearAll();
})

gulp.task('default', ['watch']);