import React, {useContext, useEffect, useMemo, useState} from "react";
import './style/style.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./http/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setTimeout(()=> {
            check().then(data =>{
                user.setUser(true)
                user.setRole(data.role)
                user.setIsAuth(true)
                user.setSector(data.sector)
                user.setLine(data.line)
                user.setWorkplace(data.workplace)
            }).finally(() => setLoading(false))
        // },1000)
    },[])


    if (loading){
        return <p>Подождите...</p>
    }

    return (
        <BrowserRouter>
           <AppRouter/>
        </BrowserRouter>

  );
});

export default React.memo(App) ;
// [{id:	1, cell_number:	"2A-1-1.1"},
//     {id:	2, cell_number:	"2A-1-1.2", freeness: true, znp_dataId:null},
//     {id:	3, cell_number:	"2A-1-2.1", freeness: true, znp_dataId:null},
//     {id:	4, cell_number:	"2A-1-2.2", freeness: true, znp_dataId:null},
//     {id:	5, cell_number:	"2A-1-3.1", freeness: true, znp_dataId:null},
//     {id:	6, cell_number:	"2A-1-3.2", freeness: true, znp_dataId:null},
//     {id:	7, cell_number:	"2A-2-1.1", freeness: true, znp_dataId:null},
//     {id:	8, cell_number:	"2A-2-2.1", freeness: true, znp_dataId:null},
//     {id:	9, cell_number:	"2A-2-3.1", freeness: true, znp_dataId:null},
//     {id:	10, cell_number:"2A-2-4.1", freeness: true, znp_dataId:null},
//     {id:	11, cell_number:"2A-3-1.1", freeness: true, znp_dataId:null},
//     {id:	12, cell_number:"2A-3-2.1", freeness: true, znp_dataId:null},
//     {id:	13, cell_number:"2A-3-3.1", freeness: true, znp_dataId:null},
//     {id:	14, cell_number:"2A-3-4.1", freeness: true, znp_dataId:null},
//     {id:	15, cell_number:"2A-3-5.1", freeness: true, znp_dataId:null},
//     {id:	16, cell_number:"2A-4-1.1", freeness: true, znp_dataId:null},
//     {id:	17, cell_number:"2A-4-1.2", freeness: true, znp_dataId:null},
//     {id:	18, cell_number:"2A-4-2.1", freeness: true, znp_dataId:null},
//     {id:	19, cell_number:"2A-4-2.2", freeness: true, znp_dataId:null},
//     {id:	20, cell_number:"2A-4-3.1", freeness: true, znp_dataId:null},
//     {id:	21, cell_number:"2A-4-3.2", freeness: true, znp_dataId:null},
//     {id:	22, cell_number:"2A-4-4.1", freeness: true, znp_dataId:null},
//     {id:	23, cell_number:"2A-4-4.2", freeness: true, znp_dataId:null},
//     {id:	24, cell_number:"2A-5-1.1", freeness: true, znp_dataId:null},
//     {id:	25, cell_number:"2A-5-1.2", freeness: true, znp_dataId:null},
//     {id:	26, cell_number:"2A-5-2.1", freeness: true, znp_dataId:null},
//     {id:	27, cell_number:"2A-5-2.2", freeness: true, znp_dataId:null},
//     {id:	28, cell_number:"2A-5-3.1", freeness: true, znp_dataId:null},
//     {id:	29, cell_number:"2A-5-3.2", freeness: true, znp_dataId:null},
//     {id:	30, cell_number:"2A-5-4.1", freeness: true, znp_dataId:null},
//     {id:	31, cell_number:"2A-5-4.2", freeness: true, znp_dataId:null},
//     {id:	32, cell_number:"2A-5-5.1", freeness: true, znp_dataId:null},
//     {id:	33, cell_number:"2A-5-5.2", freeness: true, znp_dataId:null},
//     {id:	34, cell_number:"2A-6-1.1", freeness: true, znp_dataId:null},
//     {id:	35, cell_number:"2A-6-2.1", freeness: true, znp_dataId:null},
//     {id:	36, cell_number:"2A-6-3.1", freeness: true, znp_dataId:null},
//     {id:	37, cell_number:"2A-6-4.1", freeness: true, znp_dataId:null},
//     {id:	38, cell_number:"2A-7-1.1", freeness: true, znp_dataId:null},
//     {id:	39, cell_number:"2A-7-2.1", freeness: true, znp_dataId:null},
//     {id:	40, cell_number:"2A-7-3.1", freeness: true, znp_dataId:null},
//     {id:	41, cell_number:"2A-7-4.1", freeness: true, znp_dataId:null},
//     {id:	42, cell_number:"2A-7-5.1", freeness: true, znp_dataId:null},
//     {id:	43, cell_number:"2B-1-1.1", freeness: true, znp_dataId:null},
//     {id:	44, cell_number:"2B-1-1.2", freeness: true, znp_dataId:null},
//     {id:	45, cell_number:"2B-1-2.1", freeness: true, znp_dataId:null},
//     {id:	46, cell_number:"2B-1-2.2", freeness: true, znp_dataId:null},
//     {id:	47, cell_number:"2B-1-3.1", freeness: true, znp_dataId:null},
//     {id:	48, cell_number:"2B-1-3.2", freeness: true, znp_dataId:null},
//     {id:	49, cell_number:"2B-1-4.1", freeness: true, znp_dataId:null},
//     {id:	50, cell_number:"2B-1-4.2", freeness: true, znp_dataId:null},
//     {id:	51, cell_number:"2B-2-1.1", freeness: true, znp_dataId:null},
//     {id:	52, cell_number:"2B-2-1.2", freeness: true, znp_dataId:null},
//     {id:	53, cell_number:"2B-2-2.1", freeness: true, znp_dataId:null},
//     {id:	54, cell_number:"2B-2-2.2", freeness: true, znp_dataId:null},
//     {id:	55, cell_number:"2B-2-3.1", freeness: true, znp_dataId:null},
//     {id:	56, cell_number:"2B-2-3.2", freeness: true, znp_dataId:null},
//     {id:	57, cell_number:"2B-2-4.1", freeness: true, znp_dataId:null},
//     {id:	58, cell_number:"2B-2-4.2", freeness: true, znp_dataId:null},
//     {id:	59, cell_number:"2B-2-5.1", freeness: true, znp_dataId:null},
//     {id:	60, cell_number:"2B-2-5.2", freeness: true, znp_dataId:null},
//     {id:	61, cell_number:"2B-2-6.1", freeness: true, znp_dataId:null},
//     {id:	62, cell_number:"2B-2-6.2", freeness: true, znp_dataId:null},
//     {id:	63, cell_number:"2B-3-1.1", freeness: true, znp_dataId:null},
//     {id:	64, cell_number:"2B-3-2.1", freeness: true, znp_dataId:null},
//     {id:	65, cell_number:"2B-3-3.1", freeness: true, znp_dataId:null},
//     {id:	66, cell_number:"2B-3-4.1", freeness: true, znp_dataId:null},
//     {id:	67, cell_number:"2B-4-1.1", freeness: true, znp_dataId:null},
//     {id:	68, cell_number:"2B-4-1.2", freeness: true, znp_dataId:null},
//     {id:	69, cell_number:"2B-4-2.1", freeness: true, znp_dataId:null},
//     {id:	70, cell_number:"2B-4-2.2", freeness: true, znp_dataId:null},
//     {id:	71, cell_number:"2B-4-3.1", freeness: true, znp_dataId:null},
//     {id:	72, cell_number:"2B-4-3.2", freeness: true, znp_dataId:null},
//     {id:	73, cell_number:"2B-4-4.1", freeness: true, znp_dataId:null},
//     {id:	74, cell_number:"2B-4-4.2", freeness: true, znp_dataId:null},
//     {id:	75, cell_number:"2B-4-5.1", freeness: true, znp_dataId:null},
//     {id:	76, cell_number:"2B-4-5.2", freeness: true, znp_dataId:null},
//     {id:	77, cell_number:"2B-4-6.1", freeness: true, znp_dataId:null},
//     {id:	78, cell_number:"2B-4-6.2", freeness: true, znp_dataId:null},
//     {id:	79, cell_number:"2C-1-1.1", freeness: true, znp_dataId:null},
//     {id:	80, cell_number:"2C-1-2.1", freeness: true, znp_dataId:null},
//     {id:	81, cell_number:"2C-1-3.1", freeness: true, znp_dataId:null},
//     {id:	82, cell_number:"2C-1-4.1", freeness: true, znp_dataId:null},
//     {id:	83, cell_number:"2C-2-1.1", freeness: true, znp_dataId:null},
//     {id:	84, cell_number:"2C-2-2.1", freeness: true, znp_dataId:null},
//     {id:	85, cell_number:"2C-2-3.1", freeness: true, znp_dataId:null},
//     {id:	86, cell_number:"2C-2-4.1", freeness: true, znp_dataId:null},
//     {id:	87, cell_number:"2C-2-5.1", freeness: true, znp_dataId:null},
//     {id:	88, cell_number:"2C-2-6.1", freeness: true, znp_dataId:null},
//     {id:	89, cell_number:"2C-2-7.1", freeness: true, znp_dataId:null},
//     {id:	90, cell_number:"2C-2-8.1", freeness: true, znp_dataId:null},
//     {id:	91, cell_number:"2C-2-9.1", freeness: true, znp_dataId:null},
//     {id:	92, cell_number:"2C-3-1.1", freeness: true, znp_dataId:null},
//     {id:	93, cell_number:"2C-3-2.1", freeness: true, znp_dataId:null},
//     {id:	94, cell_number:"2C-3-3.1", freeness: true, znp_dataId:null},
//     {id:	95, cell_number:"2C-3-4.1", freeness: true, znp_dataId:null},
//     {id:	96, cell_number:"2C-3-5.1", freeness: true, znp_dataId:null},
//     {id:	97, cell_number:"2C-4-1.1", freeness: true, znp_dataId:null},
//     {id:	98, cell_number:"2C-4-1.2", freeness: true, znp_dataId:null},
//     {id:	99, cell_number:"2C-4-2.1", freeness: true, znp_dataId:null},
//     {id:	100, cell_number:"2C-4-2.2", freeness: true, znp_dataId:null},
//     {id:	101, cell_number:"2C-4-3.1", freeness: true, znp_dataId:null},
//     {id:	102, cell_number:"2C-4-3.2", freeness: true, znp_dataId:null},
//     {id:	103, cell_number:"2C-4-4.1", freeness: true, znp_dataId:null},
//     {id:	104, cell_number:"2C-4-4.2", freeness: true, znp_dataId:null},
//     {id:	105, cell_number:"2C-4-5.1", freeness: true, znp_dataId:null},
//     {id:	106, cell_number:"2C-4-5.2", freeness: true, znp_dataId:null},
//     {id:	107, cell_number:"2C-4-6.1", freeness: true, znp_dataId:null},
//     {id:	108, cell_number:"2C-4-6.2", freeness: true, znp_dataId:null},
//     {id:	109, cell_number:"2C-4-7.1", freeness: true, znp_dataId:null},
//     {id:	110, cell_number:"2C-4-7.2", freeness: true, znp_dataId:null},
//     {id:	111, cell_number:"2C-5-1.1", freeness: true, znp_dataId:null},
//     {id:	112, cell_number:"2C-5-1.2", freeness: true, znp_dataId:null},
//     {id:	113, cell_number:"2C-5-2.1", freeness: true, znp_dataId:null},
//     {id:	114, cell_number:"2C-5-2.2", freeness: true, znp_dataId:null},
//     {id:	115, cell_number:"2C-5-3.1", freeness: true, znp_dataId:null},
//     {id:	116, cell_number:"2C-5-3.2", freeness: true, znp_dataId:null},
//     {id:	117, cell_number:"2C-5-4.1", freeness: true, znp_dataId:null},
//     {id:	118, cell_number:"2C-5-4.2", freeness: true, znp_dataId:null},
//     {id:	119, cell_number:"2C-5-5.1", freeness: true, znp_dataId:null},
//     {id:	120, cell_number:"2C-5-5.2", freeness: true, znp_dataId:null},
//     {id:	121, cell_number:"2C-5-6.1", freeness: true, znp_dataId:null},
//     {id:	122, cell_number:"2C-5-6.2", freeness: true, znp_dataId:null},
//     {id:	123, cell_number:"2C-5-7.1", freeness: true, znp_dataId:null},
//     {id:	124, cell_number:"2C-5-7.2", freeness: true, znp_dataId:null},
//     {id:	125, cell_number:"2D-1-1.1", freeness: true, znp_dataId:null},
//     {id:	126, cell_number:"2D-1-2.1", freeness: true, znp_dataId:null},
//     {id:	127, cell_number:"2D-1-3.1", freeness: true, znp_dataId:null},
//     {id:	128, cell_number:"2D-1-4.1", freeness: true, znp_dataId:null},
//     {id:	129, cell_number:"2D-1-5.1", freeness: true, znp_dataId:null},
//     {id:	130, cell_number:"2D-1-6.1", freeness: true, znp_dataId:null},
//     {id:	131, cell_number:"2D-1-7.1", freeness: true, znp_dataId:null},
//     {id:	132, cell_number:"2D-1-8.1", freeness: true, znp_dataId:null},
//     {id:	133, cell_number:"2D-1-9.1", freeness: true, znp_dataId:null},
//     {id:	134, cell_number:"2D-1-10.1", freeness: true, znp_dataId:null},
//     {id:	135, cell_number:"2D-1-11.1", freeness: true, znp_dataId:null},
//     {id:	136, cell_number:"2D-1-12.1", freeness: true, znp_dataId:null},
//     {id:	137, cell_number:"2D-1-13.1", freeness: true, znp_dataId:null},
//     {id:	138, cell_number:"2D-1-14.1", freeness: true, znp_dataId:null},
//     {id:	139, cell_number:"2D-1-15.1", freeness: true, znp_dataId:null},
//     {id:	140, cell_number:"2D-1-16.1", freeness: true, znp_dataId:null},
//     {id:	141, cell_number:"2D-1-17.1", freeness: true, znp_dataId:null},
//     {id:	142, cell_number:"2D-1-18.1", freeness: true, znp_dataId:null},
//     {id:	143, cell_number:"2D-1-19.1", freeness: true, znp_dataId:null},
//     {id:	144, cell_number:"2D-1-20.1", freeness: true, znp_dataId:null}]