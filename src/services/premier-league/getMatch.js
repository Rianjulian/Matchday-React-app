import axios from 'axios'

const FOOTBALL_DATA_URL = process.env.REACT_APP_API_BASE_URL
const FOOTBALL_DATA_API_KEY = process.env.REACT_APP_API_KEY

export const getMatchData = async({id = "PL"}) => {

    try {
        const path =`competitions`
        const query = `/${id}/matches`
        const endPoint = `${FOOTBALL_DATA_URL}${path}${query}`

        const res = await axios.get(endPoint, {
            'headers': {
                'X-Auth-Token': FOOTBALL_DATA_API_KEY
              }
        })

        if (res.status === 200) {
            const additionalObject ={
                id : id
            }
            const resData = {
                ...res.data,
                ...additionalObject
            }

            return resData
        }

    } catch (error) {
        console.log('not getting data', error);
    }


}