import React , { Component }  from 'react';
import  UsersList  from './UsersList';
import  SearchForm  from '../../components/SearchForm';

import axios from 'axios';

class UsersShow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // items list checkbox
      users: []
    }
  }

  /**
  * function handle on check/uncheck All items checkbox
  * @param userlogin : user login
  */
 handleGetUsersFromGit = async  (userlogin) => {
    await axios.get(`https://api.github.com/search/users?q=${userlogin}`)
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleSearch={this.handleGetUsersFromGit}/>
        {this.state.users &&
          <UsersList
            users={this.state.users}
           />
        }
      </div>
    );
  }
}


export default UsersShow;
