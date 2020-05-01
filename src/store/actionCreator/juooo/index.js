import axios from "axios"
import juoooType from "../../actionType/juooo"

const upClassifyHome = (payload) => {
    return {
        type: juoooType.UP_CLASSIFY_HOME,
        payload
    }

}
export default {
    getClassifyHome() {//顶部轮播图 底部导航
        return async (dispatch) => {
            const data = await axios.get("/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2")
            console.log(data)
            dispatch(upClassifyHome(data))
        }

    },
    getHotsRecommendList() {//热门演出

    },
    getList() {//巡回演出

    },
    getVipHomeSchedular() {//vip专享折扣

    },
    getShowList() {//轮播图

    }
}