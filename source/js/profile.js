/* globals $ */

// jshint unused:false
function caricaPagina() {
	'use strict';

	$.getJSON('https://randomuser.me/api/', function(data) {
		var persona = data.results[0];

		console.log( persona );

		$('#profileName').text( compactData(persona.name, ' ') );
		$('#dataAddress').text( compactData(persona.location, ', ') );
		$('#dataGender').text( persona.gender || 'ND' );
		$('#dataEmail').text( persona.email || 'ND' );
		$('#dataAge').text( calcAge( persona.dob ) );
		$('#dataPhone').text( persona.phone || 'ND' );
		$('#dataCell').text( persona.cell || 'ND' );
		$('#profilePicture').attr('src', persona.picture.large );

		$('main').fadeIn();
	});
}

function calcAge(strDate){
	'use strict';
	var today = new Date();
	var dob = new Date(strDate);
	var res = ( today.getFullYear() - dob.getFullYear() ) ;						//rimuovo 1 anno nel caso la persona non abbia ancora compiuto gli anni

	//Controlla se il mese è già passato						controlla se il giorno è già passato
	if( (today.getMonth() < dob.getMonth())	|| (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) ) {
		res -= 1;
	}
	if(!isNaN(res)) {															//se vengono dati valori errati in input questo li puslisce
		return res;
	} else {
		return 'ND';
	}
}

function compactData(data, separator) {
	'use strict';
	var res = '';
	for(var key in data) {
		if(data[key]) {
			res += data[key] + separator;
		}
	}
	return res.slice(0, -separator.length);
}
