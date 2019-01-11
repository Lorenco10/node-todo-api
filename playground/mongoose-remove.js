const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.deleteMany({}).then(result => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('5c38d0c2292d7ef8b9ca3564').then(todo => {
	console.log(todo);
});
