import React, {Component} from 'react';
import '../../assets/juooo/Header.scss'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className={'head head--active'}>
                <div className={'head-address'}>
                    <strong className="{head-address__icon}"></strong>
                    <span className={'head-address__name text-single'}>全国</span>
                </div>
                <div className={'head-search'}>
                    <img src="/"  alt="" className={'head-search__img'}/>
                        <span className={'head-search__lab'}>搜索热门演出</span>
                </div>
                <div className={'head-icon'}>
                    <span className={'head-calendar'}>
                        <img src="" alt=""/>
                        </span>
                </div>
            </header>

    )
    }
}