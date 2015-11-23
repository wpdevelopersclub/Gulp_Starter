/**
 * styles-sass.js - Compile sass source files and generate CSS.
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

gulp.task( 'styles-sass', function ( cb ) {

	var sass         = require( 'gulp-sass' );
	var filter       = require( 'gulp-filter' );
	var rename       = require( 'gulp-rename' );
	var config       = require( '../config' ).styles;
	var handleErrors = require( '../util/handleErrors' );

	var sassFilter = filter( [ '**/*.sass', '**/*.scss' ], { restore: false } );

	gulp.src( config.buildSrc, { base: config.base } )

		.pipe( sassFilter )

		.pipe( sass( config.sassSettings ) )
		.on( 'error', handleErrors )

		.pipe( gulp.dest( config.dest ) );

	cb();

} );
