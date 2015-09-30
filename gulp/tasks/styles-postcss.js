/**
 * styles-postcss.js - Process stylesheets with PostCSS.
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

'use strict';

var gulp = require( 'gulp' );

gulp.task( 'styles-postcss', function () {

	var gutil        = require( 'gulp-util' );
	var filter       = require( 'gulp-filter' );
	var rename       = require( 'gulp-rename' );
	var postcss      = require( 'gulp-postcss' );
	var sourcemaps   = require( 'gulp-sourcemaps' );
	var cssnano      = require( 'cssnano' );
	var config       = require( '../config' ).styles;
	var handleErrors = require( '../util/handleErrors' );

	var cssFilter = filter( [ '**/*.css', '!**/*.min.css' ], { restore: false } );

	function loadModules ( processorsConfig ) {
		var processors = [];
		for ( var processor in processorsConfig ) {
			var processorConfig = processorsConfig[ processor ];
			var instance = null;

			gutil.log( 'Loading PostCSS Module: ' + processor );
			instance = require( processor );
			processors.push( instance( processorConfig ) );
		}
		return processors;
	}

	return gulp.src( config.buildSrc, { base: config.base } )

		.pipe( cssFilter )

		.pipe( sourcemaps.init() )

		.pipe( postcss( loadModules( config.postcssSettings.processors ) ) )
		.on( 'error', handleErrors )

		.pipe( gulp.dest( config.dest ) )

		.pipe( postcss( [ cssnano ] ) )
		.pipe( rename( { extname: '.min.css' } ) )
		.pipe( gulp.dest( config.dest ) )

		.pipe( sourcemaps.write( './' ) );

} );
