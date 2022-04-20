import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const ControlPanel = () => {

  const token = localStorage.getItem('authToken');
  useEffect(() => {
    axios.get('http://localhost:3000/api/private/user-data',

    ).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <h1>Control Panel</h1>
  )
}