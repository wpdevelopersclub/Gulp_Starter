/**
 * styles-lint.js - Run CSS through a linter.
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

gulp.task( 'styles-lint', function () {

	var filter          = require( 'gulp-filter' );
	var postcss         = require( 'gulp-postcss' );
	var stylelint       = require( 'stylelint' );
	var reporter        = require( 'postcss-reporter' );
	var configWordPress = require( 'stylelint-config-wordpress' );
	var mergeRecursive  = require( '../util/mergeRecursive' );
	var config          = require( '../config' ).styles;

	var sassFilter = filter( [ '**/*.sass', '**/*.scss' ], { restore: false } );

	config.postcssSettings.lintSettings.rules = mergeRecursive(
		configWordPress.rules,
		config.postcssSettings.lintSettings.rules
	);

	return gulp.src( config.buildSrc, { base: config.base } )

		.pipe( sassFilter )

		.pipe( postcss( [
			stylelint( config.postcssSettings.lintSettings ),
			reporter( { clearMessages: true } )
		] ) );

} );
