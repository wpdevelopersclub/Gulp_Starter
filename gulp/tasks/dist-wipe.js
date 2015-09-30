/**
 * dist-wipe.js - Totally wipe the contents of the distribution folder after
 * doing a clean build.
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

gulp.task( 'dist-wipe', [ 'clean' ], function ( cb ) {

	var del    = require( 'del' );
	var config = require( '../config' );

	del( config.dist, cb );

} );
