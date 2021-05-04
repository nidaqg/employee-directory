import React from 'react';
import "./style.css";

export default function SearchBar(props) {
    return (
                <div className="mt-3 w-50">

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
                            <button className="btn localBtn btn-dark ml-2" type="submit" onClick={props.handleSearch}>Search</button>
                   </form>

               </div>
    )
}
