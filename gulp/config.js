/**
 * config.js - Configuration file for the gulp task runner.
 *
 * For a basic project, the configuration file is the only file that should need
 * to be modified to get a working gulp setup.
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

/* -----------------------------------------------------------------------------
 * General Settings
 * -----------------------------------------------------------------------------
 *
 * Define your main folders here.
 *
 * Initial configuration is as follows:
 * You develop your source files in `$src`, gulp builds and watches everything
 * in `$dest` and your production files are built in `$dist` when you run
 * `gulp dist.
 */

/**
 * Name of the project.
 * This is used to build the package in `$dist`.
 * @type {String}
 */
var project        = 'projectname';

/**
 * Location of your source files.
 * This is relative to the `gulpfile.js` file.
 * @type {String}
 */
var src            = './';

/**
 * Target Location of your built files.
 * This is relative to the `gulpfile.js` file.
 * @type {String}
 */
var dest           = './';

/**
 * Target location of your library files.
 * This is relative to the `gulpfile.js` file.
 * @type {String}
 */
var lib            = dest + 'lib/';

/**
 * Target location of your distribution files.
 * This is relative to the `gulpfile.js` file.
 * @type {String}
 */
var dist           = './dist/' + project;

/* -----------------------------------------------------------------------------
 * Folder Structure
 * -----------------------------------------------------------------------------
 *
 * Configure folder structure details here.
 *
 * For basic projects, you will only need to check the different `xxxSubDir`
 * entries, the rest should provide sane defaults.
 */

/**
 * Name of the folder that regroups the static assets.
 * @type {String}
 */
var assetsDir    = 'assets/';

/* ------------------------------ Stylesheets ------------------------------- */

/**
 * Name of the folder that regroups the cascading stylesheets.
 * @type {String}
 */
var styleSubDir  = 'styles';

/**
 * Possible extensions for the cascading stylesheets.
 * @type {String}
 */
var styleExts    = '{sass,scss,css}';

/* ------------------------------ JavaScript -------------------------------- */

/**
 * Name of the folder that regroups the JavaScript files.
 * @type {String}
 */
var scriptSubDir = 'scripts';

/**
 * Possible extensions for the JavaScript files.
 * @type {String}
 */
var scriptExts   = 'js';

/* -------------------------------- Images ---------------------------------- */

/**
 * Name of the folder that regroups the images.
 * @type {String}
 */
var imageSubDir  = 'images';

/**
 * Possible extensions for the image files.
 * @type {String}
 */
var imageExts    = '{jpg,jpeg,gif,png,svg,ico}';

/* -----------------------------------------------------------------------------
 * Configuration
 * -----------------------------------------------------------------------------
 *
 * Here comes the actual configuration that is exported.
 *
 * The settings in here allow you to tweak the behavior of some of the modules
 * that are used by gulp.
 *
 * For basic projects, you will not need to modify anything below.
 */

var styleDir     = assetsDir + styleSubDir;
var scriptDir    = assetsDir + scriptSubDir;
var imageDir     = assetsDir + imageSubDir;

module.exports = {

/* ---------------------------- General Config ------------------------------ */

	project      : project,
	src          : src,
	dest         : dest,
	build        : dest,
	lib          : lib,
	dist         : dist,
	assetsDir    : assetsDir,

/* ----------------------------- Stylesheets -------------------------------- */

	styles: {
		exts:     styleExts,
		// ignore _partials
		buildSrc: [
			src + styleDir + '/**/*.' + styleExts,
			'!' + src + styleDir + '/**/_*.' + styleExts
		],
		dest:     dest + assetsDir,
		watchSrc: [
			src + styleDir + '/**/*.' + styleExts,
			'!' + src + styleDir + '/**/*.css'
		],
		base:     src + assetsDir,

		sassSettings: {
			style:          'expanded',
			sourceComments: 'map',
			imagePath:      '/' + imageDir // Used by the image-url helper
		},

		// Don't include cssnano, it is included automatically.
		postcssSettings: {
			processors: {
				'autoprefixer': {
					browsers: [
						'last 2 versions',
						'ie 9',
						'ios 6',
						'android 4'
					]
				},
				'css-mqpacker': {
					sort: true
				},
				'perfectionist': {
					cascade: true,
					format: 'expanded',
					indentSize: 4,
					maxAtRuleLength: 80,
					maxSelectorLength: 80,
					maxValueLength: 80,
					sourcemap: true
				}
			},
			lintSettings: {
				'rules': {
					// Add overrides to the default WordPress CSS standard rules
					// here.
					// @see http://stylelint.io/
				}
			}
		}
	},

/* ------------------------------ JavaScript -------------------------------- */

	scripts: {
		exts:     scriptExts,
		// Avoid recursive min.min.min.js
		buildSrc: [
			src + scriptDir + '/**/*.' + scriptExts,
			'!' + src + scriptDir + '/**/*.min.' + scriptExts
			],
		dest:     dest + assetsDir,
		watchSrc: src + scriptDir + '/**/*.' + scriptExts,
		base:     src + assetsDir
	},

/* -------------------------------- Images ---------------------------------- */

	images: {
		exts:     imageExts,
		buildSrc: src + imageDir + '/**/*.' + imageExts,
		dest:     dest + assetsDir,
		watchSrc: src + imageDir + '/**/*.' + imageExts,
		base:     src + assetsDir,
		imageminSettings: {
			optimizationLevel: 7
			, progressive:     true
			, interlaced:      true
		}
	},

/* --------------------------------- Clean ---------------------------------- */

	clean: {
		src: '[' + dest + '**/.DS_Store'
		     // An example of how to add files to be deleted
		     // ',' + dest + 'tmp/**/*'
		     + ']'
	}
};
