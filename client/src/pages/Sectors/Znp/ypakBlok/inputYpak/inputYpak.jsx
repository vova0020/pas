import React, {useContext, useState} from 'react';
import axios from "axios";
import {Context} from "../../../../../index";

const InputYpak = ({smenNumber, inputActiv,setInputActiv,worckData, specZapros}) => {
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
    //Переменная с сотоянием инпута
    const [inpContent, setInpContent] = useState("")
console.log(smenNumber)
    //Функция нажатия кнопки ок
    async function okInput(eventId,inpContent){
        if (inpContent != ""){
            await axios.put( process.env.REACT_APP_ZNP_YPAK_URL,{
                id:worckData.id,
                packed_compl:inpContent,
                smenNumber: smenNumber
            })


            // await axios.post(process.env.REACT_APP_YPAK_DIAGRAM_URL,{
            //     completed:inpContent,
            //     role: user.role,
            //     idYpakTablComp:worckData.id,
            //     area_per_package:worckData.area_per_package,
            //     equivalent_package:worckData.equivalent_package
            //
            // })

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
            okInput(worckData,inpContent)
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
                       placeholder={worckData.priority}
                       onKeyPress={(e )=> { handleKeyDown (e)}}
                />
                <div className={"Button_block"} style={{margin:"10px 0 10px 0"}}>
                    <button style={{margin:"0 30% 0 0"}} value={"Ок"} onClick={()=>{okInput(worckData,inpContent)}} >Ок</button>
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

export default React.memo(InputYpak);