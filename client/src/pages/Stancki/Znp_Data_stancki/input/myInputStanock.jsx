import React, {useState} from 'react';
import axios from "axios";

const MyInputStanock = ({inputActiv, worckDataStanock, setInputActiv, specZapros}) => {

    //Переменная с сотоянием инпута
    const [inpContent, setInpContent] = useState("")

    //Функция нажатия кнопки ок
    async function okInput(eventId,inpContent){
        if (inpContent != ""){
            await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
                id:eventId.id,
                number_of_pallets:inpContent,
                stanock:eventId.stanock,
                size_requiried:eventId.size_requiried,
                gluing_scheme:eventId.gluing_scheme,
                dop_gluing_scheme:eventId.dop_gluing_scheme
            })
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_1:inpContent
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_2:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_3:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_4:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_5:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_6:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_7:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_8:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_9:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_10:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_11:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_12:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_13:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_14:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_15:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_16:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_17:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_18:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_19:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_20:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_21:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_22:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_23:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_24:inpContent
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    number_of_pallets_25:inpContent
                })
                specZapros()
            }
            setInpContent("")
            setInputActiv(false)
        } else {
            alert("Пустое значение!")
        }



    }
    //Функция нажатия кнопки отмена
    async function cancelInput(){
        setInpContent("")
        setInputActiv(false)
    }
// Отработка при нажатии на Enter
    function handleKeyDown (e){
        if(e.key === "Enter"){
            okInput(worckDataStanock,inpContent)
        }
    }

    function renderInput (inputActiv){
        if (inputActiv){
           return <div >
                <input className={"inpt"}

                       autoFocus
                       type="number"
                       value={inpContent}
                       onChange={e => setInpContent(e.target.value)}
                       placeholder={worckDataStanock.number_of_pallets}
                       onKeyPress={(e )=> { handleKeyDown (e)}}
                />
                <div className={"Button_block"} style={{margin:"10px 0 10px 0"}}>
                    <button style={{margin:"0 30% 0 0"}} value={"Ок"} onClick={()=>{okInput(worckDataStanock,inpContent)}} >Ок</button>
                    <button  value={"Отмена"} onClick={()=>{cancelInput()}} >Отмена</button>
                </div>
            </div>
        } else {
            return <div></div>
        }
    }


    return (
        <div>
            {renderInput (inputActiv)}

        </div>
    );
};

export default React.memo(MyInputStanock);