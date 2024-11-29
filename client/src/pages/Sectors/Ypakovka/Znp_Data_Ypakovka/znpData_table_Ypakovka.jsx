import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import ZnpDataService from "../../../../API/ZnpDataService";
import BuffService from "../../../../API/BufService";
import {useReactToPrint} from "react-to-print";
import classes from "../../../../style/ZnpDataTable.module.css";
import ZnpDataItemRaskroi from "../../Raskroi/Znp_Data_Raskroi/znpData_item_Raskroi";
import ModalWindow from "../../modal/ModalWindow";
import MyPrint from "../../Raskroi/print/my_print";
import ZnpDataItemYpakovka from "./znpData_item_Ypakovka";

const ZnpDataTableYpakovka = observer(() => {

    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
//===================== Блок с переменными ========================================

    const [buffers, setBuffers] = useState([])

    // 1 Переменная которая берет значения из базы
    const [getZnpData, setGetZnpData] = useState([])

    // 2 Переменная с закешированными данными
    const [caheZnpData, setСaheZnpData] = useState([])

    // 2 Переменная с которой работаем
    const [worckZnpData, setWorckZnpData] = useState([])


    // Отправка запроса при изменении стора
    useEffect(()=>{
        if (globalStore.znp.id != "") {
            // console.log("Запрос прошел")
            getAllZnpData(globalStore.znp.id)
            const i = setInterval(()=>{
                getAllZnpData(globalStore.znp.id)
            }, globalStore.sektorUpdateTimer)
            return () => {
                clearInterval(i)
            }

        }
    },[globalStore.znp.id])

    // Отдельная функция для обновления после изменений ----------------------------------------------
    async function specZopros(){
        getAllZnpData(globalStore.znp.id)
    }

    // Кешируем данные чтобы они не менялись просто так
    useMemo(()=>{
        setСaheZnpData(getZnpData)
    },[getZnpData])

    // Кешируем данные из буфера
    useMemo(()=>{
        getAllBuffers()
    },[])

//==================================================================================================================
// ===================================== Блок фильтров =============================================================

    // Значение поисковой строки
    const [searchQuery, setSearchQuery] = useState("")
    // Значение поисковой строки по принадлежности к упаковке
    const [numericQuery, setNumericQuery] = useState("")

    //==================================================================================
    //Фильтры по номеру части по раскрою, цвету, типу детали
    // 1) Получаем данные из знп, убираем повторы, заносим в фильтр оставшиеся варианты

    //Фильтр по номеру части по раскрою
    const [dataNumberFilter, setDataNumberFilter]= useState("")
    //Фильтр по типу детали
    const [dataTypeFilter, setDataTypeFilter]= useState("")
    //Фильтр по цвету
    const [dataСolorFilter, setDataСolorFilter]= useState("")

    let datNumberFilterSbor = []
    let datTypeFilterSbor = []
    let datСolorFilterSbor = []
    for (const znpDatanElement of caheZnpData) {

        datNumberFilterSbor.push(znpDatanElement.number_opening)
        datTypeFilterSbor.push(znpDatanElement.part)
        datСolorFilterSbor.push(znpDatanElement.color)

    }
    datNumberFilterSbor = [... new Set(datNumberFilterSbor)].sort()
    datTypeFilterSbor = [... new Set(datTypeFilterSbor)].sort()
    datСolorFilterSbor = [... new Set(datСolorFilterSbor)].sort()


    //Функция которая заполняет отфильтрованное состояние для распила
    useMemo(()=>{
        if (dataNumberFilter != "" && dataTypeFilter != "" && dataСolorFilter != ""){
            setWorckZnpData(caheZnpData.filter(fil => fil.number_opening == dataNumberFilter && fil.part == dataTypeFilter && fil.color == dataСolorFilter ))
        }else if (dataNumberFilter != "" && dataTypeFilter != "" && dataСolorFilter == ""){
            setWorckZnpData(caheZnpData.filter(fil =>  fil.number_opening == dataNumberFilter && fil.part == dataTypeFilter  ))
        }else if (dataNumberFilter != "" && dataTypeFilter == "" && dataСolorFilter != ""){
            setWorckZnpData(caheZnpData.filter(fil => fil.number_opening == dataNumberFilter && fil.color == dataСolorFilter ))
        }else if (dataNumberFilter == "" && dataTypeFilter != "" && dataСolorFilter != ""){
            setWorckZnpData(caheZnpData.filter(fil => fil.part == dataTypeFilter && fil.color == dataСolorFilter ))
        }else if (dataNumberFilter != "" && dataTypeFilter == "" && dataСolorFilter == ""){
            setWorckZnpData(caheZnpData.filter(fil =>  fil.number_opening == dataNumberFilter ))
        }else if (dataNumberFilter == "" && dataTypeFilter != "" && dataСolorFilter == ""){
            setWorckZnpData(caheZnpData.filter(fil =>  fil.part == dataTypeFilter ))
        }else if (dataNumberFilter == "" && dataTypeFilter == "" && dataСolorFilter != ""){
            setWorckZnpData(caheZnpData.filter(fil =>  fil.color == dataСolorFilter ))
        }else {
            setWorckZnpData(caheZnpData)
        }

    },[caheZnpData, dataNumberFilter,dataTypeFilter,dataСolorFilter])

    //Массив отфильтрованных значений по поисковой строке
    const sortedZnpData = useMemo(() => {
        if (searchQuery != "" ){
            // return cuttingData.filter(dat => dat.cut_size.includes(searchQuery))
            if (searchQuery.length == 1){
                return worckZnpData.filter(dat => dat.cut_size[0] === searchQuery[0] )
            } else if (searchQuery.length == 2){
                return worckZnpData.filter(dat => dat.cut_size[0] === searchQuery[0] && dat.cut_size[1] === searchQuery[1] )
            } else if (searchQuery.length == 3) {
                return worckZnpData.filter(dat => dat.cut_size[0] === searchQuery[0] && dat.cut_size[1] === searchQuery[1] && dat.cut_size[2] === searchQuery[2])
            }else if (searchQuery.length == 4) {
                return worckZnpData.filter(dat => dat.cut_size[0] === searchQuery[0] && dat.cut_size[1] === searchQuery[1] && dat.cut_size[2] === searchQuery[2] && dat.cut_size[3] === searchQuery[3])
            }else if (searchQuery.length == 5) {
                return worckZnpData.filter(dat => dat.cut_size[0] === searchQuery[0] && dat.cut_size[1] === searchQuery[1] && dat.cut_size[2] === searchQuery[2] && dat.cut_size[3] === searchQuery[3]&& dat.cut_size[4] === searchQuery[4])
            } else {
                return worckZnpData.filter(dat => dat.cut_size.includes(searchQuery))
            }

        }else if (numericQuery != "") {
            return worckZnpData.filter(dat => dat.packaging.includes(numericQuery))
        }
        return worckZnpData
    },[worckZnpData, searchQuery, numericQuery])



//===================Блок запросов==============================
// Запрос к бд с учетом сектора работы
    async function getAllZnpData(filZnpId){
        const znpGet = await ZnpDataService.getAll(filZnpId)
        setСaheZnpData(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
    }

    // Запрос к таблице буфера
    async function getAllBuffers(){
        const getBuffers = await BuffService.getAll()
        setBuffers(getBuffers.sort(function (a,b){
            return a.id-b.id
        }))
    }

//=========Блок модального окна ================================
//     Состояние активности модального окна
    const [modalActiv, setModalActiv] = useState(false)
    // Состояние с данными для модального окна
    const [modalData, setModalData] = useState({})
    // Функция на клик для получения данных для модального окна
    const modalDatas = (e, props)=>{
        setModalActiv(true)
        setModalData({
            classPalet:e.target.className,
            number_pallet:e.target.innerText,
            idZnpData:props.znpData.id
        })
    }



    return (
        <div>
            <div>
                <div className={"poisk"}>
                    <h1 className={"znp_data"}>Состав ЗНП</h1>

                    <div className={"filter_block"}>
                        {/*Фильтр по номеру части*/}
                        <select className={"fillSelect"} onChange={event => { setDataNumberFilter(event.target.value)}}>
                            <option value={""}>Выбрать номер части</option>
                            {
                                datNumberFilterSbor.map((datNumFil)=>
                                    <option key={datNumFil} value={datNumFil}>{datNumFil}</option>
                                )
                            }
                        </select>
                        {/*Фильтр по типу материала*/}
                        <select className={"fillSelect"} onChange={event => { setDataTypeFilter(event.target.value)}}>
                            <option value={""}>Выбрать тип детали</option>
                            {
                                datTypeFilterSbor.map((datTypeFil)=>
                                    <option key={datTypeFil} value={datTypeFil}>{datTypeFil}</option>
                                )
                            }
                        </select>
                        {/*Фильтр по цвету*/}
                        <select className={"fillSelect"} onChange={event => { setDataСolorFilter(event.target.value)}}>
                            <option value={""}>Выбрать цвет</option>
                            {
                                datСolorFilterSbor.map((datСolorFil)=>
                                    <option key={datСolorFil} value={datСolorFil}>{datСolorFil}</option>
                                )
                            }
                        </select>
                    </div>



                    <div>
                        <h3>Поиск по размеру</h3>
                        <input
                            className={"poisk_input"}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Поиск..."
                            type="text"
                        />
                    </div>
                    <div style={{margin:'0 0 0 20px'}}>
                        <h3>Поиск по принадлежности к упаковке</h3>
                        <input
                            className={"poisk_input"}
                            value={numericQuery}
                            onChange={e => setNumericQuery(e.target.value)}
                            placeholder="Поиск..."
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <table className={classes.tableData}>
                <thead className={classes.theadData}>
                <tr>

                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>
                    <th colSpan={3}>Палет 1</th>
                    <th colSpan={3}>Палет 2</th>
                    <th colSpan={3}>Палет 3</th>
                    <th colSpan={3}>Палет 4</th>
                    <th colSpan={3}>Палет 5</th>
                    <th colSpan={3}>Палет 6</th>
                    <th colSpan={3}>Палет 7</th>
                    <th colSpan={3}>Палет 8</th>
                    <th colSpan={3}>Палет 9</th>
                    <th colSpan={3}>Палет 10</th>
                    <th colSpan={3}>Палет 11</th>
                    <th colSpan={3}>Палет 12</th>
                    <th colSpan={3}>Палет 13</th>
                    <th colSpan={3}>Палет 14</th>
                    <th colSpan={3}>Палет 15</th>
                    <th colSpan={3}>Палет 16</th>
                    <th colSpan={3}>Палет 17</th>
                    <th colSpan={3}>Палет 18</th>
                    <th colSpan={3}>Палет 19</th>
                    <th colSpan={3}>Палет 20</th>
                    <th colSpan={3}>Палет 21</th>
                    <th colSpan={3}>Палет 22</th>
                    <th colSpan={3}>Палет 23</th>
                    <th colSpan={3}>Палет 24</th>
                    <th colSpan={3}>Палет 25</th>
                </tr>
                <tr>

                    <th>Номер части</th>
                    <th>Тип детали</th>
                    <th>Цвет</th>
                    <th><pre>            Название детали            </pre></th>
                    <th>Принадлежность к упаковке</th>
                    <th>Размер распила</th>
                    <th>Требуемый размер</th>
                    <th>Схема поклейки 1</th>
                    <th>Схема поклейки 2</th>
                    <th>Паз</th>
                    <th>Общее количество деталей</th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>

                    <th>Кол. </th>
                    <th colSpan={2}>Адрес </th>


                </tr>
                </thead>
                <tbody className={classes.tbodyData}>
                {globalStore.znpFilter == true ?(
                    sortedZnpData.map((worckZnpDat) =>
                        (
                            <ZnpDataItemYpakovka buffers={buffers} znpData={worckZnpDat} specZopros={specZopros} modalDatas={modalDatas}  key={worckZnpDat.id}  />
                        )
                    )
                ):(
                    <tr></tr>
                )}

                </tbody>
                <tfoot>
                <ModalWindow activ={modalActiv} setAcctiv={setModalActiv} modalData={modalData} specZopros={specZopros}/>
                </tfoot>
            </table>
        </div>

    );
});

export default ZnpDataTableYpakovka;