import React, {Component} from 'react';
import "../../assets/juooo/Search.scss"
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words:[]
        };
    }
async componentDidMount() {
        const {data}=await this.$axios.get("/Show/Search/getNewHotWord?version=6.1.1&referer=2")
    this.setState({
        words:data
    })
    console.log(data)
}

    render() {
        return (
            <div>
                <div className="search">
                    <header className="head">
                        <div className="search-ipt">
                            <span className="search-icon"></span>
                            <form action="">
                                <input type="search" placeholder="搜索热门演出" className="text"/>
                            </form>
                            <span className="cancel-icon"></span>
                        </div>
                        <span className="cancel" onClick={()=>this.props.history.go(-1)}>取消</span>
                    </header>
                    <section className="search_com">
                        <div className="search_com__wrap">
                            <div  className="default-wrap">
                                <section  className="default history-search">
                                    <h3  className="title clearfix">
                                        <span  className="left">历史搜索</span>
                                        <span  className="icon"></span>
                                    </h3>
                                    <ul  className="list">
                                        <li >第一次约会</li>
                                        <li >魔女宅急便</li>
                                    </ul>
                                </section>
                                <section  className="default hot-search">
                                    <h3  className="title clearfix">
                                        <span  className="left">热门搜索</span>
                                    </h3>
                                    <ul  className="list">
                                        {
                                            this.state.words.map((v,i)=>(
                                                <li key={i}>{v.word}</li>

                                            ))
                                        }

                                    </ul>
                                </section>
                            </div>
                            <div className="empty-wrap" >
                                <section className="show-block">
                                    <div className="show-main">
                                        <div  className="show-model">
                                            <div  className="show-model__main"></div>
                                            <div className="van-loading van-loading--circular van-loading"
                                                 style={{color: "rgb(255, 121, 25)", display: "none"}}>
                                            <span className="van-loading__spinner van-loading__spinner--circular">
                                                <svg viewBox="25 25 50 50" className="van-loading__circular">
                                                    <circle cx="50" cy="50" r="20" fill="none"></circle>
                                                </svg>
                                            </span>
                                            </div>
                                            <p  className="no-more" style={{display: "none"}}>
                                                <span className="no-more__tips">没有更多了</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}