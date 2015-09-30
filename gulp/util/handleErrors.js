/**
 * handleErrors.js - Error handler that sends notification and keeps gulp
 * running.
 *
 * Depending on the OS that gulp is run on, the `notify` command might have
 * different run-time dependencies to actually show a real notification.
 * @see https://www.npmjs.com/package/gulp-notify#requirements
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

var notify = require( 'gulp-notify' );

module.exports = function () {

	var args = Array.prototype.slice.call( arguments );

	// Send error to notification center with gulp-notify.
	notify.onError( {
		title: "Compile Error",
		message: "<%= error %>"
	} ).apply( this, args );

	// Keep gulp from hanging on this task.
	this.emit( 'end' );
};
