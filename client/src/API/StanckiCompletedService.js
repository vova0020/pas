import axios from "axios";


export default class StanckiCompletedService{
    static async getAll(stanockName) {
        const response = await axios.get(process.env.REACT_APP_STANCKI_COMPLETED_ZNP_URL,{
            params: {
                stanock:stanockName
            }
        })
        // console.log(response)
        return response.data
    }
}