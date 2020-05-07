import React from 'react';
import './App.css';
import router from "./router/index"
import MyRouter from "./components/common/MyRouter";
import Table from "./components/common/Table"
function App() {
  return (
    <div className="App">
      <MyRouter router={router}></MyRouter>
      <Table></Table>
    </div>
  );
}

export default App;
