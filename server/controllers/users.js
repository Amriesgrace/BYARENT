import mongoose from 'mongoose';
import User from '../models/users';

/**
 * @function createUser
 * @description creates new user
 * @param  {Object} req
 * @param  {Object} res
 */
const createUser = (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    user.save()
        .then(result => {
            return res.status(201).json({
                message: 'new user created',
                data: result
            });
        })
        .catch(err => {
            return res.status(500).json({
                message: 'error creating user',
                error: err.message,
            });
        });
};
/**
 * @function getUsers 
 * @description fetch all users
 * 
 * @param  {Object} req
 * @param  {Object} res
 */
const getUsers = (req, res) => {
    User.find().exec()
        .then(doc => {
            return res.status(200).json({
                message: 'all users',
                data:doc
            });
        })
        .catch(err => {
            return res.status(404).json({
                message: 'unable to find users',
                error: err.message
            });
        });
};


/**
 * @function getUser
 * @description fetch single user
 * @param  {Object} req
 * @param  {Object} res
 */
const getUser = (req, res) => {
    User.find().exec()
        .then(doc => {
            if(doc.length >= 1){
                return res.status(200).json({
                    message: 'your user',
                    data: doc
                });
            }   
        })
        .catch(err => {
            return res.status(404).json({
                message: 'unable to fetch user',
                error: err.message
            });
        });
};


const Users = {
    getUsers,
    getUser,
    createUser
};

export default Users;
