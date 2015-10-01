# Basic modular gulp setup for use in WordPress theme development.

This is the basic modular gulp starter setup that is used for [wpdevelopersclub.com](https://wpdevelopersclub.com) courses.

- __Contributors:__ [Alain Schlesser](http://www.alainschlesser.com)
- __License:__ [GPL-2.0+](http://www.gnu.org/licenses/gpl-2.0.html)

## Features

### General

* Modular structure that is easy to extend, with each task in a separate file.
* Single configuration file that allows a quick adaptation to the folder structure of a project.
* Error handling that pops up notifications and keeps the watch task running on error.

### Styles

* Linting through [Stylelint](http://stylelint.io/) with [WordPress standards](https://github.com/stylelint/stylelint-config-wordpress) preconfigured (overrideable in `config.js`).
* Compilation of Sass styles with [libSass](http://sass-lang.com/libsass).
* Post-processing through [PostCSS](https://github.com/postcss/postcss). Plugins included by default:
	* [Autoprefixer](https://github.com/postcss/autoprefixer) to add browser vendor prefixes;
	* [CSS-MQPacker](https://www.npmjs.com/package/css-mqpacker) to regroup media queries;
	* [Perfectionist](https://github.com/ben-eb/perfectionist) to prettify generated CSS.
* Check browser support of generated CSS against Autoprefixer settings through [doiuse](https://github.com/anandthakker/doiuse).
* Minification through [cssnano](http://cssnano.co/) (both minified & non-minified version are usable).
* Sourcemaps for easy debugging provided by [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps).

### Scripts

* Linting through [JSHint](http://jshint.com/) with [WordPress standards](https://develop.svn.wordpress.org/trunk/.jshintrc) preconfigured.
* Minification through [UglifyJS](http://lisperator.net/uglifyjs/)  (both minified & non-minified version are usable).

### Images

* Optimization through [ImageMin](https://github.com/imagemin/imagemin).

## Requirements

The main requirements to be able to use this are:

* [Node.js](https://nodejs.org/) - tested with 2.11.3
* [gulp](http://gulpjs.com/) - tested with 3.9

## Installation

The contents of this repository are meant to be dropped inside the root folder of an existing project, so that the `gulpfile.js` resides at the root of the project.

The file `gulp/config.js` should be modified so that it fits the project's folder structure.

To add the dependencies that are needed for the individual gulp tasks to your project's `package.json` ([which should already exist](https://docs.npmjs.com/cli/init)), run the following command in your project's root folder:

```
cat gulp/dependencies | xargs npm install --save-dev
```

## Usage

To get an overview of the available tasks that are provided with this starter setup, run the following command in your project's root folder:

```
gulp help
```

The default task that will run when no specific option is provided is the `watch` task.

## Special Notes

### style.css

The stylesheet gets compiled to a `style.css` & `style.min.css`, but they do not get moved to the theme root folder.

Although WordPress requires a file called `style.css` inside the theme root folder, this goes against several best practices. That's why this setup will provide both minified & non-minified versions of the stylesheet in the proper assets folder (defaults to `assets/styles/style.css`).

You should provide a stub file inside the theme's root folder with the necessary theme metadata comments, so that WordPress correctly recognizes the theme.

To load the correct stylesheet on the frontend, add the following code to your theme:
```PHP
add_filter( 'stylesheet_uri', 'wpdc_stylesheet_uri', 10, 2 );
/**
 * Modify location of main stylesheet
 * N.B.: style.css in the theme's root is still needed to provide WordPress
 * with the necessary metadata about the theme
 */
function wpdc_stylesheet_uri( $stylesheet_uri, $stylesheet_dir_uri ) {

	// TODO: Adapt this to your theme's folder structure
	$folder = '/assets/styles/';

	// TODO: Adapt this to your theme's filenames
	$name = 'style';

	$suffix = defined( SCRIPT_DEBUG ) ? '.css' : '.min.css';

	return $stylesheet_dir_uri . $folder . $name . $suffix;
}
```

## Known Issues

* `gulp dist` has not been completed yet.
