import React, {useMemo, useState} from 'react';
import MyOption from "../select/MyOption";
import BuffService from "../../../API/BufService";

const Palet1 = ({options, znpData, onChange}) => {


    return (
        <select className={"addressPallet1"} onChange={(eventTarget, eventId) => {
            onChange(eventTarget.target , znpData)
        }}>
             {znpData.address_pallet_1 != null
                ? (<option key = {0} value="standart">{znpData.address_pallet_1}✔</option>)
                :(<option value="">Выбрать адрес</option>)
             }
            {options.map((option)=>
                <MyOption key = { 1}  option={option} znpData={znpData} />
            )}
        </select>
    );
};

export default React.memo(Palet1) ;
// {znpData.address_pallet_1 != null
//     ? (options.map ((opt) =>{if (opt.id == znpData.address_pallet_1) {
//         <option value=""> {opt.cell_number}</option>
//     }} ))
//     :(<option value="">Выбрать адрес</option>)
// }