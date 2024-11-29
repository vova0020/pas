import axios from "axios";


export default class BuffService{
    static async getAll() {
        const response = await axios.get(process.env.REACT_APP_BUFF_URL)
        // console.log(response)
        return response.data
    }
    static async getAllData() {
        const response = await axios.get(process.env.REACT_APP_BUFFDATA_URL)
        // console.log(response.status)
        return response.data
    }
}