
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
import DetailActivity from "./pages/DetailActivity";
import NavbarAdmin from "./layout/admin/NavbarAdmin";
import DasboardAdmin from "./pages/admin/DasboardAdmin";
import LayoutTemoignageAdmin from "./layout/admin/temoignage/LayoutTemoignageAdmin";
import ListTemoignageAdminPage from "./pages/admin/temoignage/ListTemoignageAdminPage";
import AddTemoignagePage from "./pages/admin/temoignage/AddTemoignagePage";
import UpdateTemoignagePage from "./pages/admin/temoignage/UpdateTemoignagePage";
import ViewTemoignagePage from "./pages/admin/temoignage/ViewTemoignagePage";
import ListMemberPage from "./pages/admin/members/ListMemberPage";
import ListUserPage from "./pages/admin/users/ListUserPage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

        {/* Admin ***********************************************************************************/}
        <Route path={`${AllRoutes.admin}`} element={<NavbarAdmin/>} >
          <Route index element={<DasboardAdmin/>}/>
          {/* Temoignage Admin */}
          <Route path={`${AllRoutes.temoins}`} element={<LayoutTemoignageAdmin/>}>
            <Route index element={<ListTemoignageAdminPage/>} />
            <Route path={`:id`} element={<ViewTemoignagePage/>} />
            <Route path={`${AllRoutes.add}`} element={<AddTemoignagePage/>} />
            <Route path={`${AllRoutes.update}/:id`} element={<UpdateTemoignagePage/>} />
          </Route>
          {/* Membres */}
          <Route path={`${AllRoutes.memberlist}`} element={<ListMemberPage/>}/>
          {/* Utlisateurs */}
          <Route path={`${AllRoutes.userlist}`} element={<ListUserPage/>}/>

        </Route>


        {/* Site web ********************************************************************************/}
        <Route path="/" element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route index path={`${AllRoutes.about}`} element={<HomePage/>}/>
          <Route index path={`${AllRoutes.contact}`} element={<ContactPage/>}/>
          
          {/* temoignage */}
          <Route index path={`${AllRoutes.temoignage}`} element={<TemoignagePage/>}/>
          <Route index path={`${AllRoutes.temoignage}/:id`} element={<DetailActivity/>}/>

          {/* Evenement */}
          <Route index path={`${AllRoutes.evenement}`} element={<EvenementPage/>}/>
          <Route index path={`${AllRoutes.evenement}/:id`} element={<DetailActivity/>}/>

          {/* Dons */}
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
