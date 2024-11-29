import React, {useEffect, useState} from 'react';

import axios from "axios";
import BuffCell from "./buffCell/buffCell";

const BuffSectorA = ({bufferLinks,buffers,sectrA, ...props}) => {

        return (
            <div className={"buffer_link-content"}>
                {sectrA.map((sectrA) =>
                    <BuffCell key={sectrA.id} bufferLinks={bufferLinks} sectr={sectrA} buffers={buffers} />
                )}
            </div>
        );


};

export default React.memo(BuffSectorA) ;