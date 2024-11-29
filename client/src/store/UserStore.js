import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = {}
        this._sector = {}
        this._line = {}
        this._workplace = {}

        // Сектора
        this._raspil = "RASPIL"
        this._pokleika = "POKLEIKA"
        this._prisadka = "PRISADKA"
        this._ypakovka = "YPAKOVKA"
        // Роли
        this._admin = "ADMIN"
        this._direktor = "DIREKTOR"
        this._tehnolog = "TEHNOLOG"
        this._master = "MASTER"
        this._stanock = "STANOCK"



        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setRole(role){
        this._role = role
    }
    setSector(sector){
        this._sector = sector
    }
    setLine(line){
        this._line = line
    }
    setWorkplace(workplace){
        this._workplace = workplace
    }


    get isAuth (){
        return this._isAuth
    }
    get user (){
        return this._user
    }
    get role (){
        return this._role
    }
    get sector (){
        return this._sector
    }
    get line (){
        return this._line
    }
    get workplace (){
        return this._workplace
    }
    // Сектора в системе
    get raspil (){
        return this._raspil
    }
    get pokleika (){
        return this._pokleika
    }
    get prisadka (){
        return this._prisadka
    }
    get ypakovka (){
        return this._ypakovka
    }
    // Ролив системе
    get admin (){
        return this._admin
    }
    get master (){
        return this._master
    }
    get stanock (){
        return this._stanock
    }
    get direktor (){
        return this._direktor
    }
    get tehnolog (){
        return this._tehnolog
    }


}