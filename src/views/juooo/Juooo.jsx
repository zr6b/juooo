import React, { Component } from 'react';
import HotShow from "../../components/juooo/hotShow"
import PerformingJour from "../../components/juooo/performingJour"
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <HotShow history={this.props.history}></HotShow>
                <PerformingJour></PerformingJour>
            </div>
        )
    }
}