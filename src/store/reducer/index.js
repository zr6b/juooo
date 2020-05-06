import {
    createStore,
    combineReducers
} from "redux";
import hotShow from "./juooo/hotShow";
import performingJour  from "./juooo/performingJour"
export default combineReducers({
    hotShow,
    performingJour
})