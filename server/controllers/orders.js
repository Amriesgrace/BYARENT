import mongoose from 'mongoose';
import Order from '../models/order';
import Homes from '../models/homes';

/**
 * @function createOrder
 * @description create new order
 * @param  {Object} req
 * @param  {Object} res
 */
const createOrder = (req, res) =>{
    Homes.findById(req.body.itemId);
        .then(result => {
            if(!result){
                return res.status(401).json({
                    message: 'Unable to create new item order',
                    error: err.message
                });   
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                item_name: req.body.itemName,
                userId: req.body.userId,
                itemId: req.body.itemId,
                price: req.body.price,
            });
            return order.save()
        })
        .then(doc => {
            return res.status(201).json({
                message: 'New item order',
                data: doc
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: 'unable to create order',
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
    Order.find()
        .select("itemName userId itemId price _id")
        .populate('homes', 'name price')
        .exec()
        .then(docs => {
            if(!docs){
                return res.status(404).json({
                    status: 404,
                    message: 'order not found',
                });
            }
            const response = {
                count: docs.length,
                data: docs.map(doc => {
                    return {
                        id: doc._id,
                        name: doc.itemName,
                        userId: doc.userId,
                        itemId: doc.itemId,
                        price: doc.price,
                        request:{
                            type: 'GET',
                            url: 'http://localhost:8080/orders' + doc._id
                        }
                    }
                })
            }
            return res.status(200).json({
                message: 'All orders',
                data: response
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: 'unable to fetch orders',
                error: err.message
            })
        });
};


/**
 * @function getOrder
 * @description fetch single order
 * @param  {Object} req
 * @param  {Object} res
 */
const getOrder = (req, res) => {
    const reqId = req.params.id;
    Order.findById(reqId).select("_id itemId userId itemName price").exec()
        .then(docs => {
            if(!docs){
                return res.status(404).json({
                    message: 'order not found'
                })
            }
            return res.status(200).json({
                message: 'Your Order',
                data: docs
            });
        })
        .catch(err => {
            return res.status(500).json({
                message:'unable to fetch order',
                error: err.message
            });
        });
};


const Orders = {
    createOrder,
    getOrders,
    getOrder
};

export default Orders;
