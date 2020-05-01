import React, {Component} from 'react';
import "../../assets/juooo/Classify.scss"
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import {
    NavLink
} from 'react-router-dom';
export default class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Classify: []
        };
    }

    render() {
        return (
            <div>
                        {
                            this.state.Classify.map((v, i) => (
                                <div key={i} className={"label-item__block"}>

                                    <NavLink   className={"label-item__block__column"} to={'/show/showsLibrary'}>
                                        <img src={v.pic} ait=""/>
                                        <span>{v.name}</span>
                                    </NavLink>

                                </div>
                            ))
                        }
                    </div>

        )
    }

    async componentDidMount() {
        const {data} = await this.$axios.get("/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2")
        this.setState({
            Classify: data.classify_list
        })
        console.log(data.classify_list)

        new Swiper ('.home-banner-wrap', {
            direction: 'horizontal',
            loop: true,
            speed:300,
            autoplay : {
                delay:3000
            },
            pagination: {
                el: '.banner-swiper-pagination',
            },
        })

    }
}