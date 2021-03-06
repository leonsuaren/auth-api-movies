import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './components/routing';

import { UserProvider } from './context/user-context';

import { NavBarComponent } from './components/navbar';
import { Home } from './views/home';
import { LandPage } from './views/land-page';
import { Movies } from './views/movies';
import { SingleMovie } from './views/single-movie';
import { ControlPanel } from './views/control-panel';
import { Register } from './views/register';
import { Login } from './views/login';
import { ForgotPassword } from './views/forgot-password';
import { ResetPassword } from './views/reset-password';

function App() {
  return (
    <div className=''>
      <UserProvider>
        <Router>
          <NavBarComponent />
          <Routes>
            <Route path='landing-page' element={<LandPage />} />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='movies' element={<Movies />} />
              <Route path='movies/:movieId' element={<SingleMovie />} />
              <Route path='control-panel' element={<ControlPanel />}/>
            </Route>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password/:resetToken' element={<ResetPassword />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
