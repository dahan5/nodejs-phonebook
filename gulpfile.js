Gulp = {
	self     : null,
	uglify   : null,
	cssmin   : null,
	sass     : null,
	svgo     : null,
	concat   : null,
	imagemin : null,
	init: function(){
		Gulp.self     = require('gulp');
		Gulp.uglify   = require('gulp-uglify');
		Gulp.cssmin   = require('gulp-cssmin');
		Gulp.sass     = require('gulp-sass');
		Gulp.svgo     = require('gulp-svgo');
		Gulp.concat   = require('gulp-concat');
		Gulp.imagemin = require('gulp-imagemin');
		Gulp.svgopt();
		Gulp.scss();
		Gulp.css();
		Gulp.js();
		Gulp.jslibs();
		Gulp.watch();
		Gulp.wsass();
		Gulp.default();
		Gulp.imgmin();
	},
	imgmin: function(){
		Gulp.self.task('imgmin', function(){
			console.log('[IMAGEMIN] Otimizando as Imagens');
			Gulp.self.src('./public/assets/images/**/*')
			.pipe(Gulp.imagemin())
			.pipe(Gulp.self.dest('./public/assets/images/'));
		});
	},
	svgopt: function(){
		Gulp.self.task('svgopt', function(){
			console.log('[SVGO] Otimizando arquivos SVG');
			Gulp.self.src('./public/assets/images/**/*.svg')
			.pipe(Gulp.svgo())
			.pipe(Gulp.self.dest('./public/assets/images'));
		});
	},
	scss: function(){
		Gulp.self.task('scss', function(){
			console.log('[SASS] Compilando Arquivos do Sass');
			Gulp.self.src('./public/assets/scss/base/base.scss')
			.pipe(Gulp.sass())
			.pipe(Gulp.self.dest('./public/assets/css/src/base'));

			Gulp.self.src('./public/assets/scss/pages/**/*.scss')
			.pipe(Gulp.sass())
			.pipe(Gulp.self.dest('./public/assets/css/src/pages'));
		});
	},
	css: function(){
		Gulp.self.task('css', function(){
			console.log('[CSS] Minificando Arquivos CSS');
			Gulp.self.src('./public/assets/css/src/**/*.css')
			.pipe(Gulp.cssmin())
			.pipe(Gulp.self.dest('./assets/css/dist'));
		});
	},
	js: function(){
		Gulp.self.task('js', function(){
			console.log('[JS] Minificando Arquivos JavaScript');
			Gulp.self.src(['./public/js/src/**/*.js', '!js/dist/**'])
			.pipe(Gulp.uglify())
			.pipe(Gulp.self.dest('./js/dist'))
		});
	},
	jslibs: function(){
		Gulp.self.task('jslibs', function(){
			console.log('[JS] Unindo Libs Js');
			Gulp.self.src(['./public/js/src/jquery/jquery.js', './js/src/libs/**/*.js'])
			.pipe(Gulp.uglify())
			.pipe(Gulp.concat('all.js'))
			.pipe(Gulp.self.dest('./js/src/all/'))
		});
	},
	default: function(){
		Gulp.self.task('default', ['js', 'scss', 'css', 'svgopt', 'jslibs', 'imgmin']);
	},
	watch: function(){
		Gulp.self.task('watch', function(){
			Gulp.self.watch('./public/js/**/*.js', ['js', 'jslibs']);
			Gulp.self.watch('./public/assets/css/src/**', ['css']);
			Gulp.self.watch('./public/assets/scss/**', ['scss']);
			Gulp.self.watch('./public/assets/images/**/*.svg', ['svgo']);
		});
	},
	wsass: function(){
		Gulp.self.task('wsass', function(){
			Gulp.self.watch('./public/assets/scss/**', ['scss']);
		});
	}
}

Gulp.init();