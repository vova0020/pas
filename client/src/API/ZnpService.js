import axios from "axios";


export default class ZnpService{
    static async getAll() {
        const response = await axios.get(process.env.REACT_APP_ZNP_URL)
        // console.log(response)
        return response.data
    }
    static async getOne(idZnp) {
        const response = await axios.get(process.env.REACT_APP_ZNP_URL + '/getOne',{
            params:{
                id:idZnp
            }
        })
        return response.data
    }
}