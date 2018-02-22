var Name = {
	title : 'Mr.',
	first : 'Mario',
	last : 'Rossi'
};
var Location = {
	street : 'Corso como',
	city : 'Milano',
	state : 'Italia',
	postcide : '26040'
};
var Login = {
	username : 'mario.rossi',
	password : 'Password',
	salt : 'ùùsfjknrsjhfg',
	md5 : 'long alfanumeric string',
	sha1 : 'longer alfanumeric string',
	sha256 : 'even long alfanumeric string'
};
var Id = {
	name : 'BSN',
	value : '04242023'
};
var Picture = {
	large : 'https://randomuser.me/api/portraits/men/83.jpg',
	medium : 'https://randomuser.me/api/portraits/med/men/83.jpg',
	thumbnail : 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
};

var Persona = {
	gender : 'male',
	name : Name,
	location : Location,
	email : 'mariorossi@rndmail.com',
	login : Login,
	dob : '1983-07-14 07:29:45',
	registered : '2010-09-24 02:10:42',
	phone : '0373-626262',
	cell : '331 351 2964',
	id : Id,
	picture : Picture,
	nat : 'IT'
};


var getRandomuser = function(nazione) {
	var tmpP = Persona;

	tmpP.nat = nazione;

	return tmpP;
};

console.log( getRandomuser('EN') );

function extractRandomUser() {
	var tmpP = Persona;
	return tmpP;
}
