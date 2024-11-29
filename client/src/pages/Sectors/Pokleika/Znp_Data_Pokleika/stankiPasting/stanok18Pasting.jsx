import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok18Pasting = ({znpData,stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet18"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_pasting_18 != null
                ? (<option value="standart">{znpData.machine_pallet_pasting_18}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok18Pasting);