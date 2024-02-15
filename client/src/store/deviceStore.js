import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Smartphones"},
            {id: 2, name: "Fridges"},
            {id: 3, name: "Laptops"},
            {id: 4, name: "Keyboards"},
        ];
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Xiaomi"},
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 2, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 3, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 4, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},
            {id: 5, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'},

        ];

        this._selectedType = {};
        this._selectedBrand = {};

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

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get devices() {
        return this._devices;
    }

    get brands() {
        return this._brands;
    }

    get types() {
        return this._types;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}