import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Context} from "../../../index";
import StanckiServis from "../../../API/StanckiServis";
import StanckiCompletedService from "../../../API/StanckiCompletedService";
import {observer} from "mobx-react-lite";

const DisplayResults = observer ( () => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
//============ Блок с состоянием =========================
//     Данный о станке
    const [stanockInfo, setStanockInfo] = useState([])
    // Выполенные работы
    const [znpCompleted, setZnpCompleted] = useState([])

    // Переменные с подсчитанными деталями и пробегом
    const [completedsDetails, setCompletedsDetails] = useState(0)
    const [completedsProbegs, setCompletedsProbegs] = useState(0)

    let dateСounter = new Date().toLocaleDateString()
    let timeСounter = new Date().getHours()

    //============================================================================================================

    // Запуск функции на подсчет показателей и смены

    useEffect(()=>{
        let smena1Details = 0
        let smena1Probegs = 0
        let smena2Details = 0
        let smena2Probegs = 0

        for (const znpCompletedElement of znpCompleted) {
            if (Number(znpCompletedElement.time) >=6 && Number(znpCompletedElement.time) <15){
                smena1Details = smena1Details + znpCompletedElement.completed
                smena1Probegs = smena1Probegs + znpCompletedElement.probeg
            }else if (Number(znpCompletedElement.time) >=15 && Number(znpCompletedElement.time)<=24){
                smena2Details = smena2Details + znpCompletedElement.completed
                smena2Probegs = smena2Probegs + znpCompletedElement.probeg
            }

        }
        if (timeСounter >=6 && timeСounter<15 ){
            setCompletedsDetails(smena1Details)
            setCompletedsProbegs(smena1Probegs)
        }
        else if (timeСounter >=15 && timeСounter<=24) {
            setCompletedsDetails(smena2Details)
            setCompletedsProbegs(smena2Probegs)
        } else {
            setCompletedsDetails(0)
            setCompletedsProbegs(0)
        }


    },[znpCompleted])

// Первоначальный запуск запрос к бд
    useEffect(()=>{
        // console.log(user.workplace)
        getCompleted(user.workplace)

        const i = setInterval(()=>{
            getCompleted(user.workplace)
        }, globalStore.sektorUpdateTimer)
        return () => {
            clearInterval(i)
        }

    },[user.workplace])

    useMemo(()=>{
        getStanock(user.workplace)

    },[user.workplace])

    async function specZapros(){
        getStanock(user.workplace)
    }


//===================== Блок с запросами  =======================
    async function getStanock (stanockName){
        const zaprosGet = await StanckiServis.getAll(stanockName)
        setStanockInfo(zaprosGet[0])
    }
    async function getCompleted (stanockName){
        const zaprosGet = await StanckiCompletedService.getAll(stanockName)
        setZnpCompleted(zaprosGet.sort(function (a,b){
            return a.id-b.id
        }))
    }



    return (
        <div className={"indicators"}>
            <div className={"indicators_block"}>

                <div className={"indicators_block_item"}>
                    {stanockInfo.sector === user.pokleika ? (
                        <h2>Норма выработки м.п</h2>
                    ):(
                        <h2>Норма выработки</h2>
                    )}

                    <p className={"stat_text"}>{stanockInfo.plan}</p>
                </div>

                <div className={"indicators_block_item"}>
                    <h2>Сделано</h2>
                    {stanockInfo.sector === user.pokleika ? (
                        <p className={"stat_text"}>{completedsProbegs}</p>
                    ):(
                        <p className={"stat_text"}>{completedsDetails}</p>
                    )}
                </div>

                <div className={"indicators_block_item"}>
                    <h2>Сделка (на станок)</h2>
                    {stanockInfo.sector === user.pokleika ? (
                        <p className={"stat_text"}>{(completedsProbegs * stanockInfo.price).toFixed(1) + " " + "руб"}</p>
                    ):(
                        <p className={"stat_text"}></p>
                    )}
                </div>
            </div>
        </div>
    );
});

export default React.memo(DisplayResults);