import React, {useEffect, useMemo, useState} from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker, {registerLocale} from "react-datepicker";
import Chart from 'chart.js/auto';
import ru from "date-fns/locale/ru";
import 'react-datepicker/dist/react-datepicker.css'
import "../styleBlockDiagram.css"
import DigramService from "../../../API/DigramService";
import ZnpYpakService from "../../../API/Znp_ypakService";

const RegionDiagram = () => {
    //Первоначальное значение для графика
    const [data, setData] = useState({
        labels: ["0"],
        datasets: [
            {
                label: "Раскрой",
                backgroundColor: "rgb(94, 255, 0)",
                borderColor: "rgb(0, 0, 0)",
                data: [0]
            },
            {
                label: "Поклейка",
                backgroundColor: "rgb(255,220,0)",
                borderColor: "rgb(0, 0, 0)",
                data: [0]
            },
            {
                label: "Кромка",
                backgroundColor: "rgb(0,60,255)",
                borderColor: "rgb(0, 0, 0)",
                data: [0]
            },
            {
                label: "Упаковка",
                backgroundColor: "rgb(0,60,255)",
                borderColor: "rgb(0, 0, 0)",
                data: [0]
            }


        ],
    })

    const [options, setOptions] = useState({
        plugins: {
            title: {
                display: true,
                text: 'Выработка участков м²'
            },
            legend:{
                display:true,
                position:'right'
            }
        }
    })

    let updateData = {}

    let BST1 = "BST-503_1"
    let BST2= "BST-503_2"
    let BHX1 = "BHX-050_1"
    let BHX2 = "BHX-050_2"
    let BHX3 = "BHX-050_3"
    let KDT6032 = "KDT-6032"
    let KDT6052 = "KDT-6052"
    let Sigma1 = "Sigma_1"
    let Venture07M = "Venture-07M"
    let Evolution = "Evolution"
    let S500_2 = "S500_2"
    let S500_3 = "S500_3"
    let S500_4 = "S500_4"
    let XD = "XD"
    let StreamA = "Stream-A"

    // Состояние c данными для каждого участка
    const [qadrarureRaspil, setQuadratyreRaspil] = useState([])
    const [qadrarurePokleika, setQuadratyrePokleika] = useState([])
    const [qadrarurePrisadka, setQuadratyrePrisadka] = useState([])
    const [ypakovkaTable, setYpakovkaTable] = useState([])
    const [ypakovkaTable2, setYpakovkaTable2] = useState([])

    // Общее состояние для станков каждого сектора
    const [qadrarureStanckiPokleika, setQuadratyreStanckiPokleika] = useState([])
    const [qadrarureStanckiPrisadka, setQuadratyreStanckiPrisadka] = useState([])


    // Состояние c данными для каждого станка Присадки
    const [stanockBst1, setStanockBst1] = useState([])
    const [stanockBst2, setStanockBst2] = useState([])
    const [stanockBHX1, setStanockBHX1] = useState([])
    const [stanockBHX2, setStanockBHX2] = useState([])
    const [stanockBHX3, setStanockBHX3] = useState([])
    const [stanockKdt_6032, setStanockKdt_6032] = useState([])
    const [stanockKdt_6052, setStanockKdt_6052] = useState([])
    const [stanockSigma1, setStanockSigma1] = useState([])
    const [stanockVentura07m, setStanockVentura07m] = useState([])

    // Состояние c данными для каждого станка Поклейки
    const [stanockEvolution, setStanockEvolution] = useState([])
    const [stanockS5002, setStanockS5002] = useState([])
    const [stanockS5003, setStanockS5003] = useState([])
    const [stanockS5004, setStanockS5004] = useState([])
    const [stanockXD, setStanockXD] = useState([])
    const [stanockStreamA, setStanockStreamA] = useState([])


    //Переменна с участком который вбрали. Для отображения станка
    const [selectedMachine, setSelectedMachine] = useState([""])

    //Переменны с данными о выбранной дате
    const [data1 , setData1] = useState("")
    const [data2 , setData2] = useState("")
    // // Блок с данными для календаря
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const [smena, setSmena] = useState("")

// Сортировка данных по каждому станку
    useEffect(()=>{
        let StanockEvolution = []
        let StanockS5002 = []
        let StanockS5003 = []
        let StanockS5004 = []
        let StanockXD = []
        let StanockStreamA = []
        for (const qadrarureStanckiPokleikaElement of qadrarureStanckiPokleika) {

            if (qadrarureStanckiPokleikaElement.stanock == Evolution ){
                StanockEvolution=[...StanockEvolution,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            } else if (qadrarureStanckiPokleikaElement.stanock == S500_2){
                StanockS5002=[...StanockS5002,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            }else if (qadrarureStanckiPokleikaElement.stanock == S500_3){
                StanockS5003=[...StanockS5003,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            }else if (qadrarureStanckiPokleikaElement.stanock == S500_4){
                StanockS5004=[...StanockS5004,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            }else if (qadrarureStanckiPokleikaElement.stanock == XD){
                StanockXD=[...StanockXD,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            }else if (qadrarureStanckiPokleikaElement.stanock == StreamA){
                StanockStreamA =[...StanockStreamA,{
                    date:qadrarureStanckiPokleikaElement.date,
                    sum:qadrarureStanckiPokleikaElement.sum} ]
            }
        }

        setStanockEvolution(StanockEvolution)
        setStanockS5002(StanockS5002)
        setStanockS5003(StanockS5003)
        setStanockS5004(StanockS5004)
        setStanockXD(StanockXD)
        setStanockStreamA(StanockStreamA)

        let StanockBst1 = []
        let StanockBst2 = []
        let StanockBHX1 = []
        let StanockBHX2 = []
        let StanockBHX3 = []
        let StanockKdt_6032 = []
        let StanockKdt_6052 = []
        let StanockSigma1 = []
        let StanockVentura07m = []
        for (const qadrarureStanckiPrisadkaElement of qadrarureStanckiPrisadka){
            if (qadrarureStanckiPrisadkaElement.stanock == BST1 ){
                StanockBst1=[...StanockBst1,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            } else if (qadrarureStanckiPrisadkaElement.stanock == BST2){
                StanockBst2=[...StanockBst2,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }else if (qadrarureStanckiPrisadkaElement.stanock == BHX1){
                StanockBHX1=[...StanockBHX1,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }else if (qadrarureStanckiPrisadkaElement.stanock == BHX2){
                StanockBHX2=[...StanockBHX2,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }else if (qadrarureStanckiPrisadkaElement.stanock == BHX3){
                StanockBHX3=[...StanockBHX3,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }else if (qadrarureStanckiPrisadkaElement.stanock == KDT6032){
                StanockKdt_6032=[...StanockKdt_6032,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }else if (qadrarureStanckiPrisadkaElement.stanock == KDT6052){
                StanockKdt_6052=[...StanockKdt_6052,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum}]
            }else if (qadrarureStanckiPrisadkaElement.stanock == Sigma1){
                StanockSigma1=[...StanockSigma1,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum}]
            }else if (qadrarureStanckiPrisadkaElement.stanock == Venture07M){
                StanockVentura07m=[...StanockVentura07m,{
                    date:qadrarureStanckiPrisadkaElement.date,
                    sum:qadrarureStanckiPrisadkaElement.sum} ]
            }
        }
        setStanockBst1(StanockBst1)
        setStanockBst2(StanockBst2)
        setStanockBHX1(StanockBHX1)
        setStanockBHX2(StanockBHX2)
        setStanockBHX3(StanockBHX3)
        setStanockKdt_6032(StanockKdt_6032)
        setStanockKdt_6052(StanockKdt_6052)
        setStanockSigma1(StanockSigma1)
        setStanockVentura07m(StanockVentura07m)
    },[qadrarureStanckiPokleika,qadrarureStanckiPrisadka])



    async function arrMetodRegion ( qadrarureRaspil, qadrarurePokleika, qadrarurePrisadka, ypakovkaTable2){
        let labs = [] // Массив с отсортированными датами

        let diagramRaspil= []  //Данные по распилу
        let diagramPokleika= []  // Данные по поклейке
        let diagramPrisadka= []  //Данные по присадке
        let diagramYpakQadrarure= []  //Данные по упаковке
        let diagramYpakEquivalent= []  //Данные по упаковке

        //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        for (const qadrarureRaspilElement of qadrarureRaspil) {
            labs.push(qadrarureRaspilElement.date)
            // console.log(qadrarureRaspilElement.date + "Расп")
            // console.log(labs)
        }
        labs = [... new Set(labs)]
        // console.log(labs)
        for (const qadrarurePokleikaElement of qadrarurePokleika) {
            labs.push(...labs, qadrarurePokleikaElement.date)
            // console.log(qadrarurePokleikaElement.date + "Поклей")
            // console.log(labs)
        }
        labs = [... new Set(labs)]
        for (const qadrarurePrisadkaElement of qadrarurePrisadka) {
            labs.push(...labs, qadrarurePrisadkaElement.date)
            // console.log(qadrarurePrisadkaElement.date + "Прис")
            // console.log(labs)
        }
        for (const ypakovkaTable2Element of ypakovkaTable2) {
            labs.push(...labs, ypakovkaTable2Element.date_compl1)
            // console.log(qadrarurePrisadkaElement.date + "Прис")
            // console.log(labs)
        }

        labs = [... new Set(labs)]
        // console.log(labs)

        // labs = arr_1.sort()
        // console.log(labs)
        //Второй этап мы заполняем данные для каждого участка по выработки, пробегаем по обьекту и сравниваем даты, если есть сходство заносим данные, если нет то ставим 0
        let valRaspil
        let valPokleika
        let valPrisadka
        let valPokleikaQvadrature
        let valPokleikaEquivalent
        for (const a in labs) {
            valRaspil = 0
            valPokleika = 0
            valPrisadka = 0
            valPokleikaQvadrature = 0
            valPokleikaEquivalent = 0
            for (const b in qadrarureRaspil) {
                if (labs[a] == qadrarureRaspil[b].date){
                    valRaspil = qadrarureRaspil[b].sum
                }
            }
            for (const b in qadrarurePokleika) {
                if (labs[a] == qadrarurePokleika[b].date){
                    valPokleika = qadrarurePokleika[b].sum
                }
            }
            for (const b in qadrarurePrisadka) {
                if (labs[a] == qadrarurePrisadka[b].date){
                    valPrisadka = qadrarurePrisadka[b].sum
                }
            }
            for (const b in ypakovkaTable2) {
                if (labs[a] == ypakovkaTable2[b].date_compl1){
                    valPokleikaQvadrature = ypakovkaTable2[b].area
                    valPokleikaEquivalent = ypakovkaTable2[b].equivalent
                    console.log(labs[a])
                    console.log(ypakovkaTable2[b].date_compl1)

                }
                console.log(valPokleikaQvadrature)
            }
            diagramRaspil.push(valRaspil)
            diagramPokleika.push(valPokleika)
            diagramPrisadka.push(valPrisadka)
            diagramYpakQadrarure.push(Math.round(valPokleikaQvadrature))
            diagramYpakEquivalent.push(Math.round(valPokleikaEquivalent))
            // console.log()
        }
        //Изменяем данные для графика и обновляем его
        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Выработка участков м²'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })

        setData({ labels: labs,
            datasets: [
                {
                    label: "Раскрой",
                    backgroundColor: "rgb(94, 255, 0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramRaspil
                },
                {
                    label: "Поклейка",
                    backgroundColor: "rgb(255,220,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramPokleika
                },
                {
                    label: "Присадка",
                    backgroundColor: "rgb(0,60,255)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramPrisadka
                },
                {
                    label: "Упаковка м² ",
                    backgroundColor: "rgba(255,0,0,0.79)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramYpakQadrarure
                },
                {
                    label: "Упаковка Эквивалент",
                    backgroundColor: "rgb(255,100,2)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramYpakEquivalent
                },
            ],
        })
        // console.log(labs)
        // console.log(qadrarureRaspil)
        // qadrarureRaspil
        // qadrarurePokleika
        // qadrarurePrisadk
    }

    async function arrMetodSumRegion ( qadrarureRaspil, qadrarurePokleika, qadrarurePrisadka, ypakovkaTable2){
        let labs = ["Суммарная выработка за выбранный диапазон"] // Массив с отсортированными датами

        let diagramRaspil = []  //Данные по распилу
        let diagramPokleika = []  // Данные по поклейке
        let diagramPrisadka = []  //Данные по присадке
        let diagramYpakQadrarure = []  //Данные по присадке
        let diagramYpakEquivalent = []  //Данные по присадке

        // //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        // for (const qadrarureRaspilElement of qadrarureRaspil) {
        //     labs.push(qadrarureRaspilElement.date)
        //     // console.log(qadrarureRaspilElement.date)
        // }
        // labs = [... new Set(labs)].sort()
        // for (const qadrarurePokleikaElement of qadrarurePokleika) {
        //     labs.push(...labs, qadrarurePokleikaElement.date)
        // }
        // labs = [... new Set(labs)].sort()
        // for (const qadrarurePrisadkaElement of qadrarurePrisadka) {
        //     labs.push(...labs, qadrarurePrisadkaElement.date)
        // }


        // labs = arr_1.sort()
        // console.log(labs)
        //Второй этап мы заполняем данные для каждого участка по выработки, пробегаем по обьекту и сравнивуаем даты, если есть сходство заносим данные, если нет то ставим 0
        let valRaspil = 0
        let valPokleika = 0
        let valPrisadka = 0
        let valPokleikaQvadrature = 0
        let valPokleikaEquivalent = 0

        for (const qadrarureRaspilElement of qadrarureRaspil) {
            valRaspil = valRaspil + Number(qadrarureRaspilElement.sum)
            // console.log(valRaspil)
        }
        for (const qadrarurePokleikaElement of qadrarurePokleika) {
            valPokleika = valPokleika + Number(qadrarurePokleikaElement.sum)
        }
        for (const qadrarurePrisadkaElement of qadrarurePrisadka) {
            valPrisadka = valPrisadka + Number(qadrarurePrisadkaElement.sum)
        }
        for (const ypakovkaTable2Element of ypakovkaTable2) {

            valPokleikaQvadrature = valPokleikaQvadrature + Number(ypakovkaTable2Element.area)
            valPokleikaEquivalent = valPokleikaEquivalent + Number(ypakovkaTable2Element.equivalent)

        }
        console.log(valPokleikaQvadrature)
        console.log(valPokleikaEquivalent)

        diagramRaspil.push(valRaspil)
        diagramPokleika.push(valPokleika)
        diagramPrisadka.push(valPrisadka)
        diagramYpakQadrarure.push(Math.round(valPokleikaQvadrature))
        diagramYpakEquivalent.push(Math.round(valPokleikaEquivalent))

        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Выработка участков м²'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })

        setData({ labels: labs,
            datasets: [
                {
                    label: "Раскрой",
                    backgroundColor: "rgb(94, 255, 0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramRaspil
                },
                {
                    label: "Поклейка",
                    backgroundColor: "rgb(255,220,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramPokleika
                },
                {
                    label: "Присадка",
                    backgroundColor: "rgb(0,60,255)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramPrisadka
                },
                {
                    label: "Упаковка м² ",
                    backgroundColor: "rgb(255,0,0,0.79)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramYpakQadrarure
                },
                {
                    label: "Упаковка Эквивалент ",
                    backgroundColor: "rgb(255,100,2)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramYpakEquivalent
                },
            ],
        })



    }

    async function arrMetodRegionRaspil ( qadrarureRaspil){
        let labs = [] // Массив с отсортированными датами

        let diagramRaspil= []  //Данные по распилу

        //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        for (const qadrarureRaspilElement of qadrarureRaspil) {
            labs.push(qadrarureRaspilElement.date)
            // console.log(qadrarureRaspilElement.date)
        }
        labs = [... new Set(labs)]
        // labs = arr_1.sort()
        // console.log(labs)
        //Второй этап мы заполняем данные для каждого участка по выработки, пробегаем по обьекту и сравнивуаем даты, если есть сходство заносим данные, если нет то ставим 0
        let valRaspil

        for (const a in labs) {
            valRaspil = 0

            for (const b in qadrarureRaspil) {
                if (labs[a] == qadrarureRaspil[b].date){
                    valRaspil = qadrarureRaspil[b].sum
                }
            }

            diagramRaspil.push(valRaspil)

        }
        //Изменяем данные для графика и обновляем его
        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Выработка участков м²'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })
        setData({ labels: labs,
            datasets: [
                {
                    label: "Раскрой",
                    backgroundColor: "rgb(94, 255, 0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramRaspil
                },
            ],
        })
    }

    async function arrMetodYpakTable ( ypakovkaTable){
        let labs = [] // Массив с отсортированными датами

        let diagramYpack= []  //Данные по распилу

        //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        for (const ypakovkaTableElement of ypakovkaTable) {
            labs.push(ypakovkaTableElement.date_compl1)
            // console.log(qadrarureRaspilElement.date)
        }
        labs = [... new Set(labs)]
        // labs = arr_1.sort()
        // console.log(labs)
        //Второй этап мы заполняем данные для каждого участка по выработки, пробегаем по обьекту и сравнивуаем даты, если есть сходство заносим данные, если нет то ставим 0
        let valYpack

        for (const a in labs) {
            valYpack = 0

            for (const b in ypakovkaTable) {
                if (labs[a] == ypakovkaTable[b].date_compl1){
                    valYpack = ypakovkaTable[b].sum
                }
            }

            diagramYpack.push(valYpack)

        }
        //Изменяем данные для графика и обновляем его
        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Упакованно шт'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })
        setData({ labels: labs,
            datasets: [
                {
                    label: "Упаковка",
                    backgroundColor: "rgb(246,210,10)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramYpack
                },
            ],
        })
    }

    //Заполнение графика при выборе поклейки
    async function arrMetodStanckiPoleika (stanockEvolution, stanockS5002, stanockS5003, stanockS5004, stanockXD, stanockStreamA ){
        let labs = [] // Массив с отсортированными датами

        let diagramEvolution= []  //Данные по Станку
        let diagramS5002= []  // Данные по Станку
        let diagramS5003= []  // Данные по Станку
        let diagramS5004= []  // Данные по Станку
        let diagramXD= []  //Данные по Станку
        let diagramStreamA= []  //Данные по Станку


        //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        for (const stanockEvolutionElement of stanockEvolution) {
            labs.push(stanockEvolutionElement.date)
            // console.log(qadrarureRaspilElement.date)
        }
        labs = [... new Set(labs)]
        for (const stanockS5002Element of stanockS5002) {
            labs.push(...labs, stanockS5002Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockS5003Element of stanockS5003) {
            labs.push(...labs, stanockS5003Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockS5004Element of stanockS5004) {
            labs.push(...labs, stanockS5004Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockXDElement of stanockXD) {
            labs.push(...labs, stanockXDElement.date)
        }
        labs = [... new Set(labs)]
        for (const stanockSteamAElement of stanockStreamA) {
            labs.push(...labs, stanockSteamAElement.date)
        }

        labs = [... new Set(labs)]

        // console.log(labs)
        //Второй этап мы заполняем данные для каждого Станка по выработки, пробегаем по обьекту и сравнивуаем даты, если есть сходство заносим данные, если нет то ставим 0
        let valEvolution
        let valS5002
        let valS5003
        let valS5004
        let valXD
        let valStreamA
        for (const a in labs) {
            valEvolution = 0
            valS5002 = 0
            valS5003 = 0
            valS5004 = 0
            valXD = 0
            valStreamA = 0

            for (const b in  stanockEvolution) {
                if (labs[a] ==  stanockEvolution[b].date){
                    valEvolution =  stanockEvolution[b].sum
                }
            }
            for (const b in stanockS5002) {
                if (labs[a] == stanockS5002[b].date){
                    valS5002 = stanockS5002[b].sum
                }
            }
            for (const b in stanockS5003) {
                if (labs[a] == stanockS5003[b].date){
                    valS5003 = stanockS5003[b].sum
                }
            }
            for (const b in stanockS5004) {
                if (labs[a] == stanockS5004[b].date){
                    valS5004 = stanockS5004[b].sum
                }
            }
            for (const b in stanockXD) {
                if (labs[a] == stanockXD[b].date){
                    valXD = stanockXD[b].sum
                }
            }
            for (const b in stanockStreamA) {
                if (labs[a] == stanockStreamA[b].date){
                    valStreamA = stanockStreamA[b].sum
                }
            }
            diagramEvolution.push(valEvolution)
            diagramS5002.push(valS5002)
            diagramS5003.push( valS5003)
            diagramS5004.push(valS5004)
            diagramXD.push(valXD)
            diagramStreamA.push(valStreamA )

        }

        // console.log(stanockEvolution)
        // console.log(stanockS5002)
        // console.log(stanockS5003)
        // console.log(stanockS5004)
        // console.log(stanockStreamA)
        //Изменяем данные для графика и обновляем его
        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Выработка станков на участке Поклейки. Пробег'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })
        setData({ labels: labs,
            datasets: [
                {
                    label: "Evolution",
                    backgroundColor: "rgb(94, 255, 0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramEvolution
                },
                {
                    label: "S500_2",
                    backgroundColor: "rgb(255,223,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramS5002
                },
                {
                    label: "S500_3",
                    backgroundColor: "rgb(119,126,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramS5003
                },
                {
                    label: "S500_4",
                    backgroundColor: "rgb(167,255,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramS5004
                },
                {
                    label: "XD",
                    backgroundColor: "rgb(0,255,126)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramXD
                },
                {
                    label: "StreamA",
                    backgroundColor: "rgb(24,0,255)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramStreamA
                },


            ],
        })
    }
    //Заполнение графика при выборе присадки
    async function arrMetodStanckiPrisadka ( stanockBst1, stanockBst2, stanockBHX1, stanockBHX2, stanockBHX3, stanockKdt_6032, stanockKdt_6052, stanockSigma1, stanockVentura07m ){
        let labs = [] // Массив с отсортированными датами

        let diagramBst1= []  //Данные по Станку
        let diagramBst2= []  // Данные по Станку
        let diagramBHX1= []  // Данные по Станку
        let diagramBHX2= []  // Данные по Станку
        let diagramBHX3= []  //Данные по Станку
        let diagramKdt_6032= []  //Данные по Станку
        let diagramKdt_6052= []  //Данные по Станку
        let diagramSigma1= []  //Данные по Станку
        let diagramVentura07m= []  //Данные по Станку

        //Первый этап мы проходимся по каждому участку и записываем даты в массив, потом удаляем дубликаты и остаются нужные даты
        for (const stanockBst1Element of stanockBst1) {
            labs.push(stanockBst1Element.date)
            // console.log(qadrarureRaspilElement.date)
        }
        labs = [... new Set(labs)]
        for (const stanockBst2Element of stanockBst2) {
            labs.push(...labs, stanockBst2Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockBHX1Element of stanockBHX1) {
            labs.push(...labs, stanockBHX1Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockBHX2Element of stanockBHX2) {
            labs.push(...labs, stanockBHX2Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockBHX3Element of stanockBHX3) {
            labs.push(...labs, stanockBHX3Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockKdt_6032Element of stanockKdt_6032) {
            labs.push(...labs, stanockKdt_6032Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockKdt_6052Element of stanockKdt_6052) {
            labs.push(...labs, stanockKdt_6052Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockSigma1Element of stanockSigma1) {
            labs.push(...labs, stanockSigma1Element.date)
        }
        labs = [... new Set(labs)]
        for (const stanockVentura07mElement of stanockVentura07m) {
            labs.push(...labs, stanockVentura07mElement.date)
        }

        labs = [... new Set(labs)]

        // console.log(labs)
        //Второй этап мы заполняем данные для каждого Станка по выработки, пробегаем по обьекту и сравнивуаем даты, если есть сходство заносим данные, если нет то ставим 0
        let valBst1
        let valBst2
        let valBHX1
        let valBHX2
        let valBHX3
        let valKdt_6032
        let valKdt_6052
        let valSigma1
        let valVentura07m

        for (const a in labs) {
            valBst1 = 0
            valBst2 = 0
            valBHX1 = 0
            valBHX2 = 0
            valBHX3 = 0
            valKdt_6032 = 0
            valKdt_6052 = 0
            valSigma1 = 0
            valVentura07m = 0

            for (const b in  stanockBst1) {
                if (labs[a] ==  stanockBst1[b].date){
                    valBst1 =  stanockBst1[b].sum
                }
            }
            for (const b in stanockBst2) {
                if (labs[a] == stanockBst2[b].date){
                    valBst2 = stanockBst2[b].sum
                }
            }
            for (const b in stanockBHX1) {
                if (labs[a] == stanockBHX1[b].date){
                    valBHX1 = stanockBHX1[b].sum
                }
            }
            for (const b in stanockBHX2) {
                if (labs[a] == stanockBHX2[b].date){
                    valBHX2 = stanockBHX2[b].sum
                }
            }
            for (const b in stanockBHX3) {
                if (labs[a] == stanockBHX3[b].date){
                    valBHX3 = stanockBHX3[b].sum
                }
            }
            for (const b in stanockKdt_6032) {
                if (labs[a] == stanockKdt_6032[b].date){
                    valKdt_6032 = stanockKdt_6032[b].sum
                }
            }
            for (const b in stanockKdt_6052) {
                if (labs[a] == stanockKdt_6052[b].date){
                    valKdt_6052 = stanockKdt_6052[b].sum
                }
            }
            for (const b in stanockSigma1) {
                if (labs[a] == stanockSigma1[b].date){
                    valSigma1 = stanockSigma1[b].sum
                }
            }
            for (const b in stanockVentura07m) {
                if (labs[a] == stanockVentura07m[b].date){
                    valVentura07m = stanockVentura07m[b].sum
                }
            }
            diagramBst1.push(valBst1)
            diagramBst2.push(valBst2)
            diagramBHX1.push( valBHX1)
            diagramBHX2.push(valBHX2)
            diagramBHX3.push(valBHX3)
            diagramKdt_6032.push(valKdt_6032)
            diagramKdt_6052.push(valKdt_6052)
            diagramSigma1.push(valSigma1)
            diagramVentura07m.push(valVentura07m)

        }
        //Изменяем данные для графика и обновляем его
        setOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Выработка станков на участке Присадки. Детали'
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }
        })
        setData({ labels: labs,
            datasets: [
                {
                    label: "BST-503_1",
                    backgroundColor: "rgb(94, 255, 0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramBst1
                },
                {
                    label: "BST-503_2",
                    backgroundColor: "rgb(255,223,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramBst2
                },
                {
                    label: "BHX-050_1",
                    backgroundColor: "rgb(119,126,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramBHX1
                },
                {
                    label: "BHX-050_2",
                    backgroundColor: "rgb(119,126,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramBHX2
                },
                {
                    label: "BHX-050_3",
                    backgroundColor: "rgb(119,126,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramBHX3
                },
                {
                    label: "KDT-6032",
                    backgroundColor: "rgb(167,255,0)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramKdt_6032
                },
                {
                    label: "KDT-6052",
                    backgroundColor: "rgb(0,255,126)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramKdt_6052
                },
                {
                    label: "Sigma_1",
                    backgroundColor: "rgb(24,0,255)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramSigma1
                },
                {
                    label: "Venture-07M",
                    backgroundColor: "rgb(24,0,255)",
                    borderColor: "rgb(0, 0, 0)",
                    data: diagramVentura07m
                },


            ],
        })
    }


    //Вызов запросов при изменени даты
    useEffect(()=>{
        if ( data1 != "01.01.1970" && data2 != "01.01.1970" ){
            requestDiagramData( data1, data2,smena)
        }


    },[data1,data2, smena])




    //Функция отправки запроса
    function requestDiagramData( data1, data2,smena){
        if (data1 != "" && data2 != "" ) {
            fetchStanckiPokleika (data1, data2, smena)
            fetchStanckiPrisadka (data1, data2, smena)
            fetchRaspilCompleted(data1, data2, smena)
            fetchPokleikaCompleted(data1, data2, smena)
            fetchPrisadkaCompleted(data1, data2, smena)
            fetchYpakTable (data1, data2, smena)
            fetchYpakTable2 (data1, data2, smena)
        }


    }



    //Запросы к бд для получения данных
    async function fetchRaspilCompleted (data1,data2, smena){
        const RaspilDataGet = await DigramService.getAllRaspil(data1, data2, smena)
        await setQuadratyreRaspil(RaspilDataGet.sort((a,b) =>{
            return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())

        }))
        // console.log(RaspilDataGet  )
    }
    async function fetchPokleikaCompleted (data1,data2, smena){
        const PokleikaDataGet = await DigramService.getAllPokleika(data1,data2, smena)
        await setQuadratyrePokleika(PokleikaDataGet.sort((a,b) =>{
            return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())
        }))
        // console.log(PokleikaDataGet )
    }
    async function fetchPrisadkaCompleted (data1,data2, smena){
        const PrisadkaDataGet = await DigramService.getAllPrisadka(data1,data2, smena)
        await setQuadratyrePrisadka(PrisadkaDataGet.sort((a,b) =>{
            return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())
        }))
        // console.log(PrisadkaDataGet )
    }
    // async function fetchYpakovkaCompleted (){
    //     const YpakovkaDataGet = await RegionDiagramService.getAllYpakovka()
    //     await setQuadratyreYpakovka(YpakovkaDataGet.sort((a,b) =>{
    //         return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())
    //     }))
    //     // console.log(YpakovkaDataGet )
    // }
    // Блок с запросами к бд

    async function fetchStanckiPokleika (data1, data2, smena){
        const stanckiPokleikaDataGet = await DigramService.getAllStanckiPokleika(data1, data2, smena)
        // console.log(stanckiPokleikaDataGet)
        await setQuadratyreStanckiPokleika(stanckiPokleikaDataGet.sort(function (a,b){
            return a.id-b.id
        }))
        // await setQuadratyreStanckiPokleika(stanckiPokleikaDataGet.sort((a,b) =>{
        //     return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())
        // }))
        // console.log(Bst1DataGet )
    }
    async function fetchStanckiPrisadka (data1, data2, smena){
        const stanckiPrisadkaDataGet = await DigramService.getAllStanckiPrisadka(data1, data2, smena)
        // console.log(stanckiPrisadkaDataGet)
        await setQuadratyreStanckiPrisadka(stanckiPrisadkaDataGet.sort(function (a,b){
            return a.id-b.id
        }))
        // await setQuadratyreStanckiPrisadka(stanckiPrisadkaDataGet.sort((a,b) =>{
        //     return   new Date(a.date.split('.').reverse())  - new Date(b.date.split('.').reverse())
        // }))
        // console.log(Bst1DataGet )
    }


    async function fetchYpakTable (data1, data2, smena){
        const YpakDataGet = await DigramService.getAllYpackTable(data1, data2, smena)
        // console.log(stanckiPrisadkaDataGet)
        await setYpakovkaTable(YpakDataGet.sort(function (a,b){
            return a.id-b.id
        }))
    }
    async function fetchYpakTable2 (data1, data2, smena){
        const YpakDataGet = await DigramService.getAllYpackTable2(data1, data2, smena)
        // console.log(YpakDataGet)
        await setYpakovkaTable2(YpakDataGet.sort(function (a,b){
            return a.id-b.id
        }))
    }



    useMemo(()=>{
        if (selectedMachine === "Поклейка"){
            arrMetodStanckiPoleika ( stanockEvolution, stanockS5002, stanockS5003, stanockS5004, stanockXD, stanockStreamA)
        } else if (selectedMachine === "Присадка"){
            arrMetodStanckiPrisadka ( stanockBst1, stanockBst2, stanockBHX1, stanockBHX2, stanockBHX3, stanockKdt_6032, stanockKdt_6052, stanockSigma1, stanockVentura07m )
        } else if (selectedMachine === "Раскрой"){
            arrMetodRegionRaspil ( qadrarureRaspil)
        } else if (selectedMachine === "Упаковка"){
            arrMetodYpakTable ( ypakovkaTable)
        }else if (selectedMachine === "Сумма"){
            arrMetodSumRegion( qadrarureRaspil, qadrarurePokleika, qadrarurePrisadka, ypakovkaTable2)
        } else {
            arrMetodRegion ( qadrarureRaspil, qadrarurePokleika, qadrarurePrisadka, ypakovkaTable2)
        }

    },[selectedMachine, smena, data1,data2, ypakovkaTable2,ypakovkaTable, qadrarureRaspil, qadrarurePokleika, qadrarurePrisadka,stanockEvolution, stanockS5002, stanockS5003, stanockS5004, stanockXD, stanockStreamA, stanockBst1, stanockBst2, stanockBHX1, stanockBHX2, stanockBHX3, stanockKdt_6032, stanockKdt_6052, stanockSigma1, stanockVentura07m])



// <=============================================================================================================>



    // Блок с выбором дат
    registerLocale('ru', ru)

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        let startDat  =  new Date(start)
        let endDat  =  new Date(end)
        setData1(startDat.toLocaleDateString())
        setData2(endDat.toLocaleDateString())

        // console.log(startDat.toLocaleDateString() + "Старт" )
        // console.log(endDat.toLocaleDateString() + "Конец" )
    }




    return (
        <div className={"regionDiagram_block"}>

            <div className={"region_kalendar-block"}>
                <DatePicker
                    wrapperClassName="region_kalendar"
                    locale="ru"
                    dateFormat="dd/MM/yyy"
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    excludeDateIntervals={[
                        { start: new Date("2023-01-10"), end: new Date("2023-11-07") },
                    ]}
                    isClearable={true}
                />


                <div className={"stanckiDiagram_select-blocl"}>
                    <select className={"stanckiDiagram_select"}
                            defaultValue={'DEFAULT'} onChange={(e)=>{
                        setSelectedMachine(e.target.value)
                    }}>
                        <option value={"DEFAULT"}>Все участки</option>
                        <option value={"Сумма"}>Суммарная выработка за выбранный диапазон</option>
                        <option value={"Раскрой"}>Раскрой</option>
                        <option value={"Поклейка"}>Поклейка</option>
                        <option value={"Присадка"}>Присадка</option>
                        <option value={"Упаковка"}>Упаковка</option>

                    </select>
                </div>
                <div className={"stanckiDiagram_select-blocl"}>
                    <select className={"stanckiDiagram_select"}
                            defaultValue={'DEFAULT'} onChange={(e)=>{
                        setSmena(e.target.value)
                    }}>
                        <option value={""}>Все смены</option>
                        <option value={1}>Смена 1</option>
                        <option value={2}>Смена 2</option>
                    </select>
                </div>
            </div>
            <div className={"region_diagramBlock"}>
                <Bar    className={"region_diagram"}
                        data={data}
                        options={options}
                />
            </div>


        </div>
    );
};



export default RegionDiagram;