import React from 'react';

const OptionStanok = ({mashine}) => {

        return (
            <option value={mashine.stanock} key={Date.now()}>{mashine.stanock}</option>
        );


};

export default React.memo(OptionStanok);