import React, { Component } from 'react';
import {
    NavLink,
} from "react-router-dom"
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
        };
    }

    render() {
        return (
            
            <nav className="tabbar">
                <NavLink className="tab-item" onClick={()=>this.setState({index:0})} to={"/"} exact>
                    <div className="tab-item-icon" ><img className="img" src= {require(this.state.index===0 ? "../../assets/images/juooo/home2.png":"../../assets/images/juooo/home1.png")}/></div>
                    <div  className={this.state.index===0?'tab-item-label-active':'tab-item-label'} >首页</div>
                </NavLink>
                <NavLink className="tab-item"  onClick={()=>this.setState({index:1})} to={"/theatre"}>
                    <div className="tab-item-icon" ><img className="img" src={require(this.state.index===1 ? "../../assets/images/juooo/jc2.png":"../../assets/images/juooo/jc1.png")} /></div>
                    <div className={this.state.index===1?'tab-item-label-active':'tab-item-label'} >剧院</div>
                </NavLink>
                <NavLink className="tab-item" onClick={()=>this.setState({index:2})} to={"/eticket"}>
                    <div className="tab-item-icon" ><img className="img" src={require(this.state.index===2 ? "../../assets/images/juooo/pj2.png":"../../assets/images/juooo/pj1.png")} /></div>
                    <div className={this.state.index===2?'tab-item-label-active':'tab-item-label'} >票价</div>
                </NavLink>
                <NavLink className="tab-item" onClick={()=>this.setState({index:3})} to={"/myjuooo"}>
                    <div className="tab-item-icon" ><img className="img" src={require(this.state.index===3 ? "../../assets/images/juooo/my2.png":"../../assets/images/juooo/my1.png")} /></div>
                    <div className={this.state.index===3?'tab-item-label-active':'tab-item-label'} >我的</div>
                </NavLink>
            </nav>
        )
    }
}