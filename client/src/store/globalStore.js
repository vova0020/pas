import {makeAutoObservable} from "mobx";

export default class GlobalStore{
    // Данные по знп которое выбрали
    _znp = {
        id:"",
        Number:"",
        Model:"",
        Edging:""
    }
    // булевое значение для отображения нужного знп из списка
    _znpFilter = false
    // Статуc модального окна
    _modalWindowStatus = false

    // Статуc селекта окна
    _selectActivePrisadka = false
    _selectActivePokleika = false
    _selectActiveYpakZnp = false

    // Статусы для кнопки таблицы
    _workStatusRaspil ="В работе Распил"
    _workStatusPokleika ="В работе Поклейка"
    _workStatusPrisadka ="В работе Присадка"
    _workStatusYpakovka ="Закрыто"
    _workStatusStanock ="В работе "
    _readyStatusStanock ="Готово "

    _cellA = "2A"
    _cellB = "2B"
    _cellC = "2C"
    _cellD = "2D"
    _cellA0 = "A-0"
    _cellB0 = "B-0"
    _cellC0 = "C-0"
    _cellD0 = "D-0"

    // Таймер для обновления участков
    _sektorUpdateTimer = 4500
    _sektorUpdateTimerBuffer = 7000
    _sektorUpdateTimerYpakBlok = 3000


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    constructor() {
        makeAutoObservable(this)
    }

    // Функции на изменение данных
    setZnp(Znp){
        if (Znp == null){
            this._znp.id = ""
            this._znp.Number = ""
            this._znp.Model = ""
            this._znp.Edging = ""
        } else {
            this._znp.id = Znp.id
            this._znp.Number = Znp.znp_number
            this._znp.Model = Znp.model
            this._znp.Edging = Znp.edging
        }
    }
    setZnpFilter(bool){
        this._znpFilter = bool
    }
    // Модальное окно
    setModalWindowStatus(bool){
        this._modalWindowStatus = bool
    }
    // Статусы селекта
    setSelectActivePrisadka(bool){
        this._selectActivePrisadka = bool
    }
    setSelectActivePokleika(bool){
        this._selectActivePokleika = bool
    }
    setSelectActiveYpakZnp(bool){
        this._selectActiveYpakZnp = bool
    }

    // Функции на получение данных
    get znp (){
        return this._znp
    }
    get znpFilter (){
        return this._znpFilter
    }

    // Активация модального окна участков
    get modalWindowStatus (){
        return this._modalWindowStatus
    }

    // Активация селекта участков
    get selectActivePrisadka (){
        return this._selectActivePrisadka
    }
    get selectActivePokleika (){
        return this._selectActivePokleika
    }
    get selectActiveYpakZnp (){
        return this._selectActiveYpakZnp
    }

    // Статус в работе для участков
    get workStatusRaspil (){
        return this._workStatusRaspil
    }
    get workStatusPokleika (){
        return this._workStatusPokleika
    }
    get workStatusPrisadka (){
        return this._workStatusPrisadka
    }
    get workStatusYpakovka (){
        return this._workStatusYpakovka
    }
    get workStatusStanock (){
        return this._workStatusStanock
    }
    get readyStatusStanock (){
        return this._readyStatusStanock
    }

    get cellA(){
        return this._cellA
    }
    get cellB(){
        return this._cellB
    }
    get cellC(){
        return this._cellC
    }
    get cellD(){
        return this._cellD
    }
    get cellA0(){
        return this._cellA0
    }
    get cellB0(){
        return this._cellB0
    }
    get cellC0(){
        return this._cellC0
    }
    get cellD0(){
        return this._cellD0
    }


    // Получение значение таймера
    get sektorUpdateTimer (){
        return this._sektorUpdateTimer
    }
    get sektorUpdateTimerBuffer (){
        return this._sektorUpdateTimerBuffer
    }
    get sektorUpdateTimerYpakBlok (){
        return this._sektorUpdateTimerYpakBlok
    }


}