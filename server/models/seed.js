import db from './db';

const createProductsTable = () => {
	db.createCollection('Products');
	console.log('Products table created');
};
const createRecordsTable = () => {
	db.createCollection('Users');
	console.log('users table created');
};

const seed = {
	createProductsTable,
	createRecordsTable,
};

export default seed;