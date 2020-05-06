import React, {Component} from 'react';
import '../../assets/stage.css';
import {addStage} from "../../store/actionCreator/stage";
import store from "../../store";
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stageInfo:[],
            stageInfoX:[],
            reCommend:[],
            pageNo:1
        };
    }

    render() {
        return (
            <div>
                <div  className={"stageHeader"}>
                    <h3 className={'stageHeader-left'}>舞台剧</h3>
                    <span className={'stageHeader-right'}>></span>
                </div>
                <div className={"stageHeader-top"}>
                    <img  src="https://image.juooo.com//group1/M00/04/21/rAoKNV4Jj32AC3hcAAMtvdtNV6E061.png" alt=""/>
                    <div className={"stageHeader-top-right"}>
                        <b>{this.state.stageInfo.display_show_time}</b>
                        <span>{this.state.stageInfo.week}</span>
                        <h3>{this.state.stageInfo.schedular_name}</h3>
                        <span>{this.state.stageInfo.city_name}</span>
                        <span>{this.state.stageInfo.venue_name}</span>
                    </div>
                </div>
                {

                    this.state.stageInfoX.map(v=>(
                        <div className={'stageHeader-buttom'} key={v.sche_id}>
                            <img height={150} src={v.pic} alt=""/>
                            <h3>{v.schedular_name}</h3>
                            <span>￥{v.low_price}</span>起
                        </div>
                    ))
                }

                <div  className={"stageHeader-bottom"}>
                    <h3 className={'stageHeader-left'}>为你推荐</h3>
                    <span className={'stageHeader-right'}>></span>
                </div>
                {
                    this.state.reCommend.map(v=>(
                        <div  key={v.schedular_id}>
                            <img height={100} src={v.pic} alt=""/>
                            <p>{v.name}</p>
                            <p>{v.start_show_time}</p>
                        </div>
                    ))
                }
                <input type="button" value={'继续加载'} onClick={this.getRecommend.bind(this,this.state.pageNo+1)}/>
            </div>
        )
    }
    async getStage(){
        // https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2
        const data =await this.$axios.get("/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2")


        store.dispatch(addStage(data.data[2].list[0]));
        console.log(store.getState().stage.stageInfo)
        this.setState({
            stageInfo:data.data[2].list[0],
            stageInfoX:JSON.parse(JSON.stringify(data.data[2].list)).splice(1)
        })
    }
    async getRecommend(page=this.state.pageNo){
        //https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2
        const data = await this.$axios.get('/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page='+page+'&referer_type=index&version=6.1.1&referer=2')
        // console.log(data)
        this.setState({
            pageNo:data.data.page,
            reCommend:[
                ...this.state.reCommend,
                ...data.data.list
            ]
        })

    }
    componentDidMount() {
        this.getStage();
        this.getRecommend();
    }
}