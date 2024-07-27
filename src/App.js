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
import JobPostDashboard from './pages/jobposts/JobPostDashboard';
import ApplicationsList from './pages/applications/ApplicationsList';
import AllNotifications from './pages/notifications/AllNotifications';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-profile" element={<EmployerProfileForm/>} />
        <Route path="/employer-profile/:id" element={<EmployerProfilePage/>} />
        <Route path="/post-dashboard" element={<JobPostDashboard/>} />
        <Route path="/all-applicaitons" element={<ApplicationsList/>} />
        <Route path="/all-notifications" element={<AllNotifications/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </Router>
  );
}
export default App;
