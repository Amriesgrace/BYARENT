import mongoose from 'mongoose';

const homeSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type:String, required: true },
	price: { type:Number, required:true },
    description: { type:String, required:true },
    pictures: { type:String, required: true }
});


const homeModel = mongoose.model('Homes', homeSchema);
export default homeModel;
