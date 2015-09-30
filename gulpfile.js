/**
 * gulpfile.js - Entry point for the gulp task runner.
 *
 * `gulpfile.js` is the configuration file that gulp tries to read per default.
 *
 * Rather than manage one giant configuration file responsible for creating
 * multiple tasks, each task has been broken out into its own file in
 * `gulp/tasks`.
 *
 * Any files in that directory get automatically required below.
 *
 * To add a new task, simply add a new task file that directory.
 *
 * gulp/tasks/default.js specifies the default set of tasks to run when you run
 * `gulp`.
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

var gulp       = require( 'gulp' );
var requireDir = require( 'require-dir' );

// Require all tasks in gulp/tasks, including subfolders
requireDir( './gulp/tasks', { recurse: true } );
