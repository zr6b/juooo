import React from "react";
import '../../assets/style/stage.css';
export default class Remmmend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reCommend:[],
            pageNo:1
        };
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
    render() {
        return (
            <div>
                <div  className={"stageHeader-bottom"}>
                    <h3 className={'stageHeader-left'}>为你推荐</h3>
                    <span className={'stageHeader-right'}>></span>
                </div>
                {
                    this.state.reCommend.map(v=>(
                        <div className={"remmond-buttom"}  key={v.schedular_id}>
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
    componentDidMount() {
        this.getRecommend();
    }
}