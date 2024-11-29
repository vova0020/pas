import React, {useEffect, useState} from 'react';
import axios from "axios";

const MonitorsStatBlock = () => {
    const [ypackMonitors, setYpakMontors] = useState([])


    async function lem(){
        const response = await axios.get(process.env.REACT_APP_YPAK_MONITORS_COMPLETED_URL )
        console.log(response.data)
        setYpakMontors(response.data)
    }
    useEffect(()=>{
        lem()
    },[])

    return (
        <div style={{width: 400}}>
            {ypackMonitors.map((monitor)=>
                <div key={monitor.id}>
                    <p className={"textBlockMonitor"}>{monitor.description}</p>
                    <img style={{width: '100%'}} src={process.env.REACT_APP_START_URL + monitor.img} alt=""/>
                </div>
            )}

        </div>
    );
};

export default MonitorsStatBlock;