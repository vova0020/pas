import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from "../../../style/StanckiStyle.module.css";
import {Context} from "../../../index";
import BuffService from "../../../API/BufService";
import StanckiServis from "../../../API/StanckiServis";
import ZnpDataStanckiService from "../../../API/ZnpDataStanckiService";
import StanockItem from "./stanock_item";
import {observer} from "mobx-react-lite";


const StanockTable = observer ( () => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
//===================== Блок с переменными ========================================

    const [buffers, setBuffers] = useState([])
    //Данный по станку
    const [stanock, setStanock] = useState([])

     // 1 Переменная которая берет значения из базы
    const [getZnpDataStanock, setGetZnpDataStanock] = useState([])

    // 2 Переменная с которой работаем
    const [worckZnpDataStanock, setWorckZnpDataStanock] = useState([])


    // Отправка запроса при изменении стора
    useEffect(()=>{

            getAllZnpDataStanock(user.workplace)

            const i = setInterval(()=>{
                getAllZnpDataStanock(user.workplace)
            }, globalStore.sektorUpdateTimer)
            return () => {
                clearInterval(i)
            }

    },[user.workplace])

    // Кешируем данные чтобы они не менялись просто так
    useMemo(()=>{
        setWorckZnpDataStanock(getZnpDataStanock)
    },[getZnpDataStanock])

    // Кешируем данные из буфера
    useMemo(()=>{
        getAllBuffers()

    },[])

    // Кешируем данные из буфера по данным станка
    useMemo(()=>{

            getAllStanock(user.workplace)

    },[user.workplace])


    async function specZapros(){
        getAllZnpDataStanock(user.workplace)
    }

//===================Блок запросов==============================
// Запрос к бд с учетом сектора работы
    async function getAllZnpDataStanock(stanockName) {
        const zaprosGet = await ZnpDataStanckiService.getAll(stanockName)
        setGetZnpDataStanock(zaprosGet.sort(function (a, b) {
            return (a.priority - b.priority) || (a.id - b.id)
        }))
    }

    // Запрос к таблице буфера
    async function getAllBuffers(){
        const getBuffers = await BuffService.getAll()
        setBuffers(getBuffers.sort(function (a,b){
            return a.id-b.id
        }))
    }

    // Запрос к бд со списком станков для того чтобы узнать какой сектор
    async function getAllStanock(stanockName) {
        const zaprosGet = await StanckiServis.getAll(stanockName)
        setStanock(zaprosGet[0])

    }


    return (
        <div>
            <table className={classes.StTable}>
                <thead className={classes.StTableThead}>
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
                    <th className={"th_def"}></th>
                    <th className={"th_def"}></th>

                    <th colSpan={4}>Палет</th>

                </tr>
                <tr className={classes.TR}>

                    <th>Приоритет</th>
                    <th>ЗНП</th>
                    <th>Номер части</th>
                    <th>Тип детали</th>
                    <th>Цвет</th>
                    <th><pre>            Название детали            </pre></th>
                    <th>Принадлежность к упаковке</th>
                    <th>Требуемый размер</th>
                    <th>Схема поклейки 1</th>
                    <th>Схема поклейки 2</th>
                    <th>Паз</th>
                    <th>Палет</th>
                    <th>Общее количество деталей</th>
                    <th></th>


                    <th colSpan={1}>Кол. </th>
                    <th colSpan={2}>Адрес </th>
                </tr>
                </thead>
                <tbody className={classes.tbodyData}>
                {worckZnpDataStanock.map((worckDataStanock)=>
                    <StanockItem specZapros={specZapros} buffers={buffers} stanock={stanock} worckDataStanock={worckDataStanock} key={worckDataStanock.id}  />


                )}



                </tbody>
            </table>
        </div>
    );
});

export default React.memo(StanockTable);