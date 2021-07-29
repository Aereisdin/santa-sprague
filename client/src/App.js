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
    photo: null,
    color: null,
    animal: null,
    sportTeam: null,
    waistSize: null,
    shirtSize: null,
    shoeSize: null,
    hobbies: null,
    note: null,
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
      photo: null,
      color: null,
      animal: null,
      sportTeam: null,
      waistSize: null,
      shirtSize: null,
      shoeSize: null,
      hobbies: null,
      note: null,
      isAuthenticated: false
    })
  }

  useEffect(() => {
    API.getUser(user.id)
    .then(res => {
      login({
        id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        photo: res.data.photo,
        color: res.data.color,
        animal: res.data.animal,
        sportTeam: res.data.sportTeam,
        waistSize: res.data.waistSize,
        shirtSize: res.data.shirtSize,
        shoeSize: res.data.shoeSize,
        hobbies: res.data.hobbies,
        note: res.data.note,
        isAuthenticated: true
      })
    })
  }, !document.location.pathname === "/" || "/info")

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
