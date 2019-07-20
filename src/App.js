import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



  


const setUsers = (users) => ({
  type: 'SET_USERS',
  users
})

const getUsers = () => (dispatch) => {
  return fetch('https://ti-react-test.herokuapp.com/users/')
    .then((response) => response.json())
    .then((response) => dispatch(setUsers(response)))
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  handleUsers = () => {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <div className ="container">
        <header className="text-center">
         
          <h1 className="App-title">Welcome to Touch</h1>
        </header>
        <div className="col text-center">
        <button type="button" className="btn btn-warning"onClick={this.handleUsers}>Get Users</button>
      </div>
      
<div className="table">
        <table class="table table-striped table-bordered">
          <thead >
            <tr >
              <th>Name</th>
              <th>Email</th>
              <th>Occupation</th>
              <th>Bio</th>
              <th>Created_at</th>
              <th>Updated_at</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(users => (
              <tr key={Math.random()*100}className="table-primary">
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.occupation}</td>
                <td>{users.bio}</td>
                <td>{users.created_at}</td>
                <td>{users.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
  users: state.users,
});


export default connect(mapStateToProps, { getUsers })(App);