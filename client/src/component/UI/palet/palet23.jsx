import React from 'react';
import MyOption from "../select/MyOption";

const Palet23 = ({options, znpData, onChange}) => {
    return (
        <select className={"addressPallet23"} onChange={(eventTarget, eventId) => {
            onChange(eventTarget.target , znpData)
        }}>
            {znpData.address_pallet_23 != null
                ? (<option value="standart">{znpData.address_pallet_23}✔</option>)
                :(<option value="">Выбрать адрес</option>)
            }
            {options.map(option=>
                <MyOption key = {Math.random()} option={option} znpData={znpData} />
            )}
        </select>
    );
};

export default React.memo(Palet23);