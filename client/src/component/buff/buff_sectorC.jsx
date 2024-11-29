import React from 'react';

import BuffCell from "./buffCell/buffCell";

const BuffSectorC = ({bufferLinks,buffers,sectrC, ...props}) => {
    return (
        <div className={"buffer_link-content"}>
            {sectrC.map((sectrC) =>
                <BuffCell key={sectrC.id} bufferLinks={bufferLinks} sectr={sectrC} buffers={buffers}/>
            )}
        </div>
    );

};

export default React.memo(BuffSectorC) ;