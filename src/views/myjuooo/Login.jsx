import React, {Component} from 'react';
import "../../assets/style/login.css"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"login"}>
                <div className="logo">
                    <img src="https://m.juooo.com/static/img/login_logo.4a43235.png" alt=""/>
                </div>
                <div className={"text_group"}>
                    <input onKeyUp={this.login.bind(this)} type="text" placeholder="请输入手机号按回车跳转"/>
                </div>
            </div>
        )
    }

    async login(e) {
        if (e.keyCode === 13) {
            const phoneNumber = e.target.value;
            const data = await this.$axios.post("/Login", {
                phoneNumber
            })
            if (data.ok === 1) {
                localStorage.phoneNumber = phoneNumber;
                console.log(phoneNumber);
                this.props.history.go(-1);
            } else {
                alert(data.msg);
            }
            console.log(data);
        }
    }
}