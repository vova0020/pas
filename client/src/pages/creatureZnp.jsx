import React, {useEffect, useState} from 'react';
import Papa from "papaparse";
import classes from "../style/CreateZnp.module.css";
import ZnpService from "../API/ZnpService";
import MyButton from "../component/UI/button/MyButton";
import axios from "axios";
import ModalWindow from "./Sectors/modal/ModalWindow";

const CreatureZnp = ({fetchZnp}) => {
    // Обьект ЗНП
    const [znpCreat, setZnpCreate] = useState({
        znp_number: "",
        model: "",
        edging: ""
    })


// При нажатии кнопки сохранить отправляется запрос на создание знп
// Если запрос выполнился успешно то выводится уведомление что сохранено
    async function creZnp (znpCreat) {
        const z = await axios.post(process.env.REACT_APP_ZNP_URL, {
            znp_number: znpCreat.znp_number,
            model: znpCreat.model,
            edging: znpCreat.edging

        })
        if (z.status == 200){
            alert("Успешно")
        } else {
            alert("Ошибка, попробуйте снова")
        }
    }
//Функция которая сохраняет данные из инпутов в бд
    const newZnp = (e)=>{
        e.preventDefault()
        creZnp(znpCreat)
    }

// Переменная состава знп
    let znpPosred = []
    let znpPosred2 = []
    // Переменная состава упаковки
    let znpYpakPosred = []




    // // Проверка добавления файла на заполненность
    // let disButt = true
    // useEffect(()=>{
    //     if (znpPosred != ""){
    //         disButt = false
    //     } else {
    //         disButt = true
    //     }
    // },[znpPosred])

// Функция которая читает информацию из гугл таблицы
    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            worker: true,
            skipEmptyLines: true,
            complete: function (results) {
                for (const result of results.data) {
                    znpPosred = [...znpPosred, {
                        number_opening: Number(result.number_opening) , //Номер части по раскрою
                        part: String(result.part) ,// Тип детали
                        color:String(result.color),// Цвет
                        part_name:String(result.part_name),// Название детали
                        qluing_line:String(result.qluing_line),// Линия поклейки
                        semiproduct:String(result.semiproduct),// Полуфабрикат
                        assembling:result.assembling,// Сборка
                        packaging: String(result.packaging),// Принадлежность к упаковке
                        cut_size:result.cut_size,// Размер распила
                        size_requiried:result.size_requiried,// Требуемы размер распила
                        gluing_scheme:result.gluing_scheme,// Схема поклейки 1
                        dop_gluing_scheme:result.dop_gluing_scheme,// Схема поклейки 1
                        groove:result.groove,// Паз
                        cutting_bool:result.cutting_bool === "да" ?true : false,//Раскрой
                        pasting_bool:result.pasting_bool === "да" ?true : false,//Поклейка
                        additive_bool: result.additive_bool === "да" ?true : false,//Присадка
                        format_bool: result.format_bool === "да" ?true : false,// Форматка
                        curvilinear_bool: result.curvilinear_bool === "да" ?true : false,//Криволенейка
                        universal_bool: result.universal_bool === "да" ?true : false,//Универсал
                        cutting_corners_bool: result.cutting_corners_bool === "да" ?true : false,//Вырезка углов
                        milling_bool: result.milling_bool === "да" ?true : false,// Фрезеровка
                        film_pasting_bool: result.film_pasting_bool === "да" ?true : false,//Оклейка пленкой МДФ
                        assembly_bool: result.assembly_bool === "да" ?true : false,// Сборка 2
                        accessories_bool: result.accessories_bool === "да" ?true : false,// Комплектация фурнитуры
                        styrofoam_bool: result.styrofoam_bool === "да" ?true : false,// Резка пенопласта
                        cutting_cardboard_bool: result.cutting_cardboard_bool === "да" ?true : false,// Резка картона
                        rolling_cardboard_bool: result.rolling_cardboard_bool === "да" ?true : false,//Проката картона
                        package_bool: result.package_bool === "да" ?true : false,//Упаковка
                        dop_accessories_bool: result.dop_accessories_bool === "да" ?true : false,// Доп фурнитура
                        details_after_cutting: Number(result.details_after_cutting),// Sед. детали после распила, м.кв.
                        quantity_pallet: Number(result.quantity_pallet),// опт кол-во на поддоне с кратностью 35
                        sum_number_parts: Number(result.sum_number_parts),// Сумма по полю К-во дет. по заказу поток
                        number_pallets: Number(result.number_pallets),// кол-во паллет
                        quantity: Number(result.quantity),// с кол-вом
                        dop_number_pallets: Number(result.dop_number_pallets),// доп кол-во паллет
                        dop_quantity: Number(result.dop_quantity),//с кол-вом
                        number_of_pallets_1: Number(result.number_of_pallets_1),// Палет 1 колличество

                        number_of_pallets_2: Number(result.number_of_pallets_2),//Палет 2 колличество

                        number_of_pallets_3: Number(result.number_of_pallets_3),// Палет 3 колличество

                        number_of_pallets_4: Number(result.number_of_pallets_4),// Палет 4 колличество

                        number_of_pallets_5: Number(result.number_of_pallets_5),// Палет 5 колличество
                        number_of_pallets_6: Number(result.number_of_pallets_6),// Палет 6 колличество
                        number_of_pallets_7: Number(result.number_of_pallets_7),// Палет 7 колличество
                        number_of_pallets_8: Number(result.number_of_pallets_8),// Палет 8 колличество
                        number_of_pallets_9: Number(result.number_of_pallets_9),// Палет 9 колличество
                        number_of_pallets_10: Number(result.number_of_pallets_10),// Палет 10 колличество
                        number_of_pallets_11: Number(result.number_of_pallets_11),// Палет 11 колличество
                        number_of_pallets_12: Number(result.number_of_pallets_12),// Палет 12 колличество
                        number_of_pallets_13: Number(result.number_of_pallets_13),// Палет 13 колличество
                        number_of_pallets_14: Number(result.number_of_pallets_14),// Палет 14 колличество
                        number_of_pallets_15: Number(result.number_of_pallets_15),// Палет 15 колличество
                        number_of_pallets_16: Number(result.number_of_pallets_15),// Палет 16 колличество
                        number_of_pallets_17: Number(result.number_of_pallets_15),// Палет 17 колличество
                        number_of_pallets_18: Number(result.number_of_pallets_15),// Палет 18 колличество
                        number_of_pallets_19: Number(result.number_of_pallets_15),// Палет 19 колличество
                        number_of_pallets_20: Number(result.number_of_pallets_15),// Палет 20 колличество
                        number_of_pallets_21: Number(result.number_of_pallets_15),// Палет 21 колличество
                        number_of_pallets_22: Number(result.number_of_pallets_15),// Палет 22 колличество
                        number_of_pallets_23: Number(result.number_of_pallets_15),// Палет 23 колличество
                        number_of_pallets_24: Number(result.number_of_pallets_15),// Палет 24 колличество
                        number_of_pallets_25: Number(result.number_of_pallets_15),// Палет 25 колличество

                        znpId:"" // ЗНП ID
                    }]


                    console.log(znpPosred)
                }
                // console.log(results.data)
                // console.log(znpDataCreat)

            },
        });

    };

// Тут начинается работа с сервером
    //1) Отправляется запрос на создание ЗНП
    //2) Отправляется запрос на поиск по номеру ЗНП
    //3) Циклом перебирается массив состава ЗНП и отправляется запрос на создание zbpData с присвоенным ему ZnpId


    async function fetZnp(znpPosred){

        // Отправляем запрос на получение всех знп
        const znpGet1 = await ZnpService.getAll()
        const znpGet = znpGet1.sort(function (a,b){
            return a.id-b.id
        })

        // Получаем индекс последнего знп
        const indexZnp = await znpGet.length-1

        // Получаем нужное нам знп
        const choiceZnp = await znpGet[indexZnp]
        // console.log(choiceZnp)
        let statusCodecZnp = ''
        let statusCodecYpack = ''
        // Циклом перебираем полученный массив из таблиц и отправляем запрос на создание
        if (znpPosred.length != 0){
            for (const znpData of znpPosred) {
                const datas = await axios.post(process.env.REACT_APP_ZNPDATA_URL,{
                    znpId: choiceZnp.id,
                    number_opening: znpData.number_opening , //Номер части по раскрою
                    part: znpData.part ,// Тип детали
                    color:znpData.color,// Цвет
                    part_name:znpData.part_name,// Название детали
                    qluing_line:znpData.qluing_line,// Линия поклейки
                    semiproduct:znpData.semiproduct,// Полуфабрикат
                    assembling:znpData.assembling,// Сборка
                    packaging:znpData.packaging,// Принадлежность к упаковке
                    cut_size:znpData.cut_size,// Размер распила
                    size_requiried:znpData.size_requiried,// Требуемы размер распила
                    gluing_scheme:znpData.gluing_scheme,// Схема поклейки 1
                    dop_gluing_scheme:znpData.dop_gluing_scheme,// Схема поклейки 1
                    groove:znpData.groove,// Паз
                    cutting_bool:znpData.cutting_bool,//Раскрой
                    pasting_bool:znpData.pasting_bool,//Поклейка
                    additive_bool: znpData.additive_bool,//Присадка
                    format_bool: znpData.format_bool,// Форматка
                    curvilinear_bool: znpData.curvilinear_bool,//Криволенейка
                    universal_bool: znpData.universal_bool,//Универсал
                    cutting_corners_bool: znpData.cutting_corners_bool,//Вырезка углов
                    milling_bool: znpData.milling_bool,// Фрезеровка
                    film_pasting_bool: znpData.film_pasting_bool,//Оклейка пленкой МДФ
                    assembly_bool: znpData.assembly_bool,// Сборка 2
                    accessories_bool: znpData.accessories_bool,// Комплектация фурнитуры
                    styrofoam_bool: znpData.styrofoam_bool,// Резка пенопласта
                    cutting_cardboard_bool: znpData.cutting_cardboard_bool,// Резка картона
                    rolling_cardboard_bool: znpData.rolling_cardboard_bool,//Проката картона
                    package_bool: znpData.package_bool,//Упаковка
                    dop_accessories_bool: znpData.dop_accessories_bool,// Доп фурнитура
                    details_after_cutting: znpData.details_after_cutting,// Sед. детали после распила, м.кв.
                    quantity_pallet: znpData.quantity_pallet,// опт кол-во на поддоне с кратностью 35
                    sum_number_parts: znpData.sum_number_parts,// Сумма по полю К-во дет. по заказу поток
                    number_pallets: znpData.number_pallets,// кол-во паллет
                    quantity: znpData.quantity,// с кол-вом
                    dop_number_pallets: znpData.dop_number_pallets,// доп кол-во паллет
                    dop_quantity: znpData.dop_quantity,//с кол-вом
                    number_of_pallets_1: znpData.number_of_pallets_1,// Палет 1 колличество
                    number_of_pallets_2: znpData.number_of_pallets_2,//Палет 2 колличество
                    number_of_pallets_3: znpData.number_of_pallets_3,// Палет 3 колличество
                    number_of_pallets_4: znpData.number_of_pallets_4,// Палет 4 колличество
                    number_of_pallets_5: znpData.number_of_pallets_5,// Палет 5 колличество
                    number_of_pallets_6: znpData.number_of_pallets_6,// Палет 6 колличество
                    number_of_pallets_7: znpData.number_of_pallets_7,// Палет 7 колличество
                    number_of_pallets_8: znpData.number_of_pallets_8,// Палет 8 колличество
                    number_of_pallets_9: znpData.number_of_pallets_9,// Палет 9 колличество
                    number_of_pallets_10: znpData.number_of_pallets_10,// Палет 10 колличество
                    number_of_pallets_11: znpData.number_of_pallets_11,// Палет 11 колличество
                    number_of_pallets_12: znpData.number_of_pallets_12,// Палет 12 колличество
                    number_of_pallets_13: znpData.number_of_pallets_13,// Палет 13 колличество
                    number_of_pallets_14: znpData.number_of_pallets_14,// Палет 14 колличество
                    number_of_pallets_15: znpData.number_of_pallets_15,// Палет 15 колличество
                    number_of_pallets_16: znpData.number_of_pallets_15,// Палет 16 колличество
                    number_of_pallets_17: znpData.number_of_pallets_15,// Палет 17 колличество
                    number_of_pallets_18: znpData.number_of_pallets_15,// Палет 18 колличество
                    number_of_pallets_19: znpData.number_of_pallets_15,// Палет 19 колличество
                    number_of_pallets_20: znpData.number_of_pallets_15,// Палет 20 колличество
                    number_of_pallets_21: znpData.number_of_pallets_15,// Палет 21 колличество
                    number_of_pallets_22: znpData.number_of_pallets_15,// Палет 22 колличество
                    number_of_pallets_23: znpData.number_of_pallets_15,// Палет 23 колличество
                    number_of_pallets_24: znpData.number_of_pallets_15,// Палет 24 колличество
                    number_of_pallets_25: znpData.number_of_pallets_15,// Палет 25 колличество
                })
                if (datas.status != 200){
                    statusCodecZnp = false
                } else {
                    statusCodecZnp= true
                }
            }
        }
       if (znpYpakPosred.length != 0){
           for (const znpYpakPosredElement of znpYpakPosred) {
               const ypackDatas = await axios.post(process.env.REACT_APP_ZNP_YPAK_URL,{
                   // segmentStream:znpYpakPosredElement.segmentStream ,// Сегмент потока
                   ypakPotok:znpYpakPosredElement.ypakPotok ,// упаковка поток
                   packaging:znpYpakPosredElement.packaging ,// Принадлежность к упаковке
                   order:znpYpakPosredElement.order,// заказ
                   area_per_package:znpYpakPosredElement.area_per_package ,// площадь на 1 упаковку
                   equivalent_package:znpYpakPosredElement.equivalent_package,// Эквивалент на упаковку
                   znpId:choiceZnp.id// ЗНП ID
               })
               if (ypackDatas.status != 200){
                   statusCodecYpack = false
               } else {
                   statusCodecYpack= true
               }
           }
       }

        if (statusCodecZnp == true){
            alert("Знп добавлено успешно!")
        } else {
            alert("Знп не добавлено!")
        }
        if (statusCodecYpack == true){
            alert("Упаковка добавлена успешно")
        } else {
            alert("Упаковка не добавлена!")
        }
    }
    // Проверка инпутов на заполненность
    let dis = true
    if (znpCreat.znp_number != "" && znpCreat.model != "" && znpCreat.edging != "") {
        dis = false
    } else {
        dis = true
    }


    // Функии работы с таблицей упаковок

// Функция которая читает информацию из гугл таблицы
    const changeYpak = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        const regex = /,/i;
// Expected output: "I think Ruth's ferret is cuter than your dog!"

        Papa.parse(event.target.files[0], {
            header: true,
            encoding: "Windows-1251",
            worker: true,
            // skipFirstNLines:7,
            // dynamicTyping: true,  //преобразование строк к числу
            skipEmptyLines: true,
            complete: function (results) {
                for (const result of results.data) {
                    znpYpakPosred = [...znpYpakPosred, {
                        // segmentStream: Object.values(result)[1],// Сегмент потока
                        ypakPotok: Object.values(result)[1],// упаковка поток
                        packaging: Object.values(result)[2],// Принадлежность к упаковке
                        order: Number(Object.values(result)[3]),// заказ
                        area_per_package: Number(Object.values(result)[4].replace(regex, '.')),// площадь на 1 упаковку
                        equivalent_package: Number(Object.values(result)[5].replace(regex, '.')),// Эквивалент на упаковку


                        znpId:"" // ЗНП ID
                    }]


                    console.log( znpYpakPosred)
                    // console.log(Object.values(result)[0])
                }
                // console.log(results.data)
                // console.log(znpDataCreat)

            },
        });

    };

    return (
        <div className={classes.divCreate}>
            <div>
                <form className={classes.formZnp}>

                    {/*<label className={classes.labelZnp}>*/}
                    {/*    ЗНП:*/}
                    <input className={classes.createInput} type="text" name="znp" placeholder="Номер ЗНП" onChange={e => setZnpCreate({...znpCreat, znp_number: e.target.value}) } />
                    {/*</label>*/}
                    {/*<label className={classes.labelZnp}>*/}
                    {/*    Модель:*/}
                    <input className={classes.createInput} type="text" name="model" placeholder="Модель" onChange={e => setZnpCreate({...znpCreat, model: e.target.value}) } />
                    {/*</label>*/}
                    {/*<label className={classes.labelZnp}>*/}
                    {/*    Кромка:*/}
                    <input className={classes.createInput} type="text" name="edging" placeholder="Кромка" onChange={e => setZnpCreate({...znpCreat, edging: e.target.value}) } />
                    {/*</label>*/}
                    <input className={classes.createButton} onClick={newZnp} disabled={dis} type="submit"  value="Сохранить" />
                </form>

                <div className={classes.dopDiv}>
                    <h2>Добавление ЗНП деталей</h2>
                    <input
                        type="file"
                        name="file"
                        accept=".csv"
                        onChange={changeHandler}
                        className={classes.createFile}

                    />
                    {/*<button className={classes.createButton}   onClick={()=>fetZnp(znpPosred)}>Создать</button>*/}
                </div>
                {/*Добавление упаковок*/}
                <div className={classes.dopDiv}>
                    <h2>Добавление ЗНП упаковки</h2>
                    <input
                        type="file"
                        name="file"
                        accept=".csv"
                        onChange={changeYpak}
                        className={classes.createFile}

                    />
                </div>
            </div>

            <button className={classes.createButton}   onClick={()=>fetZnp(znpPosred)}>Создать</button>
        </div>
    );
};

export default CreatureZnp;