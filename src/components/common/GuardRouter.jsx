//路由守卫
import React, {Component} from 'react';

import {
    withRouter
} from "react-router-dom"
 class GuardRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <this.props.component {...this.props}/>
        )
    }
    componentWillMount() {
        //判断是否登录
        if(this.props.isAuthorization){
            // 判断身份
            if(!localStorage.phoneNumber){
                this.props.history.push("/login");
            }
        }
        // console.log(this.props.path);
    }
 }
export default withRouter(GuardRouter)