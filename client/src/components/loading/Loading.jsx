import React, { useEffect } from 'react';

import anime, { easings } from 'animejs';

import './styles.css';

export const Loading = () => {

  useEffect(() => {
    anime({
      targets: '.loading-animation',
      opacity: 0,
      loop: true,
      direction: 'alternate',
    })
  }, []);

  return (
    <h1 className='load-title'>Loading
      <div className='loading-animation'>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </h1>
  )
}