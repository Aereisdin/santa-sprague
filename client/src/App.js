import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import User from "./pages/User"
import Private from "./components/Private"
import './App.scss';
import UserContext from './utils/UserContext';
import NavBar from './components/NavBar';
import New from "./pages/New";

function App() {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  })

  function login(user) {
    setUser(user)
  }

  function logout() {
    setUser({
      id: null,
      name: null,
      email: null,
      isAuthenticated: false
    })
  }

  // useEffect(() => {
  //   const getUser = async () => {
  //     const currentUser = await API.getUser()
  //     console.log(currentUser.data)
  //     if (currentUser.data.id) {
  //       setUser({
  //         id: currentUser.data.id,
  //         name: currentUser.data.name,
  //         email: currentUser.data.email,
  //         isAuthenticated: true
  //       })
  //     }
  //   }
  //   getUser()
  // }, [])

  return (
    <>

      <Router>
        <UserContext.Provider value={{ user, login, logout }}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/info' component={New} />
            <Private exact path='/specialplace' component={User} />
          </Switch>
        </UserContext.Provider>
      </Router>

    </>
  );
}

export default App;
