import React, { Component } from 'react';
import APIcalls from '../../utils/APIcalls';
import TableDetail from '../TableDetail/TableDetail';
import SearchBar from '../SearchBar/SearchBar';
import './style.css';

class EmployeeTable extends Component {
state = {
    list : [],
    search: "",
    ifSorted:false

};

//API call everytime the page loads
componentDidMount () {
    APIcalls.getEmployees()
    .then(res => 
      this.setState({list:res.data.results}))
    .catch(err => console.log(err));
};

//handle input change
handleInputChange = (e) => {
  this.setState({search:e.target.value});
};

//handle button click
handleSearch = (e) => {
  e.preventDefault();
  console.log("searched term: "+ this.state.search)
}

//sorter function to sort in ascending order or descending order depending on what order it is currently in
sorter= (e,property)=> {
  console.log(property)
  if(!this.state.ifSorted) {
  const sorted = this.state.list.sort(function (a, b) {
    if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
    if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
    return 0;
  })
   this.setState({list:sorted, ifSorted:true})
  } else {
    const sorted = this.state.list.sort(function (a, b) {
      if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
      if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
      return 0;
    }).reverse()
     this.setState({list:sorted, ifSorted:false})

  }
}

//render the table
render() {
    return (
      <div>
      <SearchBar
      search={this.state.search}
      handleInputChange={this.handleInputChange}
      handleSearch={this.handleSearch}
      />
        <div className="mt-4 table-responsive">
           <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile</th>

      <th scope="col"
          onClick={e => this.sorter(e,"email")}
          className="sortBtn">
          First Name
        </th>

      <th scope="col">Last Name</th>
      <th scope="col"
      onClick={e => this.sorter(e,"email")}
      className="sortBtn">
      Email
      </th>
    </tr>
  </thead>

  <tbody>
    
       {this.state.list.filter((list)=> {
        if(!this.state.search) {
          return list
        } 
        else if (list.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || list.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
          return list
        }
      })
      .map(result => (
        
        <TableDetail
        id={result.login.uuid}
        image={result.picture.medium}
       first= {result.name.first}
       last= {result.name.last}
       email= {result.email}
      />
      )) 
      }
    
  
  </tbody>
</table> 
        </div>
        </div>
    )
}


}

export default EmployeeTable;
