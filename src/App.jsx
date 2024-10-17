import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Components/Page/Dashboard';
import Incidents from './Components/Page/incidents/Incidents';
import IncidentsOne from './Components/Page/incidents/IncidentsOne';
import { IconBase } from 'react-icons';
import IncidentTwo from './Components/Page/incidents/incidentTwo';
import Nav from './Components/Shared/Nav';

const Layout = ({ children }) => {
  const location = useLocation();

  // Function to get the page title based on the current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/incidents':
        return 'Incidents';
      case '/locations':
        return 'Locations';
      case '/activities':
        return 'Activities';
      case '/documents':
        return 'Documents';
      case '/cypher-ai':
        return 'Cypher AI';
      default:
        return ''; 
    }
  };

  // Function to hide the menu for specific routes
  const handleMenu = () => {
    if (location.pathname === '/new-incident') {
      return 'hidden'; 
    }
    if(location.pathname === '/get-started') {
      return 'hidden'
    }
    return ''; 
  };

    const menuControl = ()=> {
      if (location.pathname === '/get-started') {
        return 'block'
      }
      else{
        return 'hidden'
      }
    }

  // Function to get the subtitle based on the current route
  const getPageValue = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Welcome back';
      case '/incidents':
        return 'Home - Incidents';
      default:
        return ''; 
    }
  };

  return (
    <>
      <Nav title={getPageTitle()} value={getPageValue()} classNames={handleMenu()} className={menuControl()} />
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/new-incident" element={<IncidentsOne />} />
          <Route path="/get-started" element={<IncidentTwo/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
