const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});s
// });

var hashedPassword =
	'$2a$10$B74Rn/ektnq0KxgfOqxZuOWwc.ZKReErgCl1xEOvPLjE1o7LbsegS';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});

// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);
// jwt.verify

// var message = 'I am user numer 3';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
