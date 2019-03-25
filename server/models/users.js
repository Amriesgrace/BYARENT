import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    role: {type:String, default: 'user'},
});

const usersModel = mongoose.model('Users', userSchema);

export default usersModel;
