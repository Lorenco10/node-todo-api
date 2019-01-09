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
		// 	.findOneAndUpdate(
		// 		{
		// 			_id: new ObjectID('5c32e882c36fc63352360437')
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true
		// 			}
		// 		},
		// 		{
		// 			returnOriginal: false
		// 		}
		// 	)
		// 	.then(result => {
		// 		console.log(result);
		// 	});

		db.collection('Users')
			.findOneAndUpdate(
				{
					_id: new ObjectID('5c30c60be148d00c1c09b08a')
				},
				{
					$set: {
						name: 'Mike'
					},
					$inc: {
						age: 1
					}
				},
				{
					returnOriginal: false
				}
			)
			.then(result => {
				console.log(result);
			});

		// db.close();
	}
);
