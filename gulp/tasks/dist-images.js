/**
 * dist-images.js - Optimize images in place.
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

gulp.task( 'dist-images', [ 'dist-styles' ], function () {

	var imagemin = require( 'gulp-imagemin' );
	var config   = require( '../config' );

	return gulp.src( [ config.dist + "**/*." + config.imageExts ] )
		.pipe( imagemin( config.images.imageminSettings ) )
		.pipe( gulp.dest( config.dist ) );

} );
