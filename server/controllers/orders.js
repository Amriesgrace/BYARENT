import mongoose from 'mongoose';
import Order from '../models/order';

/**
 * @function createOrder
 * @description create new order
 * @param  {Object} req
 * @param  {Object} res
 */
const createOrder = (req, res) =>{
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        item_name: req.body.itemName,
        userId: req.body.userId,
        itemId: req.body.itemId,
        price: req.body.price,
    });
    order.save()
        .then(doc => {
            return res.status(201).json({
                message: 'New item order',
                data: doc
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: 'Unable to create new item order',
                error: err.message
            });
        });
};

/**
 * @function getOrders
 * @description fetch list of orders
 * @param  {Object} req
 * @param  {Object} res
 */
const getOrders = (req, res) => {

};


/**
 * @function getOrder
 * @description fetch single order
 * @param  {Object} req
 * @param  {Object} res
 */
const getOrder = (req, res) => {
    
};


const Orders = {
    createOrder,
    getOrders,
    getOrder
};

export default Orders;
