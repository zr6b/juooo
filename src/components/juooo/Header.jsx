import React, {Component} from 'react';
import '../../assets/juooo/Header.scss'
import imgdate from '../../static/img/data.png'
import imgsearch from '../../static/img/search.png'
import{
    NavLink,
} from"react-router-dom"
// import {Map} from "react-amap"
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city:''
        };
    }

    render() {
        return (

            <header className="head">
                <NavLink to={"/City"}>
                    <div className="head-address" >
                        <strong className="head-address__icon"></strong>
                        <span className="head-address__name text-single">全国</span>
                    </div>
                </NavLink>

                <div  className="head-search">
                    <NavLink to={"/search"}>
                        <img src={imgsearch} className="head-search__img"/>
                        <span className="head-search__lab">搜索热门演出</span>
                    </NavLink>
                </div>
                <div  className="head-icon">
                    <img style={{width: '0.53333rem',height: '0.53333rem'}} src={imgdate} />
                    <div  className="head-calendar">

                    </div>
                </div>
            </header>
    )
    }



}