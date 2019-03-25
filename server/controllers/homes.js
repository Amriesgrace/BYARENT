import mongoose from 'mongoose';
import Home from '../models/homes';

/**
 * @function createAsset
 * @description creates new Home
 * @param  {Object} req
 * @param  {Object} res
 * 
 */
const createAsset = (req, res) => {
	const home = new Home({
		_id : new mongoose.Types.ObjectId(),
		name : req.body.name,
		price : req.body.price,
		description: req.body.desc,
        pictures: req.body.images
	});
	home
		.save()
		.then(result => {
			return res.status(201).json({
                message: 'new home added',
                data: home
			})
		})	
		.catch(err => {
			return res.status(401).json({
				message: 'unable to post',
				error: err.message
			})
		});
	
};

/**
 * @function getAsset
 * @description gets single real estate
 * @param  {Object} req
 * @param  {Object} res
 */
const getAsset = (req, res) => {
    const reqId = req.params.id;
    Home.findById(reqId)
        .exec()
        .then(doc => {
            console.log(doc.length);
            // write if statement for if doc does not exist by length
            return res.status(200).json({
                message: 'single home data',
                data: doc
            });
        })
        .catch(e => {
            console.log(e)
            return res.status(404).json({
                message: 'unable to retrieve data',
                error: e.message
            });
        })
};
/**
 * @function getAssets
 * @description fetch all assets
 * @param  {Object} req
 * @param  {Object} res
 */
const getAssets = (req, res) => {
    Home.find()
        .exec()
        .then(doc => {
            console.log(doc);
            return res.status(200).json({
                message: "All homes",
                data: doc
            });
        })
        .catch(e => {
            console.log(e);
            return res.status(404).json({
                message: 'Unable to get home',
                error: e.message
            });
        })
};


/**
 * @function editAsset
 * @description update home asset
 * @param  {Object} req
 * @param  {Object} res
 */
const editAsset = (req, res) => {
    const reqId = req.params.id;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value
    }
    Home.update(
        { _id: reqId }, 
        { $set: updateOps })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: "Asset updated",
                data: result
            })
        })
        .catch(err => {
            return res.status(404).json({
                message: "unable  to update",
                error: err.message
            })
        })
}


/**
 * @function removeAsset
 * @description delete assets
 * @param  {Object} req
 * @param  {Object} res
 */
const removeAsset = (req, res) => {
    const reqId = req.params.id;
    Home.remove({_id: reqId})
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Home asset deleted'
            })
        })
        .catch(e=> {
            return res.status(500).json({
                message: 'unable to delete item',
                error: e.message
            })
        });
}

const Assets = {
    createAsset,
    getAssets,
	getAsset,
    editAsset,
    removeAsset
};

export default Assets;
