import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok10Pasting = ({znpData,stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet10"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_pasting_10 != null
                ? (<option value="standart">{znpData.machine_pallet_pasting_10}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok10Pasting);