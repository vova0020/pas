import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok4Pasting = ({znpData, stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet4"} onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_pasting_4 != null
                ? (<option value="standart">{znpData.machine_pallet_pasting_4}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok4Pasting);