/**
 * watch.js - Watch for file changes to relaunch necessary tasks.
 *
 * The default task runs `watch` which launches an entire build cycle as its
 * dependent subtask.
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

gulp.task( 'watch', [ 'build' ], function () {

	var config = require( '../config' );

	gulp.watch( config.styles.watchSrc, [ 'styles' ] );
	gulp.watch( config.scripts.watchSrc, [ 'scripts' ] );
	gulp.watch( config.images.watchSrc, [ 'images' ] );

} );
