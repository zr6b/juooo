
import MyJuooo from "../views/myjuooo/MyJuooo"; //我的
import Theatre from "../views/theatre/Theatre"; //剧院
import TheatreDetail from "../views/theatre/TheatreDetail";
import Eticket from "../views/eticket/Eticket"; //票夹
import Juooo from "../views/juooo/Juooo";//首页
import City from "../components/juooo/City";
import hotShowDetail from "../components/juooo/hotShowDetail"
import Login from "../views/myjuooo/Login";
import Search from "../components/juooo/Search";
// import { Children } from "react";
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

    },
    {
        path: "/City",
        component: City,
    },
    {
        path:"/hotShowDetail",
        component:hotShowDetail,
    },
    {
        path: "/Login",
        component: Login,
    },
    {
        path: "/Search",
        component: Search,
    }
]
