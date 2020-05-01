import React from 'react';
import './App.css';
// import Button from "antd/es/button"
import{
    NavLink,
} from"react-router-dom"
import router from "./router/index"
import MyRouter from "./components/common/MyRouter";

function App() {
  return (
    <div className="App">
        <MyRouter router={router}></MyRouter>

      <nav>
          <NavLink to={"/"} exact>首页
          </NavLink>|
          <NavLink to={"/theatre"}>剧院</NavLink>|
          <NavLink to={"/eticket"}>票夹</NavLink>|
          <NavLink to={"/myjuooo"}>我的</NavLink>
      </nav>




    </div>
  );
}

export default App;
