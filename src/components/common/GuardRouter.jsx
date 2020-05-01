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
    }
 }
export default withRouter(GuardRouter)