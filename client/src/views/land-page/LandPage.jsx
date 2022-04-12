import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const LandPage = () => {
  return (
    <main class="px-3 text-center center-content">
      <div>
        <h1>Movies Authentication Project.</h1>
        <p class="lead">In eiusmod exercitation eiusmod consequat. Cillum excepteur ullamco eu occaecat in et amet sunt culpa aliquip.</p>
        <p class="lead">
          <Link to='/login' class="btn btn-lg btn-primary fw-bold border-white bg-primary">Log In</Link>
        </p>
      </div>
    </main>
  )
}