/**
 * images-optimize.js - Copy and optimize images.
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

gulp.task( 'images-optimize', function () {

	var changed  = require( 'gulp-changed' );
	var imagemin = require( 'gulp-imagemin' );
	var config   = require( '../config' ).images;

	return gulp.src( config.buildSrc, { base: config.base } )
		.pipe( changed( config.dest ) )
		.pipe( imagemin( config.imageminSettings ) )
		.pipe( gulp.dest( config.dest ) );

} );
