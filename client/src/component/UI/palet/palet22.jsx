import React from 'react';
import MyOption from "../select/MyOption";

const Palet22 = ({options, znpData, onChange}) => {
    return (
        <select className={"addressPallet22"} onChange={(eventTarget, eventId) => {
            onChange(eventTarget.target , znpData)
        }}>
            {znpData.address_pallet_22 != null
                ? (<option value="standart">{znpData.address_pallet_22}✔</option>)
                :(<option value="">Выбрать адрес</option>)
            }
            {options.map(option=>
                <MyOption key = {Math.random()} option={option} znpData={znpData} />
            )}
        </select>
    );
};

export default React.memo(Palet22);