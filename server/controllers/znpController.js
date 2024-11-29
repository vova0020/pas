const {Znp} = require('../models/models')
const ApiError = require('../error/ApiEror')
const {DataTypes} = require("sequelize");

class ZnpController {

    //Добавление данных в таблицу ЗНП
    async create (req, res) {
        const {znp_number, model,edging} = req.body
        const newZnp = await Znp.create({znp_number, model, edging})
        return res.json(newZnp)
    }
    //Получение всех записей из таблицы ЗНП
    async getAll (req, res) {
        const znps = await Znp.findAll(
    {
                where: {
                    visibility: true
                }
            }
        )
        return res.json(znps)
    }
    //Получеие по id записи из ЗНП
    async getOne(req, res) {
        const {id} = req.query
        const znp = await Znp.findOne(

            {
                where: {
                    id,
                    visibility: true
                }
            },
        )
        return res.json(znp)
    }

    //Внесение изменений по id в знп
    async update(req, res) {
        const {
            id,
            cutting_znp,//Раскрой
            pasting_znp,//Поклейка
            additive_znp,//Присадка
            format_znp,// Форматка
            curvilinear_znp,//Криволинейка
            universal_znp,//Универсал
            cutting_corners_znp,//Вырезка углов
            milling_znp,// Фрезеровка
            film_pasting_znp,//Оклейка пленкой МДФ
            assembly_znp,// Сборка 2
            accessories_znp,// Комплектация фурнитуры
            styrofoam_znp,// Резка пенопласта
            cutting_cardboard_znp,// Резка картона
            rolling_cardboard_znp,//Проката картона
            package_znp,//Упаковка
            dop_accessories_znp,// Доп фурнитура

            closing_date_znp, //дата закрытия знп
            visibility // видимость знп
            } = req.body

        const updateZnp = await Znp.update(
            {
                cutting_znp,//Раскрой
                pasting_znp,//Поклейка
                additive_znp,//Присадка
                format_znp,// Форматка
                curvilinear_znp,//Криволинейка
                universal_znp,//Универсал
                cutting_corners_znp,//Вырезка углов
                milling_znp,// Фрезеровка
                film_pasting_znp,//Оклейка пленкой МДФ
                assembly_znp,// Сборка 2
                accessories_znp,// Комплектация фурнитуры
                styrofoam_znp,// Резка пенопласта
                cutting_cardboard_znp,// Резка картона
                rolling_cardboard_znp,//Проката картона
                package_znp,//Упаковка
                dop_accessories_znp,// Доп фурнитура

                closing_date_znp, //дата закрытия знп
                visibility // видимость знп
            },
            {
                where:{id}
            })
        return res.json(updateZnp)
    }
    //Удаление данных в таблице ЗНП
    async delete(req,  res) {
        const {id} = req.body
        const delZnp = await  Znp.destroy(
            {
                where: {id}
            })
        return res.json(delZnp)
    }

}

module.exports = new ZnpController()