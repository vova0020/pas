import React, {useContext} from 'react';

import {Context} from "../../../index";
import ZnpDataTableYpakovka from "./Znp_Data_Ypakovka/znpData_table_Ypakovka";
import ZnpTable from "../Znp/znp_table";

const Ypakovka = () => {
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)


    return (
        <div className={"startSectorsBlock"}>
            <ZnpTable sectors={user.ypakovka}/>
            <ZnpDataTableYpakovka/>
        </div>
    );
};

export default Ypakovka;