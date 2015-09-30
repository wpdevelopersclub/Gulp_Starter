/**
 * help.js - Print a list of available gulp tasks.
 *
 * The output is divided into main tasks and subtasks. Subtasks are identified
 * by having either a `-`, a `_` or a `:` in their task name.
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

'use strict';

var gulp        = require( 'gulp' );
var taskListing = require( 'gulp-task-listing' );

gulp.task( 'help', taskListing );
