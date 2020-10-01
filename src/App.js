import React , { Component }  from 'react';
import './App.css';
import  UsersShow  from './modules/users/UsersShow';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1> [front/react] Github user search </h1>
        <UsersShow/>
      </div>
    );
  }
}


export default App;
