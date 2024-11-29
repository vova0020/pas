import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import "./ypacCenter.css"
import MonitorsStatBlock from "./ypakMonitors/monitorsStatBlock";
import MonitorLine2Stat from "./ypakMonitors/monitorLine2stat";


const YpakCenterBlok = () => {

    // Список всех вариантов упаковки
    const [ypakGuide, setYpakGuide] = useState([])

    // Список мониторов
    const [ypackMonitors, setYpakMontors] = useState([])


    // Состояние для фильтра по поисковой строке
    const [ypakData, setYpakData] = useState([])
    // Значение поисковой строки по серии
    const [seriesQuery, setSeriesQuery] = useState('')
    // Значение поисковой строки по модели
    const [modelQuery, setModelQuery] = useState("")
    // Значение поисковой строки по модели
    const [ypakQuery, setYpakQuery] = useState("")

    //Функция которая заполняет отфильтрованное состояние
    useMemo(()=>{
        setYpakData(ypakGuide.sort(function (a,b){
            return a.id-b.id
        }))
    },[ypakGuide])


    //Массив отфильтрованных значений по поисковой строке
    const sortedZnpData = useMemo(() => {
        if (seriesQuery != "" && modelQuery == "" && ypakQuery == "" ){
            console.log("Первый фильтр")
            return ypakData.filter(dat => dat.series.toLowerCase().includes(seriesQuery.toLowerCase()))

        }else if (modelQuery != "" && seriesQuery == "" && ypakQuery == "" ) {
            console.log("Второй фильтр")
            return ypakData.filter(dat => dat.model.toLowerCase().includes(modelQuery.toLowerCase()))
        }else if (ypakQuery != "" && seriesQuery == "" &&  modelQuery == "") {
            console.log("Третий фильтр")
            return ypakData.filter(dat => dat.packing_scheme.toLowerCase().includes(ypakQuery.toLowerCase()))
        }else if (seriesQuery != "" && modelQuery != "" && ypakQuery == "" ) {
            console.log("Четвертый фильтр")
            return ypakData.filter(dat => dat.series.toLowerCase().includes(seriesQuery.toLowerCase())).filter(dat => dat.model.toLowerCase().includes(modelQuery.toLowerCase()))
        }else if (seriesQuery != "" && ypakQuery != "" ) {
            console.log("Пятый фильтр")
            return ypakData.filter(dat => dat.series.toLowerCase().includes(seriesQuery.toLowerCase())).filter(dat => dat.packing_scheme.toLowerCase().includes(ypakQuery.toLowerCase()))
        }else if (modelQuery != "" && ypakQuery != "" ) {
            console.log("Шестой фильтр")
            return ypakData.filter(dat => dat.model.toLowerCase().includes(modelQuery.toLowerCase())).filter(dat => dat.packing_scheme.toLowerCase().includes(ypakQuery.toLowerCase()))
        }else if (seriesQuery != "" && modelQuery != "" && ypakQuery != "" ) {
            console.log("Седьмой фильтр")
            return ypakData.filter(dat => dat.series.toLowerCase().includes(seriesQuery.toLowerCase())).filter(dat => dat.model.toLowerCase().includes(modelQuery.toLowerCase())).filter(dat => dat.packing_scheme.toLowerCase().includes(ypakQuery.toLowerCase()))
        }
        return ypakData
    },[ypakData, seriesQuery, modelQuery, ypakQuery])





    async function getYpakGuide(){
        const response = await axios.get(process.env.REACT_APP_YPAK_GUIDE_URL )
        // console.log(response.data)
        setYpakGuide(response.data.sort(function (a,b){
            return a.id-b.id
        }))
    }
    async function monitorsData(){
        const response = await axios.get(process.env.REACT_APP_YPAK_MONITORS_URL )
        // console.log(response.data)
        setYpakMontors(response.data.sort(function (a,b){
            return a.id-b.id
        }))
    }

    useEffect(()=>{
        getYpakGuide()
        monitorsData()
    },[])
    useEffect(() => {

        const i = setInterval(()=>{
            getYpakGuide()
            monitorsData()

        }, 3000)
        return () => {
            clearInterval(i)
        }
    }, [])


    async function updateMonitorBdline(e, guide){

        let id = guide.id
        const actMonitors = await axios.put(process.env.REACT_APP_YPAK_GUIDE_URL,
            {
                id:guide.id,
                activity:true
            })
        const response = await axios.get(process.env.REACT_APP_YPAK_MONITORS_URL )
        let spisokMonitor = response.data
        for (const monitor of spisokMonitor) {
            if (monitor.line === e){
                if (monitor.monitor == "Пост 1" || monitor.monitor == "Пост 11" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img1
                        }
                    )
                } else if (monitor.monitor == "Пост 2"|| monitor.monitor == "Пост 12" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img2
                        }
                    )
                }else if (monitor.monitor == "Пост 3" || monitor.monitor == "Пост 13" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img3
                        }
                    )
                }else if (monitor.monitor == "Пост 4" || monitor.monitor == "Пост 15" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img4
                        }
                    )
                }else if (monitor.monitor == "Пост 5" || monitor.monitor == "Пост 15" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img5
                        }
                    )
                }else if (monitor.monitor == "Пост 6" || monitor.monitor == "Пост 16" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img6
                        }
                    )
                }else if (monitor.monitor == "Пост 7" || monitor.monitor == "Пост 17" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img7
                        }
                    )
                }else if (monitor.monitor == "Пост 8" || monitor.monitor == "Пост 18" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img8
                        }
                    )
                }else if (monitor.monitor == "Пост 9" || monitor.monitor == "Пост 19" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img9
                        }
                    )
                }else if (monitor.monitor == "Пост 10" || monitor.monitor == "Пост 20" ){
                    const z =  await axios.put(process.env.REACT_APP_YPAK_MONITORS_URL, {
                            id:monitor.id,
                            description: guide.series + " " + guide.model + " " + guide.packing_scheme,
                            img:guide.img10
                        }
                    )
                }

            }
        }
        getYpakGuide()
    }
    const colorGrin = {background:"#00e340"}
    let activblock = {}



    return (
        <div className={"ypakBlok"}>
            <div className={"blockTablePoisk"}>
                <div className={"ypakPoisk"} >
                    <div style={{margin:'0 0 0 10px'}}>
                        <h3>Поиск по серии</h3>
                        <input

                            value={seriesQuery}
                            onChange={e => setSeriesQuery(e.target.value)}
                            placeholder="Поиск..."
                            type="text"
                        />
                    </div>
                    <div style={{margin:'10px 0 0 10px'}}>
                        <h3>Поиск по модели</h3>
                        <input

                            value={modelQuery}
                            onChange={e => setModelQuery(e.target.value)}
                            placeholder="Поиск..."
                            type="text"
                        />
                    </div>
                    <div style={{margin:'10px 0 10px 10px'}}>
                        <h3>Поиск по упаковке</h3>
                        <input

                            value={ypakQuery}
                            onChange={e => setYpakQuery(e.target.value)}
                            placeholder="Поиск..."
                            type="text"
                        />
                    </div>
                </div>
                <div className={"tableGluingBlok"}>
                    <table className={"tableGluing"}>
                        <thead className={"tableGluingBlok_thead"}>
                        <tr>
                            <th>Серия</th>
                            <th>Модель</th>
                            <th>Упаковка</th>
                            <th>Линия 2</th>
                            {/*<th>Линия 3</th>*/}

                        </tr>
                        </thead>
                        <tbody className={"tableGluingBlok_tbody"}>

                        {sortedZnpData.map((guide)=>
                            guide.activity == true ? (
                                <tr style={activblock} key={guide.id}>
                                    <td style={{background:"#00e340"}} >{guide.series}</td>
                                    <td style={{background:"#00e340"}} >{guide.model}</td>
                                    <td style={{background:"#00e340"}} >{guide.packing_scheme}</td>
                                    <td style={{background:"#00e340"}} ><button className={"buttonline1"} value={"Линия 2"} onClick={e => {updateMonitorBdline(e.target.value, guide)}}>Добавить</button></td>
                                    {/*<td><button className={"buttonline2"} value={"Линия 3"} onClick={e => {updateMonitorBdline(e.target.value, guide)}}>Добавить</button></td>*/}

                                </tr>
                            ) : (
                                <tr style={activblock} key={guide.id}>
                                    <td>{guide.series}</td>
                                    <td>{guide.model}</td>
                                    <td>{guide.packing_scheme}</td>
                                    <td><button className={"buttonline1"} value={"Линия 2"} onClick={e => {updateMonitorBdline(e.target.value, guide)}}>Добавить</button></td>
                                    {/*<td><button className={"buttonline2"} value={"Линия 3"} onClick={e => {updateMonitorBdline(e.target.value, guide)}}>Добавить</button></td>*/}

                                </tr>
                            )


                        )}

                        </tbody>
                    </table>
                </div>
            </div>

            <div className={"glavMonitorBlock"}>
                <div className={"monitorsBlock"}>
                    {/*<MonitorsStatBlock/>*/}
                    {/*<MonitorLine2Stat/>*/}
                    <h2>Линия 2</h2>
                    <div className={"monitorBlock"}>
                        {ypackMonitors.slice(0).reverse().map((monitor)=>
                                monitor.line === "Линия 2" && (
                                    <MonitorLine2Stat key={monitor.id} monitor={monitor}/>
                                )
                        )}
                    </div>

                </div>
                {/*<div className={"monitorsBlock"}>*/}
                {/*    /!*<MonitorsStatBlock/>*!/*/}
                {/*    /!*<MonitorLine2Stat/>*!/*/}
                {/*    <h2>Линия 3</h2>*/}
                {/*    <div className={"monitorBlock"}>*/}
                {/*        {ypackMonitors.slice(0).reverse().map((monitor)=>*/}
                {/*                monitor.line === "Линия 3" && (*/}
                {/*                    <MonitorLine2Stat key={monitor.id} monitor={monitor}/>*/}
                {/*                )*/}
                {/*        )}*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
        </div>


    );
};

export default YpakCenterBlok;