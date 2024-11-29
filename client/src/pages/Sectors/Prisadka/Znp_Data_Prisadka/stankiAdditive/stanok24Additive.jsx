import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok24Additive = ({znpData,  stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet24"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_additive_24 != null
                ? (<option value="standart">{znpData.machine_pallet_additive_24}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok24Additive);