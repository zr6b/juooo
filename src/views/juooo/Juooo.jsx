import React, {Component} from 'react';
import '../../assets/style/stage.css';
import Stage from "../../components/juooo/stage";
import Remmmend from "../../components/juooo/remmmend";
export default class Juooo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Stage></Stage>
                <Remmmend></Remmmend>
            </div>
        )
    }

}