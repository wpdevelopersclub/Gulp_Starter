/**
 * default.js - Default task to get executed when gulp is run without arguments.
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

var gulp  = require( 'gulp' );
var gutil = require( 'gulp-util' );

gutil.log( 'No task provided, launching default task.' );
gutil.log( 'Type "gulp help" to get a list of the available tasks.' );

gulp.task( 'default', [ 'watch' ] );
