import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const ControlPanel = () => {

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    var data = JSON.stringify({
      "collection": "users",
      "database": "moviesauth",
      "dataSource": "LoginSystem",
      "filter": {
        "username": "leonsuarez"
      }
    });

    var config = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-mufru/endpoint/data/beta/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'yzl2Hmnc9lO1e3pFoL8YwMy7q7KhOhZetfUI4iKoob56mfBqQkccgcMRbJIwZ08k'
      },
      data: data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
  }, []);

  return (
    <h1>Control Panel</h1>
  )
}