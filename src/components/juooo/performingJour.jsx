import React, {Component} from 'react';
import "../../assets/juooo/performingJour.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from 'redux';
import hotShowCreatorfrom from '../../store/actionCreator/juooo'
import moment from 'moment'; 
class performingJour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
                {
                   this.props.performingJourList.map(v=>(
                        <div className="performingJour" key={v.id}>
                            <div>
                                <div className="performingJour-top">
                                    <h3 className="performingJour-top-l">巡回演出</h3>
                                    <div className="performingJour-top-r">
                                        <span className="performingJour-top-r-r">全部</span>
                                        <img className="performingJour-top-r-l" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="></img>
                                    </div>
                                </div>
                            </div>
                            <div className="performingJour-b">
                                <div className="performingJour-b1">
                                    <div className="performingJour-c">
                                        <a>
                                        <div className="performgJour-c1">
                                            <div className="performingJour-c1-l">
                                                <img src={v.mobile_col_img} alt=""/>
                                            </div>
                                            <div className="performingJour-c1-r">
                                                <div className="time">
                                                    <span>{moment(v.end_time).format("YYYY-MM-DD")}</span>
                                                </div>
                                                <div className="name">
                                                    {v.name}
                                                </div>
                                                <div className="price">
                                                    <span>￥{v.min_price}</span>
                                                    <i>&nbsp;起</i>
                                                </div>
                                                <div className="performingJour-c1-r-b">
                                                    <div className="performingJour-c1-r-b-l">
                                                        <span className="six">{v.citys.length}</span>&nbsp;
                                                        <span>城巡演</span>
                                                    </div>  
                                                    <div className="performingJour-c1-r-b-r">
                                                        <span>上海&nbsp;|&nbsp;广州&nbsp;|&nbsp;深圳&nbsp;|&nbsp;成都|&nbsp;西安|&nbsp;杭州</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        )
    }

    async componentDidMount() {
        
        await this.props.getPerFormingJourList.call(this);
        // console.log(this.props)
    }
}


function mapStateToProps({performingJour}){
// console.log(performingJour)
return {
    performingJourList:performingJour.performingJourList
}
}
function mapDispatchToProps(dispatch){
return bindActionCreators(hotShowCreatorfrom,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(performingJour);