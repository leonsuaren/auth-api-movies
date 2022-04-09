import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState('');
  const [userLogin, setUserLogin] = useState(false)
  const { success, token, message, user } = userLoginData;

  return (
    <UserContext.Provider value={{ userLoginData, userLogin, setUserLogin, setUserLoginData, user }}>
      { children }
    </UserContext.Provider>
  )
}