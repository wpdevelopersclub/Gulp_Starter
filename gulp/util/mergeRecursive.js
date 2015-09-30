/**
 * mergeRecursive.js - Merge two objects' properties recursively.
 *
 * @package     WPDC gulp Starter
 * @since       1.0.0
 * @author      Alain Schlesser <alain.schlesser@gmail.com>
 * @link        http://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

function MergeRecursive( objectA, objectB ) {

	for ( var p in objectB ) {
		try {
			// Property in destination object set; update its value.
			if ( objectB[ p ].constructor == Object ) {
				objectA[ p ] = MergeRecursive( objectA[ p ], objectB[ p ] );

			} else {
				objectA[ p ] = objectB[ p ];

			}

		} catch ( e ) {
			objectA[ p ] = objectB[ p ];
		}
	}

	return objectA;
}

module.exports = MergeRecursive;
