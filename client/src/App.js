import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { Home } from './views/home';
import { LandPage } from './views/land-page';
import { Movies } from './views/movies/Movies';

function App() {
  return (
    <div className=''>
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/land-page' element={<LandPage />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
