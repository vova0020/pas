const {Role_user} = require("../models/models");


class Role_userController {
    async create(req,res){
        const {
            role
        } = req.body
        const newRole = await Role_user.create({
            role
        })
        return res.json(newRole)
    }

    async getAll (req, res) {
        const Role = await Role_user.findAll(
            {
                where: {
                    visibility: true,
                }
            }
        )
        return res.json(Role)
    }

}
module.exports = new Role_userController()