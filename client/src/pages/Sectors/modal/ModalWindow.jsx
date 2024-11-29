import React, {useEffect, useState} from 'react';
import "./modal.css"
import axios from "axios";
const ModalWindow = ({activ, setAcctiv, modalData, specZopros}) => {

    // Переменная с текстом из инпута
const [inpContent, setInptContent] = useState("")

   // Нажатие кнопки ок
   async function button_Ok(inpContent,modalData){
        if (modalData.classPalet == "quantityPalet1" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_1:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet2" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_2:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet3" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_3:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet4" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_4:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet5" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_5:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet6" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_6:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet7" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_7:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet8" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_8:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet9" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_9:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet10" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_10:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet11" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_11:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet12" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_12:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet13" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_13:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet14" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_14:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet15" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_15:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet16" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_16:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet17" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_17:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet18" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_18:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet19" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_19:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet20" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_20:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet21" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_21:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet22" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_22:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet23" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_23:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet24" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_24:inpContent
            })
            specZopros()
        } else if (modalData.classPalet == "quantityPalet25" && inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:modalData.idZnpData,
                number_of_pallets_25:inpContent
            })
            specZopros()
        }
       setInptContent("")
    }


    // Нажатие на ентер
   function handleKeyDown (e){
       if(e.key === "Enter"){
           console.log(e.key)
           button_Ok(inpContent,modalData)
           setAcctiv( false)
           setInptContent("")
       }
   }

    function renderInput (activ){
        if (activ){
            return <div className={"modal__content"}>
                <h3>Количество</h3>
                <input className={"modal_input"} type="number" placeholder={modalData.number_pallet} value={inpContent}
                       autoFocus
                       onChange={e => setInptContent(e.target.value)}
                       onKeyPress={(e )=> { handleKeyDown (e)}} />
                <button className={"buttonOK"} style={{margin:'0 15px 0 15px'}}
                        onClick={() => {button_Ok(inpContent,modalData);setInptContent(""); setAcctiv( false)}}>ОК</button>
                <button className={"buttonNO"} onClick={() => {setAcctiv( false); setInptContent("")}}>Отмена</button>
            </div>
        } else {
            return <div></div>
        }
    }


    return (
        <div className={activ ? "modal activ" : "modal"}>
            {renderInput (activ)}
        </div>
    );
};

export default React.memo(ModalWindow);

// <div className={"modal__content"}>
//     <h3>Количество</h3>
//     <input className={"modal_input"} type="number" placeholder={inpStart} value={inpContent} onChange={e => setInpContent(e.target.value)} onKeyPress={(e )=> { handleKeyDown (e)}}/>
//     <button className={"buttonOK"} style={{margin:'0 15px 0 15px'}} onClick={() => {updateCell ( setAcctiv, cellData, inpContent, inpStart, targContent, fetchZnpData);setInpContent("")}}>ОК</button>
//     <button className={"buttonNO"} onClick={() => {setAcctiv( false); setInpContent("")}}>Отмена</button>
// </div>