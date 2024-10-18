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
import Location from './Components/Page/Location';

const image_2 = '/public/HeadingImage.svg'; // Public folder থেকে ইমেজের পাথ

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
        return (
          <div className='flex gap-2 ' >
            <img src={image_2} alt="Incident 2" />
            <p>DR-4699 March 2023 Severe Storms</p>
          </div>
        );
      default:
        return '';
    }
  };

  // Function to hide the menu for specific routes
  const handleMenu = () => {
    if (['/new-incident', '/get-started', '/next-step', '/second-step', '/finished'].includes(location.pathname)) {
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

  const getPageValue = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Welcome back';
      case '/incidents':
        return 'Home - Incidents';
      case '/locations':
        return 'Incidents - DR-4699 March 2023 Severe Storms';
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
        className={menuControl()}
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
            <Route path="/locations" element={<Location />} />
          </Routes>
        </Layout>
      </HandleStateProvider>
    </BrowserRouter>
  );
}

export default App;
