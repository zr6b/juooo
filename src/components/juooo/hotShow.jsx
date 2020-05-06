import React, { Component } from 'react';
import "../../assets/juooo/hotShow.css";
import 'swiper/css/swiper.min.css'
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import Swiper from "swiper/js/swiper"
import browserHistory from 'react-router';
import hotShowCreatorfrom from '../../store/actionCreator/juooo'
 class hotShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {hotShowList} =this.props
        return (
            <div className="hotShow">
                <div className="performingJour-top">
                    <h3 className="performingJour-top-l">热门演出</h3>
                    <div className="performingJour-top-r">
                        <span className="performingJour-top-r-r">全部</span>
                        <img className="performingJour-top-r-l" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="></img>
                    </div>
                </div>
                <div data-v-40c76fc4="">
                    <section className="hot-block">
                        <div className="hot-block__list hot-list">
                            <div className="swiper-container1 swiper-container-horizontal">
                                <div className="swiper-wrapper" >
                                {
                                    hotShowList.map(v=>(
                                        <div key={v.pic} className=" ei swiper-slide swiper-slide-active" >
                                            <a onClick={()=>{
                                                this.props.history.push("/hotShowDetail");
                                            }} className="hot-block__list__wrap">
                                                <div className="hot-block__list__wrap__item">
                                                    <img src={v.pic}/>
                                                </div>
                                                <h3 className="hot-block__list__wrap__title text-double">{v.show_name}</h3>
                                            </a>
                                        </div>
                                    ))
                                    
                                }
                                </div>

                            </div>
                        </div>          
                    </section>
                </div>
            </div>

        )
        
    }
    async componentDidMount() {
        
        new Swiper('.swiper-container1',{
            loop:false,
            slidesPerView:"auto",
            observer: true,
            observeParents: true,

        });
        await this.props.getHotShow.call(this);
        console.log(this.props)
        
    }
}
function mapStateToProps({hotShow}){
    // console.log(hotShow)
    return {
        hotShowList:hotShow.hotShowList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(hotShowCreatorfrom,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(hotShow);