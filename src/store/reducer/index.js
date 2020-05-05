import {
    combineReducers
} from 'redux';
import theatre from './theatre';
import theatreDetail from './theatreDetail';
export default combineReducers({
    theatre,
    theatreDetail
})