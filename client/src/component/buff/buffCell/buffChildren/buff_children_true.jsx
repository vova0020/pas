import React, {useMemo} from 'react';
import axios from "axios";

const BuffChildrenTrue = ({sectr,buffers}) => {

// Цикл которай проверяет ячейку, чтобы избежать кучи запросов
    for (const buffer of buffers) {
        if (buffer.id === sectr.id && buffer.freeness == false){
            updateBufferTrue (sectr)
        }
    }


    async function updateBufferTrue (sectr){
        await axios.put(process.env.REACT_APP_BUFF_URL,{
            id: sectr.id,
            freeness: true
        })
    }

    return (
        <div className={"buff_cell_children , cell_padding"}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};

export default React.memo(BuffChildrenTrue) ;