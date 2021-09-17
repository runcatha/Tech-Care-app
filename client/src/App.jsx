import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './screens/Home/Home'
import Laptops from './screens/Laptops/Laptops'
import LaptopCreate from './screens/LaptopCreate/LaptopCreate'
import LaptopDetail from './screens/LaptopDetail/LaptopDetail'
import LaptopEdit from './screens/LaptopEdit/LaptopEdit'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import { useHistory } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const history = useHistory()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  const handleRedirect = () => {
    history.push('/sign-in')
    alert('Please sign in first')
}
  return (
    <div className="App">
      <div className='.mega-grid'>
        
        <Switch>
          <Route exact path='/'>
            <Home user={user} />
          </Route>
          <Route exact path='/laptops'>
            <Laptops user={user} />
          </Route>
          <Route exact path='/laptops/:id'>
            <LaptopDetail user={user}
              handleRedirect={handleRedirect} />
          </Route>
          <Route path='/add-laptop' >
            {user ? < LaptopCreate user={user} /> : handleRedirect}
          </Route>
          <Route path='/laptops/:id/edit'>
            {user ? <LaptopEdit user={user} /> : handleRedirect}
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
    </div>
  );
}
          



export default App;
