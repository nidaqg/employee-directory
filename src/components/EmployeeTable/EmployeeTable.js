import React, { Component } from 'react';
import APIcalls from '../../utils/APIcalls';
import TableDetail from '../TableDetail/TableDetail';
import SearchBar from '../SearchBar/SearchBar';

class EmployeeTable extends Component {
state = {
    list : [],
    search: ""
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
  
}

//render the table
render() {
    return (
      <div>
      <SearchBar/>
        <div className="mt-4 table-responsive">
           <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>

  <tbody>
    
      {this.state.list.map(result => (
        
        <TableDetail
        id={result.login.uuid}
        image={result.picture.medium}
       first= {result.name.first}
       last= {result.name.last}
       email= {result.email}
      />
      ))}
    
  
  </tbody>
</table> 
        </div>
        </div>
    )
}


}

export default EmployeeTable;
