import React, {useMemo} from 'react';
import axios from "axios";

const BuffChildrenFalse = ({bufferLinks,sectr, buffers}) => {

// Цикл которай проверяет ячейку, чтобы избежать кучи запросов
    for (const buffer of buffers) {
        if (buffer.id === sectr.id && buffer.freeness == true){
            updateBufferFalse (sectr)
        }
    }


    async function updateBufferFalse (sectr){
        await axios.put(process.env.REACT_APP_BUFF_URL,{
            id: sectr.id,
            freeness: false
        })
    }


    return (
        <div className={"buff_cell_children_activ , cell_padding"}>
            <p>{bufferLinks.znp_number + " " + bufferLinks.model}</p>
            <p>{bufferLinks.part_name}</p>
            <p>{"Размер:" + " " + bufferLinks.cut_size}</p>
            <p>{ "Количество:" + " " + bufferLinks.number_of_pallets}</p>
            <p>{bufferLinks.palet}</p>
        </div>
    );
};

export default React.memo(BuffChildrenFalse) ;