import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User, Basket, BasketDevice, Device, Type, Brand, Rating, TypeBrand, DeviceInfo } from './src/models/models.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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