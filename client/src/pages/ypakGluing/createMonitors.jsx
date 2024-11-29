import React, {useEffect, useMemo, useRef, useState} from 'react';
import axios from "axios";


const CreateMonitors = () => {
    const inputEl = useRef()

    const [series, setSeries]= useState("")
    const [model, setModel]= useState("")
    const [packing_scheme, setPacking_scheme]= useState("")
    const [file1, setFile1] = useState( null)
    const [file2, setFile2] = useState( null)
    const [file3, setFile3] = useState( null)
    const [file4, setFile4] = useState( null)
    const [file5, setFile5] = useState( null)
    const [file6, setFile6] = useState( null)
    const [file7, setFile7] = useState( null)
    const [file8, setFile8] = useState( null)
    const [file9, setFile9] = useState( null)
    const [file10, setFile10] = useState( null)

    const [filesRender1, setFilesRender1] = useState( null)
    const [filesRender2, setFilesRender2] = useState( null)
    const [filesRender3, setFilesRender3] = useState( null)
    const [filesRender4, setFilesRender4] = useState( null)
    const [filesRender5, setFilesRender5] = useState( null)
    const [filesRender6, setFilesRender6] = useState( null)
    const [filesRender7, setFilesRender7] = useState( null)
    const [filesRender8, setFilesRender8] = useState( null)
    const [filesRender9, setFilesRender9] = useState( null)
    const [filesRender10, setFilesRender10] = useState( null)

    const selectFile1 = e =>{
        // console.log(e.target.files[0])
        setFile1(e.target.files[0])
        setFilesRender1(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile2 = e =>{
        // console.log(e.target.files[0])
        setFile2(e.target.files[0])
        setFilesRender2(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile3 = e =>{
        // console.log(e.target.files[0])
        setFile3(e.target.files[0])
        setFilesRender3(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile4 = e =>{
        // console.log(e.target.files[0])
        setFile4(e.target.files[0])
        setFilesRender4(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile5 = e =>{
        // console.log(e.target.files[0])
        setFile5(e.target.files[0])
        setFilesRender5(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile6 = e =>{
        // console.log(e.target.files[0])
        setFile6(e.target.files[0])
        setFilesRender6(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile7 = e =>{
        // console.log(e.target.files[0])
        setFile7(e.target.files[0])
        setFilesRender7(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile8 = e =>{
        // console.log(e.target.files[0])
        setFile8(e.target.files[0])
        setFilesRender8(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile9 = e =>{
        // console.log(e.target.files[0])
        setFile9(e.target.files[0])
        setFilesRender9(URL.createObjectURL(e.target.files[0]))
    }
    const selectFile10 = e =>{
        // console.log(e.target.files[0])
        setFile10(e.target.files[0])
        setFilesRender10(URL.createObjectURL(e.target.files[0]))
    }


    async function addForm (series,model,packing_scheme, file1, file2,file3,file4,file5,file6,file7,file8,file9,file10) {
        const formData = new FormData()
        formData.append('series', series)
        formData.append('model', model)
        formData.append('packing_scheme',packing_scheme)
        formData.append('img1',file1)
        formData.append('img2',file2)
        formData.append('img3',file3)
        formData.append('img4',file4)
        formData.append('img5',file5)
        formData.append('img6',file6)
        formData.append('img7',file7)
        formData.append('img8',file8)
        formData.append('img9',file9)
        formData.append('img10',file10)

        // console.log(formData)
        const z = await axios.post(process.env.REACT_APP_YPAK_GUIDE_URL, formData)
        if (z.status == 200){
            alert("Успешно")

        } else {
            alert("Ошибка, попробуйте снова")
        }
        inputEl.current.value = null
        setSeries("")
        setModel("")
        setPacking_scheme("")

        setFilesRender1(null)
        setFilesRender2(null)
        setFilesRender3(null)
        setFilesRender4(null)
        setFilesRender5(null)
        setFilesRender6(null)
        setFilesRender7(null)
        setFilesRender8(null)
        setFilesRender9(null)
        setFilesRender10(null)

        getYpakGuide()
    }
    // console.log(series)
    // console.log(model)
    // console.log(packing_scheme)


    async function createYpackdata (series,model,packing_scheme,file){
       await axios.post(process.env.REACT_APP_YPAK_GUIDE_URL,{

       })
    }
    let dis = true
    if (series != "" && model != "" && packing_scheme != "" && file10 != null) {
        dis = false
    } else {
        dis = true
    }


//=====================================================================================================================================================================
//==================================Изменение записи для мониторов==========================================================================================================================
//================================================================================================================================================================


// Список всех вариантов упаковки
    const [ypakGuide, setYpakGuide] = useState([])
    // Выбранная упаковка
    const [ypakGuideUpdate, setYpakGuideUpdate] = useState([])
// Состояние для фильтра по поисковой строке
    const [ypakData, setYpakData] = useState([])
    // Значение поисковой строки по серии
    const [seriesQuery, setSeriesQuery] = useState('')
    // Значение поисковой строки по модели
    const [modelQuery, setModelQuery] = useState("")
    // Значение поисковой строки по модели
    const [ypakQuery, setYpakQuery] = useState("")

    const [activMeni, setActivMeni] = useState(true)

    //Функция которая заполняет отфильтрованное состояние
    useMemo(()=>{
        setYpakData(ypakGuide.sort(function (a,b){
            return a.id-b.id
        }))
        // console.log(ypakGuide)
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


    useEffect(()=>{
        getYpakGuide()
    },[])

    //=-=-=-=-=-==-=-=-=-=-=-=-=Нажатие на кнопку редактировать-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    const [seriesUpdate, setSeriesUpdate]= useState("")
    const [modelUpdate, setModelUpdate]= useState("")
    const [packing_schemeUpdate, setPacking_schemeUpdate]= useState("")
    const [file1Update, setFile1Update] = useState( null)
    const [file2Update, setFile2Update] = useState( null)
    const [file3Update, setFile3Update] = useState( null)
    const [file4Update, setFile4Update] = useState( null)
    const [file5Update, setFile5Update] = useState( null)
    const [file6Update, setFile6Update] = useState( null)
    const [file7Update, setFile7Update] = useState( null)
    const [file8Update, setFile8Update] = useState( null)
    const [file9Update, setFile9Update] = useState( null)
    const [file10Update, setFile10Update] = useState( null)

    // Имена файлов для удаления
    const [file1Delite, setFile1Delite] = useState( null)
    const [file2Delite, setFile2Delite] = useState( null)
    const [file3Delite, setFile3Delite] = useState( null)
    const [file4Delite, setFile4Delite] = useState( null)
    const [file5Delite, setFile5Delite] = useState( null)
    const [file6Delite, setFile6Delite] = useState( null)
    const [file7Delite, setFile7Delite] = useState( null)
    const [file8Delite, setFile8Delite] = useState( null)
    const [file9Delite, setFile9Delite] = useState( null)
    const [file10Delite, setFile10Delite] = useState( null)

    const [filesRender1Update, setFilesRender1Update] = useState( null)
    const [filesRender2Update, setFilesRender2Update] = useState( null)
    const [filesRender3Update, setFilesRender3Update] = useState( null)
    const [filesRender4Update, setFilesRender4Update] = useState( null)
    const [filesRender5Update, setFilesRender5Update] = useState( null)
    const [filesRender6Update, setFilesRender6Update] = useState( null)
    const [filesRender7Update, setFilesRender7Update] = useState( null)
    const [filesRender8Update, setFilesRender8Update] = useState( null)
    const [filesRender9Update, setFilesRender9Update] = useState( null)
    const [filesRender10Update, setFilesRender10Update] = useState( null)

    const selectFile1Update = e =>{
        // console.log(e.target.files[0])
        setFile1Update(e.target.files[0])
        setFilesRender1Update(URL.createObjectURL(e.target.files[0]))
        setFile1Delite(ypakGuideUpdate.img1)
    }
    const selectFile2Update = e =>{
        // console.log(e.target.files[0])
        setFile2Update(e.target.files[0])
        setFilesRender2Update(URL.createObjectURL(e.target.files[0]))
        setFile2Delite(ypakGuideUpdate.img2)
    }
    const selectFile3Update = e =>{
        // console.log(e.target.files[0])
        setFile3Update(e.target.files[0])
        setFilesRender3Update(URL.createObjectURL(e.target.files[0]))
        setFile3Delite(ypakGuideUpdate.img3)
    }
    const selectFile4Update = e =>{
        // console.log(e.target.files[0])
        setFile4Update(e.target.files[0])
        setFilesRender4Update(URL.createObjectURL(e.target.files[0]))
        setFile4Delite(ypakGuideUpdate.img4)
    }
    const selectFile5Update = e =>{
        // console.log(e.target.files[0])
        setFile5Update(e.target.files[0])
        setFilesRender5Update(URL.createObjectURL(e.target.files[0]))
        setFile5Delite(ypakGuideUpdate.img5)
    }
    const selectFile6Update = e =>{
        // console.log(e.target.files[0])
        setFile6Update(e.target.files[0])
        setFilesRender6Update(URL.createObjectURL(e.target.files[0]))
        setFile6Delite(ypakGuideUpdate.img6)
    }
    const selectFile7Update = e =>{
        // console.log(e.target.files[0])
        setFile7Update(e.target.files[0])
        setFilesRender7Update(URL.createObjectURL(e.target.files[0]))
        setFile7Delite(ypakGuideUpdate.img7)
    }
    const selectFile8Update = e =>{
        // console.log(e.target.files[0])
        setFile8Update(e.target.files[0])
        setFilesRender8Update(URL.createObjectURL(e.target.files[0]))
        setFile8Delite(ypakGuideUpdate.img8)
    }
    const selectFile9Update = e =>{
        // console.log(e.target.files[0])
        setFile9Update(e.target.files[0])
        setFilesRender9Update(URL.createObjectURL(e.target.files[0]))
        setFile9Delite(ypakGuideUpdate.img9)
    }
    const selectFile10Update = e =>{
        // console.log(e.target.files[0])
        setFile10Update(e.target.files[0])
        setFilesRender10Update(URL.createObjectURL(e.target.files[0]))
        setFile10Delite(ypakGuideUpdate.img10)
    }

    function clickUpdate(guide){
        setYpakGuideUpdate(guide)
        setSeriesUpdate(guide.series)
        setModelUpdate(guide.model)
        setPacking_schemeUpdate(guide.packing_scheme)


    }


    async function addFormUpdate (ypakGuideUpdate,seriesUpdate,modelUpdate,packing_schemeUpdate, file1Update, file2Update,file3Update,file4Update,file5Update,
                                  file6Update,file7Update,file8Update,file9Update,file10Update,file1Delite,file2Delite,file3Delite,file4Delite,file5Delite,file6Delite,file7Delite,file8Delite,file9Delite,file10Delite) {
        const formData = new FormData()
        formData.append('id',ypakGuideUpdate.id )
        formData.append('series', seriesUpdate)
        formData.append('model', modelUpdate)
        formData.append('packing_scheme',packing_schemeUpdate)
        formData.append('delImg1',file1Delite)
        formData.append('delImg2',file2Delite)
        formData.append('delImg3',file3Delite)
        formData.append('delImg4',file4Delite)
        formData.append('delImg5',file5Delite)
        formData.append('delImg6',file6Delite)
        formData.append('delImg7',file7Delite)
        formData.append('delImg8',file8Delite)
        formData.append('delImg9',file9Delite)
        formData.append('delImg10',file10Delite)

        formData.append('img1',file1Update)
        formData.append('img2',file2Update)
        formData.append('img3',file3Update)
        formData.append('img4',file4Update)
        formData.append('img5',file5Update)
        formData.append('img6',file6Update)
        formData.append('img7',file7Update)
        formData.append('img8',file8Update)
        formData.append('img9',file9Update)
        formData.append('img10',file10Update)

        // console.log(formData)
        const z = await axios.put(process.env.REACT_APP_YPAK_GUIDE_URL, formData)
        if (z.status == 200){
            alert("Успешно")

        } else {
            alert("Ошибка, попробуйте снова")
        }
        inputEl.current.value = null
        setSeriesUpdate("")
        setModelUpdate("")
        setPacking_schemeUpdate("")

        setFilesRender1Update(null)
        setFilesRender2Update(null)
        setFilesRender3Update(null)
        setFilesRender4Update(null)
        setFilesRender5Update(null)
        setFilesRender6Update(null)
        setFilesRender7Update(null)
        setFilesRender8Update(null)
        setFilesRender9Update(null)
        setFilesRender10Update(null)

        setYpakGuideUpdate([])
        getYpakGuide()
    }

    //Функция удаления записи
    async function  deliteYpak (guide){
        console.log(guide.id)
        const response = await axios.delete(process.env.REACT_APP_YPAK_GUIDE_URL, {
            data: { id:guide.id }
        })
        setYpakGuideUpdate([])
        getYpakGuide()
    }
    async function  deliteYpakImg (guide, e){
        console.log(ypakGuideUpdate)
        if (e == "Пост 10"){
            ypakGuideUpdate.img10 = null
        } else if (e == "Пост 9"){
            ypakGuideUpdate.img9 = null
        } else if (e == "Пост 8"){
            ypakGuideUpdate.img8 = null
        } else if (e == "Пост 7"){
            ypakGuideUpdate.img7 = null
        } else if (e == "Пост 6"){
            ypakGuideUpdate.img6 = null
        } else if (e == "Пост 5"){
            ypakGuideUpdate.img5 = null
        } else if (e == "Пост 4"){
            ypakGuideUpdate.img4 = null
        } else if (e == "Пост 3"){
            ypakGuideUpdate.img3 = null
        } else if (e == "Пост 2"){
            ypakGuideUpdate.img2 = null
        } else if (e == "Пост 1"){
            ypakGuideUpdate.img1 = null
        }
        const response = await axios.delete(process.env.REACT_APP_YPAK_GUIDE_DELIMG_URL, {
            data: {
                id:guide.id,
                post: e
            }
        })
        // setYpakGuideUpdate([])
        getYpakGuide()
    }




    return (
        <div>
            <div>
                <h1>Создание упаковки</h1>
                <div className={"createMonitorsBlock"}>
                    <form className={"createMonitors-form"} >

                        {/*<label className={classes.labelZnp}>*/}
                        {/*    ЗНП:*/}
                        <input className={"createInput"} value={series}  type="text" name="series" placeholder="Серия" onChange={e => setSeries( e.target.value) } />
                        {/*</label>*/}
                        {/*<label className={classes.labelZnp}>*/}
                        {/*    Модель:*/}
                        <input className={"createInput"} value={model} type="text" name="model" placeholder="Модель" onChange={e => setModel(e.target.value) } />
                        {/*</label>*/}
                        {/*<label className={classes.labelZnp}>*/}
                        {/*    Кромка:*/}
                        <input className={"createInput"} value={packing_scheme} type="text" name="edging" placeholder="Упаковка" onChange={e => setPacking_scheme( e.target.value) } />
                        {/*</label>*/}
                        {/*<input className={classes.createButton} onClick={newZnp} disabled={dis} type="submit"  value="Сохранить" />*/}
                    </form>
                    <div className={"files_div"} >
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 10 (палет)</p>
                            <input
                                className={"inputImg"}
                                ref={inputEl}
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile10}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender10} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 9</p>
                            <input
                                className={"inputImg"}
                                // ref={inputEl}
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile9}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender9} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 8</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile8}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender8} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 7</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile7}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender7} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 6</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile6}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender6} alt=""/>
                            </div>
                        </div>

                    </div>


                    <div className={"files_div"}>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 5</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile5}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender5} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 4</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile4}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender4} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 3</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile3}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender3} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 2</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile2}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender2} alt=""/>
                            </div>
                        </div>
                        <div className={"postDiv"}>
                            <p className={"postText"}>Пост 1</p>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={selectFile1}
                            />
                            <div className={"impDiv"}>
                                <img style={{width:330}} src={filesRender1} alt=""/>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <button className={"buttonCreate"} style={{margin: 30}}   onClick={() => addForm(series,model,packing_scheme, file1,file2, file3, file4, file5, file6, file7, file8, file9, file10)}>Создать</button>
                </div>
            </div>
        <hr className={"hr"}/>

            {/*============ Редактирование записей=============================*/}
            <h1 style={{margin:'0 0 20px 40px'}}>Редактирование упаковки</h1>
            <div style={{margin:'0 0 50px 10px'}}>
                <div >
                    <div className={"ypakPoisk"} >
                        <div style={{margin:'0 0 20px 10px',display:'flex'}}>
                            <h3 style={{margin:'0 10px 0 10px'}}>Поиск по серии</h3>
                            <input

                                value={seriesQuery}
                                onChange={e => setSeriesQuery(e.target.value)}
                                placeholder="Поиск..."
                                type="text"
                            />
                            <h3 style={{margin:'0 10px 0 10px'}}>Поиск по модели</h3>
                            <input

                                value={modelQuery}
                                onChange={e => setModelQuery(e.target.value)}
                                placeholder="Поиск..."
                                type="text"
                            />
                            <h3 style={{margin:'0 10px 0 10px'}}>Поиск по упаковке</h3>
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
                                <th className={"th_table"} colSpan={2}></th>



                            </tr>
                            </thead>
                            <tbody className={"tableGluingBlok_tbody"}>

                            {sortedZnpData.map((guide)=>
                                <tr key={guide.id}>
                                    <td>{guide.series}</td>
                                    <td>{guide.model}</td>
                                    <td>{guide.packing_scheme}</td>
                                    <td><button onClick={()=> {clickUpdate(guide)}}>Редактировать</button></td>
                                    <td><button onClick={()=> {deliteYpak (guide)}}>Удалить</button></td>

                                </tr>

                            )}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={!activMeni ? {display:'none'} : {display:'block'}}>
                    <div className={"starData"} >
                        <h2>  Старые изображения</h2>
                        <div className={"post"}>

                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 10 (Палет)</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img10} alt=""/>
                                </div>

                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 9</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img9} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 8</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img8} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 7</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img7} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 6</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img6} alt=""/>
                                </div>
                            </div>
                        </div>

                        {/*Второй блок картинок*/}
                        <div className={"post"} >
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 5</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img5} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 4</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img4} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 3</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img3} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 2</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img2} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 1</p>
                                <div className={"impDiv"}>
                                    <img style={{width: 355, maxHeight: '95%'}} src={process.env.REACT_APP_START_URL + ypakGuideUpdate.img1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr className={"hr"}/>
                    </div>

{/*===================Новые данные для заполнения=====================================================*/}

                    <div className={"newData"} >
                        <h2>  Новые Данные</h2>


                        <h3 style={{margin:'0 10px 0 10px'}}>Изменения серии</h3>
                        <input

                            value={seriesUpdate}
                            onChange={e => setSeriesUpdate(e.target.value)}
                            placeholder={seriesUpdate}
                            type="text"
                        />
                        <h3 style={{margin:'0 10px 0 10px'}}>Изменения модели</h3>
                        <input

                            value={modelUpdate}
                            onChange={e => setModelUpdate(e.target.value)}
                            placeholder={modelUpdate}
                            type="text"
                        />
                        <h3 style={{margin:'0 10px 0 10px'}}>Изменения упаковки</h3>
                        <input
                            value={packing_schemeUpdate}
                            onChange={e => setPacking_schemeUpdate(e.target.value)}
                            placeholder={packing_schemeUpdate}
                            type="text"
                        />
                    <div/>
                        <div className={"blok_button-delImg"}>
                            <div className={"blok1_button-delImg"}>
                                {ypakGuideUpdate.img10 ?(
                                    <button value={"Пост 10"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 10</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 10</button>
                                )}
                                {ypakGuideUpdate.img9 ?(
                                    <button value={"Пост 9"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 9</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 9</button>
                                )}
                                {ypakGuideUpdate.img8 ?(
                                    <button value={"Пост 8"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 8</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 8</button>
                                )}
                                {ypakGuideUpdate.img7 ?(
                                    <button value={"Пост 7"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 7</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 7</button>
                                )}
                                {ypakGuideUpdate.img6 ?(
                                    <button value={"Пост 6"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 6</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 6</button>
                                )}


                            </div>
                            <div className={"blok2_button-delImg"}>
                                {ypakGuideUpdate.img5 ?(
                                    <button value={"Пост 5"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 5</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 5</button>
                                )}
                                {ypakGuideUpdate.img4 ?(
                                    <button value={"Пост 4"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 4</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 4</button>
                                )}
                                {ypakGuideUpdate.img3 ?(
                                    <button value={"Пост 3"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 3</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 3</button>
                                )}
                                {ypakGuideUpdate.img2 ?(
                                    <button value={"Пост 2"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 2</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 2</button>
                                )}
                                {ypakGuideUpdate.img1 ?(
                                    <button value={"Пост 1"} onClick={(e)=>deliteYpakImg (ypakGuideUpdate, e.target.value)} className={"button-delImg"}>Удалить старое изображение Пост 1</button>
                                ):(
                                    <button disabled className={"button-delImg"}>Удалить старое изображение Пост 1</button>
                                )}

                            </div>


                        </div>


                        <div className={"files_div"} >
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 10 (палет)</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile10Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender10Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 9</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile9Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender9Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 8</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile8Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender8Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 7</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile7Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender7Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 6</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile6Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender6Update} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/*Второй блок картинок*/}
                        <div className={"files_div"} >
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 5</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile5Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender5Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 4</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile4Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender4Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 3</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile3Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender3Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 2</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile2Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender2Update} alt=""/>
                                </div>
                            </div>
                            <div className={"postDiv"}>
                                <p className={"postText"}>Пост 1</p>
                                <input
                                    className={"inputImg"}
                                    ref={inputEl}
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={selectFile1Update}
                                />
                                <div className={"impDiv"}>
                                    <img style={{width:330}} src={filesRender1Update} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                    <button className={"buttonCreate"} style={{margin: 30}}   onClick={() => addFormUpdate(ypakGuideUpdate, seriesUpdate,modelUpdate,packing_schemeUpdate, file1Update, file2Update,file3Update,file4Update,file5Update,
                        file6Update,file7Update,file8Update,file9Update,file10Update,file1Delite,file2Delite,file3Delite,file4Delite,file5Delite,file6Delite,file7Delite,file8Delite,file9Delite,file10Delite)}>Сохранить</button>
                </div>


            </div>

        </div>


    );
};

export default CreateMonitors;