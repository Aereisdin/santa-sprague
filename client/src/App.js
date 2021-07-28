import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home"
import Private from "./components/Private"
import './App.scss';
import UserContext from './utils/UserContext';
import NavBar from './components/NavBar';
import New from "./pages/New";
import Users from "./pages/Users";
import Santa from "./pages/Santa";

function App() {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  })

  function login(user) {
    console.log(user)
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
  //     console.log(user)
  //     if (user.data.id) {
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
            <Private exact path='/specialplace' component={Home} />
            <Private exact path='/profile' component={Users} />
            <Private exact path='/Santa' component={Santa} />
          </Switch>
        </UserContext.Provider>
      </Router>

    </>
  );
}

export default App;
