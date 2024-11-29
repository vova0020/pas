import React, {useEffect, useState} from 'react';
import axios from "axios";

const Monitor7 = () => {
    let monitorNumber = "Пост 7"

    const [monitorData, setMonitorData] = useState([])


    async function lem(monitorNumber){
        const response = await axios.get(process.env.REACT_APP_YPAK_MONITOR_URL,{
            params: {
                monitor: monitorNumber
            }
        } )
        console.log(response.data)
        setMonitorData(response.data)
    }
    useEffect(()=>{
        lem(monitorNumber)
    },[])

    useEffect(() => {

        const i = setInterval(()=>{
            lem(monitorNumber)
        }, 3000)
        return () => {
            clearInterval(i)
        }
    }, [])

    // useEffect(() => {
    //     const i = setInterval(()=>{
    //         lem(monitorNumber)
    //     }, 5000)
    //     return () => {
    //         clearInterval(i)
    //     }
    // }, [])
    return (
        <div className={"monitorBlock"}>
            <div className={"imgBlock"}>
                <img className={"img"} src={process.env.REACT_APP_START_URL + monitorData.img} alt=""/>
            </div>

        </div>
    );
};

export default Monitor7;