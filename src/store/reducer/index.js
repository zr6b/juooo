import {
    combineReducers
} from 'redux';
import theatreDetail from './theatreDetail';
import theatre from "./theatre"
// import eticket from "./eticket"
export default combineReducers({
    theatre,
    theatreDetail
})