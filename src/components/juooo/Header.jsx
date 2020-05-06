import React, {Component} from 'react';
import '../../assets/juooo/Header.scss'
import imgdate from '../../static/img/data.png'
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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC"
                                                                     className="head-search__img"/>
                    <span className="head-search__lab">搜索热门演出</span>
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