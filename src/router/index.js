
import MyJuooo from "../views/myjuooo/MyJuooo"; //我的
import Theatre from "../views/theatre/Theatre"; //剧院
import TheatreDetail from "../views/theatre/TheatreDetail";
import Eticket from "../views/eticket/Eticket"; //票夹
import Juooo from "../views/juooo/Juooo";//首页
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
        path:'/TheatreDetail',
        component:TheatreDetail
    },
    {
        path: "/Eticket",
        component: Eticket,
    },
    {
        path: "/MyJuooo",
        component: MyJuooo,
    }]