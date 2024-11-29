import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";


const Stanok5Additive = ({znpData,  stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet5"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_additive_5 != null
                ? (<option value="standart">{znpData.machine_pallet_additive_5}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok5Additive);