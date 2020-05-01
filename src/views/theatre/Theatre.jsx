import React, {Component} from 'react';
import '../../assets/Theatre.css'

export default class Theatre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theatre_list: []
        };
    }

    render() {
        return (
            <div>
                <div id="app">
                    <div className="theater-wrap">
                        <h3 className="title">剧院</h3>
                        <div className="theater-list">
                            {
                                this.state.theatre_list.map(v=>(
                                    <ul className="theater-ul" key={v.id}>
                                        <li className="theater-li">
                                            <div className="theater-info-shows">
                                                <div className="theater-info">
                                                    <a href="#" className="theater-pic-name-count">
                                                        <div className="theater-pic-wrap">
                                                            <img src={v.pic}
                                                            className="theater-pic"/>
                                                        </div>
                                                        <div className="theater-name-count-wrap">
                                                            <p className="theater-name">{v.name}</p>
                                                            <p className="theater-count">{v.count}场在售演出</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="theater-shows">
                                                    {
                                                        v.showList.map(i=>(
                                                            <div key={i.id}>
                                                                <div >
                                                                    <div className="swiper-slide swiper-slide-active">
                                                                        <div className="theater-show-date">
                                                                            <p className="show-date">{i.show_time}</p>
                                                                            <span className="dot"></span></div>
                                                                        <a className="theater-show-pic">
                                                                            <img
                                                                                src={i.pic}
                                                                                alt="" className="show-pic"/>
                                                                        </a>
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <div className="theater-show-date">
                                                                            <p className="show-date"></p>
                                                                            <span className="dot"></span>
                                                                        </div>
                                                                        <a href="#" className="theater-show-pic">
                                                                            <p className="theater-check-more">查看更多&gt;</p>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const {data} = await this.$axios.get("/theatre/index/getTheatreList");
        this.setState({
            theatre_list: data.theatre_list
        })
    }
}

