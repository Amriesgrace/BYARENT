import mongoose from 'mongoose';
const url = 'mongodb+srv://admin:'+ process.env.mongo_pw +'@byarentdb-e1sdp.mongodb.net/test?retryWrites=true'

const db = mongoose.connect(url, {useNewUrlParser: true});


export default db;