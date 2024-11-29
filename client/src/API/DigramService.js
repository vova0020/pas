import axios from "axios";


export default class DigramService{

    static async getAllRaspil(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_RASPIL_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        } )
        return response.data
    }
    static async getAllPokleika(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_POKLEIKA_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        return response.data
    }
    static async getAllPrisadka(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_PRISADKA_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        return response.data
    }

    //================  Данные станков ==========================
    static async getAllStanckiPokleika(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_STANKI_POKLEIKA_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        // console.log(response.data)
        return response.data
    }
    static async getAllStanckiPrisadka(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_STANKI_PRISADKA_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        // console.log(response)
        return response.data
    }
    static async getAllYpackTable(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_YPAK_DIAGRAM_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        // console.log(response)
        return response.data
    }
    static async getAllYpackTable2(data1, data2, smena) {
        const response = await axios.get(process.env.REACT_APP_YPAK_DIAGRAM_2_URL, {
            params: {
                startData: data1,
                endData: data2,
                smen:smena
            }
        })
        // console.log(response)
        return response.data
    }
}