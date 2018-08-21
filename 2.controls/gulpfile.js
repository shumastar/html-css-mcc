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
const rigger = require('gulp-rigger');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');

gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(rigger())
		.pipe(rename({
			suffix: '.build'
		}))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('html:build', ['html'], () => {
	return gulp.src('src/index.build.html')
		.pipe(rename('index.html'))
		//.pipe(useref())
		.pipe(gulp.dest('dist'))
});

gulp.task('sass', () => {
	return gulp.src('src/**/*.scss')
		.pipe(sass({
			includePaths: require('node-normalize-scss').includePaths
		}))
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('glide-css', () => {
	return gulp.src([
			'node_modules/@glidejs/glide/dist/css/glide.core.min.css',
			'node_modules/@glidejs/glide/dist/css/glide.theme.min.css',
			'node_modules/nouislider/distribute/nouislider.css',
		])
		.pipe(concat('glide.css'))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: 'src',
			index: "index.build.html"
		},
		notify: false
	});
});

gulp.task('js', () => {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(concat('build.js'))
		.pipe(gulp.dest('src/js'));
});

gulp.task('glide-js', () => {
	return gulp.src('node_modules/@glidejs/glide/dist/glide.js')
		.pipe(uglify())
		.pipe(gulp.dest('src/libs'));
});

gulp.task('nouislider-js', () => {
	return gulp.src('node_modules/nouislider/distribute/nouislider.js')
		//.pipe(uglify())
		.pipe(gulp.dest('src/libs'));
});


gulp.task('css:build', ['sass'], () => {
	return gulp.src('src/css/*.css')
		/*.pipe(cssnano({
			autoprefixer: {
				browsers: ['last 16 versions'],
				add: true
			}
		}))*/
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['clean-temp', 'html', 'js', 'browser-sync', 'glide-css', 'glide-js', 'nouislider-js', 'sass'], () => {
	gulp.watch('src/styles/**/*.scss', ['sass']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('clean', () => {
	return del.sync('dist');
});

gulp.task('clean-temp', () => {
	return del.sync(['src/css', 'src/index.build.html', 'src/js/build.js']);
});

gulp.task('img:build', () => {
	return gulp.src('src/img/**/*.+(png|jpg|gif|svg|ico)')
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

gulp.task('build', ['clean', 'clean-temp', 'html:build', 'js', 'glide-css', 'css:build', 'img:build', 'glide-js', 'nouislider-js'], () => {

	const buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	const buildJs = gulp.src('src/js/build.js')
		.pipe(gulp.dest('dist/js'));

	const buildLibs = gulp.src('src/libs/**/*')
		.pipe(gulp.dest('dist/libs'));
});

gulp.task('clear', (callback) => {
	return cache.clearAll();
});

gulp.task('default', ['watch']);