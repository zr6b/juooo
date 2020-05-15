import React, {Component} from 'react';
import Header from "../../components/juooo/Header";
import Banner from "../../components/juooo/Banner"; //顶部轮播图
import Classify from "../../components/juooo/Classify"; //十个按钮
import VipHomeSchedular from "../../components/juooo/VipHomeSchedular";//vip专享
import Advertion from "../../components/juooo/Advertion"
import HotShow from "../../components/juooo/hotShow"
import PerformingJour from "../../components/juooo/performingJour"
import Stage from "../../components/juooo/stage";
import Remmmend from "../../components/juooo/remmmend";
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
                <div className={'home'} style={{padding:"0 0  1.6rem 0"}}>
                    <Header></Header>
                    <Banner></Banner>
                    <Classify></Classify>
                    <VipHomeSchedular></VipHomeSchedular>
                    <Advertion></Advertion>
                    <HotShow history={this.props.history}></HotShow>
                    <PerformingJour></PerformingJour>
                    <Stage></Stage>
                    <Remmmend></Remmmend>
                </div>
        )
    }
}