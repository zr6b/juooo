import React, {Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import "../../assets/juooo/VipHomeSchedular.scss"
import imgvip from "../../static/img/vip.png"
// import {
//     NavLink
// } from 'react-router-dom';
export default class VipHomeSchedular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorList:[]
        };
    }

    render() {
        return (
            <div className={'vip-ahead-warp'}>
                <section className={'vip-ahead'}>
                    <a href="/vip/index/1">
                        <div className={'vip-ahead__advert'}>
                            <div className={'vip-ahead__advert__left'}>
                                <img src={imgvip} className={'vip-ahead__advert__left__icon'}/>
                                <span className={'vip-ahead__advert__left__tip'}>会员专享折扣</span>
                            </div>
                            <div className={'vip-ahead__advert__right'}>
                                <span className={'vip-ahead__advert__right__lab'}>99元/年</span>
                                <span className={'vip-ahead__advert__right__icon'}></span>
                            </div>
                        </div>
                    </a>
                    <div className={'vip-ahead__swiper'}>
                        <div className={'swiper-container home-banner-wrap'}>
                            <div className={'swiper-wrapper'}>
                                {
                                    this.state.priorList.map(v=>(
                                        <div className={'swiper-slide'}
                                            // style={"width: 272px;"}
                                             data-swiper-slide-index="2" key={v.schedular_id}>
                                            <div className={'vip-ahead__list'}>
                                                <div className={'vip-ahead__list__item'}>
                                                    <a href="/ticket/108610" className={'vip-ahead__list__item__wrap'}>
                                                        <img
                                                            src={v.pic}
                                                            className={'vip-ahead__list__item__wrap__pic'}/></a>
                                                </div>
                                                <div className={'vip-ahead__list__info'}><a href="/ticket/108610"><h3
                                                    className={'vip-ahead__list__info__title text-double'}>{v.schedular_name}</h3>
                                                </a>
                                                    <p className={'vip-ahead__list__info__tip item-discount'}>
                                                        <span className={'item-discount__num c_ff6'}>{v.min_discount}</span>
                                                        <span className={'vip-ahead__list__info__tip__text'}>折起</span>
                                                    </p>
                                                </div>
                                                <a href="/ticket/108610">
                                                    <span className={'vip-ahead__list__lab'}>立即抢购</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))

                                }
                            </div>

                            <div className={'swiper-pagination vip-pagination swiper-pagination-bullets'} >
                                {/*<span className={'swiper-pagination-bullet'}></span>*/}
                                {/*<span  className={'swiper-pagination-bullet swiper-pagination-bullet-active'}></span>*/}
                                {/*<span className={'swiper-pagination-bullet'}></span>*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        )
    }
    async componentDidMount() {
        const {data} = await this.$axios.get("/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2")
        console.log(data.allList)
        this.setState({
            priorList:data.allList
        })
        new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed:300,
            autoplay : {
                delay:3000
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })

    }
}