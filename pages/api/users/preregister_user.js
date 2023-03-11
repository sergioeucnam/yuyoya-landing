import User from '../db/Models/UserModel';
import dbConnection from '../db/connect';

export default async function handler(req, res) {
	const { username, email } = req.body;
	if (!username || !email) {
		const result = {
			status: 400,
			message: 'Faltan datos',
		};
		return res.status(400).json(result);
	}

	await dbConnection();

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			const result = {
				status: 400,
				message: 'El usuario ya existe',
			};
			return res.status(400).json(result);
		}
	} catch (error) {}

	try {
		const user = new User({
			username,
			email,
		});
		await user.save();
		const result = {
			status: 200,
			message: 'Usuario registrado exitosamente',
		};
		return res.status(200).json(result);
	} catch (error) {
		const result = {
			status: 500,
			message: 'Error al registrar usuario',
		};
		return res.status(500).json(result);
	}
}
