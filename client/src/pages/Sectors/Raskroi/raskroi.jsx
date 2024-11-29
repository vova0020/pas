import React, {useContext} from 'react';
import ZnpTable from "../Znp/znp_table";
import {Context} from "../../../index";
import ZnpDataTableRaskroi from "./Znp_Data_Raskroi/znpData_table_Raskroi";

const Raskroi = () => {
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)


    return (
        <div className={"startSectorsBlock"}>
            <ZnpTable sectors={user.raspil}/>
            <ZnpDataTableRaskroi/>

        </div>
    );
};

export default React.memo(Raskroi);