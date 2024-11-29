import React, {useContext, useState} from 'react';

import ZnpDataTablePokleika from "./Znp_Data_Pokleika/znpData_table_Pokleika";
import ZnpTable from "../Znp/znp_table";
import PageStatistic from "../StanckiStatistics/page_Statistic";
import {Context} from "../../../index";

const Pokleika = () => {
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
                <ZnpTable sectors={user.pokleika}/>
                {line != 0 ?(
                    <PageStatistic sectors={user.pokleika} line={line}/>
                ):(
                    <div></div>
                )}

            </div>
            {/*<ZnpTable/>*/}
            <ZnpDataTablePokleika/>
        </div>
    );
};

export default  React.memo(Pokleika);