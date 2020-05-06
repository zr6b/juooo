import React, {Component} from 'react';

export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>这里是首页</div>
        )
    }
   async componentDidMount() {
       // https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2
        const data =await this.$axios.get("/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2")
       console.log(data.data.hots_show_list)
    }
}