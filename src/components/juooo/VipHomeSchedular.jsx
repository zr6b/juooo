import React, {Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import "../../assets/juooo/VipHomeSchedular.scss"
import {
    NavLink
} from 'react-router-dom';
export default class VipHomeSchedular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorList:[]
        };
    }

    render() {
        return (
            <div className={'vip-ahead'}>
                <NavLink to={'/vip/index'}>
                    <div className={'vip-ahead__advert__left'}>
                        <span style={{fontSize:'.3rem',marginRight:'.1rem',fontWeight:'900'}}>优先购票</span>
                        <span>VIP+会员尊享权益</span>
                    </div>
                    <div>
                        <span>开通会员99元/年</span>
                        <span>&gt;</span>
                    </div>
                </NavLink>
                <div className="swiper-container home-banner-wrap swiper-container-horizontal swiper-container-android">
                    <div className="swiper-wrapper">
                        {
                            this.state.priorList.map((v,i)=>{
                                return (
                                    <div className="swiper-slide banner-swiper-slide" key={i} >
                                        <NavLink to={''} className={'vip-ahead__list'}>
                                            <img  src={v.pic} alt=""/>
                                        </NavLink>
                                        <span className={'vip-ahead__list__lab'}>开售提醒</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination banner-swiper-pagination"></div>
                </div>
            </div>
        )
    }
   async componentDidMount() {
        const {data} = await this.$axios.get("/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2")
       console.log(data.allList)
       this.setState({
           priorList:data.allList
       })
       new Swiper ('.home-banner-wrap', {
           direction: 'horizontal',
           loop: true,
           speed:300,
           autoplay : {
               delay:3000
           },
           pagination: {
               el: '.banner-swiper-pagination',
           },
       })

    }
}