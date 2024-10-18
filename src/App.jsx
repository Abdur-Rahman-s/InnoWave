import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Components/Page/Dashboard';
import Incidents from './Components/Page/incidents/Incidents';
import IncidentsOne from './Components/Page/incidents/IncidentsOne';
import IncidentTwo from './Components/Page/incidents/incidentTwo';
import Nav from './Components/Shared/Nav';
import InciidentThree from './Components/Page/incidents/InciidentThree';
import { HandleStateContext, HandleStateProvider } from './Components/utilities/Context';
import { IncidentFour } from './Components/Page/incidents/IncientFour';
import Finished from './Components/Page/incidents/Finished';


const Layout = ({ children }) => {
  const location = useLocation();
  const { handleSubmit } = useContext(HandleStateContext);

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
    if (['/new-incident', '/get-started', '/next-step', '/second-step' , '/finished'  ].includes(location.pathname)) {
      return 'hidden';
    }
    return '';
  };

  // Function to control the visibility of the menu
  const menuControl = () => {
    if (['/get-started', '/next-step', '/second-step'].includes(location.pathname)) {
      return 'block';
    }
    return 'hidden';
  };

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
      <Nav 
        title={getPageTitle()} 
        value={getPageValue()} 
        classNames={handleMenu()} 
        className={menuControl()}Pass the function without invoking it
      />
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <HandleStateProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/new-incident" element={<IncidentsOne />} />
            <Route path="/get-started" element={<IncidentTwo />} />
            <Route path="/next-step" element={<InciidentThree />} />
            <Route path="/second-step" element={<IncidentFour />} />
            <Route path="/finished" element={<Finished />} />
          </Routes>
        </Layout>
      </HandleStateProvider>
    </BrowserRouter>
  );
}

export default App;
