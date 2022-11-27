import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import AllRoutes from './nametitle/AllRoutes';
import ContactPage from './pages/ContactPage';
import TemoignagePage from './pages/TemoignagePage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar/>}>
          <Route index path={``} element={<HomePage/>}/>
          <Route index path={`${AllRoutes.about}`} element={<HomePage/>}/>
          <Route index path={`${AllRoutes.contact}`} element={<ContactPage/>}/>
          <Route index path={`${AllRoutes.temoignage}`} element={<TemoignagePage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
