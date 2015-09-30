/**
 * dist-copy.js - Copy all the files to the `$dist` folder.
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

gulp.task( 'dist-copy', [ 'dist-wipe' ], function ( cb ) {

	var config = require( '../config' );

	gulp.src( [ config.build + '**/*' ] )
		.pipe( gulp.dest( config.dist ) );

	cb();

} );
