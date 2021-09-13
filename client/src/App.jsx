import React from 'react'
import './App.css';
import Home from './screens/Home/Home'
import Laptops from './screens/Laptops/Laptops'
import LaptopCreate from './screens/LaptopCreate/LaptopCreate'
import LaptopDetail from './screens/LaptopDetail/LaptopDetail'
import LaptopEdit from './screens/LaptopEdit/LaptopEdit'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route exact path='/laptops'>
          < Laptops user={user} />
        </Route>
        <Route exact path='/products/:id'>
          <LaptopDetail user={user} />
        </Route>
        <Route path='/add-laptop' >
          {user ? < LaptopCreate user={user} /> : <Redirect to='/sign-up' />}
        </Route>
        <Route path='/products/:id/edit'>
          {user ? < LaptopEdit user={user} /> : <Redirect to='/sign-up' />}
        </Route>
        <Route path='/sign-in'>
          <SignIn setUser={setUser} />
        </Route>
        <Route path='/sign-up'>
          <SignUp setUser={setUser} />
        </Route>
        <Route path='/sign-out'>
          <SignOut setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}
        
        

export default App;
