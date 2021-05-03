import React from 'react';
import "./style.css";

export default function NavBar(props) {
    return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-end">
                    <form className="d-flex">
                        <input 
                        name="name-search"
                        id="nameSearch"
                        value={props.search}
                        onChange={props.handleInputChange}
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search by Name" 
                        aria-label="Search"/>
                            <button className="btn localBtn btn-light ml-2" type="submit" onClick={props.handleSearch}>Search</button>
                   </form>
               </div>
           </nav>  
    )
}
