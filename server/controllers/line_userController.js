const { Line_service} = require("../models/models");


class Line_userController {
    async create(req,res){
        const {
            role
        } = req.body
        const newRole = await Line_service.create({
            role
        })
        return res.json(newRole)
    }

    async getAll (req, res) {
        const Role = await Line_service.findAll(
            {
                where: {
                    visibility: true,
                }
            }
        )
        return res.json(Role)
    }

}
module.exports = new Line_userController()