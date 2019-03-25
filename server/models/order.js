import mongoose from 'mongoose';
// import Homes from './homes';

const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    itemId: { type:mongoose.Schema.Types.ObjectId, ref: 'Homes', required: true },
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'Users', required:true },
    itemName: {type:String, required: true },
    price: {type: Number },
    
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;

