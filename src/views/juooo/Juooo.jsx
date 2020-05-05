import React, {Component} from 'react';
import 'swiper/css/swiper.min.css'
import Header from "../../components/juooo/Header";
import Banner from "../../components/juooo/Banner"; //顶部轮播图
import Classify from "../../components/juooo/Classify"; //十个按钮
import VipHomeSchedular from "../../components/juooo/VipHomeSchedular";//vip专享
import Advertion from "../../components/juooo/Advertion"
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
                <div className={'home'}>
                    <Header></Header>
                    <Banner></Banner>
                    <Classify></Classify>
                    <VipHomeSchedular></VipHomeSchedular>
                    <Advertion></Advertion>
                </div>
        )
    }
}
