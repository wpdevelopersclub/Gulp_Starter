/**
 * dist.js - Package everything up for distribution.
 *
 * `gulp dist` creates a clean distribution package under `$dist` after running
 * build, clean, and wipe in sequence.
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

gulp.task( 'dist', [ 'dist-images' ] );
