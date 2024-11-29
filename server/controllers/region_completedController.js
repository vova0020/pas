const {Region_completed} = require("../models/models");


class Region_completedController{
    async create(req,res){
        const{
            completed,// Выполненное кол деталей
            region, // Регион
            quadrature,// Квадратура по деталям
            palet,// палет
            znpData,// Номер в таблице знп дата
            role,// роль того кто заполнил
        } = req.body

        let smen = 0
        if (new Date().getHours() <15 && new Date().getHours() >5){
            smen = 1
        } else if (new Date().getHours()>=15 && new Date().getHours() <= 24){
            smen = 2
        }

        const newRegion_completed = await Region_completed.create({
            completed,// Выполненное кол деталей
            region, // Регион
            date: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
            time: new Date().getHours(),// Время
            smena:smen, // Смена
            date_time: new Date().toLocaleString(),// Устанавливаем автоматически дату и время
            quadrature,// Квадратура по деталям
            palet,// палет
            znpData,// Номер в таблице знп дата
            role,// роль того кто заполнил
        })
        return res.json(newRegion_completed)
    }
    async getAll(req,res) {
        const {region} = req.body
        const getRegion_complete = await Region_completed.findAll(
    {
                where:region
            })
        return res.json(getRegion_complete)
    }
}
module.exports = new Region_completedController()