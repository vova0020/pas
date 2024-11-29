import React from 'react';
import ZnpYpakStatTable from "./Znp/znp_ypak_stat_table";


const YpakStat = () => {
    return (
        <div>
            <ZnpYpakStatTable/>
        </div>
    );
};

export default React.memo(YpakStat);