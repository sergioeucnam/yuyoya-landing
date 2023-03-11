import mongoose from 'mongoose';
import dbConnection from '../connect';

const UserSchema = new mongoose.Schema({
	username: String,
	email: String,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
