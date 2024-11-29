import axios from "axios";


export default class ZnpDataStanckiService{
    static async getAll(stanockName) {
        const response = await axios.get(process.env.REACT_APP_STANCKI_ZNP_URL,{
            params: {
                stanock: stanockName
            }
        })
        return response.data
    };
}