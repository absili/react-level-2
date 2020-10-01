import React , { Component, Fragment  }  from 'react';
import './UsersList.css';


class UsersShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    }
  }

  render() {

    const VectorListTemplate = (
      <Fragment>
        <table width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>login</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.items && this.props.users.items.map((user,i) => {
              return [
                  <tr key={i}>
                          <td>{user.id}</td>
                          <td>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" ><img src={user.avatar_url} alt="" width="30"/></a>
                          </td>
                          <td>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" >{user.login}</a>
                          </td>
                      </tr>
                ] ;

            })}
         </tbody>
       </table>
      </Fragment>
    );
    return  this.props.users  ? VectorListTemplate : '';
  }
}


export default UsersShow;
