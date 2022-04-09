import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './components/routing';

import { NavBar } from './components/navbar';
import { Home } from './views/home';
import { LandPage } from './views/land-page';
import { Movies } from './views/movies';
import { Register } from './views/register';
import { Login } from './views/login';

function App() {
  return (
    <div className=''>
      <Router>
        <NavBar />
        <Routes>
          <Route path='landing-page' element={<LandPage />} />
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='movies' element={<Movies />} />
          </Route>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
