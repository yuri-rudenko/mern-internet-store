import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Smartphones"},
            {id: 2, name: "Fridges"},

        ];
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"}
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},

        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get devices() {
        return this._devices
    }

    get brands() {
        return this._brands
    }

    get types() {
        return this._types
    }
}