import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import EmployerProfileForm from './pages/EmployerProfileForm';
import EmployerProfilePage from './pages/EmployerProfilePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-profile" element={<EmployerProfileForm/>} />
        <Route path="/employer-profile/:id" element={<EmployerProfilePage/>} />
      </Routes>
    </Router>
  );
}
export default App;
