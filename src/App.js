import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./components/pages/home/Home";
import Contact from './components/pages/contact/Contact';
import { Box } from '@chakra-ui/react';
import ToggleColorMode from './components/ToggleColorMode';
import Login from './components/pages/login/Login';
import DashPatient from './components/pages/dashboard/DashPatient/DashPatient';
import DashDefault from './components/pages/dashboard/DashPatient/dashDefault/DashDefault';
import AdminProfil from './components/pages/dashboard/DashPatient/adminProfil/AdminProfil';
import PatientRvList from './components/pages/dashboard/DashPatient/listRdv/PatientRvList';
import BlackList from './components/elements/blackList/BlackList';
import ListKYC from './components/elements/kyc/listKYC/ListKYC';
import ListAgent from './components/elements/addAgent/listAgent/ListAgent';
import AddAgent from './components/elements/addAgent/AddAgent';
import Virement from './components/elements/virement/Virement';
import TransfertRoot from './components/elements/transfertNational/TransfertRoot';
import RetraitArgent from './components/elements/retraitArgent/RetraitArgent';
import ParametragePlafond from './components/elements/plafond/ParametragePlafond';
import AddToKYC from './components/elements/kyc/AddToKYC';
import TrClientClient from './components/elements/transfertNational/clientToClient/trClientClient/TrClientClient';
import TrClientGab from './components/elements/transfertNational/clientToGab/trClientGab/TrClientGab';
import TrClientBank from './components/elements/transfertNational/clientToBank/trClientBank/TrClientBank';
import TrKycGab from './components/elements/transfertNational/KycToGab/trKycGab/TrKycGab';
import TrKycBank from './components/elements/transfertNational/KycToBank/trKycBank/TrKycBank';



function App() {




  return (
    <>
    <Router>
      <Box className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>     
            <Route path='/login' element={<Login/>}/>

            <Route path='/dash' element={<DashPatient/>}>
              <Route path='' element={<DashDefault/>}/>
              <Route path='virement' element={<Virement/>}/>
              <Route path='profil' element={<AdminProfil/>}/>

              <Route path='transfert-national' element={<TransfertRoot/>}/>
                  <Route path='TrClientClient' element={<TrClientClient/>}/>
                  <Route path='TrClientGab' element={<TrClientGab/>}/>
                  <Route path='TrClientBank' element={<TrClientBank/>}/>
                  <Route path='TrKycGab' element={<TrKycGab/>}/>
                  <Route path='TrKycBank' element={<TrKycBank/>}/>
              

              <Route path='liste-noir' element={<BlackList/>}/>

              <Route path='liste-agent' element={<ListAgent/>}/>
              <Route path='ajouter-agent' element={<AddAgent/>}/>

              <Route path='liste-prospects' element={<ListKYC/>}/>
              <Route path='ajouter-to-kyc/:id' element={<AddToKYC />}/>
              <Route path='ajouterToKyc' element={<AddToKYC />}/>
              <Route path='retrait-argent' element={<RetraitArgent/>}/>ParametragePlafond

              <Route path='plafond' element={<ParametragePlafond/>}/>
              
            </Route>            
            <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
      </Box>
    </Router>
      

    </>
  );
}

export default App;
