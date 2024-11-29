import React, {useContext, useState} from 'react';
import Palet1 from "../../../../component/UI/palet/palet1";
import Palet2 from "../../../../component/UI/palet/palet2";
import Palet3 from "../../../../component/UI/palet/palet3";
import Palet4 from "../../../../component/UI/palet/palet4";
import Palet5 from "../../../../component/UI/palet/palet5";
import Palet6 from "../../../../component/UI/palet/palet6";
import Palet7 from "../../../../component/UI/palet/palet7";
import Palet8 from "../../../../component/UI/palet/palet8";
import Palet9 from "../../../../component/UI/palet/palet9";
import Palet10 from "../../../../component/UI/palet/palet10";
import Palet11 from "../../../../component/UI/palet/palet11";
import Palet12 from "../../../../component/UI/palet/palet12";
import Palet13 from "../../../../component/UI/palet/palet13";
import Palet14 from "../../../../component/UI/palet/palet14";
import Palet15 from "../../../../component/UI/palet/palet15";
import Palet16 from "../../../../component/UI/palet/palet16";
import Palet17 from "../../../../component/UI/palet/palet17";
import Palet18 from "../../../../component/UI/palet/palet18";
import Palet19 from "../../../../component/UI/palet/palet19";
import Palet20 from "../../../../component/UI/palet/palet20";
import Palet21 from "../../../../component/UI/palet/palet21";
import Palet22 from "../../../../component/UI/palet/palet22";
import Palet23 from "../../../../component/UI/palet/palet23";
import Palet24 from "../../../../component/UI/palet/palet24";
import Palet25 from "../../../../component/UI/palet/palet25";
import axios from "axios";
import {Context} from "../../../../index";
import MyOption from "../../../../component/UI/select/MyOption";

const ZnpDataItemRaskroi = ({buffers,specZopros,modalDatas,prindClick, ...props}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    let pal1 = {},pal2 = {},pal3 = {}, pal4 = {}, pal5 = {}, pal6 = {}, pal7 = {}, pal8 = {}, pal9 = {}, pal10 = {}, pal11 = {}, pal12 = {}, pal13 = {}, pal14 = {},
        pal15 = {}, pal16 = {}, pal17 = {}, pal18 = {}, pal19 = {}, pal20 = {}, pal21 = {}, pal22 = {}, pal23 = {}, pal24 = {}, pal25 = {}, palWork = {}

    let selectStyle = {fontSize: "14px", whiteSpace: "nowrap", margin:"5px",fontWeight: "bold"}
    let selectStyleActive = {fontSize: "14px",fontWeight: "bold"}


    const colorGrin = {background:"#00e340"}
    const colorBlue = {background:"#4285f4"}
    const colorWork = {background:"#dcbd06"}
    const colorClose = {background:"#545454"}



    if (props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,7) === globalStore.workStatusYpakovka ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,7) === globalStore.workStatusYpakovka
    ){
        palWork = colorClose
    } else if (props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,17) === globalStore.workStatusRaspil ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,17) === globalStore.workStatusRaspil){

        palWork = colorWork
    }


//=================================  Палет 1  ==============================================================================================================
    if ( props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,3) === globalStore.cellD0
    ){
        pal1 = colorGrin
    }else if (props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,7) === globalStore.workStatusYpakovka){
        pal1 = colorClose
    }else if (props.znpData.address_pallet_1 != null && props.znpData.address_pallet_1.substring(0,17) === globalStore.workStatusRaspil){
        pal1 = colorWork
    }
//=================================  Палет 2  ==============================================================================================================
    if(props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,3) === globalStore.cellD0
    ){
        pal2 = colorGrin

    }else if (props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,7) === globalStore.workStatusYpakovka){
        pal2 = colorClose
    }else if (props.znpData.address_pallet_2 != null && props.znpData.address_pallet_2.substring(0,17) === globalStore.workStatusRaspil){
        pal2 = colorWork
    }
//=================================  Палет 3 ==============================================================================================================
    if(props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,3) === globalStore.cellD0
    ){
        pal3 = colorGrin
    }else if (props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,7) === globalStore.workStatusYpakovka){
        pal3 = colorClose
    }else if (props.znpData.address_pallet_3 != null && props.znpData.address_pallet_3.substring(0,17) === globalStore.workStatusRaspil){
        pal3 = colorWork
    }
//=================================  Палет 4 ==============================================================================================================
    if(props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,3) === globalStore.cellD0
    ){
        pal4 = colorGrin
    }else if (props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,7) === globalStore.workStatusYpakovka){
        pal4 = colorClose
    }else if (props.znpData.address_pallet_4 != null && props.znpData.address_pallet_4.substring(0,17) === globalStore.workStatusRaspil){
        pal4 = colorWork
    }
//=================================  Палет 5 ==============================================================================================================
    if(props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,3) === globalStore.cellD0
    ){
        pal5 = colorGrin
    }else if (props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,7) === globalStore.workStatusYpakovka){
        pal5 = colorClose
    }else if (props.znpData.address_pallet_5 != null && props.znpData.address_pallet_5.substring(0,17) === globalStore.workStatusRaspil){
        pal5 = colorWork
    }
//=================================  Палет 6 ==============================================================================================================
    if(props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,3) === globalStore.cellD0
    ){
        pal6 = colorGrin
    }else if (props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,7) === globalStore.workStatusYpakovka){
        pal6 = colorClose
    }else if (props.znpData.address_pallet_6 != null && props.znpData.address_pallet_6.substring(0,17) === globalStore.workStatusRaspil){
        pal6 = colorWork
    }
//=================================  Палет 7 ==============================================================================================================
    if(props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,3) === globalStore.cellD0
    ){
        pal7 = colorGrin
    }else if (props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,7) === globalStore.workStatusYpakovka){
        pal7 = colorClose
    }else if (props.znpData.address_pallet_7 != null && props.znpData.address_pallet_7.substring(0,17) === globalStore.workStatusRaspil){
        pal7 = colorWork
    }
//=================================  Палет 8 ==============================================================================================================
    if(props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,3) === globalStore.cellD0
    ){
        pal8 = colorGrin

    }else if (props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,7) === globalStore.workStatusYpakovka){
        pal8 = colorClose
    }else if (props.znpData.address_pallet_8 != null && props.znpData.address_pallet_8.substring(0,17) === globalStore.workStatusRaspil){
        pal8 = colorWork
    }
//=================================  Палет 9 ==============================================================================================================
    if(props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,3) === globalStore.cellD0
    ){
        pal9 = colorGrin

    }else if (props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,7) === globalStore.workStatusYpakovka){
        pal9 = colorClose
    }else if (props.znpData.address_pallet_9 != null && props.znpData.address_pallet_9.substring(0,17) === globalStore.workStatusRaspil){
        pal9 = colorWork
    }
//=================================  Палет 10 ==============================================================================================================
    if(props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,3) === globalStore.cellD0
    ){
        pal10 = colorGrin

    }else if (props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,7) === globalStore.workStatusYpakovka){
        pal10 = colorClose
    }else if (props.znpData.address_pallet_10 != null && props.znpData.address_pallet_10.substring(0,17) === globalStore.workStatusRaspil){
        pal10 = colorWork
    }
//=================================  Палет 11 ==============================================================================================================
    if(props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,3) === globalStore.cellD0
    ){
        pal11 = colorGrin

    }else if (props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,7) === globalStore.workStatusYpakovka){
        pal11 = colorClose
    }else if (props.znpData.address_pallet_11 != null && props.znpData.address_pallet_11.substring(0,17) === globalStore.workStatusRaspil){
        pal11 = colorWork
    }
//=================================  Палет 12 ==============================================================================================================
    if(props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,3) === globalStore.cellD0
    ){
        pal12 = colorGrin
    }else if (props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,7) === globalStore.workStatusYpakovka){
        pal12 = colorClose
    }else if (props.znpData.address_pallet_12 != null && props.znpData.address_pallet_12.substring(0,17) === globalStore.workStatusRaspil){
        pal12 = colorWork
    }
//=================================  Палет 13 ==============================================================================================================
    if(props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,3) === globalStore.cellD0
    ){
        pal13 = colorGrin

    }else if (props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,7) === globalStore.workStatusYpakovka){
        pal13 = colorClose
    }else if (props.znpData.address_pallet_13 != null && props.znpData.address_pallet_13.substring(0,17) === globalStore.workStatusRaspil){
        pal13 = colorWork
    }
//=================================  Палет 14 ==============================================================================================================
    if(props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,3) === globalStore.cellD0
    ){
        pal14 = colorGrin

    }else if (props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,7) === globalStore.workStatusYpakovka){
        pal14 = colorClose
    }else if (props.znpData.address_pallet_14 != null && props.znpData.address_pallet_14.substring(0,17) === globalStore.workStatusRaspil){
        pal14 = colorWork
    }
//=================================  Палет 15 ==============================================================================================================
    if(props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,3) === globalStore.cellD0
    ){
        pal15 = colorGrin

    }else if (props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,7) === globalStore.workStatusYpakovka){
        pal15 = colorClose
    }else if (props.znpData.address_pallet_15 != null && props.znpData.address_pallet_15.substring(0,17) === globalStore.workStatusRaspil){
        pal15 = colorWork
    }
//=================================  Палет 16 ==============================================================================================================
    if(props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,3) === globalStore.cellD0
    ){
        pal16 = colorGrin

    }else if (props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,7) === globalStore.workStatusYpakovka){
        pal16 = colorClose
    }else if (props.znpData.address_pallet_16 != null && props.znpData.address_pallet_16.substring(0,17) === globalStore.workStatusRaspil){
        pal16 = colorWork
    }
//=================================  Палет 17 ==============================================================================================================
    if(props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,3) === globalStore.cellD0
    ){
        pal17 = colorGrin

    }else if (props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,7) === globalStore.workStatusYpakovka){
        pal17 = colorClose
    }else if (props.znpData.address_pallet_17 != null && props.znpData.address_pallet_17.substring(0,17) === globalStore.workStatusRaspil){
        pal17 = colorWork
    }
//=================================  Палет 18 ==============================================================================================================
    if(props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,3) === globalStore.cellD0
    ){
        pal18 = colorGrin

    }else if (props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,7) === globalStore.workStatusYpakovka){
        pal18 = colorClose
    }else if (props.znpData.address_pallet_18 != null && props.znpData.address_pallet_18.substring(0,17) === globalStore.workStatusRaspil){
        pal18 = colorWork
    }
//=================================  Палет 19 ==============================================================================================================
    if(props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,3) === globalStore.cellD0
    ){
        pal19 = colorGrin

    }else if (props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,7) === globalStore.workStatusYpakovka){
        pal19 = colorClose
    }else if (props.znpData.address_pallet_19 != null && props.znpData.address_pallet_19.substring(0,17) === globalStore.workStatusRaspil){
        pal19 = colorWork
    }
//=================================  Палет 20 ==============================================================================================================
    if(props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,3) === globalStore.cellD0
    ){
        pal20 = colorGrin
    }else if (props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,7) === globalStore.workStatusYpakovka){
        pal20 = colorClose
    }else if (props.znpData.address_pallet_20 != null && props.znpData.address_pallet_20.substring(0,17) === globalStore.workStatusRaspil){
        pal20 = colorWork
    }
//=================================  Палет 21 ==============================================================================================================
    if(props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,3) === globalStore.cellD0
    ){
        pal21 = colorGrin
    }else if (props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,7) === globalStore.workStatusYpakovka){
        pal21 = colorClose
    }else if (props.znpData.address_pallet_21 != null && props.znpData.address_pallet_21.substring(0,17) === globalStore.workStatusRaspil){
        pal21 = colorWork
    }
//=================================  Палет 22 ==============================================================================================================
    if(props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,3) === globalStore.cellD0
    ){
        pal22 = colorGrin
    }else if (props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,7) === globalStore.workStatusYpakovka){
        pal22 = colorClose
    }else if (props.znpData.address_pallet_22 != null && props.znpData.address_pallet_22.substring(0,17) === globalStore.workStatusRaspil){
        pal22 = colorWork
    }
//=================================  Палет 23 ==============================================================================================================
    if(props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,3) === globalStore.cellD0
    ){
        pal23 = colorGrin
    }else if (props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,7) === globalStore.workStatusYpakovka){
        pal23 = colorClose
    }else if (props.znpData.address_pallet_23 != null && props.znpData.address_pallet_23.substring(0,17) === globalStore.workStatusRaspil){
        pal23 = colorWork
    }
//=================================  Палет 24 ==============================================================================================================
    if(props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,3) === globalStore.cellD0
    ){
        pal24 = colorGrin
    }else if (props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,7) === globalStore.workStatusYpakovka){
        pal24 = colorClose
    }else if (props.znpData.address_pallet_24 != null && props.znpData.address_pallet_24.substring(0,17) === globalStore.workStatusRaspil){
        pal24 = colorWork
    }
//=================================  Палет 25 ==============================================================================================================
    if(props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,2) === globalStore.cellA ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,3) === globalStore.cellA0||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,2) === globalStore.cellB ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,3) === globalStore.cellB0||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,2) === globalStore.cellC ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,2) === globalStore.cellD ||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,3) === globalStore.cellC0||
        props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,3) === globalStore.cellD0
    ){
        pal25 = colorGrin
    }else if (props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,7) === globalStore.workStatusYpakovka){
        pal25 = colorClose
    }else if (props.znpData.address_pallet_25 != null && props.znpData.address_pallet_25.substring(0,17) === globalStore.workStatusRaspil){
        pal25 = colorWork
    }

    // Функция выбора адреса
async function onChange(eventTarget, eventId){

    if (eventTarget.className == "addressPallet1"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_1:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_1
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_1 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 1", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet2"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_2:eventTarget.selectedOptions[0].text
        })
          //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_2
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_2 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 2", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet3"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_3:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_3
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_3 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 3", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet4"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_4:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_4
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_4,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 4", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet5"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_5:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_5
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_5 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 5", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet6"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_6:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_6
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_6 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 6", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet7"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_7:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_7
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_7 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 7", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet8"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_8:eventTarget.selectedOptions[0].text
        })
          //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_8
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_8 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 8", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet9"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_9:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_9
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_9 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 9", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet10"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_10:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_10
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_10 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 10", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet11"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_11:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_11
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_11 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 11", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet12"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_12:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_12
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_12 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 12", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet13"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_13:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_13
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_13 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 13", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet14"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_14:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_14
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_14 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 14", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet15"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_15:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_15
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_15 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 15", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet16"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_16:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_16
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_16 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 16", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet17"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_17:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_17
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_17 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 17", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet18"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_18:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_18
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_18 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 18", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet19"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_19:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_19
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_19 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 19", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet20"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_20:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_20
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_20 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 20", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet21"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_21:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_21
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_21 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 21", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet22"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_22:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_22
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_22 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 22", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet23"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_23:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_23
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_23 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 23", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet24"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_24:eventTarget.selectedOptions[0].text
        })
        //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_24
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_24 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 24", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    } else if (eventTarget.className == "addressPallet25"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:eventId.id,
            address_pallet_25:eventTarget.selectedOptions[0].text
        })
         //Разбираем строку на числа
        let str = eventId.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)
        let kvmItog = kwm * eventId.number_of_pallets_25
        // console.log(kvmItog.toFixed())
        await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
            region: user.raspil , // Регион
            completed:eventId.number_of_pallets_25 ,// Выполненное кол деталей
            quadrature:kvmItog.toFixed() , // Квадратура по деталям
            palet:"Палет 25", // палет
            znpData: eventId.id, // Номер в таблице знп дата
            role: user.role,// роль того кто заполнил
        })
        specZopros()
    }
    setActivSelect1(false)
    setActivSelect2(false)
    setActivSelect3(false)
    setActivSelect4(false)
    setActivSelect5(false)
    setActivSelect6(false)
    setActivSelect7(false)
    setActivSelect8(false)
    setActivSelect9(false)
    setActivSelect10(false)
    setActivSelect11(false)
    setActivSelect12(false)
    setActivSelect13(false)
    setActivSelect14(false)
    setActivSelect15(false)
    setActivSelect16(false)
    setActivSelect17(false)
    setActivSelect18(false)
    setActivSelect19(false)
    setActivSelect20(false)
    setActivSelect21(false)
    setActivSelect22(false)
    setActivSelect23(false)
    setActivSelect24(false)
    setActivSelect25(false)
}

// Функция отправки статуса в работе
async function worckStatus(e, props){
    if (e.target.className == "button_adress_1"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_1:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_2"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_2:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_3"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_3:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_4"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_4:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_5"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_5:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_6"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_6:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_7"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_7:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_8"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_8:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_9"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_9:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_10"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_10:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_11"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_11:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_12"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_12:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_13"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_13:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_14"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_14:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_15"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_15:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_16"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_16:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_17"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_17:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_18"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_18:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_19"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_19:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_20"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_20:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_21"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_21:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_22"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_22:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_23"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_23:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_24"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_24:globalStore.workStatusRaspil
        })
        specZopros()
    } else if (e.target.className == "button_adress_25"){
        await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
            id:props.znpData.id,
            address_pallet_25:globalStore.workStatusRaspil
        })
        specZopros()
    }
}


const [activSelect1, setActivSelect1] = useState(false)
const [activSelect2, setActivSelect2] = useState(false)
const [activSelect3, setActivSelect3] = useState(false)
const [activSelect4, setActivSelect4] = useState(false)
const [activSelect5, setActivSelect5] = useState(false)
const [activSelect6, setActivSelect6] = useState(false)
const [activSelect7, setActivSelect7] = useState(false)
const [activSelect8, setActivSelect8] = useState(false)
const [activSelect9, setActivSelect9] = useState(false)
const [activSelect10, setActivSelect10] = useState(false)
const [activSelect11, setActivSelect11] = useState(false)
const [activSelect12, setActivSelect12] = useState(false)
const [activSelect13, setActivSelect13] = useState(false)
const [activSelect14, setActivSelect14] = useState(false)
const [activSelect15, setActivSelect15] = useState(false)
const [activSelect16, setActivSelect16] = useState(false)
const [activSelect17, setActivSelect17] = useState(false)
const [activSelect18, setActivSelect18] = useState(false)
const [activSelect19, setActivSelect19] = useState(false)
const [activSelect20, setActivSelect20] = useState(false)
const [activSelect21, setActivSelect21] = useState(false)
const [activSelect22, setActivSelect22] = useState(false)
const [activSelect23, setActivSelect23] = useState(false)
const [activSelect24, setActivSelect24] = useState(false)
const [activSelect25, setActivSelect25] = useState(false)

// Функция изменяет активность селекта
   async function clickPalets(e){

        if (e.className == "addressPallet1" ){
            setActivSelect1(true)
        } else if (e.className != "addressPallet1") {
            setActivSelect1(false)
        }
        if (e.className == "addressPallet2") {
            setActivSelect2(true)
        }else if (e.className != "addressPallet2") {
            setActivSelect2(false)
        }
        if (e.className == "addressPallet3") {
            setActivSelect3(true)
        }else if (e.className != "addressPallet3") {
            setActivSelect3(false)
        }
        if (e.className == "addressPallet4") {
            setActivSelect4(true)
        }else if (e.className != "addressPallet4") {
            setActivSelect4(false)
        }
        if (e.className == "addressPallet5") {
            setActivSelect5(true)
        }else if (e.className != "addressPallet5") {
            setActivSelect5(false)
        }
        if (e.className == "addressPallet6") {
            setActivSelect6(true)
        }else if (e.className != "addressPallet6") {
            setActivSelect6(false)
        }
        if (e.className == "addressPallet7") {
            setActivSelect7(true)
        }else if (e.className != "addressPallet7") {
            setActivSelect7(false)
        }
        if (e.className == "addressPallet8") {
            setActivSelect8(true)
        }else if (e.className != "addressPallet8") {
            setActivSelect8(false)
        }
        if (e.className == "addressPallet9") {
            setActivSelect9(true)
        }else if (e.className != "addressPallet9") {
            setActivSelect9(false)
        }
        if (e.className == "addressPallet10") {
            setActivSelect10(true)
        }else if (e.className != "addressPallet10") {
            setActivSelect10(false)
        }
        if (e.className == "addressPallet11") {
            setActivSelect11(true)
        }else if (e.className != "addressPallet11") {
            setActivSelect11(false)
        }
        if (e.className == "addressPallet12") {
            setActivSelect12(true)
        }else if (e.className != "addressPallet12") {
            setActivSelect12(false)
        }
        if (e.className == "addressPallet13") {
            setActivSelect13(true)
        }else if (e.className != "addressPallet13") {
            setActivSelect13(false)
        }
        if (e.className == "addressPallet14") {
            setActivSelect14(true)
        }else if (e.className != "addressPallet14") {
            setActivSelect14(false)
        }
        if (e.className == "addressPallet15") {
            setActivSelect15(true)
        }else if (e.className != "addressPallet15") {
            setActivSelect15(false)
        }
        if (e.className == "addressPallet16") {
            setActivSelect16(true)
        }else if (e.className != "addressPallet16") {
            setActivSelect16(false)
        }
        if (e.className == "addressPallet17") {
            setActivSelect17(true)
        }else if (e.className != "addressPallet17") {
            setActivSelect17(false)
        }
        if (e.className == "addressPallet18") {
            setActivSelect18(true)
        }else if (e.className != "addressPallet18") {
            setActivSelect18(false)
        }
        if (e.className == "addressPallet19") {
            setActivSelect19(true)
        }else if (e.className != "addressPallet19") {
            setActivSelect19(false)
        }
        if (e.className == "addressPallet20") {
            setActivSelect20(true)
        }else if (e.className != "addressPallet20") {
            setActivSelect20(false)
        }
        if (e.className == "addressPallet21") {
            setActivSelect21(true)
        }else if (e.className != "addressPallet21") {
            setActivSelect21(false)
        }
        if (e.className == "addressPallet22") {
            setActivSelect22(true)
        }else if (e.className != "addressPallet22") {
            setActivSelect22(false)
        }
        if (e.className == "addressPallet23") {
            setActivSelect23(true)
        }else if (e.className != "addressPallet23") {
            setActivSelect23(false)
        }
        if (e.className == "addressPallet24") {
            setActivSelect24(true)
        }else if (e.className != "addressPallet24") {
            setActivSelect24(false)
        }
        if (e.className == "addressPallet25") {
            setActivSelect25(true)
        }else if (e.className != "addressPallet25") {
            setActivSelect25(false)
        }
    }

    return (
        <tr onClick={(e)=>{clickPalets(e.target)}}>

            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.number_opening}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.part}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.color}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.part_name}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.packaging}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.cut_size}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.size_requiried}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.gluing_scheme}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.dop_gluing_scheme}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.groove}</td>
            <td onDoubleClick={() => {}} style={palWork}>{props.znpData.sum_number_parts}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal1} className={`quantityPalet1`} onDoubleClick={(e)=>{modalDatas(e,props)}} onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_1}

            </td>
            <td className={"addressPallet1"}  style={pal1}>{props.znpData.number_of_pallets_1 == null || props.znpData.number_of_pallets_1 == 0 ?(
                ""
            ) : (
                activSelect1 ?(
                    <td>
                            <p style={selectStyleActive}>{props.znpData.address_pallet_1}  ✔</p>
                        <select  className={"addressPallet1"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                    ):(
                        props.znpData.address_pallet_1 != null ?(
                            <p className={"addressPallet1"} style={selectStyle}>{props.znpData.address_pallet_1}  ✔</p>
                        ):(
                            <p className={"addressPallet1"} style={selectStyle}>Выбрать адрес</p>
                        )
                    )
            ) }
            </td>
            <td >{props.znpData.number_of_pallets_1 == null|| props.znpData.number_of_pallets_1 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_1"} onClick={(e) =>{worckStatus(e, props)}} >В работе</button>

            ) }</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal2} className={"quantityPalet2"} onDoubleClick={(e) =>{modalDatas(e, props)}} onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_2}
            </td>
           <td className={"addressPallet2"}  style={pal2}>{props.znpData.number_of_pallets_2 == null || props.znpData.number_of_pallets_2 == 0 ?(
                ""
            ) : (
                activSelect2 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_2}  ✔</p>
                        <select  className={"addressPallet2"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_2 != null ?(
                        <p className={"addressPallet2"} style={selectStyle}>{props.znpData.address_pallet_2}  ✔</p>
                    ):(
                        <p className={"addressPallet2"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_2 == null|| props.znpData.number_of_pallets_2 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_2"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>

            ) }</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal3} className={"quantityPalet3"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_3}
            </td>
             <td className={"addressPallet3"}  style={pal3}>{props.znpData.number_of_pallets_3 == null || props.znpData.number_of_pallets_3 == 0 ?(
                ""
            ) : (
                activSelect3 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_3}  ✔</p>
                        <select  className={"addressPallet3"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_3 != null ?(
                        <p className={"addressPallet3"} style={selectStyle}>{props.znpData.address_pallet_3}  ✔</p>
                    ):(
                        <p className={"addressPallet3"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_3 == null|| props.znpData.number_of_pallets_3 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_3"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>

            ) }</td>

            <td style={pal4} className={"quantityPalet4"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_4}
            </td>
            <td className={"addressPallet4"}  style={pal4}>{props.znpData.number_of_pallets_4 == null || props.znpData.number_of_pallets_4 == 0 ?(
                ""
            ) : (
                activSelect4 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_4}  ✔</p>
                        <select  className={"addressPallet4"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_4 != null ?(
                        <p className={"addressPallet4"} style={selectStyle}>{props.znpData.address_pallet_4}  ✔</p>
                    ):(
                        <p className={"addressPallet4"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_4 == null|| props.znpData.number_of_pallets_4 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_4"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            ) }</td>

            <td style={pal5} className={"quantityPalet5"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_5}
            </td>
            <td className={"addressPallet5"}  style={pal5}>{props.znpData.number_of_pallets_5 == null || props.znpData.number_of_pallets_5 == 0 ?(
                ""
            ) : (
                activSelect5 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_5}  ✔</p>
                        <select  className={"addressPallet5"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_5 != null ?(
                        <p className={"addressPallet5"} style={selectStyle}>{props.znpData.address_pallet_5}  ✔</p>
                    ):(
                        <p className={"addressPallet5"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_5 == null|| props.znpData.number_of_pallets_5 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_5"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal6} className={"quantityPalet6"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_6}
            </td>
           <td className={"addressPallet6"}  style={pal6}>{props.znpData.number_of_pallets_6 == null || props.znpData.number_of_pallets_6 == 0 ?(
                ""
            ) : (
                activSelect6 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_6}  ✔</p>
                        <select  className={"addressPallet6"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_6 != null ?(
                        <p className={"addressPallet6"} style={selectStyle}>{props.znpData.address_pallet_6}  ✔</p>
                    ):(
                        <p className={"addressPallet6"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_6 == null|| props.znpData.number_of_pallets_6 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_6"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal7} className={"quantityPalet7"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_7}
            </td>
             <td className={"addressPallet7"}  style={pal7}>{props.znpData.number_of_pallets_7 == null || props.znpData.number_of_pallets_7 == 0 ?(
                ""
            ) : (
                activSelect7 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_7}  ✔</p>
                        <select  className={"addressPallet7"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_7 != null ?(
                        <p className={"addressPallet7"} style={selectStyle}>{props.znpData.address_pallet_7}  ✔</p>
                    ):(
                        <p className={"addressPallet7"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_7 == null|| props.znpData.number_of_pallets_7 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_7"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal8} className={"quantityPalet8"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_8}
            </td>
            <td className={"addressPallet8"}  style={pal8}>{props.znpData.number_of_pallets_8 == null || props.znpData.number_of_pallets_8 == 0 ?(
                ""
            ) : (
                activSelect8 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_8}  ✔</p>
                        <select  className={"addressPallet8"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_8 != null ?(
                        <p className={"addressPallet8"} style={selectStyle}>{props.znpData.address_pallet_8}  ✔</p>
                    ):(
                        <p className={"addressPallet8"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_8 == null|| props.znpData.number_of_pallets_8 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_8"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal9} className={"quantityPalet9"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_9}
            </td>
            <td className={"addressPallet9"}  style={pal9}>{props.znpData.number_of_pallets_9 == null || props.znpData.number_of_pallets_9 == 0 ?(
                ""
            ) : (
                activSelect9 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_9}  ✔</p>
                        <select  className={"addressPallet9"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_9 != null ?(
                        <p className={"addressPallet9"} style={selectStyle}>{props.znpData.address_pallet_9}  ✔</p>
                    ):(
                        <p className={"addressPallet9"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_9 == null|| props.znpData.number_of_pallets_9 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_9"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal10} className={"quantityPalet10"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_10}
            </td>
             <td className={"addressPallet10"}  style={pal10}>{props.znpData.number_of_pallets_10 == null || props.znpData.number_of_pallets_10 == 0 ?(
                ""
            ) : (
                activSelect10 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_10}  ✔</p>
                        <select  className={"addressPallet10"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_10 != null ?(
                        <p className={"addressPallet10"} style={selectStyle}>{props.znpData.address_pallet_10}  ✔</p>
                    ):(
                        <p className={"addressPallet10"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_10 == null|| props.znpData.number_of_pallets_10 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_10"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal11} className={"quantityPalet11"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_11}
            </td>
             <td className={"addressPallet11"}  style={pal11}>{props.znpData.number_of_pallets_11 == null || props.znpData.number_of_pallets_11 == 0 ?(
                ""
            ) : (
                activSelect11 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_11}  ✔</p>
                        <select  className={"addressPallet11"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_11 != null ?(
                        <p className={"addressPallet11"} style={selectStyle}>{props.znpData.address_pallet_11}  ✔</p>
                    ):(
                        <p className={"addressPallet11"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_11 == null|| props.znpData.number_of_pallets_11 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_11"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal12} className={"quantityPalet12"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_12}
            </td>
            <td className={"addressPallet12"}  style={pal12}>{props.znpData.number_of_pallets_12 == null || props.znpData.number_of_pallets_12 == 0 ?(
                ""
            ) : (
                activSelect12 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_12}  ✔</p>
                        <select  className={"addressPallet12"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_12 != null ?(
                        <p className={"addressPallet12"} style={selectStyle}>{props.znpData.address_pallet_12}  ✔</p>
                    ):(
                        <p className={"addressPallet12"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_12 == null|| props.znpData.number_of_pallets_12 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_12"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal13} className={"quantityPalet13"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_13}
            </td>
            <td className={"addressPallet13"}  style={pal13}>{props.znpData.number_of_pallets_13 == null || props.znpData.number_of_pallets_13 == 0 ?(
                ""
            ) : (
                activSelect13 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_13}  ✔</p>
                        <select  className={"addressPallet13"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_13 != null ?(
                        <p className={"addressPallet13"} style={selectStyle}>{props.znpData.address_pallet_13}  ✔</p>
                    ):(
                        <p className={"addressPallet13"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_13 == null|| props.znpData.number_of_pallets_13 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_13"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal14} className={"quantityPalet14"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_14}
            </td>
             <td className={"addressPallet14"}  style={pal14}>{props.znpData.number_of_pallets_14 == null || props.znpData.number_of_pallets_14 == 0 ?(
                ""
            ) : (
                activSelect14 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_14}  ✔</p>
                        <select  className={"addressPallet14"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_14 != null ?(
                        <p className={"addressPallet14"} style={selectStyle}>{props.znpData.address_pallet_14}  ✔</p>
                    ):(
                        <p className={"addressPallet14"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_14 == null|| props.znpData.number_of_pallets_14 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_14"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal15} className={"quantityPalet15"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_15}
            </td>
              <td className={"addressPallet15"}  style={pal15}>{props.znpData.number_of_pallets_15 == null || props.znpData.number_of_pallets_15 == 0 ?(
                ""
            ) : (
                activSelect15 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_15}  ✔</p>
                        <select  className={"addressPallet15"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_15 != null ?(
                        <p className={"addressPallet15"} style={selectStyle}>{props.znpData.address_pallet_15}  ✔</p>
                    ):(
                        <p className={"addressPallet15"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_15 == null|| props.znpData.number_of_pallets_15 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_15"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal16} className={"quantityPalet16"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_16}
            </td>
           <td className={"addressPallet16"}  style={pal16}>{props.znpData.number_of_pallets_16 == null || props.znpData.number_of_pallets_16 == 0 ?(
                ""
            ) : (
                activSelect16 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_16}  ✔</p>
                        <select  className={"addressPallet16"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_16 != null ?(
                        <p className={"addressPallet16"} style={selectStyle}>{props.znpData.address_pallet_16}  ✔</p>
                    ):(
                        <p className={"addressPallet16"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_16 == null|| props.znpData.number_of_pallets_16 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_16"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal17} className={"quantityPalet17"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_17}
            </td>
            <td className={"addressPallet17"}  style={pal17}>{props.znpData.number_of_pallets_17 == null || props.znpData.number_of_pallets_17 == 0 ?(
                ""
            ) : (
                activSelect17 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_17}  ✔</p>
                        <select  className={"addressPallet17"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_17 != null ?(
                        <p className={"addressPallet17"} style={selectStyle}>{props.znpData.address_pallet_17}  ✔</p>
                    ):(
                        <p className={"addressPallet17"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_17 == null|| props.znpData.number_of_pallets_17 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_17"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal18} className={"quantityPalet18"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_18}
            </td>
             <td className={"addressPallet18"}  style={pal18}>{props.znpData.number_of_pallets_18 == null || props.znpData.number_of_pallets_18 == 0 ?(
                ""
            ) : (
                activSelect18 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_18}  ✔</p>
                        <select  className={"addressPallet18"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_18 != null ?(
                        <p className={"addressPallet18"} style={selectStyle}>{props.znpData.address_pallet_18}  ✔</p>
                    ):(
                        <p className={"addressPallet18"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_18 == null|| props.znpData.number_of_pallets_18 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_18"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal19} className={"quantityPalet19"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_19}
            </td>
            <td className={"addressPallet19"}  style={pal19}>{props.znpData.number_of_pallets_19 == null || props.znpData.number_of_pallets_19 == 0 ?(
                ""
            ) : (
                activSelect19 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_19}  ✔</p>
                        <select  className={"addressPallet19"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_19 != null ?(
                        <p className={"addressPallet19"} style={selectStyle}>{props.znpData.address_pallet_19}  ✔</p>
                    ):(
                        <p className={"addressPallet19"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_19 == null|| props.znpData.number_of_pallets_19 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_19"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal20} className={"quantityPalet20"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_20}
            </td>
             <td className={"addressPallet20"}  style={pal20}>{props.znpData.number_of_pallets_20 == null || props.znpData.number_of_pallets_20 == 0 ?(
                ""
            ) : (
                activSelect20 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_20}  ✔</p>
                        <select  className={"addressPallet20"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_20 != null ?(
                        <p className={"addressPallet20"} style={selectStyle}>{props.znpData.address_pallet_20}  ✔</p>
                    ):(
                        <p className={"addressPallet20"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_20 == null|| props.znpData.number_of_pallets_20 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_20"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal21} className={"quantityPalet21"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_21}
            </td>
            <td className={"addressPallet21"}  style={pal21}>{props.znpData.number_of_pallets_21 == null || props.znpData.number_of_pallets_21 == 0 ?(
                ""
            ) : (
                activSelect21 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_21}  ✔</p>
                        <select  className={"addressPallet21"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_21 != null ?(
                        <p className={"addressPallet21"} style={selectStyle}>{props.znpData.address_pallet_21}  ✔</p>
                    ):(
                        <p className={"addressPallet21"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_21 == null|| props.znpData.number_of_pallets_21 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_21"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal22} className={"quantityPalet22"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_22}
            </td>
            <td className={"addressPallet22"}  style={pal22}>{props.znpData.number_of_pallets_22 == null || props.znpData.number_of_pallets_22 == 0 ?(
                ""
            ) : (
                activSelect22 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_22}  ✔</p>
                        <select  className={"addressPallet22"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_22 != null ?(
                        <p className={"addressPallet22"} style={selectStyle}>{props.znpData.address_pallet_22}  ✔</p>
                    ):(
                        <p className={"addressPallet22"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_22 == null|| props.znpData.number_of_pallets_22 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_22"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal23} className={"quantityPalet23"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_23}
            </td>
            <td className={"addressPallet23"}  style={pal23}>{props.znpData.number_of_pallets_23 == null || props.znpData.number_of_pallets_23 == 0 ?(
                ""
            ) : (
                activSelect23 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_23}  ✔</p>
                        <select  className={"addressPallet23"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_23 != null ?(
                        <p className={"addressPallet23"} style={selectStyle}>{props.znpData.address_pallet_23}  ✔</p>
                    ):(
                        <p className={"addressPallet23"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_23 == null|| props.znpData.number_of_pallets_23 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_23"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal24} className={"quantityPalet24"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_24}
            </td>
           <td className={"addressPallet24"}  style={pal24}>{props.znpData.number_of_pallets_24 == null || props.znpData.number_of_pallets_24 == 0 ?(
                ""
            ) : (
                activSelect24 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_24}  ✔</p>
                        <select  className={"addressPallet24"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_24 != null ?(
                        <p className={"addressPallet24"} style={selectStyle}>{props.znpData.address_pallet_24}  ✔</p>
                    ):(
                        <p className={"addressPallet24"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_24 == null|| props.znpData.number_of_pallets_24 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_24"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>

    {/*========================================  Палет   ====================================================================================================================================================*/}
            <td style={pal25} className={"quantityPalet25"} onDoubleClick={(e) =>{modalDatas(e, props)}}
                onContextMenu = {(e)=>{prindClick(e,props)}}>
                {props.znpData.number_of_pallets_25}
            </td>
             <td className={"addressPallet25"}  style={pal25}>{props.znpData.number_of_pallets_25 == null || props.znpData.number_of_pallets_25 == 0 ?(
                ""
            ) : (
                activSelect25 ?(
                    <td>
                        <p style={selectStyleActive}>{props.znpData.address_pallet_25}  ✔</p>
                        <select  className={"addressPallet25"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , props.znpData)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>

                                <MyOption key = {option.id} option={option} sector={user.raspil} />
                            )}

                        </select>
                    </td>

                ):(
                    props.znpData.address_pallet_25 != null ?(
                        <p className={"addressPallet25"} style={selectStyle}>{props.znpData.address_pallet_25}  ✔</p>
                    ):(
                        <p className={"addressPallet25"} style={selectStyle}>Выбрать адрес</p>
                    )
                )
            ) }
            </td>
            <td>{props.znpData.number_of_pallets_25 == null|| props.znpData.number_of_pallets_25 === 0 ?(
                ""
            ) : (
                <button className={"button_adress_25"} onClick={(e) =>{worckStatus(e, props)}}>В работе</button>
            )}</td>


            {/*<td><MySelect options={buffers} onChange={onChange} value={value}/></td>*/}

        </tr>
    );
};

export default React.memo(ZnpDataItemRaskroi);