import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../ypacCenter.css"

const MonitorLine2Stat = ({monitor}) => {

    // const [ypackMonitors, setYpakMontors] = useState([])
    //
    //
    // async function monitorsData(){
    //     const response = await axios.get(process.env.REACT_APP_YPAK_MONITORS_COMPLETED_URL )
    //     console.log(response.data)
    //     setYpakMontors(response.data)
    // }
    // useEffect(()=>{
    //     monitorsData()
    // },[])








    return (
        <div className={"statMonitorBlock"}>
            <h2>{monitor.monitor == "Пост 10" || monitor.monitor == "Пост 20" ? monitor.monitor + " " + "(Палет)" : monitor.monitor }</h2>
            <p>Описание: {monitor.description}</p>
            <img style={{width: '100%'}} src={process.env.REACT_APP_START_URL + monitor.img} alt=""/>
        </div>

    );
};

export default MonitorLine2Stat;
