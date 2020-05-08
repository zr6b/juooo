import React, {Component} from 'react';
import "../../assets/style/eticket.css"
export default class Eticket extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app">
                <div className={"my-ticket-list"}>
                    <div className={"ticket-list my-ticket-list__list"}>
                        <section  className={"title ticket-list__title"}><span
                            className={"title__text"}>票夹</span>
                            <div  className={"title__nav-wrapper "}>
                                <div  className={"title__nav"}><i className={"iconfont ju-icon-ellipsis title__nav__ellipsis"}></i>
                                </div>
                            </div>
                        </section>
                        <div className={"ticket-empty"}><img  src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png" className={"ticket-empty__img"}/>
                            <div  className={"ticket-empty__tips"}>暂无电子票</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}