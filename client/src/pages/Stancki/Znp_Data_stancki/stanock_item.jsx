import React, {useContext, useState} from 'react';
import MyButton from "../../../component/UI/button/MyButton";
import MySelect from "../../../component/UI/select/MySelect";
import axios from "axios";
import {Context} from "../../../index";
import MyInputStanock from "./input/myInputStanock";
import classes from "../../../component/UI/select/MySelect.module.css";
import MyOption from "../../../component/UI/select/MyOption";
import {observer} from "mobx-react-lite";



const StanockItem = observer( ({specZapros, buffers,stanock, worckDataStanock}) => {
    //     Данные из глобального хранилища
    const {globalStore} = useContext(Context)
    const {user} = useContext(Context)

    // Состоянии активности инпута
    const [inputPaletsActiv, setInputPaletsActiv] = useState(false)


// Функция выбора адреса
    async function onChange(eventTarget, eventId){
        await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
            id:eventId.id,
            address_pallet:eventTarget.selectedOptions[0].text
        })
        specZapros()
        if (eventId.palet == "Палет 1"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_1:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 1", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        } else if (eventId.palet == "Палет 2"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_2:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 2", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 3"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_3:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 3", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 4"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_4:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 4", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 5"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_5:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 5", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 6"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_6:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 6", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 7"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_7:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature: kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 7", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 8"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_8:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 8", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 9"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_9:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 9", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 10"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_10:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 10", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 11"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_11:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 11", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 12"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_12:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 12", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 13"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_13:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 13", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 14"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_14:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 14", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 15"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_15:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 15", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 16"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_16:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 16", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 17"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_17:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 17", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 18"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_18:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 18", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 19"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_19:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 19", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 20"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_20:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 20", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 21"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_21:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 21", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 22"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_22:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 22", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 23"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_23:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 23", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 24"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_24:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 24", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }else if (eventId.palet == "Палет 25"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_25:eventTarget.selectedOptions[0].text
            })
            //Разбираем строку на числа
            let str = eventId.size_requiried.split("х")
            // Считаем 1 кв/м
            let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
            // console.log(kwm)
            let kvmItog = kwm * eventId.number_of_pallets
            // console.log(kvmItog.toFixed())
            await axios.post( process.env.REACT_APP_REGION_COMPLETED_ZNP_URL,{
                region: user.sector , // Регион
                completed:eventId.number_of_pallets ,// Выполненное кол деталей
                quadrature:kvmItog.toFixed() , // Квадратура по деталям
                palet:"Палет 25", // палет
                znpData: eventId.znpDatumId, // Номер в таблице знп дата
                role: user.role,// роль того кто заполнил
            })
            specZapros()
        }
        setActivSelect(false)
    }

    // Функция отправки статуса в работе
    async function worckStatus(eventId){
        await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
            id:eventId.id,
            address_pallet:globalStore.workStatusStanock + user.workplace
        })
        if (eventId.palet == "Палет 1"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_1:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        } else if (eventId.palet == "Палет 2"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_2:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 3"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_3:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 4"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_4:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 5"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_5:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 6"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_6:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 7"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_7:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 8"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_8:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 9"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_9:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 10"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_10:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 11"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_11:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 12"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_12:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 13"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_13:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 14"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_14:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 15"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_15:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 16"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_16:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 17"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_17:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 18"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_18:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 19"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_19:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 20"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_20:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 21"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_21:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 22"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_22:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 23"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_23:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 24"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_24:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }else if (eventId.palet == "Палет 25"){
            await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                id:eventId.znpDatumId,
                address_pallet_25:globalStore.workStatusStanock + user.workplace
            })
            specZapros()
        }
    }

    //Функция которая отправляет стату что готово такой то станок в базу ЗНП дата, Знп станок, в готовые записи
    async function readiStatus( eventId,stanock){
        await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
            id:eventId.id,
            completed:true
        })
        await axios.post( process.env.REACT_APP_STANCKI_COMPLETED_ZNP_URL,{
            stanock:user.workplace,// Станок
            sector:stanock.sector,// В каком секторе находится станок (Присадка, Покле  ка и тд)
            completed:eventId.number_of_pallets,// Выполненное кол деталей
            probeg:eventId.probeg,// Пробег по деталям
            znp:eventId.znp ,//Номер и название ЗНП
            number_opening:eventId.number_opening,//Номер части по раскрою
            palet:eventId.palet, // Адрес палета, чтобы узнать в какой палет заносить данные
            part:eventId.part,// Тип детали
            color:eventId.color,// Цвет
            part_name:eventId.part_name,// Название детали
            size_requiried:eventId.size_requiried,// Требуемы размер распила
            gluing_scheme:eventId.gluing_scheme,// Схема поклейки 1
            dop_gluing_scheme:eventId.dop_gluing_scheme,// Схема поклейки 2
            groove:eventId.groove,// Паз
            role:user.role,// роль того кто заполнил
            znpStanokDatumId:eventId.id,// id знп станка
            znpDataId:eventId.znpDatumId
        })


        if (stanock.sector == user.pokleika){
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_1:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_2:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_3:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_4:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_5:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_6:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_7:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_8:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_9:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_10:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_11:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_12:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_13:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_14:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_15:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_16:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_17:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_18:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_19:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_20:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_21:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_22:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_23:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_24:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_pasting_25:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }
        }else if (stanock.sector == user.prisadka){
            if (eventId.palet == "Палет 1"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_1:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            } else if (eventId.palet == "Палет 2"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_2:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 3"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_3:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 4"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_4:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 5"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_5:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 6"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_6:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 7"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_7:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 8"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_8:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 9"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_9:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 10"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_10:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 11"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_11:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 12"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_12:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 13"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_13:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 14"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_14:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 15"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_15:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 16"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_16:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 17"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_17:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 18"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_18:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 19"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_19:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 20"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_20:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 21"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_21:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 22"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_22:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 23"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_23:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 24"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_24:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }else if (eventId.palet == "Палет 25"){
                await axios.put( process.env.REACT_APP_ZNPDATA_URL,{
                    id:eventId.znpDatumId,
                    machine_pallet_additive_25:globalStore.readyStatusStanock + user.workplace
                })
                specZapros()
            }
        }

    }



    const colorWork = {background:"#dcbd06"}
    let palWork = {}

        if (worckDataStanock.address_pallet == globalStore.workStatusStanock + stanock.stanock){
            palWork = colorWork
        }

        // Состояние выпадающего списка
    const [activSelect, setActivSelect] = useState(false)

// Стилидля селекта
    let selectStyle = {fontSize: "14px", whiteSpace: "nowrap", margin:"5px",fontWeight: "bold"}
    let selectStyleActive = {fontSize: "14px",fontWeight: "bold"}

    // Функция изменяет активность селекта
    function clickPalets(e){

        if (e.className == "addressPallet1" ){
            setActivSelect(true)
        } else if (e.className != "addressPallet1") {
            setActivSelect(false)
        }
    }

    return (
        <tr onClick={(e)=>{clickPalets(e.target)}}>
            <td style={palWork} >{worckDataStanock.priority}</td>
            <td style={palWork} >{worckDataStanock.znp}</td>
            <td style={palWork} >{worckDataStanock.number_opening}</td>
            <td style={palWork} >{worckDataStanock.part}</td>
            <td style={palWork} >{worckDataStanock.color}</td>
            <td style={palWork} >{worckDataStanock.part_name}</td>
            <td style={palWork} >{worckDataStanock.packaging}</td>
            <td style={palWork} >{worckDataStanock.size_requiried}</td>
            <td style={palWork} >{worckDataStanock.gluing_scheme}</td>
            <td style={palWork} >{worckDataStanock.dop_gluing_scheme}</td>
            <td style={palWork} >{worckDataStanock.groove}</td>
            <td style={palWork} >{worckDataStanock.palet}</td>
            <td style={palWork} >{worckDataStanock.sum_number_parts}</td>

            <td ><MyButton onClick={() =>{worckStatus( worckDataStanock)}}>В работу</MyButton></td>

            <td  onDoubleClick={() => {setInputPaletsActiv(true)}} >{worckDataStanock.number_of_pallets}
                <MyInputStanock inputActiv={inputPaletsActiv} worckDataStanock={worckDataStanock} setInputActiv={setInputPaletsActiv} specZapros={specZapros}/>
            </td>
            <td className={"addressPallet1"}>
                {activSelect ?(
                    <td>
                        <p style={selectStyleActive}>{worckDataStanock.address_pallet}  ✔</p>
                        <select  className={"addressPallet1"}  onChange={(eventTarget, eventId) => {onChange(eventTarget.target , worckDataStanock)}}>
                            <option selected="true" disabled="disabled">Выбрать адрес</option>
                            {buffers.map(option=>
                                <MyOption key = {option.id} option={option} sector={user.sector} />
                            )}
                        </select>
                    </td>

                ):(
                    worckDataStanock.address_pallet != null ?(
                        <p className={"addressPallet1"} style={selectStyle}>{worckDataStanock.address_pallet}  ✔</p>
                    ):(
                        <p className={"addressPallet1"} style={selectStyle}>Выбрать адрес</p>
                    )
                )}

            </td>

            {user.sector == user.prisadka ?(
                <td>{worckDataStanock.address_pallet === null || worckDataStanock.address_pallet === globalStore.workStatusStanock + user.workplace  ? <button disabled>Готово</button>
                    : <MyButton onClick={() =>{readiStatus( worckDataStanock, stanock)}}>Готово</MyButton>}
                </td>
            ):(
                <td><MyButton onClick={() =>{readiStatus( worckDataStanock, stanock)}}>Готово</MyButton></td>
            )}



            {/*<td>*/}
            {/*    <select className={classes.MySelect}  onChange={(eventTarget, eventId) => {*/}
            {/*        onChange(eventTarget.target , worckDataStanock)*/}
            {/*    }}>*/}
            {/*        {worckDataStanock.address_pallet != null*/}
            {/*            ? (<option value="standart">{worckDataStanock.address_pallet}✔</option>)*/}
            {/*            :(<option value="">Выбрать адрес</option>)*/}
            {/*        }*/}
            {/*        {buffers.map(option=>*/}
            {/*            <MyOption key = {Math.random()}  option={option}  sector={user.sector} />*/}
            {/*        )}*/}
            {/*    </select>*/}
            {/*</td>*/}


        </tr>
    );
});

export default React.memo(StanockItem);