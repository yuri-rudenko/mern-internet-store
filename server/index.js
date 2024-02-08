import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { User, Basket, BasketDevice, Device, Type, Brand, Rating, TypeBrand, DeviceInfo } from './src/models/models.js';
import router from './src/routes/index.js';
import errorHandler from './src/middleware/ErrorHandlingMiddleware.js';
import multer from 'multer';
import storage from './src/storage.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router)
app.use(express.static('static/uploads'))

// Last middleware
app.use(errorHandler)

const start = async () => {
    try {
        
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
        await mongoose.connect(process.env.MONGODB_URI);

    } 

    catch (error) {
        console.log(error);
    }
};

start();