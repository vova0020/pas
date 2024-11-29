const {Region_service} = require("../models/models");


class Region_serviceController{
    async create(req,res){
        const {region} = req.body
        const newRegion = await Region_service.create({
            region
        })
        return res.json(newRegion)
    }
    async getAll (req, res) {
        const Region = await Region_service.findAll(
            {
                where: {
                    visibility: true,
                }
            }
        )
        return res.json(Region)
    }
}
module.exports = new Region_serviceController()