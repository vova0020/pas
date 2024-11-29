import React, {useContext, useState} from 'react';
import MyButton from "../../../../component/UI/button/MyButton";
import MyInputStanock from "../../../Stancki/Znp_Data_stancki/input/myInputStanock";
import MySelect from "../../../../component/UI/select/MySelect";
import InputPrioritetStatistic from "../statistics_Select_And_Input/inputPrioritetStatistic";
import {Context} from "../../../../index";
import SelectGlung from "../statistics_Select_And_Input/selectGlung";
import SelectDopGlung from "../statistics_Select_And_Input/selectDopGlung";
import SelectStanockStatistic from "../statistics_Select_And_Input/selectStanockStatistic";
import delImg from "../../../../statick/delImg.jpg";
import axios from "axios";

const ZnpDataItemStatistics = ({worckDataStanock, specZapros, stanock, sectors}) => {
        //     Данные из глобального хранилища
        const {globalStore} = useContext(Context)
        const {user} = useContext(Context)

        // Состоянии активности инпута
        const [inputPaletsActiv, setInputPaletsActiv] = useState(false)
        const [selectGluingActiv, setSelectGluingActiv] = useState(false)
        const [selectDopGluingActiv, setSelectDopGluingActiv] = useState(false)

    // Удаление знп и отчистка станка в основной таблице
    async function delLine (eventId){
            console.log(eventId.id)
        await axios.delete( process.env.REACT_APP_STANCKI_ZNP_URL,{
            data:{
                id:eventId.id
            }


        })
        if (sectors == user.pokleika){
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_1:null
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_2:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_3:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_4:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_5:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_6:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_7:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_8:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_9:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_10:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_11:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_12:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_13:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_14:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_15:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_16:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_17:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_18:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_19:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_20:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_21:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_22:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_23:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_24:null
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_25:null
                })
                specZapros()
            }
        } else if (sectors == user.prisadka) {
            if (eventId.palet == "Палет 1") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_1: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 2") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_2: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 3") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_3: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 4") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_4: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 5") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_5: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 6") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_6: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 7") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_7: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 8") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_8: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 9") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_9: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 10") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_10: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 11") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_11: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 12") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_12: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 13") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_13: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 14") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_14: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 15") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_15: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 16") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_16: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 17") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_17: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 18") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_18: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 19") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_19: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 20") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_20: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 21") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_21: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 22") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_22: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 23") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_23: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 24") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_24: null
                })
                specZapros()
            } else if (eventId.palet == "Палет 25") {
                await axios.put(process.env.REACT_APP_ZNPDATA_URL, {
                    id: eventId.znpDatumId,
                    machine_pallet_additive_25: null
                })
                specZapros()
            }
        }
    }


    return (
        <tr>
            <td onDoubleClick={() => {setInputPaletsActiv(true)}} >{worckDataStanock.priority}
                 <InputPrioritetStatistic inputActiv={inputPaletsActiv} worckDataStanock={worckDataStanock} setInputActiv={setInputPaletsActiv} specZapros={specZapros}/>
            </td>
            <td >{worckDataStanock.znp}</td>
            <td >{worckDataStanock.number_opening}</td>
            <td >{worckDataStanock.part}</td>
            <td >{worckDataStanock.color}</td>
            <td >{worckDataStanock.part_name}</td>
            <td >{worckDataStanock.packaging}</td>
            <td >{worckDataStanock.size_requiried}</td>
            <td onDoubleClick={() => {setSelectGluingActiv(!selectGluingActiv)}} >{worckDataStanock.gluing_scheme}
                <SelectGlung selectActiv={selectGluingActiv} setselectActiv={setSelectGluingActiv} worckDataStanock={worckDataStanock}  specZapros={specZapros}/>
            </td>

            <td onDoubleClick={() => {setSelectDopGluingActiv(!selectDopGluingActiv)}}>{worckDataStanock.dop_gluing_scheme}
                <SelectDopGlung selectActiv={selectDopGluingActiv} setselectActiv={setSelectDopGluingActiv} worckDataStanock={worckDataStanock}  specZapros={specZapros}/>
            </td>

            <td >{worckDataStanock.palet}</td>
            <td >{worckDataStanock.number_of_pallets}</td>
            <td><SelectStanockStatistic stanock={stanock} sectors={sectors} worckDataStanock={worckDataStanock} specZapros={specZapros}/></td>
            <td><button onClick={()=> delLine (worckDataStanock)}><img width={30} height={30} src={delImg} alt=""/></button></td>
        </tr>
    );
};

export default React.memo(ZnpDataItemStatistics);