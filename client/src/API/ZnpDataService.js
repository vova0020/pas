import axios from "axios";


export default class ZnpDataService{
    static async getAll(fil) {
        const response = await axios.get(process.env.REACT_APP_ZNPDATA_URL,{
            params: {
                znpId: fil
            }
        })
        return response.data
    };
    static async getAllRegion(filZnpId,sectors) {
        const response = await axios.get(process.env.REACT_APP_ZNPDATA_REGION_URL,{
            params: {
                znpId: filZnpId,
                sector: sectors
            }
        })
        return response.data
    };
}
