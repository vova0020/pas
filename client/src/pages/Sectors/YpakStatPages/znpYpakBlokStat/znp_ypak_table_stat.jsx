import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from "../../../../style/ZnpTable.module.css";
import ZnpYpakService from "../../../../API/Znp_ypakService";

import {Context} from "../../../../index";
import ZnpYpakItemStat from "./znp_ypak_item_stat";

const ZnpYpakTableStat = ({znpIdYpak}) => {
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    //Первоначальные данные из бд
    const [startYpakData, setStartYpakData] = useState([])
    // Данные с которыми работаем
    const [workYpakData, setWorkYpakData] = useState([])

// ============================ Обработка запросов ==================
    useEffect(()=>{
        if (znpIdYpak.id > 0){
            getAllZnpYpak(znpIdYpak.id)
        }
    },[znpIdYpak])

    useMemo(()=>{
        setWorkYpakData(startYpakData)
    },[startYpakData])


//============================ Запросы к бд  ===========================================
    // Гетт запрос к таблице знп упаковка
    async function getAllZnpYpak(fl){
        const znpGet = await ZnpYpakService.getAll(fl)
        setStartYpakData(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
    }
    async function specZapros(){
        getAllZnpYpak(znpIdYpak.id)
    }

    return (
        <div>
            <table className={classes.tableYpakStat}>
                <thead className={classes.thead}>
                <tr><th>ЗНП №</th><th>Упаковка</th><th>Принадлежность к упаковке</th><th>Заказ</th><th>S ДСП на 1 упак.</th><th>Эквивалент на упаковку</th><th>Готово к упаковке</th><th>Всего упакованно</th> <th>Упакованно в смену кол.</th><th>Дата</th><th>Упакованно в смену кол.</th><th>Дата</th><th>Упакованно в смену кол.</th><th>Дата</th><th>Упакованно в смену кол.</th><th>Дата</th><th>Упакованно в смену кол.</th><th>Дата</th><th>Упакованно в смену кол.</th><th>Дата</th></tr>

                </thead>
                <tbody>
                    {workYpakData.map((ypakItem)=>
                        <ZnpYpakItemStat znpIdYpak={znpIdYpak} ypakItem={ypakItem} specZapros={specZapros} />

                    // <ZnpYpakItemYpack znpIdYpak={znpIdYpak} ypakItem={ypakItem} specZapros={specZapros}/>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default React.memo(ZnpYpakTableStat);