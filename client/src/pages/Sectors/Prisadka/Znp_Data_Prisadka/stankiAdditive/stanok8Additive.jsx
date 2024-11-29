import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";


const Stanok8Additive = ({znpData, stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet8"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_additive_8 != null
                ? (<option value="standart">{znpData.machine_pallet_additive_8}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok8Additive);