import recommend from './recommend';
import stage from './stage';
import {
    combineReducers
} from 'redux';
const rootReducer = combineReducers({
    stage,
    recommend,
})
export default rootReducer;