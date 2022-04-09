import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState('');
  console.log(userLoginData)

  return (
    <UserContext.Provider value={{ userLoginData, setUserLoginData }}>
      { children }
    </UserContext.Provider>
  )
}