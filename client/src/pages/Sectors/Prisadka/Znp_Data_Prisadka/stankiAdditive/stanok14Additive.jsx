import React from 'react';
import OptionStanok from "../../../../../component/UI/select/OptionStanok";

const Stanok14Additive = ({znpData, stanckiSpisock, onChangeStanock}) => {
    return (
        <select className={"addressPallet14"}onChange={(eventTarget, eventId, znpDatas) => {
            onChangeStanock(eventTarget.target , znpData)
        }}>
            {znpData.machine_pallet_additive_14 != null
                ? (<option value="standart">{znpData.machine_pallet_additive_14}✔</option>)
                :(<option value="">Выбрать станок</option>)
            }
            {stanckiSpisock.map(mashine=>
                <OptionStanok key = {Math.random()} mashine={mashine} znpData={znpData}/>
            )}
        </select>
    );
};

export default React.memo(Stanok14Additive);