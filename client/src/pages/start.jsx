import React, {useContext, useEffect, useState} from 'react';

import classes from "../style/Start.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../index";

import { useNavigate } from 'react-router';
import {login} from "../http/userAPI";

import StanckiServis from "../API/StanckiServis";

const Start = observer(() => {

    const {user} = useContext(Context)
    const navigate  = useNavigate()

    const [logins, setLogins] = useState('')
    const [password, setPassword] = useState('')

    const Admin = user.admin
    const Director = user.direktor
    const Tehnolog = user.tehnolog
    const Master = user.master
    const Stanock = user.stanock

    const Prisadka = user.prisadka
    const Pokleika = user.pokleika
    const Raskroi = user.raspil
    const Ypakovka = user.ypakovka

    const Diagram = 'DIAGRAM'

    const Monitor1 = 'MONITOR1'
    const Monitor2 = 'MONITOR2'
    const Monitor3 = 'MONITOR3'
    const Monitor4 = 'MONITOR4'
    const Monitor5 = 'MONITOR5'
    const Monitor6 = 'MONITOR6'
    const Monitor7 = 'MONITOR7'
    const Monitor8 = 'MONITOR8'
    const Monitor9 = 'MONITOR9'
    const Monitor10 = 'MONITOR10'
    const Monitor11 = 'MONITOR11'
    const Monitor12 = 'MONITOR12'
    const Monitor13 = 'MONITOR13'
    const Monitor14 = 'MONITOR14'
    const Monitor15 = 'MONITOR15'
    const Monitor16 = 'MONITOR16'
    const Monitor17 = 'MONITOR17'
    const Monitor18 = 'MONITOR18'
    const Monitor19 = 'MONITOR19'
    const Monitor20 = 'MONITOR20'





const click= async ()=>{
        try {
            let data;
            data = await login(logins,password)
            //  const response = await login()

            user.setUser(data)
            user.setIsAuth(true)
            user.setRole(data.role)
            user.setSector(data.sector)
            user.setWorkplace(data.workplace)
            // console.log(data.role)
            logOut()
            //
            // if (user.role ===Admin){
            //     navigate("/buff")
            // } else if (user.role === Master && user.sector === Raskroi){
            //     navigate("/cutting")
            // }else if (user.role === Master && user.sector === Prisadka){
            //     navigate("/prisadka")
            // }else if (user.role === Master && user.sector === Pokleika){
            //     navigate("/pokleika")
            // }else if (user.role === Master && user.sector === Ypakovka){
            //     navigate("/ypakovka")
            // }else if (user.role === Tehnolog){
            //     navigate("/creatureZnp" )
            // }else if (user.role === Stanock){
            //     navigate("/stanock")
            // }

        } catch (e) {
            alert(e.response.data.message)
        }
}

    function handleKeyDown (e){
        if(e.key === "Enter"){
            console.log(e.key)
            click()
        }
    }

const logOut = () =>{
    if (user.role ===Admin){
        navigate("/buff")
    } else if (user.role === Director){
        navigate("/buff")
    }else if (user.role === Master && user.sector === Raskroi){
        navigate("/cutting")
    }else if (user.role === Master && user.sector === Prisadka){
        navigate("/prisadka")
    }else if (user.role === Master && user.sector === Pokleika){
        navigate("/pokleika")
    }else if (user.role === Master && user.sector === Ypakovka){
        navigate("/ypakovka")
    }else if (user.role === Tehnolog){
        navigate("/creatureZnp" )
    }else if (user.role === Stanock){
        navigate("/stanock")
    }else if (user.role === Monitor1){
        navigate("/monitor1")
    }else if (user.role === Monitor2){
        navigate("/monitor2")
    }else if (user.role === Monitor3){
        navigate("/monitor3")
    }else if (user.role === Monitor4){
        navigate("/monitor4")
    }else if (user.role === Monitor5){
        navigate("/monitor5")
    }else if (user.role === Monitor6){
        navigate("/monitor6")
    }else if (user.role === Monitor7){
        navigate("/monitor7")
    }else if (user.role === Monitor8){
        navigate("/monitor8")
    }else if (user.role === Monitor9){
        navigate("/monitor9")
    }else if (user.role === Monitor10){
        navigate("/monitor10")
    }else if (user.role === Monitor11){
        navigate("/monitor11")
    }else if (user.role === Monitor12){
        navigate("/monitor12")
    }else if (user.role === Monitor13){
        navigate("/monitor13")
    }else if (user.role === Monitor14){
        navigate("/monitor14")
    }else if (user.role === Monitor15){
        navigate("/monitor15")
    }else if (user.role === Monitor16){
        navigate("/monitor16")
    }else if (user.role === Monitor17){
        navigate("/monitor17")
    }else if (user.role === Monitor18){
        navigate("/monitor18")
    }else if (user.role === Monitor19){
        navigate("/monitor19")
    }else if (user.role === Monitor20){
        navigate("/monitor20")
    }else {
        navigate("/start")
    }

}



    return (
        <div className={classes.form_div} onKeyPress={(e )=> { handleKeyDown (e)}}>
            <div className={classes.login_page}>
                <div className={classes.form}>
                    {/*<form className={classes.login_form}>*/}
                        <input
                            type="text"
                            placeholder="Логин"
                            value={logins}
                            onChange={e => setLogins(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={click}>Авторизоваться</button>
                    {/*<Bufr/>*/}

                        {/*<p className={classes.message}>Not registered? <a href="#">Create an account</a></p>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>

    );
});

export default React.memo(Start);