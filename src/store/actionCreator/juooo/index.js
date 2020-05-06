import juoooType from "../../actionType/juooo"
export function changehotShowList(payload) {
    // console.log(payload)
    return {
        type: juoooType.CHANGE_HOTSHOW_LIST,
        payload
    }
}
function changePerFormingJourList(payload){
    return {
        type: juoooType.CHANGE_PERFORMING_JOUR_LIST,
        payload
    }
}
export default {
    getHotShow(){
        return  async (dispatch)=> {
            const data = await this.$axios.get("/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2")
            dispatch(changehotShowList(data.data.hots_show_list))
            console.log(data.data.hots_show_list)
        }

    },
    getPerFormingJourList(){
        return async(dispatch)=>{
            const data =await this.$axios.get("/show/tour/getList?version=6.1.1&referer=2")
            dispatch(changePerFormingJourList(data.data.list))
        }
    }
}