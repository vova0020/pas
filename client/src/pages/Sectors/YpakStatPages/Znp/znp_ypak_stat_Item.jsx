import React, {useContext, useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import axios from "axios";
import ZnpYpakService from "../../../../API/Znp_ypakService";
import classes from "../../../../style/ZnpTable.module.css";
import MyButton from "../../../../component/UI/button/MyButton";

const ZnpYpakStatItem = observer( ({...props}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)


// ================ Блок работы с упаковками =======================================
    const [ypakDatas, setYpakDatas] = useState([])

    // Гетт запрос к таблице знп упаковка
    async function getAllZnpYpak(fl){
        const znpGetYpak = await ZnpYpakService.getAll(fl)
        setYpakDatas(znpGetYpak.sort(function (a,b){
            return a.id-b.id
        }))
    }
    console.log(ypakDatas)
    useEffect(()=> {
        // console.log(props.znp.id)
        const i = setInterval(()=>{
            getAllZnpYpak(props.znp.id)
        }, globalStore.sektorUpdateTimerYpakBlok)
        return () => {
            clearInterval(i)
        }

        // if (props.znp.id != undefined){
        //     getAllZnpYpak(props.znp.id)
        // }

    },[props.znp.id])

    let value = 0 // значение сколько готово к упаковке
    let max = 0 //максимальное число по заказу
    let ypak = 0 // сколько уже упакованно
    let pl = 0 // общая площадь
    let ek = 0 // общий эквивалент


    useMemo(()=>{

        if (ypakDatas.length != 0){
            for (const ypakData of ypakDatas) {

                value = value + ypakData.ready_for_packing
                max = max + ypakData.order
                ypak = ypak + ypakData.packed_compl1 + ypakData.packed_compl2 + ypakData.packed_compl3 + ypakData.packed_compl4 + ypakData.packed_compl5 + ypakData.packed_compl6
                pl = pl + (ypakData.order * ypakData.area_per_package)
                ek = ek + (ypakData.order * ypakData.equivalent_package)
            }
        }


    },[ypakDatas])

    async function activeZnpYpak(dat){
        globalStore.setSelectActiveYpakZnp(true)
        settablActive(true)
        props.getZnpId(dat)
    }
    async function closeZnpYpak(){
        globalStore.setSelectActiveYpakZnp(false)
        settablActive(false)
        // props.getZnpId(props.znp)
    }
    // Состояние кнопок
    const [tablActive, settablActive] = useState(false)

    return (
        <tr >
            <td>{props.znp.znp_number}</td>
            <td>{props.znp.model}</td>
            <td>{props.znp.edging}</td>

            {/*================== Блок работы с упаковкой ============================================*/}
            {/*            Прогресс бар                        */}
            {ypakDatas.length != 0 ? (
                <td className={classes.tdBtn}>
                    <div className={classes.divYpakStat}>
                        <div>
                            <div className={classes.lineYpakStat} style={{margin: "2 0 0 0"}}>
                                <h3 className={classes.lineYpakH3}>Готово к упаковке</h3>
                                <p> <progress className={classes.progress} value={value} max={max}></progress> <br/>{Math.round((value*100)/ max)}%</p>
                            </div>
                            <div className={classes.lineYpakStat}>
                                <h3 className={classes.lineYpakH3}>Упакованно</h3>
                                <p> <progress className={classes.progress} value={ypak} max={max}></progress> <br/>{Math.round((ypak*100)/ max)}%</p>
                            </div>
                        </div>
                        <div style={{margin: "10px"}}>
                            <div className={classes.plBlockStat}>
                                <h3 className={classes.plBlockTextStat}>ДСП,м2 </h3>
                                <h3 className={classes.plBlockNumStat}>{Math.round(pl)}</h3>
                            </div>
                            <div className={classes.ekBlockStat}>
                                <h3 className={classes.ekBlockTextStat}>Экв.,м2 </h3>
                                <h3 className={classes.ekBlockNumStat}>{Math.round(ek)}</h3>
                            </div>
                        </div>


                        {tablActive == false ?(
                            <td className={classes.tdBtn}>
                                <MyButton onClick={()=> activeZnpYpak(props.znp)}>Открыть упаковку</MyButton>
                            </td>
                        ):(
                            <td className={classes.tdBtn}>
                                <MyButton onClick={()=> closeZnpYpak()}>Скрыть</MyButton>
                            </td>
                        )}
                    </div>

                </td>

            ):(
                ""
            )}







            {/*<td className={classes.tdBtn}><MyButton onClick={()=> props.chooseZnp(props.znp)}>Выбрать</MyButton></td>*/}
            {/*<td className={classes.tdBtn}><MyButton onClick={props.returnValue}>Назад</MyButton></td>*/}
        </tr>

    );
});

export default React.memo(ZnpYpakStatItem);