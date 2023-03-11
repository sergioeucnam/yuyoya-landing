import User from '../db/Models/UserModel';
import dbConnection from '../db/connect';

export default async function handler(req, res) {
	await dbConnection();
	const users = await User.find();
	return res.status(200).json(users);
}
