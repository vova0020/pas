import React, {useContext} from 'react';
import MyButton from "../../../../component/UI/button/MyButton";
import axios from "axios";
import {Context} from "../../../../index";
import InputYpak from "../../Znp/ypakBlok/inputYpak/inputYpak";

const ZnpYpakItemStat = ({specZapros, znpIdYpak,ypakItem}) => {
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
    let palYp = {}

    const colorGrin = {background:"#00e340"}
    const colorBlue = {background:"#4285f4"}
    const colorYellow = {background:"#f6d20a"}

    // Переменная для подсчета упакованных деталей
    let itog = ypakItem.packed_compl1 + ypakItem.packed_compl2 + ypakItem.packed_compl3 + ypakItem.packed_compl4 + ypakItem.packed_compl5 + ypakItem.packed_compl6
    if (ypakItem.order == itog ){
        pal = colorGrin
        palYp = colorGrin
    }else if (itog > 0 && itog < ypakItem.order ){
        pal = colorYellow
        palYp = colorYellow
    }else if (ypakItem.order == ypakItem.ready_for_packing && ypakItem.order != itog){
        pal = colorBlue
    }

    return (
        <tr>
            <td style={pal}>{znpIdYpak.znp_number}</td>
            <td style={pal}>{ypakItem.ypakPotok}</td>
            <td style={pal}>{ypakItem.packaging}</td>
            <td style={pal}>{ypakItem.order}</td>
            <td style={pal}>{(ypakItem.area_per_package * ypakItem.order).toFixed(1) }</td>
            <td style={pal}>{(ypakItem.equivalent_package * ypakItem.order).toFixed(1) }</td>
            <td style={pal}>{ypakItem.ready_for_packing}</td>

            {/*Сколько всего сделанно на данный момент*/}

            <td style={palYp}>{ypakItem.packed_compl1 + ypakItem.packed_compl2 + ypakItem.packed_compl3 + ypakItem.packed_compl4 + ypakItem.packed_compl5 + ypakItem.packed_compl6 }</td>

            <td style={palYp}>{ypakItem.packed_compl1}</td>
            <td style={palYp}>{ypakItem.date_compl1}</td>

            <td style={palYp}>{ypakItem.packed_compl2}</td>
            <td style={palYp}>{ypakItem.date_compl2}</td>

            <td style={palYp} >{ypakItem.packed_compl3}</td>
            <td style={palYp}>{ypakItem.date_compl3}</td>

            <td style={palYp}>{ypakItem.packed_compl4}</td>
            <td style={palYp}>{ypakItem.date_compl4}</td>

            <td style={palYp} >{ypakItem.packed_compl5}</td>
            <td style={palYp}>{ypakItem.date_compl5}</td>

            <td style={palYp}>{ypakItem.packed_compl6}</td>
            <td style={palYp}>{ypakItem.date_compl6}</td>


        </tr>
    );
};

export default React.memo(ZnpYpakItemStat);