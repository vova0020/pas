import React, {useContext, useEffect, useMemo, useState} from 'react';
import StanckiServis from "../../../API/StanckiServis";
import StatisticBlock from "./statistic_block";
import {Context} from "../../../index";
import StanockItem from "../../Stancki/Znp_Data_stancki/stanock_item";

const PageStatistic = ({sectors,line}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
//==================== Блок с переменными ====================
    //Данный по станку
    const [stancki, setStancki] = useState([])
//============================ Блок с запросами =====================================
    // Запрос к бд со списком станков для того чтобы узнать какой сектор
    async function getAllStanock(sec,lin) {
        const stanckiGet = await StanckiServis.getAllStancki_Line(sec,lin)
        setStancki(stanckiGet.sort(function (a,b){
            return a.id-b.id
        }))

    }

useMemo(()=>{
    getAllStanock(sectors,line)

},[line])




    return (
        <div className={"statistick_block"}>
            {stancki.map((stanock)=>
                <StatisticBlock  stanock={stanock} sectors={sectors} key={stanock.id}/>
            )}
        </div>
    );
};

export default React.memo(PageStatistic);