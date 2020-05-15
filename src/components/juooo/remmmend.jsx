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
                    this.state.reCommend.map((v,index)=>(
                        <div   className={"remmond-buttom"}  key={index}>
                            <img height={100} src={v.pic} alt=""/>
                            <p>{v.name}</p>
                            <p className={"second-remd"}>{v.start_show_time}</p>
                            <span>￥{v.min_price}</span>起
                        </div>
                    ))
                }

            </div>
        )
    }
    bindHandleScroll=(event)=>{
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // console.log(document.body.scrollHeight-scrollTop)
        if(document.body.scrollHeight-scrollTop<1000 ){
            this.getRecommend(this.state.pageNo+1);
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
        this.getRecommend();
    }
}