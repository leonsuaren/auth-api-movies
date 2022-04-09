import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState('');
  const [userLogin, setUserLogin] = useState(false)
  const { success, token, message, user } = userLoginData;

  useEffect(() => {
    if(localStorage.getItem('authToken')) {
      setUserLogin(true);
    }
  }, []);
console.log(userLogin)
  return (
    <UserContext.Provider value={{ userLoginData, userLogin, setUserLogin, setUserLoginData, user }}>
      { children }
    </UserContext.Provider>
  )
}