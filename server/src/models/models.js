import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: "USER"},
    basket: {type: mongoose.Schema.Types.ObjectId, ref: 'Basket'},
    ratings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Rating'}],
}, { timestamps: true });

const basketSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const basketDeviceSchema = new mongoose.Schema({
    basket: {type: mongoose.Schema.Types.ObjectId, ref: 'Basket'},
    device: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
}, { timestamps: true });

const deviceSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
    rating: { type: Number, default: 0 },
    img: { type: String, required: true },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    basketDevices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BasketDevice' }],
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
    deviceInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DeviceInfo' }] // Add this line
}, { timestamps: true });

const typeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    devices: [{type: mongoose.Schema.Types.ObjectId, ref: 'Device'}],
    brands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }],
}, { timestamps: true });

const brandSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    devices: [{type: mongoose.Schema.Types.ObjectId, ref: 'Device'}],
    types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
}, { timestamps: true });

const ratingSchema = new mongoose.Schema({
    rate: {type: Number, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    device: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
}, { timestamps: true });

const deviceInfoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' }
}, { timestamps: true });

const typeBrandSchema = new mongoose.Schema({

});

const User = mongoose.model('User', userSchema);
const Basket = mongoose.model('Basket', basketSchema);
const BasketDevice = mongoose.model('BasketDevice', basketDeviceSchema);
const Device = mongoose.model('Device', deviceSchema);
const Type = mongoose.model('Type', typeSchema);
const Brand = mongoose.model('Brand', brandSchema);
const Rating = mongoose.model('Rating', ratingSchema);
const DeviceInfo = mongoose.model('DeviceInfo', deviceInfoSchema);
const TypeBrand = mongoose.model('TypeBrand', typeBrandSchema);

export {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
};