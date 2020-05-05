import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Swiper from "swiper";
import 'swiper/css/swiper.min.css'
import '../../assets/juooo/Banner.scss'
export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner:[]
        };
    }

    render() {
           return (
            <div className={'banner-warp'}>
                <div className={'swiper-container banner-swiper'}>
                    <div className={'swiper-wrapper banner-swiper-wrapper'}>
                        {
                            this.state.banner.map((v,i)=>(
                                <div className={'swiper-slide banner-swiper-slide'} key={i} >
                                    <Link to={v.url}>
                                        <img style={{width:'100%',height:'100%'}} src={v.image_url} alt="" />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-pagination banner-swiper-pagination"></div>
                </div>
            </div>
        )

    }
   async componentDidMount(){
        const {data} = await this.$axios.get("/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2")
        this.setState({
            banner:data.slide_list
        })
        console.log(data)
       new Swiper ('.swiper-container', {
           direction: 'horizontal',
           loop: true,
           speed:300,
           autoplay : {
               delay:3000
           },
           pagination: {
               el: '.swiper-pagination',
           },
       })
    }
}