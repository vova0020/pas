import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Link, NavLink, Route, Routes} from "react-router-dom";

import {Context} from "../index";
import NavBar from "../component/UI/navBar/NavBar";
import Logoimg from "../statick/logo.png"
import Raskroi from "../pages/Sectors/Raskroi/raskroi";
import Start from "../pages/start";
import Pokleika from "../pages/Sectors/Pokleika/pokleika";
import Prisadka from "../pages/Sectors/Prisadka/prisadka";
import StanockPage from "../pages/Stancki/stanockPage";
import CreatureZnp from "../pages/creatureZnp";
import Buff from "../pages/buff";
import Ypakovka from "../pages/Sectors/Ypakovka/ypakovka";
import YpakCenterBlok from "../pages/ypakGluing/ypakCenterBlok";
import CreateMonitors from "../pages/ypakGluing/createMonitors";
import Monitor1 from "../pages/ypakGluing/monitorsList/monitor1";
import Monitor2 from "../pages/ypakGluing/monitorsList/monitor2";
import Monitor3 from "../pages/ypakGluing/monitorsList/monitor3";
import Monitor4 from "../pages/ypakGluing/monitorsList/monitor4";
import Monitor5 from "../pages/ypakGluing/monitorsList/monitor5";
import Monitor6 from "../pages/ypakGluing/monitorsList/monitor6";
import Monitor7 from "../pages/ypakGluing/monitorsList/monitor7";
import Monitor8 from "../pages/ypakGluing/monitorsList/monitor8";
import Monitor9 from "../pages/ypakGluing/monitorsList/monitor9";
import Monitor10 from "../pages/ypakGluing/monitorsList/monitor10";
import Monitor11 from "../pages/ypakGluing/monitorsList/monitor11";
import Monitor12 from "../pages/ypakGluing/monitorsList/monitor12";
import Monitor13 from "../pages/ypakGluing/monitorsList/monitor13";
import Monitor14 from "../pages/ypakGluing/monitorsList/monitor14";
import Monitor17 from "../pages/ypakGluing/monitorsList/monitor17";
import Monitor18 from "../pages/ypakGluing/monitorsList/monitor18";
import Monitor19 from "../pages/ypakGluing/monitorsList/monitor19";
import Monitor20 from "../pages/ypakGluing/monitorsList/monitor20";
import Monitor15 from "../pages/ypakGluing/monitorsList/monitor15";
import Monitor16 from "../pages/ypakGluing/monitorsList/monitor16";
import Test from "../pages/test";
import DiagramsPage from "../pages/Diagrams/diagrams_page";
import YpakStat from "../pages/Sectors/YpakStatPages/ypakStat";


const AppRouter = () => {

    // Логика работы
    // 1) После авторизации данные о роли, участке и тд заносятся в локальное хранилище
    // 2) По этим данным определяем какую информацию подгружать
    // 3)На этой странице будет навигация по нужным страницам, возможно это будет стартовая страница

    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)
// console.log(user.workplace)

    return (
        <div>
            <div className={"headBlock"}>
                <div className={"logotip"}><img src={Logoimg} alt=""/></div>
                <NavBar/>
                {/*<Test/>*/}

            </div>


            <Routes>
                <Route path="/start" element={
                    <Start
                    />}
                />
                <Route path="/cutting" element={
                    <Raskroi/>
                }/>
                <Route path="/pokleika" element={
                    <Pokleika/>
                }/>
                <Route path="/prisadka" element={
                    <Prisadka/>
                }/>
                <Route path="/ypakovka" element={
                    <Ypakovka/>
                }/>
                <Route path="/ypakStat" element={
                    <YpakStat/>
                }/>
                <Route path="/stanock" element={
                    <StanockPage/>
                }/>
                <Route path="/creatureZnp" element={
                    <CreatureZnp/>}
                />
                <Route path="/diagrams" element={
                    <DiagramsPage/>}
                />
                <Route path="/buff" element={
                    <Buff/>}
                />
                <Route path="/ypackCenterMonitor" element={
                    <YpakCenterBlok/>}
                />
                <Route path="/createMonitor" element={
                    <CreateMonitors/>}
                />
                <Route path="/monitor1" element={
                    <Monitor1/>
                }/>
                <Route path="/monitor2" element={
                    <Monitor2/>
                }/>
                <Route path="/monitor3" element={
                    <Monitor3/>
                }/>
                <Route path="/monitor4" element={
                    <Monitor4/>
                }/>
                <Route path="/monitor5" element={
                    <Monitor5/>
                }/>
                <Route path="/monitor6" element={
                    <Monitor6/>
                }/>
                <Route path="/monitor7" element={
                    <Monitor7/>
                }/>
                <Route path="/monitor8" element={
                    <Monitor8/>
                }/>
                <Route path="/monitor9" element={
                    <Monitor9/>
                }/>
                <Route path="/monitor10" element={
                    <Monitor10/>
                }/>
                <Route path="/monitor11" element={
                    <Monitor11/>
                }/>
                <Route path="/monitor12" element={
                    <Monitor12/>
                }/>
                <Route path="/monitor13" element={
                    <Monitor13/>
                }/>
                <Route path="/monitor14" element={
                    <Monitor14/>
                }/>
                <Route path="/monitor15" element={
                    <Monitor15/>
                }/>
                <Route path="/monitor16" element={
                    <Monitor16/>
                }/>
                <Route path="/monitor17" element={
                    <Monitor17/>
                }/>
                <Route path="/monitor18" element={
                    <Monitor18/>
                }/>
                <Route path="/monitor19" element={
                    <Monitor19/>
                }/>
                <Route path="/monitor20" element={
                    <Monitor20/>
                }/>

            </Routes>




        </div>
    );
};

export default React.memo(AppRouter) ;

