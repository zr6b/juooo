import React, {Component} from 'react';
import '../../assets/juooo/City.scss'
export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hot_city_List:[],
            all_citys:[]
        };
    }
   async componentDidMount() {
        const {data} = await this.$axios.get("/city/city/getHotCityList?version=6.1.1&referer=2")
       const citys = await this.$axios.get("/city/city/getSortedCityList?version=6.1.1&referer=2")
       this.setState({
            hot_city_List:data.hot_city_List,
            all_citys:Object.values(citys.data)
        })
       console.log(this.state.all_citys)
       // console.log(data.hot_city_List,citys.data)

       // console.log(citys.data,Array.prototype.slice.call(citys.data))
    }

    render() {
        return (
            <div>
                <div className="city">
                    <header className="head_nav">
                        <span className="head_icon back_icon" ></span>
                        <h3 className="title text-single">城市选择</h3></header>
                    <section className="city-block">
                        <div className="city-block__wrapper">
                            <div className="city-block__con">
                                <span className="city-block__con__tip">定位城市</span>
                                <ul className="city-block__con__wrap">
                                    {/*<li className="city-block__con__item location--item">*/}
                                    {/*    定位中...*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="city-block__con">
                                <span className="city-block__con__tip">热门城市</span>
                                <ul className="city-block__con__wrap">
                                    {
                                        this.state.hot_city_List.map(v=>(
                                            <li className="city-block__con__item hots--item" key={v.id}>
                                                {v.name}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                            <section className="city-block__row" >
                                {
                                    this.state.all_citys.map(v=>(
                                        <div className="city-block__row__con" key={v.id}>
                                            <span className="city-block__row__con__letter">{v.id}</span>
                                            <ul className="city-block__row__con__wrap">
                                                {
                                                    v.list.map(i=>(
                                                        <li className="city-block__row__con__column" key={i.id}>
                                                            {i.name}
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    ))
                                }

                            </section>
                        </div>
                    </section>
                    <section className="city-nav"><span className="city-nav__lab">定位</span>
                        <span className="city-nav__lab">热门</span>
                        {
                            this.state.all_citys.map(s=>(
                                <span className="city-nav__lab" key={s.id}>{s.id}</span>

                            ))
                        }
                    </section>
                </div>
            </div>
        )
    }
}