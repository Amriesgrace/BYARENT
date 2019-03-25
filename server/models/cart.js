
import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    _itemId: Number,
    itemName: String,
    userId: Number
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel;
