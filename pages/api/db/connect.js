import { connect } from 'mongoose';

const dbConnection = async () => {
	try {
		const {connection} = await connect(
			process.env.MONGODB_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		);
		console.log(`DB connected on  ${connection.host}`);
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
export default dbConnection;
