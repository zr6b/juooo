import {
    combineReducers
} from "redux"
import juooo from "./juooo"
import myjuoo from "./myjuooo"
import theatre from "./theatre"
import eticket from "./eticket"
export default combineReducers({
    juooo,
    myjuoo,
    theatre,
    eticket
})