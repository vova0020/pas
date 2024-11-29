import React from 'react';

import BuffCell from "./buffCell/buffCell";

const BuffSectorB = ({bufferLinks,buffers,sectrB, ...props}) => {
    return (
        <div className={"buffer_link-content"}>
            {sectrB.map((sectrB) =>
                <BuffCell key={sectrB.id} bufferLinks={bufferLinks} sectr={sectrB} buffers={buffers}/>
            )}
        </div>
    );

};

export default React.memo(BuffSectorB) ;