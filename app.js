import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import homeRoutes from './server/routes/homes';
import userRoutes from './server/routes/users';
import orderRoutes from './server/routes/orders';
import indexRoute from './server/routes/index';

const app = express();
dotenv.config();

const url = 'mongodb+srv://admin:'+ process.env.mongo_pw +'@byarentdb-e1sdp.mongodb.net/test?retryWrites=true';


mongoose.connect(url, {useNewUrlParser: true})
    .then(result => {
        console.log('connection successful');
    })
    .catch(e => {
        console.log('connection error', e.message);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
	res.send('welcome to ByArente');
});

app.use('/api/users', userRoutes);
app.use('/api/homes', homeRoutes);
app.use('/api/orders', orderRoutes);

  

// send 404 error to error handler
app.use((req, res,next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

// error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
    next(error);
});

export default app;
