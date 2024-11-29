import React, {useContext} from 'react';
import MyButton from "../../../../component/UI/button/MyButton";
import axios from "axios";
import {Context} from "../../../../index";

const ZnpYpakItem = ({specZapros, znpIdYpak,ypakItem}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    // Функция изменения ЗНП (Пока что скрывает просто)
    async function updateZnp(ypakData){
        await axios.put( process.env.REACT_APP_ZNP_YPAK_URL,{
            id:ypakData.id,
            ready_for_packing:ypakData.order
        })
        specZapros()
    }

    // Блок с цветовым статусом
    let pal = {}
    const colorGrin = {background:"#00e340"}
if (ypakItem.order == ypakItem.ready_for_packing ){
    pal = colorGrin
}

    return (
        <tr>
            <td style={pal}>{znpIdYpak.znp_number}</td>
            <td style={pal}>{ypakItem.ypakPotok}</td>
            <td style={pal}>{ypakItem.packaging}</td>
            <td style={pal}>{ypakItem.order}</td>
            <td style={pal}>{ypakItem.ready_for_packing}</td>

            {user.sector == "PRISADKA" ?(
                ypakItem.order == ypakItem.ready_for_packing ?(
                    <button style={{margin: "50%"}} disabled>Готово</button>
                    // <td><MyButton disabled onClick={()=>updateZnp(ypakItem)}>Готово</MyButton></td>
                ):(
                    <button style={{margin: "50%"}} onClick={()=>updateZnp(ypakItem)} >Готово</button>
                    // <td><MyButton onClick={()=>updateZnp(ypakItem)}>Готово </MyButton></td>
                )
            ):(
                ""
            )}


        </tr>

    );
};

export default React.memo(ZnpYpakItem);