import React, {useContext} from 'react';
import StanockTable from "./Znp_Data_stancki/stanock_table";
import DisplayResults from "./Stanock_Complete_Znp/displayResults";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";

const StanockPage = observer (() => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
    const navigate  = useNavigate()


    // if (user.workplace == null){
    //     navigate("/buff")
    // }
    console.log(user.workplace)

    return (
        <div className={"stanockPage"}>
            <h1>{user.workplace}</h1>
            <div style={{margin:"0 0 50px 0"}}>
                {user.workplace ==null ?(
                    ""
                ):(
                    <DisplayResults/>
                )}

            </div>
            <div>
                {user.workplace ==null ?(
                    <h1>Нужно выбрать станок еще раз!</h1>
                ):(
                    <StanockTable/>
                )}
            </div>

        </div>
    );
});

export default React.memo(StanockPage);