import { createContext } from "react";

const UserContext = createContext({
  user: {
    id: null,
    name: null,
    email: null,
    color: null,
    animal: null,
    sportTeam: null,
    waistSize: null,
    shirtSize: null,
    shoeSize: null,
    hobbies: null,
    note: null,
    isAuthenticated: false
  },

  login: () => { },
  logout: () => { }


});

export default UserContext;