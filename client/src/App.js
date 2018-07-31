import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import HeadernavBar from'./components/HeadernavBar'
import SignUp from './components/SignUp'
import Class from './components/Class'
import UserLogin from './components/UserLogin'
import UserHomePage from './components/UserHomePage';

class App extends Component {
  render() {
    return (
    
      <Router>
        <div>
        <HeadernavBar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/users/:userId/class/:classId' component={Class}/>
        <Route exact path='/login' component={UserLogin}/>
        <Route exact path='/users/:userId' component={UserHomePage}/>
        

          
        </Switch>
        </div>
      </Router>
   
    );
  }
}


export default App;
