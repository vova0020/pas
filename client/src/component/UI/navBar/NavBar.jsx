import React, {useContext, useEffect, useState} from 'react';
import {
    authAdminRoutes,
    authBhx1Routes,
    authBhx2Routes,
    authBhx3Routes,
    authBst1Routes,
    authBst2Routes,
    authKdt6032Routes,
    authKdt6052Routes,
    authSigma1Routes,

    authPokleikaRoutes,
    authPrisadkaRoutes,
    authRaspilRoutes,
    authRoutes,

    authS5002Routes,
    authS5003Routes,
    authS5004Routes,
    authEvolutionRoutes,
    authXDRoutes,
    authStreamARoutes,
    authStankiPokleiksRoutes,
    authStankiPrisadkaRoutes,
    authYpakovkaRoutes,
    publicRoutes, authMonitorsARoutes, authDiagramRoutes, authVentura07MRoutes
} from "../../../routes";
import {NavLink} from "react-router-dom";
import {Context} from "../../../index";
import {START_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router";
import Vihodimg from "../../../statick/vihod.png"
import StanckiServis from "../../../API/StanckiServis";

const NavBar = () => {
// Глобальные данные
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    const navigate  = useNavigate()
    const logOut = () =>{
        user.setUser({})
        user.setRole({})
        user.setSector({})
        user.setWorkplace({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate("/start")
    }

    const Admin = user.admin
    const Director = user.direktor
    const Tehnolog = user.tehnolog
    const Master = user.master
    const Stanock = user.stanock

    const Prisadka = user.prisadka
    const Pokleika = user.pokleika
    const Raskroi = user.raspil
    const Ypakovka = user.ypakovka

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
//=================================================================================================


        // Переменная со списком станков поклейки
    const [stanckiPokleika, setStanckiPokleika] = useState([])

    // Переменная со списком станков присадки
    const [stanckiPrisadka, setStanckiPrisadka] = useState([])


    // Запрос в бд получаем список станков присадки
    async function getAllStanockPrisadka(sec) {
        const stanckiGet = await StanckiServis.getAllStancki(sec)
        setStanckiPrisadka(stanckiGet.sort(function (a,b){
            return a.id-b.id
        }))
    }
    // Запрос в бд получаем список станков поклейки
    async function getAllStanockPokleika(sec) {
        const stanckiGet = await StanckiServis.getAllStancki(sec)
        setStanckiPokleika(stanckiGet.sort(function (a,b){
            return a.id-b.id
        }))
    }

//   Первоначальный запрос на станки
    useEffect(()=>{
        getAllStanockPrisadka(user.prisadka)
        getAllStanockPokleika(user.pokleika)
    },[])


useEffect(() =>{
    if (!user.isAuth){
        navigate(START_ROUTE)
    }
},[])
    const authInitNavBar1 = () =>{
        if (user.isAuth && user.role === Admin){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/cutting">
                                Раскрой
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/pokleika">
                        Поклейка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/prisadka">
                        Присадка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakovka">
                        Упаковка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/creatureZnp">
                        Создание ЗНП
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakStat">
                        Страница для упаковки
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypackCenterMonitor">
                        Мониторы упаковок
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/createMonitor">
                        Создание упаковок
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/diagrams">
                        Диаграммы
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        } else if(user.isAuth && user.role === Director){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/cutting">
                        Раскрой
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/pokleika">
                        Поклейка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/prisadka">
                        Присадка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakovka">
                        Упаковка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/creatureZnp">
                        Создание ЗНП
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypackCenterMonitor">
                        Мониторы упаковок
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/createMonitor">
                        Создание упаковок
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/diagrams">
                        Диаграммы
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakStat">
                        Страница для упаковки
                    </NavLink>
                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else if (user.isAuth && user.role === Tehnolog){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/cutting">
                        Раскрой
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/pokleika">
                        Поклейка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/prisadka">
                        Присадка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakovka">
                        Упаковка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/creatureZnp">
                        Создание ЗНП
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Raskroi){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/cutting">
                        Раскрой
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Pokleika){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/pokleika">
                        Поклейка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Prisadka){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/prisadka">
                        Присадка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakovka">
                        Упаковка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Ypakovka){
            globalStore.setZnpFilter(false)
            return(
                <nav className={"nav"}>

                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypakovka">
                        Упаковка
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/ypackCenterMonitor">
                        Мониторы упаковок
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }else {
            return ( <nav className={"nav"}></nav>)
        }
    }

    function onchange(stanockPokleika){
        user.setWorkplace(stanockPokleika)
    }

    const authInitNavBar2 = ()=> {
        return(
            <nav className={"nav"}>
                {stanckiPokleika.map((stanockPokleika)=>
                    <NavLink onClick={()=>{onchange(stanockPokleika.stanock)}} key={stanockPokleika.id} className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/stanock">
                        {stanockPokleika.stanock}
                    </NavLink>
                )}
            </nav>
        )
    }
    const authInitNavBar3 = ()=>{
        return(
            <nav className={"nav"}>
                {stanckiPrisadka.map((stanockPrisadka)=>
                    <NavLink onClick={()=>{onchange(stanockPrisadka.stanock)}} key={stanockPrisadka.id} className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/stanock">
                        {stanockPrisadka.stanock}
                    </NavLink>
                )}
            </nav>
        )
    }
    const authInitNavBar4 = ()=>{
        if (user.role === Stanock){
            return(
                <nav className={"nav"}>
                    <NavLink className={({ isActive }) => (isActive ? "nav_link-active" : "nav_link")} to="/buff">
                        Буфер
                    </NavLink>

                    <button className={"buttonVihod"} onClick={logOut}><img className={"vihodImg"} src={Vihodimg} alt=""/></button>
                </nav>
            )
        }
    }

    const renderMenu = ()=>{
        if (user.isAuth && user.role === Admin){
            return(
                    <div>
                        {authInitNavBar1()}
                        {authInitNavBar2()}
                        {authInitNavBar3()}
                    </div>
            )

        }else if (user.isAuth && user.role === Tehnolog ){
            return(
                <div>
                    {authInitNavBar1()}
                </div>
            )
        }else if (user.isAuth && user.role === Director){
            return(
                <div>
                    {authInitNavBar1()}
                </div>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Prisadka){
            return(
                <div>
                    {authInitNavBar1()}
                    {authInitNavBar3()}
                </div>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Pokleika){
            return(
                <div>
                    {authInitNavBar1()}
                    {authInitNavBar2()}
                </div>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Raskroi){
            return(
                <div>
                    {authInitNavBar1()}
                </div>
            )
        }else if (user.isAuth && user.role === Master && user.sector === Ypakovka){
            return(
                <div>
                    {authInitNavBar1()}
                </div>
            )
        }else if (user.isAuth && user.role === Stanock){
            return(
                <div>
                    {authInitNavBar4()}
                </div>
            )
        }
    }

    return (
        <div>
            {renderMenu()}
        </div>
    );
};

export default React.memo(NavBar) ;