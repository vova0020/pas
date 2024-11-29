import React, {useContext, useEffect, useMemo, useState} from 'react';
import ZnpItem from "./znp_item";
import classes from "../../../style/ZnpTable.module.css";
import ZnpService from "../../../API/ZnpService";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import ZnpYpakTable from "./ypakBlok/znp_ypak_table";


const ZnpTable = observer( ({sectors}) => {

    // Получаем список знп и выбираем нужный, так же обновления идут здесь отдельно

//================Блок с данными о знп===================================================
//     Данные из глобального хранилища
    const {globalStore} = useContext(Context)


//     Данные которые получаем из базы данных
    const [getZnp, setGetZnp] = useState([])

    //Данные которые кешируем и с которыми работаем дальше
    const [getWorckZnp, setGetWorckZnp] = useState([])



    //    Данные для фильтра
    // const [znpFilter, setZnpFilter] = useState(true)

    //Блок с запросами
    // Гетт запрос к таблице знп
    async function getAllZnp(){
        const znpGet = await ZnpService.getAll()
        setGetZnp(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
    }
    async function getOneZnp(idZnp){
        const znpGet = await ZnpService.getOne(idZnp)
        setGetZnp(znpGet)
        console.log(znpGet)
    }
    useEffect(()=>{
        getAllZnp()
        // getOneZnp(1)
    },[])
    useMemo(()=>{
        setGetWorckZnp(getZnp)
        // console.log(getZnp)
    },[getZnp])

// Функция выбора знп
    async  function  chooseZnp(znp){
        await globalStore.setZnp(znp)
        await globalStore.setZnpFilter(true)
        await getOneZnp(znp.id)
    }

    // Возврат к изначальному значению
    async function returnValue(){
        const znpGet = await ZnpService.getAll()
        await setGetZnp(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
        await globalStore.setZnp(null)

        await globalStore.setZnpFilter(false)
    }


    useEffect(()=>{
        // console.log(globalStore.znpFilter)
        // console.log(globalStore.znpFilter)
    })

    const [znpIdYpak,setZnpIdYpak] = useState([])

   async function getZnpId(znp){
        // console.log(znp)
       setZnpIdYpak(znp)
    }


    return (
        <div style={{width:"100%"}}>
            <h1>ЗНП</h1>
            <table className={classes.table}>
                <thead className={classes.thead}>
                <tr><th className={classes.thZnpK}>ЗНП</th><th className={classes.thZnpK}>Модель</th><th className={classes.thZnp}>Кромка</th></tr>

                </thead>
                <tbody>

                {/*Если знп Фильтр true то выдавать общий массив данных*/}
                {!globalStore.znpFilter && getWorckZnp.length > 1 ? (
                    getWorckZnp.map ((znp) =>
                        <ZnpItem chooseZnp={chooseZnp}  returnValue={returnValue}  znp={znp}  key={znp.id} sectors={sectors} getZnpId={getZnpId} />
                    )
                ):(
                    <ZnpItem chooseZnp={chooseZnp}  returnValue={returnValue}  znp={getWorckZnp} sectors={sectors} getZnpId={getZnpId} />
                )}

                </tbody>

            </table>
            {globalStore.selectActiveYpakZnp == true ? (
                <ZnpYpakTable znpIdYpak={znpIdYpak}/>
            ):(
                ""
            )}

        </div>


    );
});

export default React.memo(ZnpTable) ;