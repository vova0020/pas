import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";


const Stanok9Additive = ({znpData,  stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet9"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_additive_9 != null
                ? (<option value="standart">{znpData.machine_pallet_additive_9}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok9Additive);