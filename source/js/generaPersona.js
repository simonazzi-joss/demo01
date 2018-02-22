// jshint unused:false
/* globals $ */

function extractPersona(callback) {
	'use strict';

	$.getJSON('https://randomuser.me/api/', function(data) {
		callback(data.results[0]);
	});
}