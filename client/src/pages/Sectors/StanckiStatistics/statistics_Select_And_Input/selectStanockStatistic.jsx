import React, {useContext, useMemo, useState} from 'react';
import StanckiServis from "../../../../API/StanckiServis";
import axios from "axios";
import {Context} from "../../../../index";

const SelectStanockStatistic = ({stanock, sectors, worckDataStanock, specZapros}) => {

    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    // Переменная со списком станков
    const [stancki, setStancki] = useState([])

    // Функция выбора станка
    async function onChange(e, eventId){
        await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
            id:eventId.id,
            stanock:e,
            size_requiried:eventId.size_requiried,
            number_of_pallets:eventId.number_of_pallets,
            gluing_scheme:eventId.gluing_scheme,
            dop_gluing_scheme:eventId.dop_gluing_scheme
        })
        if (sectors == user.pokleika){
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_1:e
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_2:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_3:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_4:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_5:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_6:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_7:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_8:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_9:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_10:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_11:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_12:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_13:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_14:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_15:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_16:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_17:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_18:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_19:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_20:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_21:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_22:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_23:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_24:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                     machine_pallet_pasting_25:e
                })
                specZapros()
            }
        } else if (sectors == user.prisadka){
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_1:e
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_2:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_3:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_4:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_5:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_6:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_7:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_8:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_9:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_10:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_11:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_12:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_13:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_14:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_15:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_16:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_17:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_18:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_19:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_20:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_21:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_22:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_23:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_24:e
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_25:e
                })
                specZapros()
            }
        }
    }

    // Запрос в бд получаем список станков
    async function getAllStanock(sec) {
        const stanckiGet = await StanckiServis.getAllStancki(sec)
        setStancki(stanckiGet.sort(function (a,b){
            return a.id-b.id
        }))
    }

    useMemo(()=>{
        getAllStanock(sectors)
    },[])

    // Функция для рендера списка
     function renderSelectStanckiStatistic(stanock, stancki){
         let spisockStanckov = []
         for (const stanockElement of stancki) {
             if (stanockElement.stanock != stanock.stanock){
                 spisockStanckov = [...spisockStanckov ,stanockElement ]
             }
         }
        return(
                <select defaultValue={'DEFAULT'} onChange={(e,eventId)=>{
                    onChange(e.target.value ,worckDataStanock)
                }}>
                    <option disabled="disabled"  value={"DEFAULT"}>Выбрать новый станок</option>
                    {spisockStanckov.map((stanockInfo)=>
                            <option  value={stanockInfo.stanock} key={stanockInfo.id}>{stanockInfo.stanock}</option>
                    )}
                </select>
            )

     }

    return (
        <div>
            {renderSelectStanckiStatistic(stanock, stancki)}
        </div>
    );
};

export default React.memo(SelectStanockStatistic);