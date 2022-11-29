import  React from  "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import AllRoutes from './nametitle/AllRoutes';
import ContactPage from './pages/ContactPage';
import TemoignagePage from './pages/TemoignagePage';
import EvenementPage from './pages/EvenementPage';
import DonPage from './pages/DonPage';
import MemberSignUpPage from './pages/MemberSignUpPage';
import SchoolBiblePage from './pages/SchoolBiblePage';
import DetailTemoingnagePage from "./pages/DetailActivity";
import DetailActivity from "./pages/DetailActivity";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        {/* Site web */}
        <Route path="/" element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route index path={`${AllRoutes.about}`} element={<HomePage/>}/>
          <Route index path={`${AllRoutes.contact}`} element={<ContactPage/>}/>

          <Route index path={`${AllRoutes.temoignage}`} element={<TemoignagePage/>}/>
          <Route index path={`${AllRoutes.temoignage}/:id`} element={<DetailActivity/>}/>

          <Route index path={`${AllRoutes.evenement}`} element={<EvenementPage/>}/>
          <Route index path={`${AllRoutes.evenement}/:id`} element={<DetailActivity/>}/>

          <Route index path={`${AllRoutes.dons}`} element={<DonPage/>}/>
          <Route index path={`${AllRoutes.dons}/:id`} element={<DetailActivity/>}/>

          <Route index path={`${AllRoutes.ecole}`} element={<SchoolBiblePage/>}/>
          <Route index path={`${AllRoutes.member}`} element={<MemberSignUpPage/>}/>
        </Route>
        {/* BackOffice */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
