import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InscriptionForm from './InscriptionForm'
import ListeInscriptions from './ListInscreption'
import NavBar from './Navbar';
import NoPage from './NoPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<InscriptionForm/>} />
          <Route path="ajout" element={<ListeInscriptions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
