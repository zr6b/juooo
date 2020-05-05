import React, {Component} from 'react';
import '../../assets/Theatre.css'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import theatreCreator from '../../store/actionCreator/theatre'
class Theatre extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div id="app">
                    <div data-v-02c87c05="" className="theater-wrap">
                        <div data-v-02c87c05="" className="theater-head">
                            <header data-v-df77aff6="" data-v-02c87c05="" className="head_nav"><h3
                                data-v-df77aff6="" className="title text-single">剧院</h3></header>
                        </div>

                        <div data-v-02c87c05="" className="theater-body">
                            <div data-v-02c87c05="" className="theater-body__main">
                                <div data-v-02c87c05="" className="wrapper">
                                    <div data-v-02c87c05="" className="content">
                                        <div data-v-2b21c040="" data-v-02c87c05="" id="theaterList"
                                             className="theater-list">
                                            <ul data-v-2b21c040="" className="theater-ul">
                                                {
                                                    this.props.theatre_list.map(v => (
                                                        <li key={v.id} data-v-2b21c040="" className="theater-li">
                                                            <div data-v-2b21c040="" className="theater-info-shows">
                                                                <div data-v-2b21c040="" className="theater-info">
                                                                    <a data-v-2b21c040=""
                                                                       onClick={() => {
                                                                           this.props.history.push('/TheatreDetail')
                                                                       }}
                                                                       className="theater-pic-name-count">
                                                                        <div data-v-2b21c040=""
                                                                             className="theater-pic-wrap">
                                                                            <img data-v-2b21c040=""
                                                                                 src={v.pic}
                                                                                 className="theater-pic"/></div>
                                                                        <div data-v-2b21c040=""
                                                                             className="theater-name-count-wrap">
                                                                            <p data-v-2b21c040=""
                                                                               className="theater-name">{v.name}</p> <p
                                                                            data-v-2b21c040=""
                                                                            className="theater-count">{v.count}场在售演出</p>
                                                                        </div>
                                                                    </a>
                                                                    {/*<a data-v-2b21c040=""*/}

                                                                    {/*    className="theater-link"><img data-v-2b21c040=""*/}
                                                                    {/*                                  src="/static/img/more.2ce7873.png"*/}
                                                                    {/*                                  alt=""*/}
                                                                    {/*                                  className="theater-more-btn"/></a>*/}
                                                                </div>


                                                                <div data-v-2b21c040="" className="theater-shows">
                                                                    <div data-v-742f6a43="" data-v-2b21c040=""
                                                                         className="theater-show-wrap">
                                                                        <div data-v-742f6a43=""
                                                                             className="swiper-container swiper-container-horizontal swiper-container-android">
                                                                            <div data-v-742f6a43=""
                                                                                 className="swiper-wrapper">
                                                                                {
                                                                                    v.showList.map(i => (
                                                                                        <div key={i.id}
                                                                                             data-v-742f6a43=""
                                                                                             className="swiper-slide swiper-slide-active">
                                                                                            <div data-v-742f6a43=""
                                                                                                 className="theater-show-date">
                                                                                                <p
                                                                                                    data-v-742f6a43=""
                                                                                                    className="show-date">{i.show_time}</p>
                                                                                                <span
                                                                                                    data-v-742f6a43=""
                                                                                                    className="dot"></span>
                                                                                            </div>
                                                                                            <a data-v-742f6a43=""
                                                                                               href="#"
                                                                                               className="theater-show-pic"><img
                                                                                                data-v-742f6a43=""
                                                                                                src={i.pic}
                                                                                                alt=""
                                                                                                className="show-pic"/></a>
                                                                                        </div>

                                                                                    ))
                                                                                }


                                                                                <div data-v-742f6a43=""
                                                                                     className="swiper-slide">
                                                                                    <div data-v-742f6a43=""
                                                                                         className="theater-show-date">
                                                                                        <p data-v-742f6a43=""
                                                                                           className="show-date"></p>
                                                                                        <span data-v-742f6a43=""
                                                                                              className="dot"></span>
                                                                                    </div>
                                                                                    <a data-v-742f6a43=""
                                                                                       onClick={() => {
                                                                                           this.props.history.push('/TheatreDetail')
                                                                                       }}
                                                                                       className="theater-show-pic">
                                                                                        <p data-v-742f6a43=""
                                                                                           className="theater-check-more">查看更多&gt;</p>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    async componentDidMount() {

        await this.props.getTheatreList.call(this)
        console.log(this.props)
         new Swiper(".swiper-container", {
            loop: false,
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
            spaceBetween: 20,
        })
     }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        theatre_list:state.theatre.theatre_list
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators(theatreCreator,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Theatre);

