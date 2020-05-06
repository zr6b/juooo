import theatreDetailType from '../../actionType/theatreDetail'
import axios from 'axios';
export function changeList(payload) {
    return{
        type:theatreDetailType.CHANGE_LIST,
        payload
    }
}
export default {
    getTheatreDetailList(){
        return async (dispatch)=>{
            const {data} = await axios.get('/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2')
            dispatch(changeList(data.list))
        }
    }
}