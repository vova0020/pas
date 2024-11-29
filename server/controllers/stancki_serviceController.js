const {Stancki_service} = require("../models/models");


class Stancki_serviceController {
    //Создание станка
    async create(req,res){
        const {stanock, sector, line, img, plan, price} = req.body
        const newStanock = await Stancki_service.create({
            stanock,
            sector,
            line,
            img,
            plan,
            price,
        })
        return res.json(newStanock)
    }
    // Получение записей станка
    async getAll (req, res) {
        const {stanock} = req.query
        if (stanock != ""){
            const getStanock = await Stancki_service.findAll(
                {
                    where: {
                        visibility: true,
                        stanock
                    }
                }
            )
            return res.json(getStanock)
        } else {
            const getStanock = await Stancki_service.findAll(
                {
                    where: {
                        visibility: true
                    }
                }
            )
            return res.json(getStanock)
        }
    }

    async getAllStanock (req, res) {
        const {sector, line} = req.query
        if (line){

            const getStanock = await Stancki_service.findAll(
                {
                    where: {
                        visibility: true,
                        sector,
                        line
                    }
                }
            )
            return res.json(getStanock)
        } else {
            const getStanock = await Stancki_service.findAll(
                {
                    where: {
                        visibility: true,
                        sector
                    }
                }
            )
            return res.json(getStanock)
        }


    }

//    Изменение данный о станке

    async update (req,res) {
        const {
            id,
            stanock,
            sector,
            line,
            img,
            plan,
            price,
            visibility,
            status_waiting,
            status_work,
            status_broken,
            status_repair,
            status_maintenance,
        } = req.body
        const upadeStanock = await Stancki_service.update(
            {
                stanock,
                sector,
                line,
                img,
                plan,
                price,
                visibility,
                status_waiting,
                status_work,
                status_broken,
                status_repair,
                status_maintenance,
            },
            {
                where:{id}
            })
        return res.json(upadeStanock)
    }

}
module.exports = new Stancki_serviceController()