import React, {useContext, useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import ZnpService from "../../../../API/ZnpService";
import classes from "../../../../style/ZnpTable.module.css";
import ZnpYpakStatItem from "./znp_ypak_stat_Item";
import ZnpYpakTableStat from "../znpYpakBlokStat/znp_ypak_table_stat";


const ZnpYpakStatTable = observer( () => {

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
            <table className={classes.tableYpakStat}>
                <thead className={classes.thead}>
                <tr><th>ЗНП</th><th>Модель</th><th>Кромка</th></tr>

                </thead>
                <tbody>

                {/*Если знп Фильтр true то выдавать общий массив данных*/}
                {!globalStore.znpFilter && getWorckZnp.length > 1 ? (
                    getWorckZnp.map ((znp) =>
                        <ZnpYpakStatItem znp={znp}  key={znp.id} getZnpId={getZnpId}/>
                    )
                ):(
                    <ZnpYpakStatItem znp={getWorckZnp}  getZnpId={getZnpId}/>
                )}

                </tbody>

            </table>
            {globalStore.selectActiveYpakZnp == true ? (
                <ZnpYpakTableStat znpIdYpak={znpIdYpak}/>

            ):(
                ""
            )}

        </div>


    );
});

export default React.memo(ZnpYpakStatTable);