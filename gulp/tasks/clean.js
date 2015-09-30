/**
 * clean.js - Clean out junk files after build.
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

gulp.task( 'clean', [ 'build' ], function ( cb ) {

	var del    = require( 'del' );
	var config = require( '../config' );

	del( config.clean.src );

	cb();

} );
