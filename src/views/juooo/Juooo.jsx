import React, {Component} from 'react';
import '../../assets/stage.css'
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stageInfo:[],
            stageInfoX:[]
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

                    this.state.stageInfoX.splice(1).map(v=>(
                        <div className={'stageHeader-buttom'} key={v.sche_id}>
                            <img height={150} src={v.pic} alt=""/>
                        </div>
                    ))
                }
            </div>
        )
    }
   async componentDidMount() {
       // https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2
        const data =await this.$axios.get("/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2")
       console.log(data)
       this.setState({
            stageInfo:data.data[2].list[0],
           stageInfoX:data.data[2].list
       })
        // console.log(this.state.stageInfo)
    }
}