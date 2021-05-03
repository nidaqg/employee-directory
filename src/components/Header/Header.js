import React, { Component } from 'react'
import NavBar from "../NavBar/NavBar";
import "./style.css";
import image from "./header.png";

class Header extends Component {
    state ={
        search:"",
        results:[]
    }

    handleInputChange= (e) => {
        this.setState({search: e.target.value});
    };

    handleSearch= (e) => {
        e.preventDefault();

    }

    render (){
        return (
            <div>
        <img alt="header" src={image} className="img-fluid"/>
         <NavBar/>  
        </div>
        )
    }
}



export default Header;