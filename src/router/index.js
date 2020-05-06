
import MyJuooo from "../views/myjuooo/MyJuooo"; //我的
import Theatre from "../views/theatre/Theatre"; //剧院
import Eticket from "../views/eticket/Eticket"; //票夹
import Juooo from "../views/juooo/Juooo";//首页
import Login from "../views/myjuooo/Login"//登录
export default [
    {
    path: "/",
    component: Juooo,
    exact: true
},
    {
        path: "/Theatre",
        component: Theatre,
    },
    {
        path: "/Eticket",
        component: Eticket,
        isAuthorization:true,
    },
    {
        path: "/MyJuooo",
        component: MyJuooo,
        isAuthorization:true,
    },
    {
        path: "/Login",
        component: Login,
    }]

