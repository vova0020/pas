const {Znp_stancki_completed} = require("../models/models");


class Znp_stancki_completedController {
    async create(req,res){
        const {
            stanock,// Станок
            sector,// В каком секторе находится станок (Присадка, Поклейка и тд)
            completed,// Выполненное кол деталей
            probeg,// Пробег по деталям
            znp,//Номер и название ЗНП
            number_opening,//Номер части по раскрою
            palet, // Адрес палета, чтобы узнать в какой палет заносить данные
            part,// Тип детали
            color,// Цвет
            part_name,// Название детали
            size_requiried,// Требуемы размер распила
            gluing_scheme,// Схема поклейки 1
            dop_gluing_scheme,// Схема поклейки 2
            groove,// Паз
            role,// роль того кто заполнил
            znpStanokDatumId,// id знп станка
            znpDataId
        } = req.body

        let smen = 0
        if (new Date().getHours() <15 && new Date().getHours() >5){
            smen = 1
        } else if (new Date().getHours()>=15 && new Date().getHours() <= 24){
            smen = 2
        }

        const newZnp_comleted = await Znp_stancki_completed.create({
            stanock,// Станок
            sector,// В каком секторе находится станок (Присадка, Покле  ка и тд)
            completed,// Выполненное кол деталей
            date: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
            time: new Date().getHours(),// Время
            smena:smen, // Смена
            date_time: new Date().toLocaleString(),// Устанавливаем автоматически дату и время
            probeg,// Пробег по деталям
            znp,//Номер и название ЗНП
            number_opening,//Номер части по раскрою
            palet, // Адрес палета, чтобы узнать в какой палет заносить данные
            part,// Тип детали
            color,// Цвет
            part_name,// Название детали
            size_requiried,// Требуемы размер распила
            gluing_scheme,// Схема поклейки 1
            dop_gluing_scheme,// Схема поклейки 2
            groove,// Паз
            role,// роль того кто заполнил

            znpStanokDatumId,// id знп станка
            znpDataId
        })
        return res.json(newZnp_comleted)
    }
    async getAll(req,res){
        const {stanock} = req.query
        const getZnp_comleted = await Znp_stancki_completed.findAll(
            {
                where: {
                    stanock,
                    date: new Date().toLocaleDateString()
                }
            }
        )
        return res.json(getZnp_comleted)
    }
    async getAllDiagrams(req,res){
        const {stanock} = req.query
        const getZnp_comleted = await Znp_stancki_completed.findAll(
            {
                where: {
                    stanock,
                    date: new Date().toLocaleDateString()
                }
            }
        )
        return res.json(getZnp_comleted)
    }
}
module.exports = new Znp_stancki_completedController()