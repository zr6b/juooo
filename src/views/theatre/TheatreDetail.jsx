import React, {Component} from 'react';
import '../../assets/Theatre.css'
import '../../assets/TheatreDetail.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import theatreDetailCreator from '../../store/actionCreator/theatreDetail'
// import theatreCreator from "../../store/actionCreator/theatre";
class TheatreDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="app">
                    <div data-v-27907926="" className="theater">
                        <div data-v-2ee23910=""  data-v-27907926="" className="load-more theater-detail">
                            <div data-v-2ee23910="">
                                <div data-v-27907926="" style={{backgroundImage:"url(" + require("../../assets/pic/theater_detail_bg.png")+")"}} data-v-2ee23910="" className="theater-detail__header">
                                    <div data-v-27907926="" data-v-2ee23910=""
                                         className="theater-detail__header__title"><i data-v-27907926=""
                                                                                      data-v-2ee23910=""
                                                                                      onClick={()=>{this.props.history.go(-1)}}
                                                                                      className="iconfont ju-icon-arrow theater-detail__header__title__back"></i>
                                    </div>
                                    <div data-v-27907926="" data-v-2ee23910=""
                                         className="theater-detail__header__theater">
                                        <div data-v-27907926="" data-v-2ee23910=""
                                             className="theater-detail__header__theater__detail">
                                            <div data-v-27907926="" data-v-2ee23910=""
                                                 className="theater-detail__header__theater__detail__top">
                                                <div data-v-27907926="" data-v-2ee23910=""
                                                     className="theater-detail__header__theater__detail__top__head"><img
                                                    data-v-27907926="" data-v-2ee23910=""
                                                    src="https://image.juooo.com/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg"
                                                    alt=""/></div>
                                                <div data-v-27907926="" data-v-2ee23910=""
                                                     className="theater-detail__header__theater__detail__top__right">
                                                    <div data-v-27907926="" data-v-2ee23910=""
                                                         className="theater-detail__header__theater__detail__top__right__name">
                                                        南山文体中心
                                                    </div>
                                                    <div data-v-27907926="" data-v-2ee23910=""
                                                         className="theater-detail__header__theater__detail__top__right__sale-count">
                                                        93 场在售演出
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-27907926="" data-v-2ee23910=""
                                                 className="theater-detail__header__theater__detail__address">
                                                深圳&nbsp;|&nbsp;广东省深圳市南山区南山大道和南头街交汇处
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-27907926="" data-v-2ee23910=""
                                         className="theater-detail__header__pointer">
                                        <div data-v-27907926="" data-v-2ee23910=""
                                             className="theater-detail__header__pointer__img"></div>
                                    </div>
                                </div>
                                <div data-v-27907926="" data-v-2ee23910="" className="theater-detail__tip">热门演出</div>

                                {
                                    this.props.list.map(v=>(
                                        <div key={v.schedular_id} data-v-27907926="" data-v-2ee23910="" className="theater-detail__list">
                                            <div data-v-122b9253="" data-v-27907926="" className="item" data-v-2ee23910="">
                                                <div data-v-122b9253="" className="ju-schedule-cell-wrapper cell__base middle">
                                                    <div className="ju-schedule-cell">
                                                        <div className="ju-schedule-cell__cover">
                                                            <div className="image ju-schedule-cell__cover__img"><img
                                                                src={v.pic}
                                                                alt="" className="ju-image ju-image--fill"/></div>
                                                        </div>
                                                        <div className="ju-schedule-cell__info">
                                                            <div className="ju-schedule-cell__info__date-week"><span
                                                                className="ju-schedule-cell__info__date-week__date">{v.start_show_time}</span><span
                                                                className="ju-schedule-cell__info__date-week__week"></span>
                                                            </div>
                                                            <div className="ju-schedule-cell__info__name">
                                                                <div
                                                                    className="ju-schedule-cell__info__name__content ">{
                                                                        v.name
                                                                }
                                                                </div>
                                                            </div>
                                                            <div className="ju-schedule-cell__info__place">
                                                                {v.city_name} | {v.venue_name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-122b9253="" className="item__label"><span data-v-122b9253=""
                                                                                                      className="item__label__desc">{v.support_desc[0]}</span><span
                                                    data-v-122b9253="" className="item__label__desc">{v.support_desc[1]}</span><span
                                                    data-v-122b9253="" className="item__label__desc">{v.support_desc[2]}</span></div>
                                                <div data-v-122b9253="" className="item__price"><span data-v-122b9253=""
                                                                                                      className="item__price__num">￥280</span>
                                                    <span data-v-122b9253="" className="item__price__text">起</span></div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                            <div data-v-2ee23910="" className="load-more__tips">没有更多了</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        // const {data} = await this.$axios.get("/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2");
        // this.setState({
        //     list:data.list
        // })
        // console.log(this.state)
        console.log(this.props)
        await this.props.getTheatreDetailList.call(this)


    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        list: state.theatreDetail.list
    }

}

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(theatreDetailCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TheatreDetail)