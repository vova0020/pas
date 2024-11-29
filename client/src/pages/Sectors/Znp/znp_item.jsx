import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from '../../../style/ZnpTable.module.css'
import MyButton from "../../../component/UI/button/MyButton";
import {Context} from "../../../index";
import axios from "axios";
import {observer} from "mobx-react-lite";
import ZnpYpakService from "../../../API/Znp_ypakService";

const ZnpItem = observer( ({sectors,...props}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    // Функция закрытия ЗНП (Пока что скрывает просто)
    async function closeZnp(eventId){
        await axios.put( process.env.REACT_APP_ZNP_URL,{
            id:eventId.id,
            visibility:false
        })
        props.returnValue()

    }

// ================ Блок работы с упаковками =======================================
    const [ypakDatas, setYpakDatas] = useState([])

    // Гетт запрос к таблице знп упаковка
    async function getAllZnpYpak(fl){
        const znpGetYpak = await ZnpYpakService.getAll(fl)
        setYpakDatas(znpGetYpak.sort(function (a,b){
            return a.id-b.id
        }))
    }

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
        // console.log(ypakDatas)
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
    useEffect(()=>{
        // console.log(globalStore.selectActiveYpakZnp)
    },[globalStore.selectActiveYpakZnp])

    const [tablActive, settablActive] = useState(false)

    return (
        <tr >
            <td>{props.znp.znp_number}</td>
            <td>{props.znp.model}</td>
            <td>{props.znp.edging}</td>
            {globalStore.znpFilter ? (
                <td className={classes.tdBtn}><MyButton onClick={props.returnValue}>Назад</MyButton></td>
                ): (
                <td className={classes.tdBtn}><MyButton onClick={()=> props.chooseZnp(props.znp)}>Выбрать</MyButton></td>
            )}
            {sectors == user.ypakovka && globalStore.znpFilter ?(
                <td className={classes.tdBtn}><MyButton onClick={()=>closeZnp(props.znp)}>Закрыть ЗНП</MyButton></td>
            ):(
                ""
            )}
{/*================== Блок работы с упаковкой ============================================*/}
{/*            Прогресс бар                        */}
            {ypakDatas.length != 0 ? (
                user.sector == "RASPIL" ?(
                    ""
                ):(
                    <td className={classes.tdBtn}>
                        <div className={classes.lineYpak} style={{margin: "2 0 0 0"}}>
                            <h3 className={classes.lineYpakH3}>Готово к упаковке</h3>
                            <p> <progress className={classes.progress} value={value} max={max}></progress> <br/>{Math.round((value*100)/ max)}%</p>
                        </div>
                        <div className={classes.lineYpak}>
                            <h3 className={classes.lineYpakH3}>Упакованно</h3>
                            <p> <progress className={classes.progress} value={ypak} max={max}></progress> <br/>{Math.round((ypak*100)/ max)}%</p>
                        </div>
                    </td>
                )
            ):(
                ""
            )}

{/*                 Эквиваленты                                               */}
            {ypakDatas.length != 0 ? (
                user.sector == "RASPIL" ?(
                    ""
                ):(
                        <td className={classes.tdBtn}>
                            <div className={classes.plBlock}>
                                <p className={classes.plBlockText}>ДСП,м2 </p>
                                <h3 className={classes.plBlockNum}>{Math.round(pl)}</h3>
                            </div>
                            <div className={classes.ekBlock}>
                                <p className={classes.ekBlockText}>Экв.,м2 </p>
                                <h3 className={classes.ekBlockNum}>{Math.round(ek)}</h3>
                            </div>
                        </td>
                    )

            ):(
                ""
            )}

{/*                          Кнопки                                                 */}
            {ypakDatas.length != 0 ? (
                    user.sector == "RASPIL" ?(
                        ""
                    ):(
                        tablActive == false ?(
                            <td className={classes.tdBtn}>
                                <MyButton onClick={()=> activeZnpYpak(props.znp)}>Открыть упаковку</MyButton>
                            </td>
                        ):(
                            <td className={classes.tdBtn}>
                                <MyButton onClick={()=> closeZnpYpak()}>Скрыть</MyButton>
                            </td>
                        )
                    )
            ):(
                ""
                )}





            {/*<td className={classes.tdBtn}><MyButton onClick={()=> props.chooseZnp(props.znp)}>Выбрать</MyButton></td>*/}
            {/*<td className={classes.tdBtn}><MyButton onClick={props.returnValue}>Назад</MyButton></td>*/}
        </tr>

    );
});

export default React.memo(ZnpItem);