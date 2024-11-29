import React from 'react';

import BuffCell from "./buffCell/buffCell";

const BuffSectorD = ({bufferLinks,buffers,sectrD, ...props}) => {
    return (
        <div className={"buffer_link-content"}>
            {sectrD.map((sectrD) =>
                <BuffCell key={sectrD.id} bufferLinks={bufferLinks} sectr={sectrD} buffers={buffers}/>
            )}
        </div>
    );
};

export default React.memo(BuffSectorD) ;