import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from "./BHX1Stat.module.css"
import BHXimg from "../../../statick/bhx.png";
import ZnpTableStatistics from "./statisticsTable/znp_table_statistics";
import StanckiCompletedService from "../../../API/StanckiCompletedService";
import {Context} from "../../../index";
import ZnpDataStanckiService from "../../../API/ZnpDataStanckiService";

const StatisticBlock = ({stanock,sectors}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

//============================= Блок с переменными ========================================
    // 1 Переменная которая берет значения из базы
    const [getZnpDataStanock, setGetZnpDataStanock] = useState([])

    // 2 Переменная с которой работаем
    const [worckZnpDataStanock, setWorckZnpDataStanock] = useState([])

    // Выполенные работы, рабочая переменная
    const [znpCompletedGet, setZnpCompletedGet] = useState([])

    // Выполенные работы, рабочая переменная
    const [znpCompletedWorck, setZnpCompletedWorck] = useState([])

    // Переменные с подсчитанными деталями и пробегом которые выполнены
    //Детали
    const [completedsDetails, setCompletedsDetails] = useState(0)
    //Пробег
    const [completedsProbegs, setCompletedsProbegs] = useState(0)

    // Переменные с подсчитанными деталями и пробегом которые запланированы
    //Детали
    const [planDetails, setPlanDetails] = useState(0)
    //Пробег
    const [planProbegs, setPlanProbegs] = useState(0)


    let dateСounter = new Date().toLocaleDateString()
    let timeСounter = new Date().getHours()

//============================================================================================================

    // Отправка запроса при изменении стора
    useEffect(()=>{
        getAllZnpDataStanock(stanock.stanock)
        getCompleted (stanock.stanock)

        const i = setInterval(()=>{
            getAllZnpDataStanock(stanock.stanock)
            getCompleted (stanock.stanock)
        }, globalStore.sektorUpdateTimer)
        return () => {
            clearInterval(i)
        }

    },[stanock])

    // Запуск функции на подсчет показателей
    useEffect(()=>{

        let detailsPlan = 0
        let probegsPlan = 0

        for (const worckZnpDataStanockElement of worckZnpDataStanock) {
            detailsPlan = detailsPlan + worckZnpDataStanockElement.number_of_pallets
            probegsPlan = probegsPlan + worckZnpDataStanockElement.probeg
        }
        setPlanDetails(detailsPlan)
        setPlanProbegs(probegsPlan)
    },[znpCompletedWorck, worckZnpDataStanock])

    // Запуск функции на подсчет показателей и смены

    useEffect(()=>{
        let smena1Details = 0
        let smena1Probegs = 0
        let smena2Details = 0
        let smena2Probegs = 0

        for (const znpCompletedElement of znpCompletedWorck) {
            if (Number(znpCompletedElement.time)  >=6 && Number(znpCompletedElement.time) <15){
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


    },[znpCompletedWorck])


    // Кешируем данные чтобы убрать постоянный рендер
    useMemo(()=>{
        setZnpCompletedWorck(znpCompletedGet)
    },[znpCompletedWorck])

    // Кешируем данные чтобы убрать постоянный рендер
    useMemo(()=>{
        setWorckZnpDataStanock(getZnpDataStanock)
    },[getZnpDataStanock])


// Вывод смены по времени
    const timeSmena = useMemo(() => {
        if (timeСounter >=6 && timeСounter<15 ){
            return  "Смена 1"
        }
        else if (timeСounter >=15 && timeСounter<=24) {
            return  "Смена 2"
        }
        return "Отдых"
    },[timeСounter])



//==========Блок запросов =======================
    async function getCompleted (stanockName){
        const zaprosGet = await StanckiCompletedService.getAll(stanockName)
        setZnpCompletedGet(zaprosGet.sort(function (a,b){
            return a.id-b.id
        }))
        console.log(zaprosGet)
    }

    // Запрос к бд с учетом сектора работы
    async function getAllZnpDataStanock(stanockName) {
        const zaprosGet = await ZnpDataStanckiService.getAll(stanockName)
        setGetZnpDataStanock(zaprosGet.sort(function (a, b) {
            return (a.priority - b.priority) || (a.id - b.id)
        }))
    }

    const [tableActiv, setTableActiv] = useState(false)


    return (
        <div style={{margin:"0 3px 0 3px"}} >
            <div className={"svetofor"}>
                {/*<div style={colorStatus(serviceStatus)} className={"svetoforStatusTrue"}></div>*/}
                <div className={classes.content_block}>
                    <h3>{stanock.stanock} ({timeSmena})</h3>
                    <img onClick={() =>{setTableActiv(!tableActiv)}} className={classes.img} src={BHXimg} alt=""/>
                    <div>
                        <h3>Норма выработки: {stanock.plan}</h3>
                        {stanock.sector == user.pokleika ?(
                           <div>
                               <p> <progress className={classes.progress} value={planProbegs} max={stanock.plan}></progress> 100%</p>
                               <p>Заполнение: {Math.round((planProbegs * 100)/stanock.plan)}%</p>
                               <p>Запланированно в работу м.п.пробегa: {planProbegs}</p>
                           </div>

                        ):(
                            <div> <p> <progress className={classes.progress} value={planDetails} max={stanock.plan}></progress> 100%</p>
                                <p>Заполнение: {Math.round((planDetails * 100)/stanock.plan)}%</p>
                                <p>Запланированно в работу деталей: {planDetails}</p></div>
                        ) }

                    </div>
                    <div>
                        {stanock.sector == user.pokleika ?(
                            <p>Выполненно: {completedsProbegs}</p>

                        ):(
                            <p>Выполненно: {completedsDetails}</p>
                        ) }
                    </div>
                </div>
            </div>
            <div className={ tableActiv ? classes.block_table_activ : classes.block_table}>
                <ZnpTableStatistics stanock={stanock} sectors={sectors}/>
            </div>

        </div>
    );
};

export default React.memo(StatisticBlock);