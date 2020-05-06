import React, {Component} from 'react';
import '../../assets/juooo/Advertion.scss'
export default class Advertion extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'advertion-warp'}>
                <div className="advertion">
                    <a href="https://m.juooo.com/plus/index" className="advertion__block">
                        <img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png"/>
                    </a>
                </div>
            </div>

        )
    }
}