// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, db) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}

		console.log('Connected to mongoDB server');

		// db.collection('Todos')
		// 	.find({
		// 		_id: new ObjectID('5c30c4b085214a056cf7a87a')
		// 	})
		// 	.toArray()
		// 	.then(docs => {
		// 		console.log('Todos');
		// 		console.log(JSON.stringify(docs, undefined, 2));
		// 	})
		// 	.catch(err => {
		// 		console.log('Uanble te fetch todos', err);
		// 	});

		db.collection('Todos')
			.find()
			.count()
			.then(count => {
				console.log(`Todos count: ${count}`);
			})
			.catch(err => {
				console.log('Unable te fetch todos', err);
			});
		// db.close();
	}
);
