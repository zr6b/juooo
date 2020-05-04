import React, {Component} from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {Link} from 'react-router-dom';
import Header from "../../components/juooo/Header";
import Banner from "../../components/juooo/Banner"; //顶部轮播图
import Classify from "../../components/juooo/Classify"; //十个按钮
import VipHomeSchedular from "../../components/juooo/VipHomeSchedular";//vip专享
import Advertion from "../../components/juooo/Advertion"
// import { connect } from 'react-redux';//高阶组件
// import {bindActionCreators} from 'redux'//绑定并执行一次函数
// import Banner from "../../components/juooo/Banner";
// import juoooCreator from '../../store/actionCreator/juooo';//首页的数据请求方法
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
    async componentDidMount() {


    }
}
