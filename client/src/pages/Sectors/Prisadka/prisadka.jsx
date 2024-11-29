import React, {useContext, useState} from 'react';
import ZnpDataTablePrisadka from "./Znp_Data_Prisadka/znpData_table_Prisadka";
import ZnpTable from "../Znp/znp_table";
import PageStatistic from "../StanckiStatistics/page_Statistic";

import {Context} from "../../../index";

const Prisadka = () => {

    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    const [line, setLine] = useState(0)


    return (
        <div className={"startSectorsBlock"}>
            <div className={"select_line_block"}>
                <select
                    className={"select_line"}
                    defaultValue={'DEFAULT'}
                    onChange={e => {
                        setLine(e.target.value)
                    }}>
                    <option disabled="disabled"  value={"DEFAULT"}>Выбрать линию</option>
                    {/*<option value={"МДФ"}>МДФ</option>*/}
                    <option value={"2"}>Линия 2</option>
                    <option value={"3"}>Линия 3</option>

                </select>
            </div>
            <div className={"statBlock"} >
                <ZnpTable sectors={user.prisadka}/>
                {line != 0 ?(
                    <PageStatistic sectors={user.prisadka} line={line}/>
                ):(
                    <div></div>
                )}

            </div>
            {/*<ZnpTable/>*/}
            <ZnpDataTablePrisadka/>
        </div>
    );
};

export default Prisadka;