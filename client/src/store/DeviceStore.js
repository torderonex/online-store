import {makeAutoObservable} from 'mobx-react-lite'

export default class DeviceStore{
    
    devices = []

    constructor(){
        makeAutoObservable(this);
    }

    get devices(){
        return this.devices;
    }

    setDevices(devices){
        this.devices = devices;
    }

}