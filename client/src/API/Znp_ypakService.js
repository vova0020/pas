import axios from "axios";


export default class ZnpYpakService{
    static async getAll(fil) {
        const response = await axios.get(process.env.REACT_APP_ZNP_YPAK_URL,{
            params: {
                znpId: fil
            }
        })
        // console.log(response)
        return response.data
    }
    static async getYpack(){
        const response = await axios.get(process.env.REACT_APP_ZNP_YPAK_URL,{
            params: {
                // znpId: fil
            }
        })
        // console.log(response)
        return response.data
    }

}