import React from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper"
//import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Wrapper>
      <EmployeeTable/>
      </Wrapper>
    </div>
  );
}

export default App;
