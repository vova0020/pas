import React, {useMemo, useState} from 'react';
import MyOption from "../select/MyOption";

const Palet2 = ({options, znpData, onChange}) => {


    const [data, setData] = useState([])
async function renderSpisock (options){
        let i = [{
            value:0,
            cell_number:znpData.address_pallet_2 + "✔"
        }]
    for (const iElement of options) {
        i = [...i, {
            value:iElement.id,
            cell_number:iElement.cell_number,
            freeness:iElement.freeness
        }]
    }
   await setData(i)
}
    // let buffers = (useMemo(()=>{
    //     return  (options)
    // },[options]))
    useMemo(()=>{
        renderSpisock (options)
        // console.log(data)
    },[znpData,options])


    return (
        <select className={"addressPallet2"}

                onChange={(eventTarget, eventId) => {
            onChange(eventTarget.target , znpData)
        }}>
            {/*{data.address_pallet_2 != null*/}
            {/*    ? (<option value="standart" >{data.address_pallet_2}✔</option>)*/}
            {/*    :(<option value="">Выбрать адрес</option>)*/}
            {/*}*/}
            {data.map(option=>
                option.freeness == false && option.cell_number != "Выбрать адрес" ? (
                    <option value={option.value} key={option.value}>{option.cell_number + "✔"}</option>
                    ):(
                        <option value={option.value} key={option.value}>{option.cell_number}</option>
                    )





            )}
        </select>
    );
};

export default Palet2 ;