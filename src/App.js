import React from 'react';
import logo from './logo.svg';
import './App.css';
import{
    NavLink,
    Route
} from"react-router-dom"
import Eticket from "./views/eticket/Eticket";
import Juooo from "./views/juooo/Juooo";
import MyJuooo from "./views/myjuooo/MyJuooo";
import Theatre from "./views/theatre/Theatre";
function App() {
  return (
    <div className="App">
      <nav>
          <NavLink to={"/"} exact>首页</NavLink>|
          <NavLink to={"/theatre"}>剧院</NavLink>|
          <NavLink to={"/eticket"}>票夹</NavLink>|
          <NavLink to={"/myjuooo"}>我的</NavLink>
      </nav>

        <Route path={"/"} exact component={Juooo}></Route>
        <Route path={"/theatre"} component={Theatre}></Route>
        <Route path={"/eticket"} component={Eticket}></Route>
        <Route path={"/myjuooo"} component={MyJuooo}></Route>


    </div>
  );
}

export default App;
