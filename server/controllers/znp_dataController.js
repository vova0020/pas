const {Znp_data,} = require('../models/models')
const ApiError = require('../error/ApiEror')
const {DataTypes} = require("sequelize");
const dbData = require("../dbData")

class Znp_dataController {
    // async create (req, res) {
    //     try {
    //
    //         const znpData = req.body
    //
    //         console.log(znpData)
    //     // Проходим циклом по полученному массиву
    //     //     for (const znpElement of znpData) {
    //     //         // Отправляем данные в базу данных
    //     //         const newZnp_data = Znp_data.create({
    //     //             znpId: znpElement.znpId,
    //     //             number_opening: znpElement.number_opening , //Номер части по раскрою
    //     //             part: znpElement.part ,// Тип детали
    //     //             color:znpElement.color,// Цвет
    //     //             part_name:znpElement.part_name,// Название детали
    //     //             qluing_line:znpElement.qluing_line,// Линия поклейки
    //     //             semiproduct:znpElement.semiproduct,// Полуфабрикат
    //     //             assembling:znpElement.assembling,// Сборка
    //     //             packaging:znpElement.packaging,// Принадлежность к упаковке
    //     //             cut_size:znpElement.cut_size,// Размер распила
    //     //             size_requiried:znpElement.size_requiried,// Требуемы размер распила
    //     //             gluing_scheme:znpElement.gluing_scheme,// Схема поклейки 1
    //     //             dop_gluing_scheme:znpElement.dop_gluing_scheme,// Схема поклейки 1
    //     //             groove:znpElement.groove,// Паз
    //     //             cutting_bool:znpElement.cutting_bool,//Раскрой
    //     //             pasting_bool:znpElement.pasting_bool,//Поклейка
    //     //             additive_bool: znpElement.additive_bool,//Присадка
    //     //             format_bool: znpElement.format_bool,// Форматка
    //     //             curvilinear_bool: znpElement.curvilinear_bool,//Криволенейка
    //     //             universal_bool: znpElement.universal_bool,//Универсал
    //     //             cutting_corners_bool: znpElement.cutting_corners_bool,//Вырезка углов
    //     //             milling_bool: znpElement.milling_bool,// Фрезеровка
    //     //             film_pasting_bool: znpElement.film_pasting_bool,//Оклейка пленкой МДФ
    //     //             assembly_bool: znpElement.assembly_bool,// Сборка 2
    //     //             accessories_bool: znpElement.accessories_bool,// Комплектация фурнитуры
    //     //             styrofoam_bool: znpElement.styrofoam_bool,// Резка пенопласта
    //     //             cutting_cardboard_bool: znpElement.cutting_cardboard_bool,// Резка картона
    //     //             rolling_cardboard_bool: znpElement.rolling_cardboard_bool,//Проката картона
    //     //             package_bool: znpElement.package_bool,//Упаковка
    //     //             dop_accessories_bool: znpElement.dop_accessories_bool,// Доп фурнитура
    //     //             details_after_cutting: znpElement.details_after_cutting,// Sед. детали после распила, м.кв.
    //     //             quantity_pallet: znpElement.quantity_pallet,// опт кол-во на поддоне с кратностью 35
    //     //             sum_number_parts: znpElement.sum_number_parts,// Сумма по полю К-во дет. по заказу поток
    //     //             number_pallets: znpElement.number_pallets,// кол-во паллет
    //     //             quantity: znpElement.quantity,// с кол-вом
    //     //             dop_number_pallets: znpElement.dop_number_pallets,// доп кол-во паллет
    //     //             dop_quantity: znpElement.dop_quantity,//с кол-вом
    //     //             number_of_pallets_1: znpElement.number_of_pallets_1,// Палет 1 колличество
    //     //             number_of_pallets_2: znpElement.number_of_pallets_2,//Палет 2 колличество
    //     //             number_of_pallets_3: znpElement.number_of_pallets_3,// Палет 3 колличество
    //     //             number_of_pallets_4: znpElement.number_of_pallets_4,// Палет 4 колличество
    //     //             number_of_pallets_5: znpElement.number_of_pallets_5,// Палет 5 колличество
    //     //             number_of_pallets_6: znpElement.number_of_pallets_6,// Палет 6 колличество
    //     //             number_of_pallets_7: znpElement.number_of_pallets_7,// Палет 7 колличество
    //     //             number_of_pallets_8: znpElement.number_of_pallets_8,// Палет 8 колличество
    //     //             number_of_pallets_9: znpElement.number_of_pallets_9,// Палет 9 колличество
    //     //             number_of_pallets_10: znpElement.number_of_pallets_10,// Палет 10 колличество
    //     //             number_of_pallets_11: znpElement.number_of_pallets_11,// Палет 11 колличество
    //     //             number_of_pallets_12: znpElement.number_of_pallets_12,// Палет 12 колличество
    //     //             number_of_pallets_13: znpElement.number_of_pallets_13,// Палет 13 колличество
    //     //             number_of_pallets_14: znpElement.number_of_pallets_14,// Палет 14 колличество
    //     //             number_of_pallets_15: znpElement.number_of_pallets_15,// Палет 15 колличество
    //     //             number_of_pallets_16: znpElement.number_of_pallets_15,// Палет 16 колличество
    //     //             number_of_pallets_17: znpElement.number_of_pallets_15,// Палет 17 колличество
    //     //             number_of_pallets_18: znpElement.number_of_pallets_15,// Палет 18 колличество
    //     //             number_of_pallets_19: znpElement.number_of_pallets_15,// Палет 19 колличество
    //     //             number_of_pallets_20: znpElement.number_of_pallets_15,// Палет 20 колличество
    //     //             number_of_pallets_21: znpElement.number_of_pallets_15,// Палет 21 колличество
    //     //             number_of_pallets_22: znpElement.number_of_pallets_15,// Палет 22 колличество
    //     //             number_of_pallets_23: znpElement.number_of_pallets_15,// Палет 23 колличество
    //     //             number_of_pallets_24: znpElement.number_of_pallets_15,// Палет 24 колличество
    //     //             number_of_pallets_25: znpElement.number_of_pallets_15,// Палет 25 колличество
    //     //         })
    //     //         console.log(newZnp_data)
    //     //     }
    //         return res.json(znpData)
    //     } catch (e) {
    //         // next(ApiError.badRequest(e.message))
    // }
    // }

    async create (req, res) {
        try {
            const {
                number_opening, //Номер части по раскрою
                part,// Тип детали
                color,// Цвет
                part_name,// Название детали
                qluing_line,// Линия поклейки
                semiproduct,// Полуфабрикат
                assembling,// Сборка
                packaging,// Принадлежность к упаковке
                cut_size,// Размер распила
                size_requiried,// Требуемы размер распила
                gluing_scheme,// Схема поклейки 1
                dop_gluing_scheme,// Схема поклейки 1
                groove,// Паз

                cutting_bool,//Раскрой
                pasting_bool,//Поклейка
                additive_bool,//Присадка
                format_bool,// Форматка
                curvilinear_bool,//Криволенейка
                universal_bool,//Универсал
                cutting_corners_bool,//Вырезка углов
                milling_bool,// Фрезеровка
                film_pasting_bool,//Оклейка пленкой МДФ
                assembly_bool,// Сборка 2
                accessories_bool,// Комплектация фурнитуры
                styrofoam_bool,// Резка пенопласта
                cutting_cardboard_bool,// Резка картона
                rolling_cardboard_bool,//Проката картона
                package_bool,//Упаковка
                dop_accessories_bool,// Доп фурнитура

                details_after_cutting,// Sед. детали после распила, м.кв.
                quantity_pallet,// опт кол-во на поддоне с кратностью 35
                sum_number_parts,// Сумма по полю К-во дет. по заказу поток
                number_pallets,// кол-во паллет
                quantity,// с кол-вом
                dop_number_pallets,// доп кол-во паллет
                dop_quantity,//с кол-вом

                number_of_pallets_1,// Палет 1 колличество
                number_of_pallets_2,//Палет 2 колличество
                number_of_pallets_3,// Палет 3 колличество
                number_of_pallets_4,// Палет 4 колличество
                number_of_pallets_5,// Палет 5 колличество
                number_of_pallets_6,// Палет 6 колличество
                number_of_pallets_7,// Палет 7 колличество
                number_of_pallets_8,// Палет 8 колличество
                number_of_pallets_9,// Палет 9 колличество
                number_of_pallets_10,// Палет 10 колличество
                number_of_pallets_11,// Палет 11 колличество
                number_of_pallets_12,// Палет 12 колличество
                number_of_pallets_13,// Палет 13 колличество
                number_of_pallets_14,// Палет 14 колличество
                number_of_pallets_15,// Палет 15 колличество
                number_of_pallets_16,// Палет 16 колличество
                number_of_pallets_17,// Палет 17 колличество
                number_of_pallets_18,// Палет 18 колличество
                number_of_pallets_19,// Палет 19 колличество
                number_of_pallets_20,// Палет 20 колличество
                number_of_pallets_21,// Палет 21 колличество
                number_of_pallets_22,// Палет 22 колличество
                number_of_pallets_23,// Палет 23 колличество
                number_of_pallets_24,// Палет 24 колличество
                number_of_pallets_25,// Палет 25 колличество


                znpId // ЗНП ID
            } = req.body
            const newZnp_data = await Znp_data.create({
                number_opening, //Номер части по раскрою
                part,// Тип детали
                color,// Цвет
                part_name,// Название детали
                qluing_line,// Линия поклейки
                semiproduct,// Полуфабрикат
                assembling,// Сборка
                packaging,// Принадлежность к упаковке
                cut_size,// Размер распила
                size_requiried,// Требуемы размер распила
                gluing_scheme,// Схема поклейки 1
                dop_gluing_scheme,// Схема поклейки 1
                groove,// Паз
                cutting_bool,//Раскрой
                pasting_bool,//Поклейка
                additive_bool,//Присадка
                format_bool,// Форматка
                curvilinear_bool,//Криволенейка
                universal_bool,//Универсал
                cutting_corners_bool,//Вырезка углов
                milling_bool,// Фрезеровка
                film_pasting_bool,//Оклейка пленкой МДФ
                assembly_bool,// Сборка 2
                accessories_bool,// Комплектация фурнитуры
                styrofoam_bool,// Резка пенопласта
                cutting_cardboard_bool,// Резка картона
                rolling_cardboard_bool,//Проката картона
                package_bool,//Упаковка
                dop_accessories_bool,// Доп фурнитура
                details_after_cutting,// Sед. детали после распила, м.кв.
                quantity_pallet,// опт кол-во на поддоне с кратностью 35
                sum_number_parts,// Сумма по полю К-во дет. по заказу поток
                number_pallets,// кол-во паллет
                quantity,// с кол-вом
                dop_number_pallets,// доп кол-во паллет
                dop_quantity,//с кол-вом
                real_number_parts:sum_number_parts, // реальное количество деталей
                number_of_pallets_1,// Палет 1 колличество
                number_of_pallets_2,//Палет 2 колличество
                number_of_pallets_3,// Палет 3 колличество
                number_of_pallets_4,// Палет 4 колличество
                number_of_pallets_5,// Палет 5 колличество
                number_of_pallets_6,// Палет 6 колличество
                number_of_pallets_7,// Палет 7 колличество
                number_of_pallets_8,// Палет 8 колличество
                number_of_pallets_9,// Палет 9 колличество
                number_of_pallets_10,// Палет 10 колличество
                number_of_pallets_11,// Палет 11 колличество
                number_of_pallets_12,// Палет 12 колличество
                number_of_pallets_13,// Палет 13 колличество
                number_of_pallets_14,// Палет 14 колличество
                number_of_pallets_15,// Палет 15 колличество
                number_of_pallets_16,// Палет 16 колличество
                number_of_pallets_17,// Палет 17 колличество
                number_of_pallets_18,// Палет 18 колличество
                number_of_pallets_19,// Палет 19 колличество
                number_of_pallets_20,// Палет 20 колличество
                number_of_pallets_21,// Палет 21 колличество
                number_of_pallets_22,// Палет 22 колличество
                number_of_pallets_23,// Палет 23 колличество
                number_of_pallets_24,// Палет 24 колличество
                number_of_pallets_25,// Палет 25 колличество
                znpId // ЗНП ID
            })
            return res.json(newZnp_data)
        } catch (e) {
            // next(ApiError.badRequest(e.message))
        }
    }


    async getAll (req, res) {
        const {znpId} = req.query
        const znp_datas = await Znp_data.findAll({
                where: {znpId}
            })
        return res.json(znp_datas)
    }


    // async getOne(req, res) {
    //     const {znpId} = req.params
    //     const znp_data = await Znp_data.findOne(
    //         {
    //             where: {znpId}
    //
    //         },
    //     )
    //     return res.json(znp_data)
    // }
    async update(req, res) {
        const {
            id, //Id
            number_opening, //Номер части по раскрою
            part,// Тип детали
            color,// Цвет
            part_name,// Название детали
            qluing_line,// Линия поклейки
            semiproduct,// Полуфабрикат
            assembling,// Сборка
            packaging,// Принадлежность к упаковке
            cut_size,// Размер распила
            size_requiried,// Требуемы размер распила
            gluing_scheme,// Схема поклейки 1
            dop_gluing_scheme,// Схема поклейки 1
            groove,// Паз

            //========================= Участки ================================
            cutting_bool,//Раскрой
            pasting_bool,//Поклейка
            additive_bool,//Присадка
            format_bool,// Форматка
            curvilinear_bool,//Криволинейка
            universal_bool,//Универсал
            cutting_corners_bool,//Вырезка углов
            milling_bool,// Фрезеровка
            film_pasting_bool,//Оклейка пленкой МДФ
            assembly_bool,// Сборка 2
            accessories_bool,// Комплектация фурнитуры
            styrofoam_bool,// Резка пенопласта
            cutting_cardboard_bool,// Резка картона
            rolling_cardboard_bool,//Проката картона
            package_bool,//Упаковка
            dop_accessories_bool,// Доп фурнитура

//========================= Детали, палеты ===================================================
            details_after_cutting,// Sед. детали после распила, м.кв.
            quantity_pallet,// опт кол-во на поддоне с кратностью 35
            sum_number_parts,// Общее кол деталей
            number_pallets,// кол-во паллет
            quantity,// с кол-вом
            dop_number_pallets,// доп кол-во паллет
            dop_quantity,//с кол-вом
            real_number_parts,// Реальное кол деталей которое сделали

//+++++++++++++++++++ Палет 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_1,// Палет 1 количество
            address_pallet_1,// Адрес палета 1
            machine_pallet_pasting_1,// Станок палета поклейка 1
            machine_pallet_additive_1,// Станок палета присадка 1
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_1, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_1,//Раскрой
            pasting_ready_palet_1,//Поклейка
            additive_ready_palet_1,//Присадка
            format_ready_palet_1,// Форматка
            curvilinear_ready_palet_1,//Криволинейка
            universal_ready_palet_1,//Универсал
            cutting_corners_ready_palet_1,//Вырезка углов
            milling_ready_palet_1,// Фрезеровка
            film_pasting_ready_palet_1,//Оклейка пленкой МДФ
            assembly_ready_palet_1,// Сборка 2
            accessories_ready_palet_1,// Комплектация фурнитуры
            styrofoam_ready_palet_1,// Резка пенопласта
            cutting_cardboard_ready_palet_1,// Резка картона
            rolling_cardboard_ready_palet_1,//Проката картона
            package_ready_palet_1,//Упаковка
            dop_accessories_ready_palet_1,// Доп фурнитура

//+++++++++++++++++++ Палет 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_2,//Палет 2 количество
            address_pallet_2,// Адрес палета 2
            machine_pallet_pasting_2,// Станок палета поклейка 2
            machine_pallet_additive_2,// Станок палета присадка 2
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_2, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_2,//Раскрой
            pasting_ready_palet_2,//Поклейка
            additive_ready_palet_2,//Присадка
            format_ready_palet_2,// Форматка
            curvilinear_ready_palet_2,//Криволинейка
            universal_ready_palet_2,//Универсал
            cutting_corners_ready_palet_2,//Вырезка углов
            milling_ready_palet_2,// Фрезеровка
            film_pasting_ready_palet_2,//Оклейка пленкой МДФ
            assembly_ready_palet_2,// Сборка 2
            accessories_ready_palet_2,// Комплектация фурнитуры
            styrofoam_ready_palet_2,// Резка пенопласта
            cutting_cardboard_ready_palet_2,// Резка картона
            rolling_cardboard_ready_palet_2,//Проката картона
            package_ready_palet_2,//Упаковка
            dop_accessories_ready_palet_2,// Доп фурнитура

//+++++++++++++++++++ Палет 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_3,// Палет 3 количество
            address_pallet_3,// Адрес палета 3
            machine_pallet_pasting_3,// Станок палета поклейка 3
            machine_pallet_additive_3,// Станок палета присадка 3
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_3, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_3,//Раскрой
            pasting_ready_palet_3,//Поклейка
            additive_ready_palet_3,//Присадка
            format_ready_palet_3,// Форматка
            curvilinear_ready_palet_3,//Криволинейка
            universal_ready_palet_3,//Универсал
            cutting_corners_ready_palet_3,//Вырезка углов
            milling_ready_palet_3,// Фрезеровка
            film_pasting_ready_palet_3,//Оклейка пленкой МДФ
            assembly_ready_palet_3,// Сборка 2
            accessories_ready_palet_3,// Комплектация фурнитуры
            styrofoam_ready_palet_3,// Резка пенопласта
            cutting_cardboard_ready_palet_3,// Резка картона
            rolling_cardboard_ready_palet_3,//Проката картона
            package_ready_palet_3,//Упаковка
            dop_accessories_ready_palet_3,// Доп фурнитура

//+++++++++++++++++++ Палет 4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_4,// Палет 4 количество
            address_pallet_4,// Адрес палета 4
            machine_pallet_pasting_4,// Станок палета поклейка 4
            machine_pallet_additive_4,// Станок палета присадка 4
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_4, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_4,//Раскрой
            pasting_ready_palet_4,//Поклейка
            additive_ready_palet_4,//Присадка
            format_ready_palet_4,// Форматка
            curvilinear_ready_palet_4,//Криволинейка
            universal_ready_palet_4,//Универсал
            cutting_corners_ready_palet_4,//Вырезка углов
            milling_ready_palet_4,// Фрезеровка
            film_pasting_ready_palet_4,//Оклейка пленкой МДФ
            assembly_ready_palet_4,// Сборка 2
            accessories_ready_palet_4,// Комплектация фурнитуры
            styrofoam_ready_palet_4,// Резка пенопласта
            cutting_cardboard_ready_palet_4,// Резка картона
            rolling_cardboard_ready_palet_4,//Проката картона
            package_ready_palet_4,//Упаковка
            dop_accessories_ready_palet_4,// Доп фурнитура

//+++++++++++++++++++ Палет 5 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_5,// Палет 5 количество
            address_pallet_5,// Адрес палета 5
            machine_pallet_pasting_5,// Станок палета поклейка 5
            machine_pallet_additive_5,// Станок палета присадка 5
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_5, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_5,//Раскрой
            pasting_ready_palet_5,//Поклейка
            additive_ready_palet_5,//Присадка
            format_ready_palet_5,// Форматка
            curvilinear_ready_palet_5,//Криволинейка
            universal_ready_palet_5,//Универсал
            cutting_corners_ready_palet_5,//Вырезка углов
            milling_ready_palet_5,// Фрезеровка
            film_pasting_ready_palet_5,//Оклейка пленкой МДФ
            assembly_ready_palet_5,// Сборка 2
            accessories_ready_palet_5,// Комплектация фурнитуры
            styrofoam_ready_palet_5,// Резка пенопласта
            cutting_cardboard_ready_palet_5,// Резка картона
            rolling_cardboard_ready_palet_5,//Проката картона
            package_ready_palet_5,//Упаковка
            dop_accessories_ready_palet_5,// Доп фурнитура

//+++++++++++++++++++ Палет 6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_6,// Палет 6 количество
            address_pallet_6,// Адрес палета 6
            machine_pallet_pasting_6,// Станок палета поклейка 6
            machine_pallet_additive_6,// Станок палета присадка 6
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_6, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_6,//Раскрой
            pasting_ready_palet_6,//Поклейка
            additive_ready_palet_6,//Присадка
            format_ready_palet_6,// Форматка
            curvilinear_ready_palet_6,//Криволинейка
            universal_ready_palet_6,//Универсал
            cutting_corners_ready_palet_6,//Вырезка углов
            milling_ready_palet_6,// Фрезеровка
            film_pasting_ready_palet_6,//Оклейка пленкой МДФ
            assembly_ready_palet_6,// Сборка 2
            accessories_ready_palet_6,// Комплектация фурнитуры
            styrofoam_ready_palet_6,// Резка пенопласта
            cutting_cardboard_ready_palet_6,// Резка картона
            rolling_cardboard_ready_palet_6,//Проката картона
            package_ready_palet_6,//Упаковка
            dop_accessories_ready_palet_6,// Доп фурнитура

//+++++++++++++++++++ Палет 7 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_7,// Палет 7 количество
            address_pallet_7,// Адрес палета 7
            machine_pallet_pasting_7,// Станок палета поклейка 7
            machine_pallet_additive_7,// Станок палета присадка 7
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_7, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_7,//Раскрой
            pasting_ready_palet_7,//Поклейка
            additive_ready_palet_7,//Присадка
            format_ready_palet_7,// Форматка
            curvilinear_ready_palet_7,//Криволинейка
            universal_ready_palet_7,//Универсал
            cutting_corners_ready_palet_7,//Вырезка углов
            milling_ready_palet_7,// Фрезеровка
            film_pasting_ready_palet_7,//Оклейка пленкой МДФ
            assembly_ready_palet_7,// Сборка 2
            accessories_ready_palet_7,// Комплектация фурнитуры
            styrofoam_ready_palet_7,// Резка пенопласта
            cutting_cardboard_ready_palet_7,// Резка картона
            rolling_cardboard_ready_palet_7,//Проката картона
            package_ready_palet_7,//Упаковка
            dop_accessories_ready_palet_7,// Доп фурнитура

//+++++++++++++++++++ Палет 8 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_8,// Палет 8 количество
            address_pallet_8,// Адрес палета 8
            machine_pallet_pasting_8,// Станок палета поклейка 8
            machine_pallet_additive_8,// Станок палета присадка 8
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_8, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_8,//Раскрой
            pasting_ready_palet_8,//Поклейка
            additive_ready_palet_8,//Присадка
            format_ready_palet_8,// Форматка
            curvilinear_ready_palet_8,//Криволинейка
            universal_ready_palet_8,//Универсал
            cutting_corners_ready_palet_8,//Вырезка углов
            milling_ready_palet_8,// Фрезеровка
            film_pasting_ready_palet_8,//Оклейка пленкой МДФ
            assembly_ready_palet_8,// Сборка 2
            accessories_ready_palet_8,// Комплектация фурнитуры
            styrofoam_ready_palet_8,// Резка пенопласта
            cutting_cardboard_ready_palet_8,// Резка картона
            rolling_cardboard_ready_palet_8,//Проката картона
            package_ready_palet_8,//Упаковка
            dop_accessories_ready_palet_8,// Доп фурнитура

//+++++++++++++++++++ Палет 9 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_9,// Палет 9 количество
            address_pallet_9,// Адрес палета 9
            machine_pallet_pasting_9,// Станок палета поклейка 9
            machine_pallet_additive_9,// Станок палета присадка 9
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_9, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_9,//Раскрой
            pasting_ready_palet_9,//Поклейка
            additive_ready_palet_9,//Присадка
            format_ready_palet_9,// Форматка
            curvilinear_ready_palet_9,//Криволинейка
            universal_ready_palet_9,//Универсал
            cutting_corners_ready_palet_9,//Вырезка углов
            milling_ready_palet_9,// Фрезеровка
            film_pasting_ready_palet_9,//Оклейка пленкой МДФ
            assembly_ready_palet_9,// Сборка 2
            accessories_ready_palet_9,// Комплектация фурнитуры
            styrofoam_ready_palet_9,// Резка пенопласта
            cutting_cardboard_ready_palet_9,// Резка картона
            rolling_cardboard_ready_palet_9,//Проката картона
            package_ready_palet_9,//Упаковка
            dop_accessories_ready_palet_9,// Доп фурнитура

//+++++++++++++++++++ Палет 10 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_10,// Палет 10 количество
            address_pallet_10,// Адрес палета 10
            machine_pallet_pasting_10,// Станок палета поклейка 10
            machine_pallet_additive_10,// Станок палета присадка 10
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_10, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_10,//Раскрой
            pasting_ready_palet_10,//Поклейка
            additive_ready_palet_10,//Присадка
            format_ready_palet_10,// Форматка
            curvilinear_ready_palet_10,//Криволинейка
            universal_ready_palet_10,//Универсал
            cutting_corners_ready_palet_10,//Вырезка углов
            milling_ready_palet_10,// Фрезеровка
            film_pasting_ready_palet_10,//Оклейка пленкой МДФ
            assembly_ready_palet_10,// Сборка 2
            accessories_ready_palet_10,// Комплектация фурнитуры
            styrofoam_ready_palet_10,// Резка пенопласта
            cutting_cardboard_ready_palet_10,// Резка картона
            rolling_cardboard_ready_palet_10,//Проката картона
            package_ready_palet_10,//Упаковка
            dop_accessories_ready_palet_10,// Доп фурнитура

//+++++++++++++++++++ Палет 11 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_11,// Палет 11 количество
            address_pallet_11,// Адрес палета 11
            machine_pallet_pasting_11,// Станок палета поклейка 11
            machine_pallet_additive_11,// Станок палета присадка 11
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_11, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_11,//Раскрой
            pasting_ready_palet_11,//Поклейка
            additive_ready_palet_11,//Присадка
            format_ready_palet_11,// Форматка
            curvilinear_ready_palet_11,//Криволинейка
            universal_ready_palet_11,//Универсал
            cutting_corners_ready_palet_11,//Вырезка углов
            milling_ready_palet_11,// Фрезеровка
            film_pasting_ready_palet_11,//Оклейка пленкой МДФ
            assembly_ready_palet_11,// Сборка 2
            accessories_ready_palet_11,// Комплектация фурнитуры
            styrofoam_ready_palet_11,// Резка пенопласта
            cutting_cardboard_ready_palet_11,// Резка картона
            rolling_cardboard_ready_palet_11,//Проката картона
            package_ready_palet_11,//Упаковка
            dop_accessories_ready_palet_11,// Доп фурнитура

//+++++++++++++++++++ Палет 12 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_12,// Палет 12 количество
            address_pallet_12,// Адрес палета 12
            machine_pallet_pasting_12,// Станок палета поклейка 12
            machine_pallet_additive_12,// Станок палета присадка 12
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_12, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_12,//Раскрой
            pasting_ready_palet_12,//Поклейка
            additive_ready_palet_12,//Присадка
            format_ready_palet_12,// Форматка
            curvilinear_ready_palet_12,//Криволинейка
            universal_ready_palet_12,//Универсал
            cutting_corners_ready_palet_12,//Вырезка углов
            milling_ready_palet_12,// Фрезеровка
            film_pasting_ready_palet_12,//Оклейка пленкой МДФ
            assembly_ready_palet_12,// Сборка 2
            accessories_ready_palet_12,// Комплектация фурнитуры
            styrofoam_ready_palet_12,// Резка пенопласта
            cutting_cardboard_ready_palet_12,// Резка картона
            rolling_cardboard_ready_palet_12,//Проката картона
            package_ready_palet_12,//Упаковка
            dop_accessories_ready_palet_12,// Доп фурнитура

//+++++++++++++++++++ Палет 13 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_13,// Палет 13 количество
            address_pallet_13,// Адрес палета 13
            machine_pallet_pasting_13,// Станок палета поклейка 13
            machine_pallet_additive_13,// Станок палета присадка 13
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_13, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_13,//Раскрой
            pasting_ready_palet_13,//Поклейка
            additive_ready_palet_13,//Присадка
            format_ready_palet_13,// Форматка
            curvilinear_ready_palet_13,//Криволинейка
            universal_ready_palet_13,//Универсал
            cutting_corners_ready_palet_13,//Вырезка углов
            milling_ready_palet_13,// Фрезеровка
            film_pasting_ready_palet_13,//Оклейка пленкой МДФ
            assembly_ready_palet_13,// Сборка 2
            accessories_ready_palet_13,// Комплектация фурнитуры
            styrofoam_ready_palet_13,// Резка пенопласта
            cutting_cardboard_ready_palet_13,// Резка картона
            rolling_cardboard_ready_palet_13,//Проката картона
            package_ready_palet_13,//Упаковка
            dop_accessories_ready_palet_13,// Доп фурнитура


//+++++++++++++++++++ Палет 14 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_14,// Палет 14 количество
            address_pallet_14,// Адрес палета 14
            machine_pallet_pasting_14,// Станок палета поклейка 14
            machine_pallet_additive_14,// Станок палета присадка 14
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_14, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_14,//Раскрой
            pasting_ready_palet_14,//Поклейка
            additive_ready_palet_14,//Присадка
            format_ready_palet_14,// Форматка
            curvilinear_ready_palet_14,//Криволинейка
            universal_ready_palet_14,//Универсал
            cutting_corners_ready_palet_14,//Вырезка углов
            milling_ready_palet_14,// Фрезеровка
            film_pasting_ready_palet_14,//Оклейка пленкой МДФ
            assembly_ready_palet_14,// Сборка 2
            accessories_ready_palet_14,// Комплектация фурнитуры
            styrofoam_ready_palet_14,// Резка пенопласта
            cutting_cardboard_ready_palet_14,// Резка картона
            rolling_cardboard_ready_palet_14,//Проката картона
            package_ready_palet_14,//Упаковка
            dop_accessories_ready_palet_14,// Доп фурнитура

//+++++++++++++++++++ Палет 15 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_15,// Палет 15 количество
            address_pallet_15,// Адрес палета 15
            machine_pallet_pasting_15,// Станок палета поклейка 15
            machine_pallet_additive_15,// Станок палета присадка 15
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_15, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_15,//Раскрой
            pasting_ready_palet_15,//Поклейка
            additive_ready_palet_15,//Присадка
            format_ready_palet_15,// Форматка
            curvilinear_ready_palet_15,//Криволинейка
            universal_ready_palet_15,//Универсал
            cutting_corners_ready_palet_15,//Вырезка углов
            milling_ready_palet_15,// Фрезеровка
            film_pasting_ready_palet_15,//Оклейка пленкой МДФ
            assembly_ready_palet_15,// Сборка 2
            accessories_ready_palet_15,// Комплектация фурнитуры
            styrofoam_ready_palet_15,// Резка пенопласта
            cutting_cardboard_ready_palet_15,// Резка картона
            rolling_cardboard_ready_palet_15,//Проката картона
            package_ready_palet_15,//Упаковка
            dop_accessories_ready_palet_15,// Доп фурнитура

//+++++++++++++++++++ Палет 16 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_16,// Палет 16 количество
            address_pallet_16,// Адрес палета 16
            machine_pallet_pasting_16,// Станок палета поклейка 16
            machine_pallet_additive_16,// Станок палета присадка 16
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_16, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_16,//Раскрой
            pasting_ready_palet_16,//Поклейка
            additive_ready_palet_16,//Присадка
            format_ready_palet_16,// Форматка
            curvilinear_ready_palet_16,//Криволинейка
            universal_ready_palet_16,//Универсал
            cutting_corners_ready_palet_16,//Вырезка углов
            milling_ready_palet_16,// Фрезеровка
            film_pasting_ready_palet_16,//Оклейка пленкой МДФ
            assembly_ready_palet_16,// Сборка 2
            accessories_ready_palet_16,// Комплектация фурнитуры
            styrofoam_ready_palet_16,// Резка пенопласта
            cutting_cardboard_ready_palet_16,// Резка картона
            rolling_cardboard_ready_palet_16,//Проката картона
            package_ready_palet_16,//Упаковка
            dop_accessories_ready_palet_16,// Доп фурнитура

//+++++++++++++++++++ Палет 17 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_17,// Палет 17 количество
            address_pallet_17,// Адрес палета 17
            machine_pallet_pasting_17,// Станок палета поклейка 17
            machine_pallet_additive_17,// Станок палета присадка 17
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_17, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_17,//Раскрой
            pasting_ready_palet_17,//Поклейка
            additive_ready_palet_17,//Присадка
            format_ready_palet_17,// Форматка
            curvilinear_ready_palet_17,//Криволинейка
            universal_ready_palet_17,//Универсал
            cutting_corners_ready_palet_17,//Вырезка углов
            milling_ready_palet_17,// Фрезеровка
            film_pasting_ready_palet_17,//Оклейка пленкой МДФ
            assembly_ready_palet_17,// Сборка 2
            accessories_ready_palet_17,// Комплектация фурнитуры
            styrofoam_ready_palet_17,// Резка пенопласта
            cutting_cardboard_ready_palet_17,// Резка картона
            rolling_cardboard_ready_palet_17,//Проката картона
            package_ready_palet_17,//Упаковка
            dop_accessories_ready_palet_17,// Доп фурнитура

//+++++++++++++++++++ Палет 18 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_18,// Палет 18 количество
            address_pallet_18,// Адрес палета 18
            machine_pallet_pasting_18,// Станок палета поклейка 18
            machine_pallet_additive_18,// Станок палета присадка 18
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_18, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_18,//Раскрой
            pasting_ready_palet_18,//Поклейка
            additive_ready_palet_18,//Присадка
            format_ready_palet_18,// Форматка
            curvilinear_ready_palet_18,//Криволинейка
            universal_ready_palet_18,//Универсал
            cutting_corners_ready_palet_18,//Вырезка углов
            milling_ready_palet_18,// Фрезеровка
            film_pasting_ready_palet_18,//Оклейка пленкой МДФ
            assembly_ready_palet_18,// Сборка 2
            accessories_ready_palet_18,// Комплектация фурнитуры
            styrofoam_ready_palet_18,// Резка пенопласта
            cutting_cardboard_ready_palet_18,// Резка картона
            rolling_cardboard_ready_palet_18,//Проката картона
            package_ready_palet_18,//Упаковка
            dop_accessories_ready_palet_18,// Доп фурнитура

//+++++++++++++++++++ Палет 19 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_19,// Палет 19 количество
            address_pallet_19,// Адрес палета 19
            machine_pallet_pasting_19,// Станок палета поклейка 19
            machine_pallet_additive_19,// Станок палета присадка 19
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_19, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_19,//Раскрой
            pasting_ready_palet_19,//Поклейка
            additive_ready_palet_19,//Присадка
            format_ready_palet_19,// Форматка
            curvilinear_ready_palet_19,//Криволинейка
            universal_ready_palet_19,//Универсал
            cutting_corners_ready_palet_19,//Вырезка углов
            milling_ready_palet_19,// Фрезеровка
            film_pasting_ready_palet_19,//Оклейка пленкой МДФ
            assembly_ready_palet_19,// Сборка 2
            accessories_ready_palet_19,// Комплектация фурнитуры
            styrofoam_ready_palet_19,// Резка пенопласта
            cutting_cardboard_ready_palet_19,// Резка картона
            rolling_cardboard_ready_palet_19,//Проката картона
            package_ready_palet_19,//Упаковка
            dop_accessories_ready_palet_19,// Доп фурнитура

//+++++++++++++++++++ Палет 20 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_20,// Палет 20 количество
            address_pallet_20,// Адрес палета 20
            machine_pallet_pasting_20,// Станок палета поклейка 20
            machine_pallet_additive_20,// Станок палета присадка 20
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_20, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_20,//Раскрой
            pasting_ready_palet_20,//Поклейка
            additive_ready_palet_20,//Присадка
            format_ready_palet_20,// Форматка
            curvilinear_ready_palet_20,//Криволинейка
            universal_ready_palet_20,//Универсал
            cutting_corners_ready_palet_20,//Вырезка углов
            milling_ready_palet_20,// Фрезеровка
            film_pasting_ready_palet_20,//Оклейка пленкой МДФ
            assembly_ready_palet_20,// Сборка 2
            accessories_ready_palet_20,// Комплектация фурнитуры
            styrofoam_ready_palet_20,// Резка пенопласта
            cutting_cardboard_ready_palet_20,// Резка картона
            rolling_cardboard_ready_palet_20,//Проката картона
            package_ready_palet_20,//Упаковка
            dop_accessories_ready_palet_20,// Доп фурнитура

//+++++++++++++++++++ Палет 21 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_21,// Палет 21 количество
            address_pallet_21,// Адрес палета 21
            machine_pallet_pasting_21,// Станок палета поклейка 21
            machine_pallet_additive_21,// Станок палета присадка 21
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_21, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_21,//Раскрой
            pasting_ready_palet_21,//Поклейка
            additive_ready_palet_21,//Присадка
            format_ready_palet_21,// Форматка
            curvilinear_ready_palet_21,//Криволинейка
            universal_ready_palet_21,//Универсал
            cutting_corners_ready_palet_21,//Вырезка углов
            milling_ready_palet_21,// Фрезеровка
            film_pasting_ready_palet_21,//Оклейка пленкой МДФ
            assembly_ready_palet_21,// Сборка 2
            accessories_ready_palet_21,// Комплектация фурнитуры
            styrofoam_ready_palet_21,// Резка пенопласта
            cutting_cardboard_ready_palet_21,// Резка картона
            rolling_cardboard_ready_palet_21,//Проката картона
            package_ready_palet_21,//Упаковка
            dop_accessories_ready_palet_21,// Доп фурнитура

//+++++++++++++++++++ Палет 22 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_22,// Палет 22 количество
            address_pallet_22,// Адрес палета 22
            machine_pallet_pasting_22,// Станок палета поклейка 22
            machine_pallet_additive_22,// Станок палета присадка 22
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_22, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_22,//Раскрой
            pasting_ready_palet_22,//Поклейка
            additive_ready_palet_22,//Присадка
            format_ready_palet_22,// Форматка
            curvilinear_ready_palet_22,//Криволинейка
            universal_ready_palet_22,//Универсал
            cutting_corners_ready_palet_22,//Вырезка углов
            milling_ready_palet_22,// Фрезеровка
            film_pasting_ready_palet_22,//Оклейка пленкой МДФ
            assembly_ready_palet_22,// Сборка 2
            accessories_ready_palet_22,// Комплектация фурнитуры
            styrofoam_ready_palet_22,// Резка пенопласта
            cutting_cardboard_ready_palet_22,// Резка картона
            rolling_cardboard_ready_palet_22,//Проката картона
            package_ready_palet_22,//Упаковка
            dop_accessories_ready_palet_22,// Доп фурнитура

//+++++++++++++++++++ Палет 23 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_23,// Палет 23 количество
            address_pallet_23,// Адрес палета 23
            machine_pallet_pasting_23,// Станок палета поклейка 23
            machine_pallet_additive_23,// Станок палета присадка 23
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_23, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_23,//Раскрой
            pasting_ready_palet_23,//Поклейка
            additive_ready_palet_23,//Присадка
            format_ready_palet_23,// Форматка
            curvilinear_ready_palet_23,//Криволинейка
            universal_ready_palet_23,//Универсал
            cutting_corners_ready_palet_23,//Вырезка углов
            milling_ready_palet_23,// Фрезеровка
            film_pasting_ready_palet_23,//Оклейка пленкой МДФ
            assembly_ready_palet_23,// Сборка 2
            accessories_ready_palet_23,// Комплектация фурнитуры
            styrofoam_ready_palet_23,// Резка пенопласта
            cutting_cardboard_ready_palet_23,// Резка картона
            rolling_cardboard_ready_palet_23,//Проката картона
            package_ready_palet_23,//Упаковка
            dop_accessories_ready_palet_23,// Доп фурнитура

//+++++++++++++++++++ Палет 24 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_24,// Палет 24 количество
            address_pallet_24,// Адрес палета 24
            machine_pallet_pasting_24,// Станок палета поклейка 24
            machine_pallet_additive_24,// Станок палета присадка 24
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_24, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_24,//Раскрой
            pasting_ready_palet_24,//Поклейка
            additive_ready_palet_24,//Присадка
            format_ready_palet_24,// Форматка
            curvilinear_ready_palet_24,//Криволинейка
            universal_ready_palet_24,//Универсал
            cutting_corners_ready_palet_24,//Вырезка углов
            milling_ready_palet_24,// Фрезеровка
            film_pasting_ready_palet_24,//Оклейка пленкой МДФ
            assembly_ready_palet_24,// Сборка 2
            accessories_ready_palet_24,// Комплектация фурнитуры
            styrofoam_ready_palet_24,// Резка пенопласта
            cutting_cardboard_ready_palet_24,// Резка картона
            rolling_cardboard_ready_palet_24,//Проката картона
            package_ready_palet_24,//Упаковка
            dop_accessories_ready_palet_24,// Доп фурнитура

//+++++++++++++++++++ Палет 25 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            number_of_pallets_25 ,// Палет 25 количество
            address_pallet_25,// Адрес палета 25
            machine_pallet_pasting_25,// Станок палета поклейка 25
            machine_pallet_additive_25,// Станок палета присадка 25
            //-------------- Маркеры для анализа этапов-------------------
            ready_palet_25, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
            cutting_ready_palet_25,//Раскрой
            pasting_ready_palet_25,//Поклейка
            additive_ready_palet_25,//Присадка
            format_ready_palet_25,// Форматка
            curvilinear_ready_palet_25,//Криволинейка
            universal_ready_palet_25,//Универсал
            cutting_corners_ready_palet_25,//Вырезка углов
            milling_ready_palet_25,// Фрезеровка
            film_pasting_ready_palet_25,//Оклейка пленкой МДФ
            assembly_ready_palet_25,// Сборка 2
            accessories_ready_palet_25,// Комплектация фурнитуры
            styrofoam_ready_palet_25,// Резка пенопласта
            cutting_cardboard_ready_palet_25,// Резка картона
            rolling_cardboard_ready_palet_25,//Проката картона
            package_ready_palet_25,//Упаковка
            dop_accessories_ready_palet_25,// Доп фурнитура

        } = req.body
        const updateZnp_data = await Znp_data.update(
            {
                number_opening, //Номер части по раскрою
                part,// Тип детали
                color,// Цвет
                part_name,// Название детали
                qluing_line,// Линия поклейки
                semiproduct,// Полуфабрикат
                assembling,// Сборка
                packaging,// Принадлежность к упаковке
                cut_size,// Размер распила
                size_requiried,// Требуемы размер распила
                gluing_scheme,// Схема поклейки 1
                dop_gluing_scheme,// Схема поклейки 1
                groove,// Паз

                //========================= Участки ================================
                cutting_bool,//Раскрой
                pasting_bool,//Поклейка
                additive_bool,//Присадка
                format_bool,// Форматка
                curvilinear_bool,//Криволинейка
                universal_bool,//Универсал
                cutting_corners_bool,//Вырезка углов
                milling_bool,// Фрезеровка
                film_pasting_bool,//Оклейка пленкой МДФ
                assembly_bool,// Сборка 2
                accessories_bool,// Комплектация фурнитуры
                styrofoam_bool,// Резка пенопласта
                cutting_cardboard_bool,// Резка картона
                rolling_cardboard_bool,//Проката картона
                package_bool,//Упаковка
                dop_accessories_bool,// Доп фурнитура

//========================= Детали, палеты ===================================================
                details_after_cutting,// Sед. детали после распила, м.кв.
                quantity_pallet,// опт кол-во на поддоне с кратностью 35
                sum_number_parts,// Общее кол деталей
                number_pallets,// кол-во паллет
                quantity,// с кол-вом
                dop_number_pallets,// доп кол-во паллет
                dop_quantity,//с кол-вом
                real_number_parts,// Реальное кол деталей которое сделали

//+++++++++++++++++++ Палет 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_1,// Палет 1 количество
                address_pallet_1,// Адрес палета 1
                machine_pallet_pasting_1,// Станок палета поклейка 1
                machine_pallet_additive_1,// Станок палета присадка 1
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_1, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_1,//Раскрой
                pasting_ready_palet_1,//Поклейка
                additive_ready_palet_1,//Присадка
                format_ready_palet_1,// Форматка
                curvilinear_ready_palet_1,//Криволинейка
                universal_ready_palet_1,//Универсал
                cutting_corners_ready_palet_1,//Вырезка углов
                milling_ready_palet_1,// Фрезеровка
                film_pasting_ready_palet_1,//Оклейка пленкой МДФ
                assembly_ready_palet_1,// Сборка 2
                accessories_ready_palet_1,// Комплектация фурнитуры
                styrofoam_ready_palet_1,// Резка пенопласта
                cutting_cardboard_ready_palet_1,// Резка картона
                rolling_cardboard_ready_palet_1,//Проката картона
                package_ready_palet_1,//Упаковка
                dop_accessories_ready_palet_1,// Доп фурнитура

//+++++++++++++++++++ Палет 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_2,//Палет 2 количество
                address_pallet_2,// Адрес палета 2
                machine_pallet_pasting_2,// Станок палета поклейка 2
                machine_pallet_additive_2,// Станок палета присадка 2
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_2, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_2,//Раскрой
                pasting_ready_palet_2,//Поклейка
                additive_ready_palet_2,//Присадка
                format_ready_palet_2,// Форматка
                curvilinear_ready_palet_2,//Криволинейка
                universal_ready_palet_2,//Универсал
                cutting_corners_ready_palet_2,//Вырезка углов
                milling_ready_palet_2,// Фрезеровка
                film_pasting_ready_palet_2,//Оклейка пленкой МДФ
                assembly_ready_palet_2,// Сборка 2
                accessories_ready_palet_2,// Комплектация фурнитуры
                styrofoam_ready_palet_2,// Резка пенопласта
                cutting_cardboard_ready_palet_2,// Резка картона
                rolling_cardboard_ready_palet_2,//Проката картона
                package_ready_palet_2,//Упаковка
                dop_accessories_ready_palet_2,// Доп фурнитура

//+++++++++++++++++++ Палет 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_3,// Палет 3 количество
                address_pallet_3,// Адрес палета 3
                machine_pallet_pasting_3,// Станок палета поклейка 3
                machine_pallet_additive_3,// Станок палета присадка 3
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_3, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_3,//Раскрой
                pasting_ready_palet_3,//Поклейка
                additive_ready_palet_3,//Присадка
                format_ready_palet_3,// Форматка
                curvilinear_ready_palet_3,//Криволинейка
                universal_ready_palet_3,//Универсал
                cutting_corners_ready_palet_3,//Вырезка углов
                milling_ready_palet_3,// Фрезеровка
                film_pasting_ready_palet_3,//Оклейка пленкой МДФ
                assembly_ready_palet_3,// Сборка 2
                accessories_ready_palet_3,// Комплектация фурнитуры
                styrofoam_ready_palet_3,// Резка пенопласта
                cutting_cardboard_ready_palet_3,// Резка картона
                rolling_cardboard_ready_palet_3,//Проката картона
                package_ready_palet_3,//Упаковка
                dop_accessories_ready_palet_3,// Доп фурнитура

//+++++++++++++++++++ Палет 4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_4,// Палет 4 количество
                address_pallet_4,// Адрес палета 4
                machine_pallet_pasting_4,// Станок палета поклейка 4
                machine_pallet_additive_4,// Станок палета присадка 4
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_4, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_4,//Раскрой
                pasting_ready_palet_4,//Поклейка
                additive_ready_palet_4,//Присадка
                format_ready_palet_4,// Форматка
                curvilinear_ready_palet_4,//Криволинейка
                universal_ready_palet_4,//Универсал
                cutting_corners_ready_palet_4,//Вырезка углов
                milling_ready_palet_4,// Фрезеровка
                film_pasting_ready_palet_4,//Оклейка пленкой МДФ
                assembly_ready_palet_4,// Сборка 2
                accessories_ready_palet_4,// Комплектация фурнитуры
                styrofoam_ready_palet_4,// Резка пенопласта
                cutting_cardboard_ready_palet_4,// Резка картона
                rolling_cardboard_ready_palet_4,//Проката картона
                package_ready_palet_4,//Упаковка
                dop_accessories_ready_palet_4,// Доп фурнитура

//+++++++++++++++++++ Палет 5 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_5,// Палет 5 количество
                address_pallet_5,// Адрес палета 5
                machine_pallet_pasting_5,// Станок палета поклейка 5
                machine_pallet_additive_5,// Станок палета присадка 5
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_5, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_5,//Раскрой
                pasting_ready_palet_5,//Поклейка
                additive_ready_palet_5,//Присадка
                format_ready_palet_5,// Форматка
                curvilinear_ready_palet_5,//Криволинейка
                universal_ready_palet_5,//Универсал
                cutting_corners_ready_palet_5,//Вырезка углов
                milling_ready_palet_5,// Фрезеровка
                film_pasting_ready_palet_5,//Оклейка пленкой МДФ
                assembly_ready_palet_5,// Сборка 2
                accessories_ready_palet_5,// Комплектация фурнитуры
                styrofoam_ready_palet_5,// Резка пенопласта
                cutting_cardboard_ready_palet_5,// Резка картона
                rolling_cardboard_ready_palet_5,//Проката картона
                package_ready_palet_5,//Упаковка
                dop_accessories_ready_palet_5,// Доп фурнитура

//+++++++++++++++++++ Палет 6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_6,// Палет 6 количество
                address_pallet_6,// Адрес палета 6
                machine_pallet_pasting_6,// Станок палета поклейка 6
                machine_pallet_additive_6,// Станок палета присадка 6
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_6, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_6,//Раскрой
                pasting_ready_palet_6,//Поклейка
                additive_ready_palet_6,//Присадка
                format_ready_palet_6,// Форматка
                curvilinear_ready_palet_6,//Криволинейка
                universal_ready_palet_6,//Универсал
                cutting_corners_ready_palet_6,//Вырезка углов
                milling_ready_palet_6,// Фрезеровка
                film_pasting_ready_palet_6,//Оклейка пленкой МДФ
                assembly_ready_palet_6,// Сборка 2
                accessories_ready_palet_6,// Комплектация фурнитуры
                styrofoam_ready_palet_6,// Резка пенопласта
                cutting_cardboard_ready_palet_6,// Резка картона
                rolling_cardboard_ready_palet_6,//Проката картона
                package_ready_palet_6,//Упаковка
                dop_accessories_ready_palet_6,// Доп фурнитура

//+++++++++++++++++++ Палет 7 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_7,// Палет 7 количество
                address_pallet_7,// Адрес палета 7
                machine_pallet_pasting_7,// Станок палета поклейка 7
                machine_pallet_additive_7,// Станок палета присадка 7
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_7, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_7,//Раскрой
                pasting_ready_palet_7,//Поклейка
                additive_ready_palet_7,//Присадка
                format_ready_palet_7,// Форматка
                curvilinear_ready_palet_7,//Криволинейка
                universal_ready_palet_7,//Универсал
                cutting_corners_ready_palet_7,//Вырезка углов
                milling_ready_palet_7,// Фрезеровка
                film_pasting_ready_palet_7,//Оклейка пленкой МДФ
                assembly_ready_palet_7,// Сборка 2
                accessories_ready_palet_7,// Комплектация фурнитуры
                styrofoam_ready_palet_7,// Резка пенопласта
                cutting_cardboard_ready_palet_7,// Резка картона
                rolling_cardboard_ready_palet_7,//Проката картона
                package_ready_palet_7,//Упаковка
                dop_accessories_ready_palet_7,// Доп фурнитура

//+++++++++++++++++++ Палет 8 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_8,// Палет 8 количество
                address_pallet_8,// Адрес палета 8
                machine_pallet_pasting_8,// Станок палета поклейка 8
                machine_pallet_additive_8,// Станок палета присадка 8
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_8, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_8,//Раскрой
                pasting_ready_palet_8,//Поклейка
                additive_ready_palet_8,//Присадка
                format_ready_palet_8,// Форматка
                curvilinear_ready_palet_8,//Криволинейка
                universal_ready_palet_8,//Универсал
                cutting_corners_ready_palet_8,//Вырезка углов
                milling_ready_palet_8,// Фрезеровка
                film_pasting_ready_palet_8,//Оклейка пленкой МДФ
                assembly_ready_palet_8,// Сборка 2
                accessories_ready_palet_8,// Комплектация фурнитуры
                styrofoam_ready_palet_8,// Резка пенопласта
                cutting_cardboard_ready_palet_8,// Резка картона
                rolling_cardboard_ready_palet_8,//Проката картона
                package_ready_palet_8,//Упаковка
                dop_accessories_ready_palet_8,// Доп фурнитура

//+++++++++++++++++++ Палет 9 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_9,// Палет 9 количество
                address_pallet_9,// Адрес палета 9
                machine_pallet_pasting_9,// Станок палета поклейка 9
                machine_pallet_additive_9,// Станок палета присадка 9
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_9, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_9,//Раскрой
                pasting_ready_palet_9,//Поклейка
                additive_ready_palet_9,//Присадка
                format_ready_palet_9,// Форматка
                curvilinear_ready_palet_9,//Криволинейка
                universal_ready_palet_9,//Универсал
                cutting_corners_ready_palet_9,//Вырезка углов
                milling_ready_palet_9,// Фрезеровка
                film_pasting_ready_palet_9,//Оклейка пленкой МДФ
                assembly_ready_palet_9,// Сборка 2
                accessories_ready_palet_9,// Комплектация фурнитуры
                styrofoam_ready_palet_9,// Резка пенопласта
                cutting_cardboard_ready_palet_9,// Резка картона
                rolling_cardboard_ready_palet_9,//Проката картона
                package_ready_palet_9,//Упаковка
                dop_accessories_ready_palet_9,// Доп фурнитура

//+++++++++++++++++++ Палет 10 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_10,// Палет 10 количество
                address_pallet_10,// Адрес палета 10
                machine_pallet_pasting_10,// Станок палета поклейка 10
                machine_pallet_additive_10,// Станок палета присадка 10
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_10, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_10,//Раскрой
                pasting_ready_palet_10,//Поклейка
                additive_ready_palet_10,//Присадка
                format_ready_palet_10,// Форматка
                curvilinear_ready_palet_10,//Криволинейка
                universal_ready_palet_10,//Универсал
                cutting_corners_ready_palet_10,//Вырезка углов
                milling_ready_palet_10,// Фрезеровка
                film_pasting_ready_palet_10,//Оклейка пленкой МДФ
                assembly_ready_palet_10,// Сборка 2
                accessories_ready_palet_10,// Комплектация фурнитуры
                styrofoam_ready_palet_10,// Резка пенопласта
                cutting_cardboard_ready_palet_10,// Резка картона
                rolling_cardboard_ready_palet_10,//Проката картона
                package_ready_palet_10,//Упаковка
                dop_accessories_ready_palet_10,// Доп фурнитура

//+++++++++++++++++++ Палет 11 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_11,// Палет 11 количество
                address_pallet_11,// Адрес палета 11
                machine_pallet_pasting_11,// Станок палета поклейка 11
                machine_pallet_additive_11,// Станок палета присадка 11
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_11, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_11,//Раскрой
                pasting_ready_palet_11,//Поклейка
                additive_ready_palet_11,//Присадка
                format_ready_palet_11,// Форматка
                curvilinear_ready_palet_11,//Криволинейка
                universal_ready_palet_11,//Универсал
                cutting_corners_ready_palet_11,//Вырезка углов
                milling_ready_palet_11,// Фрезеровка
                film_pasting_ready_palet_11,//Оклейка пленкой МДФ
                assembly_ready_palet_11,// Сборка 2
                accessories_ready_palet_11,// Комплектация фурнитуры
                styrofoam_ready_palet_11,// Резка пенопласта
                cutting_cardboard_ready_palet_11,// Резка картона
                rolling_cardboard_ready_palet_11,//Проката картона
                package_ready_palet_11,//Упаковка
                dop_accessories_ready_palet_11,// Доп фурнитура

//+++++++++++++++++++ Палет 12 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_12,// Палет 12 количество
                address_pallet_12,// Адрес палета 12
                machine_pallet_pasting_12,// Станок палета поклейка 12
                machine_pallet_additive_12,// Станок палета присадка 12
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_12, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_12,//Раскрой
                pasting_ready_palet_12,//Поклейка
                additive_ready_palet_12,//Присадка
                format_ready_palet_12,// Форматка
                curvilinear_ready_palet_12,//Криволинейка
                universal_ready_palet_12,//Универсал
                cutting_corners_ready_palet_12,//Вырезка углов
                milling_ready_palet_12,// Фрезеровка
                film_pasting_ready_palet_12,//Оклейка пленкой МДФ
                assembly_ready_palet_12,// Сборка 2
                accessories_ready_palet_12,// Комплектация фурнитуры
                styrofoam_ready_palet_12,// Резка пенопласта
                cutting_cardboard_ready_palet_12,// Резка картона
                rolling_cardboard_ready_palet_12,//Проката картона
                package_ready_palet_12,//Упаковка
                dop_accessories_ready_palet_12,// Доп фурнитура

//+++++++++++++++++++ Палет 13 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_13,// Палет 13 количество
                address_pallet_13,// Адрес палета 13
                machine_pallet_pasting_13,// Станок палета поклейка 13
                machine_pallet_additive_13,// Станок палета присадка 13
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_13, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_13,//Раскрой
                pasting_ready_palet_13,//Поклейка
                additive_ready_palet_13,//Присадка
                format_ready_palet_13,// Форматка
                curvilinear_ready_palet_13,//Криволинейка
                universal_ready_palet_13,//Универсал
                cutting_corners_ready_palet_13,//Вырезка углов
                milling_ready_palet_13,// Фрезеровка
                film_pasting_ready_palet_13,//Оклейка пленкой МДФ
                assembly_ready_palet_13,// Сборка 2
                accessories_ready_palet_13,// Комплектация фурнитуры
                styrofoam_ready_palet_13,// Резка пенопласта
                cutting_cardboard_ready_palet_13,// Резка картона
                rolling_cardboard_ready_palet_13,//Проката картона
                package_ready_palet_13,//Упаковка
                dop_accessories_ready_palet_13,// Доп фурнитура


//+++++++++++++++++++ Палет 14 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_14,// Палет 14 количество
                address_pallet_14,// Адрес палета 14
                machine_pallet_pasting_14,// Станок палета поклейка 14
                machine_pallet_additive_14,// Станок палета присадка 14
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_14, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_14,//Раскрой
                pasting_ready_palet_14,//Поклейка
                additive_ready_palet_14,//Присадка
                format_ready_palet_14,// Форматка
                curvilinear_ready_palet_14,//Криволинейка
                universal_ready_palet_14,//Универсал
                cutting_corners_ready_palet_14,//Вырезка углов
                milling_ready_palet_14,// Фрезеровка
                film_pasting_ready_palet_14,//Оклейка пленкой МДФ
                assembly_ready_palet_14,// Сборка 2
                accessories_ready_palet_14,// Комплектация фурнитуры
                styrofoam_ready_palet_14,// Резка пенопласта
                cutting_cardboard_ready_palet_14,// Резка картона
                rolling_cardboard_ready_palet_14,//Проката картона
                package_ready_palet_14,//Упаковка
                dop_accessories_ready_palet_14,// Доп фурнитура

//+++++++++++++++++++ Палет 15 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_15,// Палет 15 количество
                address_pallet_15,// Адрес палета 15
                machine_pallet_pasting_15,// Станок палета поклейка 15
                machine_pallet_additive_15,// Станок палета присадка 15
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_15, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_15,//Раскрой
                pasting_ready_palet_15,//Поклейка
                additive_ready_palet_15,//Присадка
                format_ready_palet_15,// Форматка
                curvilinear_ready_palet_15,//Криволинейка
                universal_ready_palet_15,//Универсал
                cutting_corners_ready_palet_15,//Вырезка углов
                milling_ready_palet_15,// Фрезеровка
                film_pasting_ready_palet_15,//Оклейка пленкой МДФ
                assembly_ready_palet_15,// Сборка 2
                accessories_ready_palet_15,// Комплектация фурнитуры
                styrofoam_ready_palet_15,// Резка пенопласта
                cutting_cardboard_ready_palet_15,// Резка картона
                rolling_cardboard_ready_palet_15,//Проката картона
                package_ready_palet_15,//Упаковка
                dop_accessories_ready_palet_15,// Доп фурнитура

//+++++++++++++++++++ Палет 16 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_16,// Палет 16 количество
                address_pallet_16,// Адрес палета 16
                machine_pallet_pasting_16,// Станок палета поклейка 16
                machine_pallet_additive_16,// Станок палета присадка 16
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_16, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_16,//Раскрой
                pasting_ready_palet_16,//Поклейка
                additive_ready_palet_16,//Присадка
                format_ready_palet_16,// Форматка
                curvilinear_ready_palet_16,//Криволинейка
                universal_ready_palet_16,//Универсал
                cutting_corners_ready_palet_16,//Вырезка углов
                milling_ready_palet_16,// Фрезеровка
                film_pasting_ready_palet_16,//Оклейка пленкой МДФ
                assembly_ready_palet_16,// Сборка 2
                accessories_ready_palet_16,// Комплектация фурнитуры
                styrofoam_ready_palet_16,// Резка пенопласта
                cutting_cardboard_ready_palet_16,// Резка картона
                rolling_cardboard_ready_palet_16,//Проката картона
                package_ready_palet_16,//Упаковка
                dop_accessories_ready_palet_16,// Доп фурнитура

//+++++++++++++++++++ Палет 17 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_17,// Палет 17 количество
                address_pallet_17,// Адрес палета 17
                machine_pallet_pasting_17,// Станок палета поклейка 17
                machine_pallet_additive_17,// Станок палета присадка 17
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_17, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_17,//Раскрой
                pasting_ready_palet_17,//Поклейка
                additive_ready_palet_17,//Присадка
                format_ready_palet_17,// Форматка
                curvilinear_ready_palet_17,//Криволинейка
                universal_ready_palet_17,//Универсал
                cutting_corners_ready_palet_17,//Вырезка углов
                milling_ready_palet_17,// Фрезеровка
                film_pasting_ready_palet_17,//Оклейка пленкой МДФ
                assembly_ready_palet_17,// Сборка 2
                accessories_ready_palet_17,// Комплектация фурнитуры
                styrofoam_ready_palet_17,// Резка пенопласта
                cutting_cardboard_ready_palet_17,// Резка картона
                rolling_cardboard_ready_palet_17,//Проката картона
                package_ready_palet_17,//Упаковка
                dop_accessories_ready_palet_17,// Доп фурнитура

//+++++++++++++++++++ Палет 18 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_18,// Палет 18 количество
                address_pallet_18,// Адрес палета 18
                machine_pallet_pasting_18,// Станок палета поклейка 18
                machine_pallet_additive_18,// Станок палета присадка 18
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_18, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_18,//Раскрой
                pasting_ready_palet_18,//Поклейка
                additive_ready_palet_18,//Присадка
                format_ready_palet_18,// Форматка
                curvilinear_ready_palet_18,//Криволинейка
                universal_ready_palet_18,//Универсал
                cutting_corners_ready_palet_18,//Вырезка углов
                milling_ready_palet_18,// Фрезеровка
                film_pasting_ready_palet_18,//Оклейка пленкой МДФ
                assembly_ready_palet_18,// Сборка 2
                accessories_ready_palet_18,// Комплектация фурнитуры
                styrofoam_ready_palet_18,// Резка пенопласта
                cutting_cardboard_ready_palet_18,// Резка картона
                rolling_cardboard_ready_palet_18,//Проката картона
                package_ready_palet_18,//Упаковка
                dop_accessories_ready_palet_18,// Доп фурнитура

//+++++++++++++++++++ Палет 19 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_19,// Палет 19 количество
                address_pallet_19,// Адрес палета 19
                machine_pallet_pasting_19,// Станок палета поклейка 19
                machine_pallet_additive_19,// Станок палета присадка 19
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_19, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_19,//Раскрой
                pasting_ready_palet_19,//Поклейка
                additive_ready_palet_19,//Присадка
                format_ready_palet_19,// Форматка
                curvilinear_ready_palet_19,//Криволинейка
                universal_ready_palet_19,//Универсал
                cutting_corners_ready_palet_19,//Вырезка углов
                milling_ready_palet_19,// Фрезеровка
                film_pasting_ready_palet_19,//Оклейка пленкой МДФ
                assembly_ready_palet_19,// Сборка 2
                accessories_ready_palet_19,// Комплектация фурнитуры
                styrofoam_ready_palet_19,// Резка пенопласта
                cutting_cardboard_ready_palet_19,// Резка картона
                rolling_cardboard_ready_palet_19,//Проката картона
                package_ready_palet_19,//Упаковка
                dop_accessories_ready_palet_19,// Доп фурнитура

//+++++++++++++++++++ Палет 20 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_20,// Палет 20 количество
                address_pallet_20,// Адрес палета 20
                machine_pallet_pasting_20,// Станок палета поклейка 20
                machine_pallet_additive_20,// Станок палета присадка 20
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_20, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_20,//Раскрой
                pasting_ready_palet_20,//Поклейка
                additive_ready_palet_20,//Присадка
                format_ready_palet_20,// Форматка
                curvilinear_ready_palet_20,//Криволинейка
                universal_ready_palet_20,//Универсал
                cutting_corners_ready_palet_20,//Вырезка углов
                milling_ready_palet_20,// Фрезеровка
                film_pasting_ready_palet_20,//Оклейка пленкой МДФ
                assembly_ready_palet_20,// Сборка 2
                accessories_ready_palet_20,// Комплектация фурнитуры
                styrofoam_ready_palet_20,// Резка пенопласта
                cutting_cardboard_ready_palet_20,// Резка картона
                rolling_cardboard_ready_palet_20,//Проката картона
                package_ready_palet_20,//Упаковка
                dop_accessories_ready_palet_20,// Доп фурнитура

//+++++++++++++++++++ Палет 21 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_21,// Палет 21 количество
                address_pallet_21,// Адрес палета 21
                machine_pallet_pasting_21,// Станок палета поклейка 21
                machine_pallet_additive_21,// Станок палета присадка 21
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_21, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_21,//Раскрой
                pasting_ready_palet_21,//Поклейка
                additive_ready_palet_21,//Присадка
                format_ready_palet_21,// Форматка
                curvilinear_ready_palet_21,//Криволинейка
                universal_ready_palet_21,//Универсал
                cutting_corners_ready_palet_21,//Вырезка углов
                milling_ready_palet_21,// Фрезеровка
                film_pasting_ready_palet_21,//Оклейка пленкой МДФ
                assembly_ready_palet_21,// Сборка 2
                accessories_ready_palet_21,// Комплектация фурнитуры
                styrofoam_ready_palet_21,// Резка пенопласта
                cutting_cardboard_ready_palet_21,// Резка картона
                rolling_cardboard_ready_palet_21,//Проката картона
                package_ready_palet_21,//Упаковка
                dop_accessories_ready_palet_21,// Доп фурнитура

//+++++++++++++++++++ Палет 22 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_22,// Палет 22 количество
                address_pallet_22,// Адрес палета 22
                machine_pallet_pasting_22,// Станок палета поклейка 22
                machine_pallet_additive_22,// Станок палета присадка 22
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_22, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_22,//Раскрой
                pasting_ready_palet_22,//Поклейка
                additive_ready_palet_22,//Присадка
                format_ready_palet_22,// Форматка
                curvilinear_ready_palet_22,//Криволинейка
                universal_ready_palet_22,//Универсал
                cutting_corners_ready_palet_22,//Вырезка углов
                milling_ready_palet_22,// Фрезеровка
                film_pasting_ready_palet_22,//Оклейка пленкой МДФ
                assembly_ready_palet_22,// Сборка 2
                accessories_ready_palet_22,// Комплектация фурнитуры
                styrofoam_ready_palet_22,// Резка пенопласта
                cutting_cardboard_ready_palet_22,// Резка картона
                rolling_cardboard_ready_palet_22,//Проката картона
                package_ready_palet_22,//Упаковка
                dop_accessories_ready_palet_22,// Доп фурнитура

//+++++++++++++++++++ Палет 23 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_23,// Палет 23 количество
                address_pallet_23,// Адрес палета 23
                machine_pallet_pasting_23,// Станок палета поклейка 23
                machine_pallet_additive_23,// Станок палета присадка 23
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_23, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_23,//Раскрой
                pasting_ready_palet_23,//Поклейка
                additive_ready_palet_23,//Присадка
                format_ready_palet_23,// Форматка
                curvilinear_ready_palet_23,//Криволинейка
                universal_ready_palet_23,//Универсал
                cutting_corners_ready_palet_23,//Вырезка углов
                milling_ready_palet_23,// Фрезеровка
                film_pasting_ready_palet_23,//Оклейка пленкой МДФ
                assembly_ready_palet_23,// Сборка 2
                accessories_ready_palet_23,// Комплектация фурнитуры
                styrofoam_ready_palet_23,// Резка пенопласта
                cutting_cardboard_ready_palet_23,// Резка картона
                rolling_cardboard_ready_palet_23,//Проката картона
                package_ready_palet_23,//Упаковка
                dop_accessories_ready_palet_23,// Доп фурнитура

//+++++++++++++++++++ Палет 24 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_24,// Палет 24 количество
                address_pallet_24,// Адрес палета 24
                machine_pallet_pasting_24,// Станок палета поклейка 24
                machine_pallet_additive_24,// Станок палета присадка 24
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_24, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_24,//Раскрой
                pasting_ready_palet_24,//Поклейка
                additive_ready_palet_24,//Присадка
                format_ready_palet_24,// Форматка
                curvilinear_ready_palet_24,//Криволинейка
                universal_ready_palet_24,//Универсал
                cutting_corners_ready_palet_24,//Вырезка углов
                milling_ready_palet_24,// Фрезеровка
                film_pasting_ready_palet_24,//Оклейка пленкой МДФ
                assembly_ready_palet_24,// Сборка 2
                accessories_ready_palet_24,// Комплектация фурнитуры
                styrofoam_ready_palet_24,// Резка пенопласта
                cutting_cardboard_ready_palet_24,// Резка картона
                rolling_cardboard_ready_palet_24,//Проката картона
                package_ready_palet_24,//Упаковка
                dop_accessories_ready_palet_24,// Доп фурнитура

//+++++++++++++++++++ Палет 25 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                number_of_pallets_25 ,// Палет 25 количество
                address_pallet_25,// Адрес палета 25
                machine_pallet_pasting_25,// Станок палета поклейка 25
                machine_pallet_additive_25,// Станок палета присадка 25
                //-------------- Маркеры для анализа этапов-------------------
                ready_palet_25, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
                cutting_ready_palet_25,//Раскрой
                pasting_ready_palet_25,//Поклейка
                additive_ready_palet_25,//Присадка
                format_ready_palet_25,// Форматка
                curvilinear_ready_palet_25,//Криволинейка
                universal_ready_palet_25,//Универсал
                cutting_corners_ready_palet_25,//Вырезка углов
                milling_ready_palet_25,// Фрезеровка
                film_pasting_ready_palet_25,//Оклейка пленкой МДФ
                assembly_ready_palet_25,// Сборка 2
                accessories_ready_palet_25,// Комплектация фурнитуры
                styrofoam_ready_palet_25,// Резка пенопласта
                cutting_cardboard_ready_palet_25,// Резка картона
                rolling_cardboard_ready_palet_25,//Проката картона
                package_ready_palet_25,//Упаковка
                dop_accessories_ready_palet_25,// Доп фурнитура

            },
            {
                where:{id}
            })
        return res.json(updateZnp_data)
    }
    async delete(req, res) {
        const {znpId} = req.query
            const delZnpData = await  Znp_data.destroy(
            { where: {znpId}},
        )
        return res.json(delZnpData)
    }


//================== Запросы для выборыа только нужных строк ======================================
//     dbData

    async getAllZnpDatas (req,res){
        const{znpId, sector}= req.query
        // if (sector == "RASPIL"){
        //     const RaspilData = await dbData.query(`SELECT * FROM public.znp_data WHERE cutting_bool = true AND "znpId"= $1 `, [znpId])
        //     return res.json(RaspilData.rows)
        // } else if (sector == "POKLEIKA"){
        //     const PokleikaData = await dbData.query(`SELECT * FROM public.znp_data WHERE pasting_bool = true AND "znpId"= $1 `, [znpId])
        //     return res.json(PokleikaData.rows)
        // }else if (sector == "PRISADKA"){
        //     const PrisadkaData = await dbData.query(`SELECT * FROM public.znp_data WHERE additive_bool = true AND "znpId"= $1 `, [znpId])
        //     return res.json(PrisadkaData.rows)
        // }
        if (sector == "RASPIL"){
            const znp_datas = await Znp_data.findAll({
                where: {znpId,cutting_bool: true},
                raw:true,
                attributes: ['id', 'number_opening', 'part', 'color', 'part_name', 'qluing_line', 'semiproduct', 'assembling', 'packaging', 'cut_size', 'size_requiried','gluing_scheme', 'dop_gluing_scheme', 'groove', 'details_after_cutting', 'quantity_pallet',
                    'sum_number_parts', 'number_pallets', 'quantity', 'dop_number_pallets','dop_quantity', 'real_number_parts','number_of_pallets_1', 'address_pallet_1', 'machine_pallet_pasting_1', 'machine_pallet_additive_1','number_of_pallets_2', 'address_pallet_2',
                    'machine_pallet_pasting_2', 'machine_pallet_additive_2','number_of_pallets_3', 'address_pallet_3', 'machine_pallet_pasting_3', 'machine_pallet_additive_3','number_of_pallets_4','address_pallet_4', 'machine_pallet_pasting_4', 'machine_pallet_additive_4',
                    'number_of_pallets_5', 'address_pallet_5','machine_pallet_pasting_5', 'machine_pallet_additive_5','number_of_pallets_6', 'address_pallet_6', 'machine_pallet_pasting_6', 'machine_pallet_additive_6','number_of_pallets_7', 'address_pallet_7', 'machine_pallet_pasting_7',
                    'machine_pallet_additive_7','number_of_pallets_8', 'address_pallet_8', 'machine_pallet_pasting_8','machine_pallet_additive_8','number_of_pallets_9','address_pallet_9', 'machine_pallet_pasting_9', 'machine_pallet_additive_9','number_of_pallets_10', 'address_pallet_10',
                    'machine_pallet_pasting_10', 'machine_pallet_additive_10','number_of_pallets_11', 'address_pallet_11', 'machine_pallet_pasting_11','machine_pallet_additive_11','number_of_pallets_12', 'address_pallet_12', 'machine_pallet_pasting_12','machine_pallet_additive_12',
                    'number_of_pallets_13', 'address_pallet_13', 'machine_pallet_pasting_13','machine_pallet_additive_13','number_of_pallets_14', 'address_pallet_14', 'machine_pallet_pasting_14', 'machine_pallet_additive_14','number_of_pallets_15', 'address_pallet_15', 'machine_pallet_pasting_15',
                    'machine_pallet_additive_15','number_of_pallets_16', 'address_pallet_16', 'machine_pallet_pasting_16', 'machine_pallet_additive_16','number_of_pallets_17', 'address_pallet_17', 'machine_pallet_pasting_17','machine_pallet_additive_17','number_of_pallets_18', 'address_pallet_18',
                    'machine_pallet_pasting_18', 'machine_pallet_additive_18','number_of_pallets_19', 'address_pallet_19', 'machine_pallet_pasting_19', 'machine_pallet_additive_19','number_of_pallets_20', 'address_pallet_20', 'machine_pallet_pasting_20', 'machine_pallet_additive_20','number_of_pallets_21',
                    'address_pallet_21', 'machine_pallet_pasting_21', 'machine_pallet_additive_21','number_of_pallets_22', 'address_pallet_22', 'machine_pallet_pasting_22',  'machine_pallet_additive_22','number_of_pallets_23', 'address_pallet_23', 'machine_pallet_pasting_23','machine_pallet_additive_23',
                    'number_of_pallets_24', 'address_pallet_24', 'machine_pallet_pasting_24', 'machine_pallet_additive_24','number_of_pallets_25', 'address_pallet_25', 'machine_pallet_pasting_25', 'machine_pallet_additive_25', 'createdAt', 'updatedAt', 'znpId'
                ]
            })
            return res.json(znp_datas)
        } else if (sector == "POKLEIKA"){
            const znp_datas = await Znp_data.findAll({
                where: {znpId, pasting_bool: true},
                raw:true,
                attributes: ['id', 'number_opening', 'part', 'color', 'part_name', 'qluing_line', 'semiproduct', 'assembling', 'packaging', 'cut_size', 'size_requiried','gluing_scheme', 'dop_gluing_scheme', 'groove', 'details_after_cutting', 'quantity_pallet',
                    'sum_number_parts', 'number_pallets', 'quantity', 'dop_number_pallets','dop_quantity', 'real_number_parts','number_of_pallets_1', 'address_pallet_1', 'machine_pallet_pasting_1', 'machine_pallet_additive_1','number_of_pallets_2', 'address_pallet_2',
                    'machine_pallet_pasting_2', 'machine_pallet_additive_2','number_of_pallets_3', 'address_pallet_3', 'machine_pallet_pasting_3', 'machine_pallet_additive_3','number_of_pallets_4','address_pallet_4', 'machine_pallet_pasting_4', 'machine_pallet_additive_4',
                    'number_of_pallets_5', 'address_pallet_5','machine_pallet_pasting_5', 'machine_pallet_additive_5','number_of_pallets_6', 'address_pallet_6', 'machine_pallet_pasting_6', 'machine_pallet_additive_6','number_of_pallets_7', 'address_pallet_7', 'machine_pallet_pasting_7',
                    'machine_pallet_additive_7','number_of_pallets_8', 'address_pallet_8', 'machine_pallet_pasting_8','machine_pallet_additive_8','number_of_pallets_9','address_pallet_9', 'machine_pallet_pasting_9', 'machine_pallet_additive_9','number_of_pallets_10', 'address_pallet_10',
                    'machine_pallet_pasting_10', 'machine_pallet_additive_10','number_of_pallets_11', 'address_pallet_11', 'machine_pallet_pasting_11','machine_pallet_additive_11','number_of_pallets_12', 'address_pallet_12', 'machine_pallet_pasting_12','machine_pallet_additive_12',
                    'number_of_pallets_13', 'address_pallet_13', 'machine_pallet_pasting_13','machine_pallet_additive_13','number_of_pallets_14', 'address_pallet_14', 'machine_pallet_pasting_14', 'machine_pallet_additive_14','number_of_pallets_15', 'address_pallet_15', 'machine_pallet_pasting_15',
                    'machine_pallet_additive_15','number_of_pallets_16', 'address_pallet_16', 'machine_pallet_pasting_16', 'machine_pallet_additive_16','number_of_pallets_17', 'address_pallet_17', 'machine_pallet_pasting_17','machine_pallet_additive_17','number_of_pallets_18', 'address_pallet_18',
                    'machine_pallet_pasting_18', 'machine_pallet_additive_18','number_of_pallets_19', 'address_pallet_19', 'machine_pallet_pasting_19', 'machine_pallet_additive_19','number_of_pallets_20', 'address_pallet_20', 'machine_pallet_pasting_20', 'machine_pallet_additive_20','number_of_pallets_21',
                    'address_pallet_21', 'machine_pallet_pasting_21', 'machine_pallet_additive_21','number_of_pallets_22', 'address_pallet_22', 'machine_pallet_pasting_22',  'machine_pallet_additive_22','number_of_pallets_23', 'address_pallet_23', 'machine_pallet_pasting_23','machine_pallet_additive_23',
                    'number_of_pallets_24', 'address_pallet_24', 'machine_pallet_pasting_24', 'machine_pallet_additive_24','number_of_pallets_25', 'address_pallet_25', 'machine_pallet_pasting_25', 'machine_pallet_additive_25', 'createdAt', 'updatedAt', 'znpId'
                ]
            })
            return res.json(znp_datas)
            }else if (sector == "PRISADKA"){
            const znp_datas = await Znp_data.findAll({
                where: {znpId,additive_bool: true},
                raw:true,
                attributes: ['id', 'number_opening', 'part', 'color', 'part_name', 'qluing_line', 'semiproduct', 'assembling', 'packaging', 'cut_size', 'size_requiried','gluing_scheme', 'dop_gluing_scheme', 'groove', 'details_after_cutting', 'quantity_pallet',
                    'sum_number_parts', 'number_pallets', 'quantity', 'dop_number_pallets','dop_quantity', 'real_number_parts','number_of_pallets_1', 'address_pallet_1', 'machine_pallet_pasting_1', 'machine_pallet_additive_1','number_of_pallets_2', 'address_pallet_2',
                    'machine_pallet_pasting_2', 'machine_pallet_additive_2','number_of_pallets_3', 'address_pallet_3', 'machine_pallet_pasting_3', 'machine_pallet_additive_3','number_of_pallets_4','address_pallet_4', 'machine_pallet_pasting_4', 'machine_pallet_additive_4',
                    'number_of_pallets_5', 'address_pallet_5','machine_pallet_pasting_5', 'machine_pallet_additive_5','number_of_pallets_6', 'address_pallet_6', 'machine_pallet_pasting_6', 'machine_pallet_additive_6','number_of_pallets_7', 'address_pallet_7', 'machine_pallet_pasting_7',
                    'machine_pallet_additive_7','number_of_pallets_8', 'address_pallet_8', 'machine_pallet_pasting_8','machine_pallet_additive_8','number_of_pallets_9','address_pallet_9', 'machine_pallet_pasting_9', 'machine_pallet_additive_9','number_of_pallets_10', 'address_pallet_10',
                    'machine_pallet_pasting_10', 'machine_pallet_additive_10','number_of_pallets_11', 'address_pallet_11', 'machine_pallet_pasting_11','machine_pallet_additive_11','number_of_pallets_12', 'address_pallet_12', 'machine_pallet_pasting_12','machine_pallet_additive_12',
                    'number_of_pallets_13', 'address_pallet_13', 'machine_pallet_pasting_13','machine_pallet_additive_13','number_of_pallets_14', 'address_pallet_14', 'machine_pallet_pasting_14', 'machine_pallet_additive_14','number_of_pallets_15', 'address_pallet_15', 'machine_pallet_pasting_15',
                    'machine_pallet_additive_15','number_of_pallets_16', 'address_pallet_16', 'machine_pallet_pasting_16', 'machine_pallet_additive_16','number_of_pallets_17', 'address_pallet_17', 'machine_pallet_pasting_17','machine_pallet_additive_17','number_of_pallets_18', 'address_pallet_18',
                    'machine_pallet_pasting_18', 'machine_pallet_additive_18','number_of_pallets_19', 'address_pallet_19', 'machine_pallet_pasting_19', 'machine_pallet_additive_19','number_of_pallets_20', 'address_pallet_20', 'machine_pallet_pasting_20', 'machine_pallet_additive_20','number_of_pallets_21',
                    'address_pallet_21', 'machine_pallet_pasting_21', 'machine_pallet_additive_21','number_of_pallets_22', 'address_pallet_22', 'machine_pallet_pasting_22',  'machine_pallet_additive_22','number_of_pallets_23', 'address_pallet_23', 'machine_pallet_pasting_23','machine_pallet_additive_23',
                    'number_of_pallets_24', 'address_pallet_24', 'machine_pallet_pasting_24', 'machine_pallet_additive_24','number_of_pallets_25', 'address_pallet_25', 'machine_pallet_pasting_25', 'machine_pallet_additive_25', 'createdAt', 'updatedAt', 'znpId'
                ]
            })
            return res.json(znp_datas)
            }



    }
}
module.exports = new Znp_dataController()