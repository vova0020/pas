import React, {useState} from 'react';
import axios from "axios";

const InputPrioritetStatistic = ({inputActiv,setInputActiv,worckDataStanock, specZapros}) => {
    //Переменная с сотоянием инпута
    const [inpContent, setInpContent] = useState("")

    //Функция нажатия кнопки ок
    async function okInput(eventId,inpContent){
        if (inpContent != ""){
            await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
                id:eventId.id,
                priority:Number( inpContent)
            })

            setInpContent("")
            setInputActiv(false)
            specZapros()
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
                       placeholder={worckDataStanock.priority}
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

export default React.memo(InputPrioritetStatistic);