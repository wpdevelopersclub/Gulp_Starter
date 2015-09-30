/**
 * scripts-lint.js - Run the JavaScript files through a linter.
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

gulp.task( 'scripts-lint', function ( cb ) {

	var jshint       = require( 'gulp-jshint' );
	var changed      = require( 'gulp-changed' );
	var handleErrors = require( '../util/handleErrors' );
	var config       = require( '../config' ).scripts;

	return gulp.src( config.buildSrc )
		.pipe( changed( config.dest ) )
		.pipe( jshint( '.jshintrc' ) )
		.on( 'error', handleErrors )
		.pipe( jshint.reporter( 'default' ) )
		.on( 'error', handleErrors );

	cb();

} );
