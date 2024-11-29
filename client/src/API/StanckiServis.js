import axios from "axios";


export default class StanckiServis{
    static async getAll(stanockName) {
        const response = await axios.get(process.env.REACT_APP_STANCKI_SERVICE_URL,{
            params: {
                stanock:stanockName
            }
        })
        // console.log(response)
        return response.data
    }
    static async getAllStancki() {
        const response = await axios.get(process.env.REACT_APP_STANCKI_SERVICE_URL)
        // console.log(response)
        return response.data
    }

    static async getAllStancki(sec) {
        const response = await axios.get(process.env.REACT_APP_STANCKI_SERVICE_GET_URL,{
            params: {
                sector:sec
            }
        })
        // console.log(response)
        return response.data
    }
    static async getAllStancki_Line(sec,lin) {
        const response = await axios.get(process.env.REACT_APP_STANCKI_SERVICE_GET_URL,{
            params: {
                sector:sec,
                line:lin
            }
        })
        // console.log(response)
        return response.data
    }
}