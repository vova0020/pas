const {Buffer, Znp_data} = require    ("../models/models")
const dbDiagram = require('../dbData')

class BufferController {
    async create (req, res) {
        const {cell_number, freeness} = req.body
        const newBuffer = await Buffer.create({cell_number, freeness})
        return res.json(newBuffer)
    }
    async getAll (req, res) {
        // console.log("Прошел запрос для буфера")
        const buffer_datas = await Buffer.findAll()
        return res.json(buffer_datas)

    }

    // Запрос на получение состава ЗНП для буфера
    async getAllDat (req, res) {
        console.log("Прошел запрос для знп буфера")
         // const znp_datas_buf = await dbDiagram.query('SELECT      FROM public.znp_data;')


        const znp_datas_Buf = await Znp_data.findAll({
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
                'number_of_pallets_24', 'address_pallet_24', 'machine_pallet_pasting_24', 'machine_pallet_additive_24','number_of_pallets_25', 'address_pallet_25', 'machine_pallet_pasting_25', 'machine_pallet_additive_25', 'createdAt', 'updatedAt', 'znpId']
        })
        console.log(znp_datas_Buf)
        return res.json( znp_datas_Buf)
    }


    async getOne(req, res) {

    }
    async update(req, res) {
        const {id, freeness} = req.body
        const updateBuff = await Buffer.update(
            {
                freeness
            },
            {
                where:{id}
            })
        return res.json(updateBuff)

    }

}
module.exports = new BufferController()