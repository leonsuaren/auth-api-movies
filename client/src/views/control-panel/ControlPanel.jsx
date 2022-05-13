import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const ControlPanel = () => {

  useEffect(() => {
    const { data } = axios.get('http://localhost:3000/api/private').then((response) => {
      console.log(response);
      }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <h1>Control Panel</h1>
  )
}