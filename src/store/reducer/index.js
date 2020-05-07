import {
    combineReducers
} from 'redux';
import theatreDetail from './theatreDetail';
import theatre from "./theatre";
import hotShow from "./juooo/hotShow";
import performingJour  from "./juooo/performingJour"
export default combineReducers({
    theatre,
    theatreDetail,
    hotShow,
    performingJour
})