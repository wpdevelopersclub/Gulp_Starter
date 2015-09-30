/**
 * scripts-uglify.js - Minify JavaScript files.
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

gulp.task( 'scripts-uglify', function () {

	var rename  = require( 'gulp-rename' );
	var uglify  = require( 'gulp-uglify' );
	var changed = require( 'gulp-changed' );
	var config  = require( '../config' ).scripts;

	return gulp.src( config.buildSrc )
		.pipe( changed( config.dest ) )
		.pipe( uglify() )
		.pipe( rename( { extname: '.min.js' } ) )
		.pipe( gulp.dest( config.dest ) );

} );
