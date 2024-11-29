import React, {useContext, useEffect, useMemo, useState} from 'react';
import ZnpService from "../../../API/ZnpService";
import BuffService from "../../../API/BufService";
import {Context} from "../../../index";
import "../styleBlockDiagram.css"

const BufersDiagram = () => {

    const [buffers,setBuffers] = useState([])

    //     Данные которые получаем из базы данных
    const [itemZnp, setItemZnp] = useState([])

// Гетт запрос к таблице знп
    async function getAllZnp(){
        const znpGet = await ZnpService.getAll()
        setItemZnp(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
    }
    // Массив состава знп для буфера
    const [znpBufDatan, setZnpBufDatan] = useState([])
    // Массив для буфера
    const [bufferLinks, setBuffersLinks] = useState([])




// Гетт запрос к таблице буффер
    async function fetchBuff(){
        const buffDataGet = await BuffService.getAll()
        await setBuffers(buffDataGet.sort(function (a,b){
            return a.id-b.id
        }))
    }

    // Функция проверки и заполнения буффера данными
    let bufL = []
    function buffLink (itemZnp,znpBufDatan) {
        for (const znpData of znpBufDatan) {
            // if (znpData.address_pallet_1 != null){
            // console.log(znpData)
            for (const znp of itemZnp) {
                if (znp.id == znpData.znpId && znpData.address_pallet_1 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_2 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_3 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_4 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_5 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_6 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_7 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_8 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_9 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_10 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_11 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_12 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_13 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_14 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_15 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_16 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_17 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_18 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_19 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_20 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_21 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_22 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_23 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_24 !=null ||
                    znp.id == znpData.znpId && znpData.address_pallet_25 !=null
                ){
                    // console.log(znpData)
                    bufL =[...bufL,{
                        znp_number:znp.znp_number,
                        model:znp.model,
                        part_name: znpData.part_name,
                        cut_size: znpData.cut_size,
                        number_of_pallets_1:znpData.number_of_pallets_1,
                        address_pallet_1:znpData.address_pallet_1,
                        number_of_pallets_2:znpData.number_of_pallets_2,
                        address_pallet_2:znpData.address_pallet_2,
                        number_of_pallets_3:znpData.number_of_pallets_3,
                        address_pallet_3:znpData.address_pallet_3,
                        number_of_pallets_4:znpData.number_of_pallets_4,
                        address_pallet_4:znpData.address_pallet_4,
                        number_of_pallets_5:znpData.number_of_pallets_5,
                        address_pallet_5:znpData.address_pallet_5,
                        number_of_pallets_6:znpData.number_of_pallets_6,
                        address_pallet_6:znpData.address_pallet_6,
                        number_of_pallets_7:znpData.number_of_pallets_7,
                        address_pallet_7:znpData.address_pallet_7,
                        number_of_pallets_8:znpData.number_of_pallets_8,
                        address_pallet_8:znpData.address_pallet_8,
                        number_of_pallets_9:znpData.number_of_pallets_9,
                        address_pallet_9:znpData.address_pallet_9,
                        number_of_pallets_10:znpData.number_of_pallets_10,
                        address_pallet_10:znpData.address_pallet_10,
                        number_of_pallets_11:znpData.number_of_pallets_11,
                        address_pallet_11:znpData.address_pallet_11,
                        number_of_pallets_12:znpData.number_of_pallets_12,
                        address_pallet_12:znpData.address_pallet_12,
                        number_of_pallets_13:znpData.number_of_pallets_13,
                        address_pallet_13:znpData.address_pallet_13,
                        number_of_pallets_14:znpData.number_of_pallets_14,
                        address_pallet_14:znpData.address_pallet_14,
                        number_of_pallets_15:znpData.number_of_pallets_15,
                        address_pallet_15:znpData.address_pallet_15,
                        number_of_pallets_16:znpData.number_of_pallets_16,
                        address_pallet_16:znpData.address_pallet_16,
                        number_of_pallets_17:znpData.number_of_pallets_17,
                        address_pallet_17:znpData.address_pallet_17,
                        number_of_pallets_18:znpData.number_of_pallets_18,
                        address_pallet_18:znpData.address_pallet_18,
                        number_of_pallets_19:znpData.number_of_pallets_19,
                        address_pallet_19:znpData.address_pallet_19,
                        number_of_pallets_20:znpData.number_of_pallets_20,
                        address_pallet_20:znpData.address_pallet_20,
                        number_of_pallets_21:znpData.number_of_pallets_21,
                        address_pallet_22:znpData.address_pallet_22,
                        number_of_pallets_23:znpData.number_of_pallets_23,
                        address_pallet_23:znpData.address_pallet_23,
                        number_of_pallets_24:znpData.number_of_pallets_24,
                        address_pallet_24:znpData.address_pallet_24,
                        number_of_pallets_25:znpData.number_of_pallets_25,
                        address_pallet_25:znpData.address_pallet_25,

                        znpDataId :znpData.id,
                        znpId: znp.id
                    }]
                    // console.log(l)
                }
            }
            // }
        }
    }

// Интервальный запрос к БД с отключением при переходе на другую страницу
    useEffect(() => {
        const i = setInterval(()=>{
            fetchBuffData()
            fetchBuff()
            // console.log("Запросы идут")
        }, 6000)
        return () => {
            // console.log("Запросы остановились")
            clearInterval(i)
        }


    },[])


    // Заполнение данных из бд
    useEffect(() => {
        fetchBuff()
        fetchBuffData()
        getAllZnp()
    },[])

    // Запуск функции для заполнения ячеек буфера
    useEffect(() => {
        buffLink (itemZnp,znpBufDatan)
        setBuffersLinks (bufL)
    },[itemZnp,znpBufDatan])

    // Гетт запрос к таблице знп Дата для буфера
    async function fetchBuffData(){
        const znpGet = await BuffService.getAllData()
        setZnpBufDatan(znpGet.sort(function (a,b){
            return a.id-b.id
        }))
    }

// Массивы разбитые для каждого сектора
    const [sectrA, setSectrA] = useState([])
    const [sectrB, setSectrB] = useState([])
    const [sectrC, setSectrC] = useState([])
    const [sectrD, setSectrD] = useState([])
    const [dopSectrA, setDopSectrA] = useState([])
    const [dopSectrB, setDopSectrB] = useState([])
    const [dopSectrC, setDopSectrC] = useState([])
    const [dopSectrD, setDopSectrD] = useState([])

//1) Циклом пробегаем по массиву с заполненными ячейками по каждому адресу
    //2) Создаем переменную в которой считаем квадратный метр
    //3) Проверяем ячейки которые  соответсвуют определенному сектору и ячейке сектора
    //4) Умножаем на колличество ячеек в этом секторе


    let quadratureA = 0
    let quadratureB = 0
    let quadratureC = 0
    let quadratureD = 0
    let quadratureDopSekA = 0
    let quadratureDopSekB = 0
    let quadratureDopSekC = 0
    let quadratureDopSekD = 0
    // Функция для сектора А по счету квадратных метров
    for (const buffer of bufferLinks) {
        //Разбираем строку на числа
        let str = buffer.cut_size.split("х")
        // Считаем 1 кв/м
        let kwm = ((Number(str[0]) * Number(str[1])) / 1000000)
        // console.log(kwm)

        // Запускаем цикл по доп сектору А
        //Проверяем первый палет
        // Цикл по скрытой ячейке А
        for (const dopSectA of dopSectrA) {

            if (dopSectA.cell_number === buffer.address_pallet_1){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_1)

            } else if (dopSectA.cell_number === buffer.address_pallet_2){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_2)

            } else if (dopSectA.cell_number === buffer.address_pallet_3){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (dopSectA.cell_number === buffer.address_pallet_4){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (dopSectA.cell_number === buffer.address_pallet_5){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (dopSectA.cell_number === buffer.address_pallet_6){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (dopSectA.cell_number === buffer.address_pallet_7){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (dopSectA.cell_number === buffer.address_pallet_8){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (dopSectA.cell_number === buffer.address_pallet_9){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (dopSectA.cell_number === buffer.address_pallet_10){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (dopSectA.cell_number === buffer.address_pallet_11){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (dopSectA.cell_number === buffer.address_pallet_12){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (dopSectA.cell_number === buffer.address_pallet_13){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (dopSectA.cell_number === buffer.address_pallet_14){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (dopSectA.cell_number === buffer.address_pallet_15){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_15)

            } else if (dopSectA.cell_number === buffer.address_pallet_16){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_16)

            } else if (dopSectA.cell_number === buffer.address_pallet_17){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_17)

            } else if (dopSectA.cell_number === buffer.address_pallet_18){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_18)

            } else if (dopSectA.cell_number === buffer.address_pallet_19){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_19)

            } else if (dopSectA.cell_number === buffer.address_pallet_20){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_20)

            } else if (dopSectA.cell_number === buffer.address_pallet_21){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_21)

            } else if (dopSectA.cell_number === buffer.address_pallet_22){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_22)

            } else if (dopSectA.cell_number === buffer.address_pallet_23){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_23)

            } else if (dopSectA.cell_number === buffer.address_pallet_24){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_24)

            } else if (dopSectA.cell_number === buffer.address_pallet_25){
                quadratureDopSekA = quadratureDopSekA + (kwm * buffer.number_of_pallets_25)
            }
        }
        // Цикл по скрытой ячейке B
        for (const dopSectB of dopSectrB) {

            if (dopSectB.cell_number === buffer.address_pallet_1){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_1)

            } else if (dopSectB.cell_number === buffer.address_pallet_2){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_2)

            } else if (dopSectB.cell_number === buffer.address_pallet_3){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (dopSectB.cell_number === buffer.address_pallet_4){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (dopSectB.cell_number === buffer.address_pallet_5){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (dopSectB.cell_number === buffer.address_pallet_6){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (dopSectB.cell_number === buffer.address_pallet_7){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (dopSectB.cell_number === buffer.address_pallet_8){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (dopSectB.cell_number === buffer.address_pallet_9){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (dopSectB.cell_number === buffer.address_pallet_10){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (dopSectB.cell_number === buffer.address_pallet_11){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (dopSectB.cell_number === buffer.address_pallet_12){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (dopSectB.cell_number === buffer.address_pallet_13){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (dopSectB.cell_number === buffer.address_pallet_14){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (dopSectB.cell_number === buffer.address_pallet_15){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_15)

            } else if (dopSectB.cell_number === buffer.address_pallet_16){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_16)

            } else if (dopSectB.cell_number === buffer.address_pallet_17){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_17)

            } else if (dopSectB.cell_number === buffer.address_pallet_18){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_18)

            } else if (dopSectB.cell_number === buffer.address_pallet_19){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_19)

            } else if (dopSectB.cell_number === buffer.address_pallet_20){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_20)

            } else if (dopSectB.cell_number === buffer.address_pallet_21){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_21)

            } else if (dopSectB.cell_number === buffer.address_pallet_22){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_22)

            } else if (dopSectB.cell_number === buffer.address_pallet_23){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_23)

            } else if (dopSectB.cell_number === buffer.address_pallet_24){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_24)

            } else if (dopSectB.cell_number === buffer.address_pallet_25){
                quadratureDopSekB = quadratureDopSekB + (kwm * buffer.number_of_pallets_25)
            }
        }
        // Цикл по скрытой ячейке C
        for (const dopSectC of dopSectrC) {

            if (dopSectC.cell_number === buffer.address_pallet_1){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_1)

            } else if (dopSectC.cell_number === buffer.address_pallet_2){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_2)

            } else if (dopSectC.cell_number === buffer.address_pallet_3){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (dopSectC.cell_number === buffer.address_pallet_4){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (dopSectC.cell_number === buffer.address_pallet_5){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (dopSectC.cell_number === buffer.address_pallet_6){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (dopSectC.cell_number === buffer.address_pallet_7){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (dopSectC.cell_number === buffer.address_pallet_8){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (dopSectC.cell_number === buffer.address_pallet_9){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (dopSectC.cell_number === buffer.address_pallet_10){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (dopSectC.cell_number === buffer.address_pallet_11){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (dopSectC.cell_number === buffer.address_pallet_12){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (dopSectC.cell_number === buffer.address_pallet_13){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (dopSectC.cell_number === buffer.address_pallet_14){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (dopSectC.cell_number === buffer.address_pallet_15){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_15)

            } else if (dopSectC.cell_number === buffer.address_pallet_16){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_16)

            } else if (dopSectC.cell_number === buffer.address_pallet_17){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_17)

            } else if (dopSectC.cell_number === buffer.address_pallet_18){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_18)

            } else if (dopSectC.cell_number === buffer.address_pallet_19){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_19)

            } else if (dopSectC.cell_number === buffer.address_pallet_20){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_20)

            } else if (dopSectC.cell_number === buffer.address_pallet_21){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_21)

            } else if (dopSectC.cell_number === buffer.address_pallet_22){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_22)

            } else if (dopSectC.cell_number === buffer.address_pallet_23){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_23)

            } else if (dopSectC.cell_number === buffer.address_pallet_24){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_24)

            } else if (dopSectC.cell_number === buffer.address_pallet_25){
                quadratureDopSekC = quadratureDopSekC + (kwm * buffer.number_of_pallets_25)
            }
        }
        // Цикл по скрытой ячейке D
        for (const dopSectD of dopSectrD) {
            if (dopSectD.cell_number === buffer.address_pallet_1){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_1)

            } else if (dopSectD.cell_number === buffer.address_pallet_2){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_2)

            } else if (dopSectD.cell_number === buffer.address_pallet_3){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (dopSectD.cell_number === buffer.address_pallet_4){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (dopSectD.cell_number === buffer.address_pallet_5){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (dopSectD.cell_number === buffer.address_pallet_6){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (dopSectD.cell_number === buffer.address_pallet_7){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (dopSectD.cell_number === buffer.address_pallet_8){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (dopSectD.cell_number === buffer.address_pallet_9){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (dopSectD.cell_number === buffer.address_pallet_10){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (dopSectD.cell_number === buffer.address_pallet_11){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (dopSectD.cell_number === buffer.address_pallet_12){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (dopSectD.cell_number === buffer.address_pallet_13){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (dopSectD.cell_number === buffer.address_pallet_14){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (dopSectD.cell_number === buffer.address_pallet_15){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_15)

            } else if (dopSectD.cell_number === buffer.address_pallet_16){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_16)

            } else if (dopSectD.cell_number === buffer.address_pallet_17){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_17)

            } else if (dopSectD.cell_number === buffer.address_pallet_18){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_18)

            } else if (dopSectD.cell_number === buffer.address_pallet_19){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_19)

            } else if (dopSectD.cell_number === buffer.address_pallet_20){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_20)

            } else if (dopSectD.cell_number === buffer.address_pallet_21){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_21)

            } else if (dopSectD.cell_number === buffer.address_pallet_22){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_22)

            } else if (dopSectD.cell_number === buffer.address_pallet_23){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_23)

            } else if (dopSectD.cell_number === buffer.address_pallet_24){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_24)

            } else if (dopSectD.cell_number === buffer.address_pallet_25){
                quadratureDopSekD = quadratureDopSekD + (kwm * buffer.number_of_pallets_25)
            }
        }
        //Запускаем цикл по сектору А
        for (const sectA of sectrA) {
            //Проверяем первый палет
            if (sectA.cell_number === buffer.address_pallet_1){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_1)

            } else if (sectA.cell_number === buffer.address_pallet_2){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_2)

            } else if (sectA.cell_number === buffer.address_pallet_3){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (sectA.cell_number === buffer.address_pallet_4){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (sectA.cell_number === buffer.address_pallet_5){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (sectA.cell_number === buffer.address_pallet_6){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (sectA.cell_number === buffer.address_pallet_7){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (sectA.cell_number === buffer.address_pallet_8){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (sectA.cell_number === buffer.address_pallet_9){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (sectA.cell_number === buffer.address_pallet_10){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (sectA.cell_number === buffer.address_pallet_11){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (sectA.cell_number === buffer.address_pallet_12){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (sectA.cell_number === buffer.address_pallet_13){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (sectA.cell_number === buffer.address_pallet_14){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (sectA.cell_number === buffer.address_pallet_15){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_15)

            } else if (sectA.cell_number === buffer.address_pallet_16){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_16)

            } else if (sectA.cell_number === buffer.address_pallet_17){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_17)

            } else if (sectA.cell_number === buffer.address_pallet_18){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_18)

            } else if (sectA.cell_number === buffer.address_pallet_19){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_19)

            } else if (sectA.cell_number === buffer.address_pallet_20){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_20)

            } else if (sectA.cell_number === buffer.address_pallet_21){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_21)

            } else if (sectA.cell_number === buffer.address_pallet_22){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_22)

            } else if (sectA.cell_number === buffer.address_pallet_23){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_23)

            } else if (sectA.cell_number === buffer.address_pallet_24){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_24)

            } else if (sectA.cell_number === buffer.address_pallet_25){
                quadratureA = quadratureA + (kwm * buffer.number_of_pallets_25)
            }
        }
        //Запускаем цикл по сектору B
        for (const sectB of sectrB) {
            //Проверяем первый палет
            if (sectB.cell_number === buffer.address_pallet_1){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_1)

            } else if (sectB.cell_number === buffer.address_pallet_2){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_2)

            } else if (sectB.cell_number === buffer.address_pallet_3){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (sectB.cell_number === buffer.address_pallet_4){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (sectB.cell_number === buffer.address_pallet_5){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (sectB.cell_number === buffer.address_pallet_6){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (sectB.cell_number === buffer.address_pallet_7){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (sectB.cell_number === buffer.address_pallet_8){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (sectB.cell_number === buffer.address_pallet_9){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (sectB.cell_number === buffer.address_pallet_10){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (sectB.cell_number === buffer.address_pallet_11){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (sectB.cell_number === buffer.address_pallet_12){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (sectB.cell_number === buffer.address_pallet_13){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (sectB.cell_number === buffer.address_pallet_14){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (sectB.cell_number === buffer.address_pallet_15){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_15)

            } else if (sectB.cell_number === buffer.address_pallet_16){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_16)

            } else if (sectB.cell_number === buffer.address_pallet_17){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_17)

            } else if (sectB.cell_number === buffer.address_pallet_18){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_18)

            } else if (sectB.cell_number === buffer.address_pallet_19){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_19)

            } else if (sectB.cell_number === buffer.address_pallet_20){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_20)

            } else if (sectB.cell_number === buffer.address_pallet_21){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_21)

            } else if (sectB.cell_number === buffer.address_pallet_22){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_22)

            } else if (sectB.cell_number === buffer.address_pallet_23){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_23)

            } else if (sectB.cell_number === buffer.address_pallet_24){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_24)

            } else if (sectB.cell_number === buffer.address_pallet_25){
                quadratureB = quadratureB + (kwm * buffer.number_of_pallets_25)
            }
        }
        //Запускаем цикл по сектору C
        for (const sectC of sectrC) {
            //Проверяем первый палет
            if (sectC.cell_number === buffer.address_pallet_1){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_1)

            } else if (sectC.cell_number === buffer.address_pallet_2){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_2)

            } else if (sectC.cell_number === buffer.address_pallet_3){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (sectC.cell_number === buffer.address_pallet_4){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (sectC.cell_number === buffer.address_pallet_5){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (sectC.cell_number === buffer.address_pallet_6){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (sectC.cell_number === buffer.address_pallet_7){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (sectC.cell_number === buffer.address_pallet_8){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (sectC.cell_number === buffer.address_pallet_9){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (sectC.cell_number === buffer.address_pallet_10){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (sectC.cell_number === buffer.address_pallet_11){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (sectC.cell_number === buffer.address_pallet_12){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (sectC.cell_number === buffer.address_pallet_13){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (sectC.cell_number === buffer.address_pallet_14){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (sectC.cell_number === buffer.address_pallet_15){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_15)

            } else if (sectC.cell_number === buffer.address_pallet_16){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_16)

            } else if (sectC.cell_number === buffer.address_pallet_17){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_17)

            } else if (sectC.cell_number === buffer.address_pallet_18){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_18)

            } else if (sectC.cell_number === buffer.address_pallet_19){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_19)

            } else if (sectC.cell_number === buffer.address_pallet_20){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_20)

            } else if (sectC.cell_number === buffer.address_pallet_21){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_21)

            } else if (sectC.cell_number === buffer.address_pallet_22){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_22)

            } else if (sectC.cell_number === buffer.address_pallet_23){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_23)

            } else if (sectC.cell_number === buffer.address_pallet_24){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_24)

            } else if (sectC.cell_number === buffer.address_pallet_25){
                quadratureC = quadratureC + (kwm * buffer.number_of_pallets_25)
            }
        }
        //Запускаем цикл по сектору D
        for (const sectD of sectrD) {
            //Проверяем первый палет
            if (sectD.cell_number === buffer.address_pallet_1){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_1)

            } else if (sectD.cell_number === buffer.address_pallet_2){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_2)

            } else if (sectD.cell_number === buffer.address_pallet_3){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_3)
                // console.log(pal3)

            } else if (sectD.cell_number === buffer.address_pallet_4){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_4)
                // console.log(pal4)

            } else if (sectD.cell_number === buffer.address_pallet_5){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_5)
                // console.log(pal5)

            } else if (sectD.cell_number === buffer.address_pallet_6){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_6)
                // console.log(pal6)

            } else if (sectD.cell_number === buffer.address_pallet_7){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_7)
                // console.log(pal7)

            } else if (sectD.cell_number === buffer.address_pallet_8){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_8)
                //  console.log(pal8)

            } else if (sectD.cell_number === buffer.address_pallet_9){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_9)
                // console.log(pal9)

            } else if (sectD.cell_number === buffer.address_pallet_10){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_10)
                // console.log(pal10)

            } else if (sectD.cell_number === buffer.address_pallet_11){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_11)
                // console.log(pal11)

            } else if (sectD.cell_number === buffer.address_pallet_12){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_12)
                // console.log(pal12)

            } else if (sectD.cell_number === buffer.address_pallet_13){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_13)
                // console.log(pal13)

            } else if (sectD.cell_number === buffer.address_pallet_14){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_14)
                // console.log(pal14)

            } else if (sectD.cell_number === buffer.address_pallet_15){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_15)

            } else if (sectD.cell_number === buffer.address_pallet_16){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_16)

            } else if (sectD.cell_number === buffer.address_pallet_17){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_17)

            } else if (sectD.cell_number === buffer.address_pallet_18){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_18)

            } else if (sectD.cell_number === buffer.address_pallet_19){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_19)

            } else if (sectD.cell_number === buffer.address_pallet_20){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_20)

            } else if (sectD.cell_number === buffer.address_pallet_21){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_21)

            } else if (sectD.cell_number === buffer.address_pallet_22){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_22)

            } else if (sectD.cell_number === buffer.address_pallet_23){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_23)

            } else if (sectD.cell_number === buffer.address_pallet_24){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_24)

            } else if (sectD.cell_number === buffer.address_pallet_25){
                quadratureD = quadratureD + (kwm * buffer.number_of_pallets_25)
            }
        }
    }
    // console.log(result)
    // let quadratureA =  result


    // console.log(quadratureA.toFixed())
// Функция которая заполняет массивы по секторам
    useMemo(() => {
        setSectrA(buffers.filter(buf => buf.id <= 42).sort(function (a,b){
            return a.id-b.id
        }))
        setSectrB(buffers.filter(buf => buf.id > 43 && buf.id <=79).sort(function (a,b){
            return a.id-b.id
        }))
        setSectrC(buffers.filter(buf => buf.id  > 80 && buf.id <=130).sort(function (a,b){
            return a.id-b.id
        }))
        setSectrD(buffers.filter(buf => buf.id  >131 && buf.id <=140).sort(function (a,b){
            return a.id-b.id
        }))
        setDopSectrA(buffers.filter(buf => buf.id  === 43).sort(function (a,b){
            return a.id-b.id
        }))
        setDopSectrB(buffers.filter(buf => buf.id  === 80).sort(function (a,b){
            return a.id-b.id
        }))
        setDopSectrC(buffers.filter(buf => buf.id  === 131).sort(function (a,b){
            return a.id-b.id
        }))
        setDopSectrD(buffers.filter(buf => buf.id  === 141).sort(function (a,b){
            return a.id-b.id
        }))
        // console.log(sectrA)
        // console.log(sectrB)
        // console.log(sectrC)
        // console.log(sectrD)
    },[buffers])

// useEffect(() => {
//     for (const argument of buffers) {
//         if (argument.cell_number.slice(0,10) == "2D-1-9.1") {
//             console.log(argument.cell_number +"Успешно")
//         }
//         // console.log(argument.cell_number.slice(0, 10))
//     }
// })
// Подсчет квадратных метров в буфере
//     let A = 0
// bufferLinks.map((b)=>console.log(b))



// Сумируем общие показатели по квадратным метрам

    quadratureA = quadratureA + quadratureDopSekA
    quadratureB = quadratureB + quadratureDopSekB
    quadratureC = quadratureC + quadratureDopSekC
    quadratureD = quadratureD + quadratureDopSekD
    // console.log(quadratureA + "" + "Доп сектор А")
    // console.log(quadratureB + "" + "Доп сектор B")
    // console.log(quadratureC + "" + "Доп сектор C")
    // console.log(quadratureD + "" + "Доп сектор D")
    //   setBufSectA(quadratureA)

    const {bufferStore} = useContext(Context)

    bufferStore.setBufSectA(quadratureA.toFixed())
    bufferStore.setBufSectB(quadratureB.toFixed())
    bufferStore.setBufSectC(quadratureC.toFixed())
    bufferStore.setBufSectD(quadratureD.toFixed())
    // console.log(bufferStore)

// Счетчики заполнения буфера
    let valA = 0;
    let valB = 0;
    let valC = 0;
    let valD = 0;

// Цикл для проверки и подсчета занятых ячеек
    for (const buf of buffers) {
        if (buf.id <= 42) {
            if (buf.freeness !== true){
                valA +=1
            }
        }
        if (buf.id > 43 && buf.id <=79) {
            if (buf.freeness !== true){
                valB +=1
            }
        }
        if (buf.id  > 80 && buf.id <=130) {
            if (buf.freeness !== true){
                valC +=1
            }
        }
        if (buf.id  >131 && buf.id <=140) {
            if (buf.freeness !== true){
                valD +=1
            }
        }

    }
// Результат в процентах по каждому сектору
    let secA = (valA/42)*100
    let secB = (valB/36)*100
    let secC = (valC/49)*100
    let secD = (valD/9)*100
    // console.log(valA)



//Расчет заполненности буфера и цветовая индикация
    const colorGrin = {background:"#00e340"} // до 50%
    const colorYellow = {background:"#ffdc00"} // до 75%
    const colorOrange = {background:"#ff8902"} // до 100%
    const colorRed = {background:"rgba(255,0,0,0.83)"} // больше 100%

    let colorSectA = {}
    let colorSectB = {}
    let colorSectC = {}
    let colorSectD = {}

    // Максимальные значения для каждго сектора буфера
    let maxA = 2000
    let maxB = 1000
    let maxC = 2000
    let maxD = 1000

    // Подсчет заполнености в процентах по кадждому сектору

    let percentA = ((quadratureA * 100)/ maxA).toFixed()
    let percentB = ((quadratureB * 100)/ maxB).toFixed()
    let percentC = ((quadratureC * 100)/ maxC).toFixed()
    let percentD = ((quadratureD * 100)/ maxD).toFixed()
    // console.log(percentB)


    if (percentA<=50){
        colorSectA = colorGrin
    } else if (percentA > 50 && percentA <= 75){
        colorSectA = colorYellow
    }else if (percentA > 75 && percentA <= 100){
        colorSectA = colorOrange
    }else if (percentA > 100){
        colorSectA = colorRed
    }
    if (percentB<=50){
        colorSectB = colorGrin
    } else if (percentB > 50 && percentB <= 75){
        colorSectB = colorYellow
    }else if (percentB > 75 && percentB <= 100){
        colorSectB = colorOrange
    }else if (percentB > 100){
        colorSectB = colorRed
    }
    if (percentC<=50){
        colorSectC = colorGrin
    } else if (percentC > 50 && percentC <= 75){
        colorSectC = colorYellow
    }else if (percentC > 75 && percentC <= 100){
        colorSectC = colorOrange
    }else if (percentC > 100){
        colorSectC = colorRed
    }
    if (percentD<=50){
        colorSectD = colorGrin
    } else if (percentD > 50 && percentD <= 75){
        colorSectD = colorYellow
    }else if (percentD > 75 && percentD <= 100){
        colorSectD = colorOrange
    }else if (percentD > 100){
        colorSectD = colorRed
    }

    return (
        <div className={"bufersDiagram_block_osn"}>
            <div className={"bufersDiagram_block"}>
                <div className={"bufersDiagram_block-headerBlock"}>
                    <div className={"bufersDiagram_block_sectrA"} style={colorSectA}>
                        <div className={"sectr_text_block"}>
                            <h2 className={"sectr_text"}>Сектор A</h2>
                        </div>

                        <div className={"bufersDiagram_sectrA-textBlock"} >
                            <h1 className={"bufersDiagram_sectrA-text"}>{quadratureA.toFixed() + " " + "м²"}</h1>
                        </div>
                        <div className={"sectr_text_predel_block"}>
                            <h3 className={"sectr_text_predel"}>{"Норма хранения" + " " + maxA  + " " + "м²"}</h3>
                        </div>

                    </div>
                    <div className={"bufersDiagram_block_sectrB"} style={colorSectB}>
                        <div className={"sectr_text_block"}>
                            <h2 className={"sectr_text"}>Сектор B</h2>
                        </div>
                        <div className={"bufersDiagram_sectrB-textBlock"} >
                            <h1 className={"bufersDiagram_sectrB-text"}>{quadratureB.toFixed() + " " + "м²"}</h1>
                        </div>
                        <div className={"sectr_text_predel_block"}>
                            <h3 className={"sectr_text_predel"}>{"Норма хранения" + " " + maxB  + " " + "м²"}</h3>
                        </div>
                    </div>

                </div>

                <div className={"bufersDiagram_block-footerBlock"} style={colorSectC}>
                    <div className={"bufersDiagram_block_sectrC"}>
                        <div className={"sectr_text_block"}>
                            <h2 className={"sectr_text"}>Сектор C</h2>
                        </div>
                        <div className={"bufersDiagram_sectrC-textBlock"} >
                            <h1 className={"bufersDiagram_sectrC-text"}>{quadratureC.toFixed() + " " + "м²"}</h1>
                        </div>
                        <div className={"sectr_text_predel_block"}>
                            <h3 className={"sectr_text_predel"}>{"Норма хранения" + " " + maxC  + " " + "м²"}</h3>
                        </div>
                    </div>

                    <div className={"bufersDiagram_block_sectrD"} style={colorSectD}>
                        <div className={"sectr_text_block"}>
                            <h2 className={"sectr_text"}>Сектор D</h2>
                        </div>
                        <div className={"bufersDiagram_sectrD-textBlock"} >
                            <h1 className={"bufersDiagram_sectrD-text"}>{quadratureD.toFixed() + " " + "м²"}</h1>
                        </div>

                        <div className={"sectr_text_predel_block"}>
                            <h3 className={"sectr_text_predel"}>{"Норма хранения" + " " + maxD + " " + "м²"}</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default React.memo(BufersDiagram);