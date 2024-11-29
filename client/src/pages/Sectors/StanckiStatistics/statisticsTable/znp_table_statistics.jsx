import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from "../../../../style/StanckiStyle.module.css";
import StanockItem from "../../../Stancki/Znp_Data_stancki/stanock_item";
import {Context} from "../../../../index";
import ZnpDataStanckiService from "../../../../API/ZnpDataStanckiService";
import BuffService from "../../../../API/BufService";
import StanckiServis from "../../../../API/StanckiServis";
import ZnpDataItemStatistics from "./znp_data_item_statistics";

const ZnpTableStatistics = ({stanock, sectors}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

//===================== Блок с переменными ========================================
    // 1 Переменная которая берет значения из базы
    const [getZnpDataStanock, setGetZnpDataStanock] = useState([])

    // 2 Переменная с которой работаем
    const [worckZnpDataStanock, setWorckZnpDataStanock] = useState([])

    // Отправка запроса при изменении стора
    useEffect(()=>{

        getAllZnpDataStanock(stanock.stanock)

        const i = setInterval(()=>{
            getAllZnpDataStanock(stanock.stanock)
        }, globalStore.sektorUpdateTimer)
        return () => {
            clearInterval(i)
        }

    },[])

    // Кешируем данные чтобы они не менялись просто так
    useMemo(()=>{
        setWorckZnpDataStanock(getZnpDataStanock)
    },[getZnpDataStanock])



    async function specZapros(){
        getAllZnpDataStanock(stanock.stanock)
    }

//===================Блок запросов==============================
// Запрос к бд с учетом сектора работы
    async function getAllZnpDataStanock(stanockName) {
        const znpGet = await ZnpDataStanckiService.getAll(stanockName)
        setGetZnpDataStanock(znpGet.sort(function (a, b) {
            return (a.priority - b.priority) || (a.id - b.id)
        }))
    }



    return (
        <div>
            <table className={classes.StTable}>
                <thead className={classes.StTableThead}>
                <tr className={classes.TR}>

                    <th>Приоритет</th>
                    <th>ЗНП</th>
                    <th>Номер части</th>
                    <th>Тип детали</th>
                    <th>Цвет</th>
                    <th>Название детали</th>
                    <th>Принадлежность к упаковке</th>
                    <th>Требуемый размер</th>
                    <th>Схема поклейки 1</th>
                    <th>Схема поклейки 2</th>
                    <th>Палет</th>
                    <th>Кол. </th>
                </tr>
                </thead>
                <tbody className={classes.tbodyData}>
                {worckZnpDataStanock.map((worckDataStanock)=>
                    <ZnpDataItemStatistics specZapros={specZapros} worckDataStanock={worckDataStanock} key={worckDataStanock.id} stanock={stanock} sectors={sectors}  />
                )}

                </tbody>
            </table>
        </div>
    );
};

export default ZnpTableStatistics;