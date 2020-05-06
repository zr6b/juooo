import {
    createStore,// 创建仓库
    applyMiddleware// 应用中间件
} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"
export default createStore(reducer,applyMiddleware(thunk))