/* globals extractRandomUser */

// jshint unused:false
function caricaPagina() {
	'use strict';
	var persona = extractRandomUser();

	var header = document.getElementById('profileName');
	var picture = document.getElementById('profilePicture');
	var gender = document.getElementById('dataGender');
	var address = document.getElementById('dataAddress');
	var email = document.getElementById('dataEmail');
	var age = document.getElementById('dataAge');
	var phone = document.getElementById('dataPhone');
	var cell = document.getElementById('dataCell');

	header.innerText = compactData(persona.name, ' ');
	address.innerText = compactData(persona.location, ', ');
	gender.innerText = persona.gender || 'ND';
	email.innerText = persona.email || 'ND';
	age.innerText = calcAge( persona.dob );
	phone.innerText = persona.phone || 'ND';
	cell.innerText = persona.cell || 'ND';
	picture.src = persona.picture.large || 'img/blank.jpg';
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
