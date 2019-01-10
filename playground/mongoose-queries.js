const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5c370cc15baca115ecab80e211';
var id = '5c32fd2d208fc917accb8ad3';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then(todos => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then(todo => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id)
// 	.then(todo => {
// 		if (!todo) {
// 			return console.log('Id not found');
// 		}
// 		console.log('Todo', todo);
// 	})
// 	.catch(e => console.log(e));

User.findById(id)
	.then(user => {
		if (!user) {
			return console.log('Id not found');
		}
		console.log(JSON.stringify(user, undefined, 2));
	})
	.catch(err => console.log(err));
