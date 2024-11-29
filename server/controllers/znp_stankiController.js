const {Znp_stancki} = require("../models/models");
const {DataTypes} = require("sequelize");


class Znp_stankiController{
    async create(req, res) {
        const {
            stanock,
            sector,
            znp,
            number_opening,
            part,
            color,
            part_name,
            packaging,
            size_requiried,
            gluing_scheme,
            dop_gluing_scheme,
            groove,
            sum_number_parts,
            number_of_pallets,
            address_pallet,
            palet,
            role,
            znpDatumId
        } = req.body

        let smen = 0
        if (new Date().getHours() <15 && new Date().getHours() >5){
            smen = 1
        } else if (new Date().getHours()>=15 && new Date().getHours() <= 24){
            smen = 2
        }

        // Расчитываем пробег
        const dan = req.body
        const probegs = Math.round(probegSchet(dan))
        function probegSchet(data){
            // Подсчитываем пробег, алгоритм такой:
            // 1) Разбиваем строку с размером на 2 переменных
            // 2) Условием смотрим поклейку1 и 2
            // 3) Считаем пробег с условием нужной поклейки
            // console.log(stanokNumberPalet)

            // Сумарный пробег
            let probeg

            // Схема поклейки 1 пробег
            let itog_gluing_scheme1 = ""

            // Схема поклейки 2 пробег
            let itog_gluing_scheme2 = ""

            // 1) Разбиваем строку на 2 размера
            let razm1= Number(data.size_requiried.split('х')[0])
            let razm2= Number(data.size_requiried.split('х')[1])

            // Определяем какая сторона длинная а какая нет
            let dlinStorona

            let korStorona

            // Условие для определения длинной и короткой стороны
            if (razm1 > razm2){
                dlinStorona = razm1
                korStorona = razm2
            } else if (razm1 < razm2){
                dlinStorona = razm2
                korStorona = razm1
            }

            // Кол проходов
            let d = ""
            let k = ""

            let d_pok1 = ""
            let k_pok1 = ""
            let d_pok2 = ""
            let k_pok2 = ""


            // 2) Условием определяем какая поклейка
            if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ){
                d_pok1 = 2
                k_pok1 = 2
            } else if (data.gluing_scheme === "1д2к"){
                d_pok1 = 1
                k_pok1 = 2
            }else if (data.gluing_scheme === "1д1к"){
                d_pok1 = 1
                k_pok1 = 1
            }  else if (data.gluing_scheme === "2д1к"){
                d_pok1 = 2
                k_pok1 = 1
            } else if (data.gluing_scheme === "1д"){
                d_pok1 = 1
            } else if (data.gluing_scheme === "2д"){
                d_pok1 = 2
            } else if (data.gluing_scheme === "1к"){
                k_pok1 = 1
            } else if (data.gluing_scheme === "2к"){
                k_pok1 = 2
            } else if (data.gluing_scheme === "без кромки"){

            } else if (data.gluing_scheme === "(пусто)"){

            }

            if (data.dop_gluing_scheme === "" ){

            }else if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ){
                d_pok2 = 2
                k_pok2 = 2
            } else if (data.dop_gluing_scheme === "1д2к"){
                d_pok2 = 1
                k_pok2 = 2
            } else if (data.dop_gluing_scheme === "2д1к"){
                d_pok2 = 2
                k_pok2 = 1
            }else if (data.dop_gluing_scheme === "1д1к"){
                d_pok2 = 1
                k_pok2 = 1
            } else if (data.dop_gluing_scheme === "1д"){
                d_pok2 = 1
            } else if (data.dop_gluing_scheme === "2д"){
                d_pok2 = 2
            } else if (data.dop_gluing_scheme === "1к"){
                k_pok2 = 1
            } else if (data.dop_gluing_scheme === "2к"){
                k_pok2 = 2
            } else if (data.dop_gluing_scheme === "без кромки"){

            } else if (data.dop_gluing_scheme === "(пусто)"){

            }
            d = d_pok1 + d_pok2
            k = k_pok1 + k_pok2


            if (data.stanock === "Evolution"){
                if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ||data.gluing_scheme ==="2д1к"|| data.gluing_scheme ==="1д2к"|| data.gluing_scheme ==="1д1к"  ){
                    // Считаем сам пробег
                    itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88))) +
                        (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                } else if (data.gluing_scheme === "1д" || data.gluing_scheme === "2д"){
                    itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88)))

                }else if (data.gluing_scheme === "1к" || data.gluing_scheme === "2к"){
                    itog_gluing_scheme1 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                } else {
                    itog_gluing_scheme1 = ""
                }
                if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ||data.dop_gluing_scheme ==="2д1к"|| data.dop_gluing_scheme ==="1д2к"|| data.dop_gluing_scheme ==="1д1к"){
                    // Считаем сам пробег
                    itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88))) +
                        (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                } else if (data.dop_gluing_scheme === "1д" || data.dop_gluing_scheme === "2д"){
                    itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88)))

                }else if (data.dop_gluing_scheme === "1к" || data.dop_gluing_scheme === "2к"){
                    itog_gluing_scheme2 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                }else {
                    itog_gluing_scheme2 = ""
                }
                probeg = itog_gluing_scheme1 + itog_gluing_scheme2
                return probeg

            } else {

                if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ||data.gluing_scheme ==="2д1к"|| data.gluing_scheme ==="1д2к"|| data.gluing_scheme ==="1д1к"  ){
                    // Считаем сам пробег
                    itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d) +
                        (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                } else if (data.gluing_scheme === "1д" || data.gluing_scheme === "2д"){
                    itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d)

                }else if (data.gluing_scheme === "1к" || data.gluing_scheme === "2к"){
                    itog_gluing_scheme1 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                } else {
                    itog_gluing_scheme1 = ""
                }
                if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ||data.dop_gluing_scheme ==="2д1к"|| data.dop_gluing_scheme ==="1д2к"|| data.dop_gluing_scheme ==="1д1к"){
                    // Считаем сам пробег
                    itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d) +
                        (((korStorona * data.number_of_pallets) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                } else if (data.dop_gluing_scheme === "1д" || data.dop_gluing_scheme === "2д"){
                    itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d)

                }else if (data.dop_gluing_scheme === "1к" || data.dop_gluing_scheme === "2к"){
                    itog_gluing_scheme2 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                } else {
                    itog_gluing_scheme2 = ""
                }
                probeg = itog_gluing_scheme1 + itog_gluing_scheme2
                return probeg

            }

        }

        const newZnpStanock = await Znp_stancki.create({
            stanock,
            sector,
            znp,
            number_opening,
            priority:999,
            part,
            color,
            part_name,
            packaging,
            size_requiried,
            gluing_scheme,
            dop_gluing_scheme,
            groove,
            sum_number_parts,
            number_of_pallets,
            address_pallet,
            palet,
            probeg:probegs,
            role,
            date: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
            time: new Date().getHours(),// Время
            smena:smen, // Смена

            znpDatumId
        })
        return res.json(newZnpStanock)
    }

    async getAll(req, res) {
        const {stanock} = req.query
        const getZnp_stanock = await Znp_stancki.findAll(
            {
                where: {
                    stanock,
                    completed: false
                }

            },
        )
        return res.json(getZnp_stanock)
    }

    async update(req,res) {
        const {
            id,
            stanock,
            priority,
            number_opening,
            part,
            gluing_scheme,
            dop_gluing_scheme,
            number_of_pallets,
            address_pallet,
            palet,
            completed
        } = req.body

        // Расчитываем пробег
        const dan = req.body
        if (dan.stanock != undefined && dan.size_requiried != undefined && dan.gluing_scheme != undefined  && dan.dop_gluing_scheme != undefined){
            const probegs = Math.round(probegSchet(dan))

            function probegSchet(data){
                // Подсчитываем пробег, алгоритм такой:
                // 1) Разбиваем строку с размером на 2 переменных
                // 2) Условием смотрим поклейку1 и 2
                // 3) Считаем пробег с условием нужной поклейки
                // console.log(stanokNumberPalet)

                // Сумарный пробег
                let probeg

                // Схема поклейки 1 пробег
                let itog_gluing_scheme1 = ""

                // Схема поклейки 2 пробег
                let itog_gluing_scheme2 = ""

                // 1) Разбиваем строку на 2 размера
                let razm1= Number(data.size_requiried.split('х')[0])
                let razm2= Number(data.size_requiried.split('х')[1])

                // Определяем какая сторона длинная а какая нет
                let dlinStorona

                let korStorona

                // Условие для определения длинной и короткой стороны
                if (razm1 > razm2){
                    dlinStorona = razm1
                    korStorona = razm2
                } else if (razm1 < razm2){
                    dlinStorona = razm2
                    korStorona = razm1
                }

                // Кол проходов
                let d = ""
                let k = ""

                let d_pok1 = ""
                let k_pok1 = ""
                let d_pok2 = ""
                let k_pok2 = ""


                // 2) Условием определяем какая поклейка
                if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ){
                    d_pok1 = 2
                    k_pok1 = 2
                } else if (data.gluing_scheme === "1д2к"){
                    d_pok1 = 1
                    k_pok1 = 2
                }else if (data.gluing_scheme === "1д1к"){
                    d_pok1 = 1
                    k_pok1 = 1
                }  else if (data.gluing_scheme === "2д1к"){
                    d_pok1 = 2
                    k_pok1 = 1
                } else if (data.gluing_scheme === "1д"){
                    d_pok1 = 1
                } else if (data.gluing_scheme === "2д"){
                    d_pok1 = 2
                } else if (data.gluing_scheme === "1к"){
                    k_pok1 = 1
                } else if (data.gluing_scheme === "2к"){
                    k_pok1 = 2
                } else if (data.gluing_scheme === "без кромки"){

                } else if (data.gluing_scheme === "(пусто)"){

                }

                if (data.dop_gluing_scheme === "" ){

                }else if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ){
                    d_pok2 = 2
                    k_pok2 = 2
                } else if (data.dop_gluing_scheme === "1д2к"){
                    d_pok2 = 1
                    k_pok2 = 2
                } else if (data.dop_gluing_scheme === "2д1к"){
                    d_pok2 = 2
                    k_pok2 = 1
                }else if (data.dop_gluing_scheme === "1д1к"){
                    d_pok2 = 1
                    k_pok2 = 1
                } else if (data.dop_gluing_scheme === "1д"){
                    d_pok2 = 1
                } else if (data.dop_gluing_scheme === "2д"){
                    d_pok2 = 2
                } else if (data.dop_gluing_scheme === "1к"){
                    k_pok2 = 1
                } else if (data.dop_gluing_scheme === "2к"){
                    k_pok2 = 2
                } else if (data.dop_gluing_scheme === "без кромки"){

                } else if (data.dop_gluing_scheme === "(пусто)"){

                }
                d = d_pok1 + d_pok2
                k = k_pok1 + k_pok2


                if (data.stanock === "Evolution"){
                    if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ||data.gluing_scheme ==="2д1к"|| data.gluing_scheme ==="1д2к"|| data.gluing_scheme ==="1д1к"  ){
                        // Считаем сам пробег
                        itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88))) +
                            (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                    } else if (data.gluing_scheme === "1д" || data.gluing_scheme === "2д"){
                        itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88)))

                    }else if (data.gluing_scheme === "1к" || data.gluing_scheme === "2к"){
                        itog_gluing_scheme1 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                    } else {
                        itog_gluing_scheme1 = ""
                    }
                    if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ||data.dop_gluing_scheme ==="2д1к"|| data.dop_gluing_scheme ==="1д2к"|| data.dop_gluing_scheme ==="1д1к"){
                        // Считаем сам пробег
                        itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88))) +
                            (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                    } else if (data.dop_gluing_scheme === "1д" || data.dop_gluing_scheme === "2д"){
                        itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.88)))

                    }else if (data.dop_gluing_scheme === "1к" || data.dop_gluing_scheme === "2к"){
                        itog_gluing_scheme2 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 1.5)))

                    }else {
                        itog_gluing_scheme2 = ""
                    }
                    probeg = itog_gluing_scheme1 + itog_gluing_scheme2
                    return probeg

                } else {

                    if (data.gluing_scheme === "4" ||data.gluing_scheme === "2д2к" ||data.gluing_scheme ==="2д1к"|| data.gluing_scheme ==="1д2к"|| data.gluing_scheme ==="1д1к"  ){
                        // Считаем сам пробег
                        itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d) +
                            (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                    } else if (data.gluing_scheme === "1д" || data.gluing_scheme === "2д"){
                        itog_gluing_scheme1 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d)

                    }else if (data.gluing_scheme === "1к" || data.gluing_scheme === "2к"){
                        itog_gluing_scheme1 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                    } else {
                        itog_gluing_scheme1 = ""
                    }
                    if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к" ||data.dop_gluing_scheme ==="2д1к"|| data.dop_gluing_scheme ==="1д2к"|| data.dop_gluing_scheme ==="1д1к"){
                        // Считаем сам пробег
                        itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d) +
                            (((korStorona * data.number_of_pallets) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                    } else if (data.dop_gluing_scheme === "1д" || data.dop_gluing_scheme === "2д"){
                        itog_gluing_scheme2 = (((dlinStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets * 0.9)) * d)

                    }else if (data.dop_gluing_scheme === "1к" || data.dop_gluing_scheme === "2к"){
                        itog_gluing_scheme2 = (((korStorona * data.number_of_pallets ) / 1000 + (data.number_of_pallets  * 0.9)) * k)

                    } else {
                        itog_gluing_scheme2 = ""
                    }
                    probeg = itog_gluing_scheme1 + itog_gluing_scheme2
                    return probeg

                }

            }

            const updateZnpStanock = await Znp_stancki.update({
                    priority,
                    stanock,
                    number_opening,
                    part,
                    gluing_scheme,
                    dop_gluing_scheme,
                    number_of_pallets,
                    address_pallet,
                    palet,
                    probeg:probegs,
                    completed
                },
                {
                    where:{id}
                })
            return res.json(updateZnpStanock)
        } else {
            const updateZnpStanock = await Znp_stancki.update({
                    priority,
                    stanock,
                    number_opening,
                    part,
                    number_of_pallets,
                    address_pallet,
                    palet,
                    completed
                },
                {
                    where:{id}
                })
            return res.json(updateZnpStanock)
        }



    }

    async delete(req,res){
        const {id} = req.body
        console.log(id)
        const del_Znp_stancki = await  Znp_stancki.destroy(
            {
                where: {id}
            })
        return res.json(del_Znp_stancki)
    }
}

module.exports = new Znp_stankiController()