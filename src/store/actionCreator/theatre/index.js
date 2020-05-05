import theatreType from '../../actionType/theatre'
import axios from 'axios';
export function changeTheatreList(payload) {
    return{
        type:theatreType.CHANGE_THEATRE_LIST,
        payload
    }
}
export default {
    getTheatreList(){
        return async (dispatch)=>{
            const {data}  = await axios.get("/theatre/index/getTheatreList")

            dispatch(changeTheatreList(data.theatre_list))
        }
    }
}