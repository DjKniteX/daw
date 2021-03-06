"use strict";

wa.keysToScheduleData = function( keys ) {
	return Object.keys( keys ).map( function( key ) {
		key = keys[ key ];
		return {
			key: key.key.toUpperCase(),
			whenBeat: key.when,
			offsetBeat: key.offset,
			durationBeat: key.duration
		};
	} );
};
