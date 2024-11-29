import {makeAutoObservable} from "mobx";

export default class BufferStore{
    constructor() {
        this._bufSectrA = {}
        this._bufSectrB = {}
        this._bufSectrC = {}
        this._bufSectrD = {}

        makeAutoObservable(this)
    }

    setBufSectA(SectA){
        this._bufSectrA = SectA
    }
    setBufSectB(SectB){
        this._bufSectrB = SectB
    }
    setBufSectC(SectC){
        this._bufSectrC = SectC
    }
    setBufSectD(SectD){
        this._bufSectrD = SectD
    }
    get bufSectrA (){
        return this._bufSectrA
    }
    get bufSectrB (){
        return this._bufSectrB
    }
    get bufSectrC (){
        return this._bufSectrC
    }
    get bufSectrD (){
        return this._bufSectrD
    }

}