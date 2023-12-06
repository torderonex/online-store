import {makeAutoObservable} from 'mobx'

export default class Store{
    
    isBlind = false; 

    constructor(){
        makeAutoObservable(this);
    }

    setIsBlind(bool){
        this.isBlind = bool;
    }

    

}