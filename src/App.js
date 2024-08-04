import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Home from './pages/Home';
import EmployerProfileForm from './pages/EmployerProfileForm';
import EmployerProfilePage from './pages/EmployerProfilePage';
import JobPostDashboard from './pages/jobposts/JobPostDashboard';
import ApplicationsList from './pages/applications/ApplicationsList';
import AllNotifications from './pages/notifications/AllNotifications';
import Help from './pages/Help';
import JobPostListPage from './pages/jobposts/JobPostListPage';
import JobPostDetail from './pages/jobposts/JobPostDetail';
import { EmployerProvider } from './context/EmployerContext';
import JobPostForm from './pages/jobposts/JobPostForm';
import Hero from './pages/Hero';
import SignIn from './components/logins/SignIn';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <EmployerProvider>
        <ConditionalHeader />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-profile" element={<EmployerProfileForm/>} />
          <Route path="/employer-profile/:id" element={<EmployerProfilePage/>} />
          <Route path="/post-dashboard" element={<JobPostDashboard/>} />
          <Route path="/all-applications" element={<ApplicationsList/>} />
          <Route path="/all-notifications" element={<AllNotifications/>} />
          <Route path="/create-job-post/:employerId" element={<JobPostForm/>} />
          <Route path="/job-posts-list" element={<JobPostListPage/>} />
          <Route path="/job-post/:employerId/:jobId" element={<JobPostDetail/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </EmployerProvider>
    </Router>
  );
}

function ConditionalHeader() {
  const location = useLocation();

  // Check if the current path is not '/' or '/sign-in'
  const shouldShowHeader = location.pathname !== '/' && location.pathname !== '/sign-in';

  return shouldShowHeader ? <Header /> : null;
}

export default App;
