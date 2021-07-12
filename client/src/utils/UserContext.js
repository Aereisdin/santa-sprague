import { createContext } from "react";

const UserContext = createContext({
  user: {
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  },

  login: () => { },
  logout: () => { }


});

export default UserContext;