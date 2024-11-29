import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok12Pasting = ({znpData,stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet12"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_pasting_12 != null
                ? (<option value="standart">{znpData.machine_pallet_pasting_12}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok12Pasting);