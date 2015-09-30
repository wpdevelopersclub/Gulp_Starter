# Basic modular gulp setup for use in WordPress theme development.

This is the basic modular gulp starter setup that is used for [wpdevelopersclub.com](https://wpdevelopersclub.com) courses.

__Contributors:__ [Alain Schlesser](http://www.alainschlesser.com)
__License:__ [GPL-2.0+](http://www.gnu.org/licenses/gpl-2.0.html)

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

## Known Issues

* `gulp dist` has not been completed yet.
