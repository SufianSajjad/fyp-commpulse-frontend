import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

// Asynchronous function to initialize MSAL
const initializeMsal = async () => {
  try {
    await msalInstance.initialize(); // Await the initialization
  } catch (error) {
    console.error('Error during MSAL initialization:', error);
  }
};

// Call the initialization function immediately
initializeMsal();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <MsalProvider instance={msalInstance}>
      <BrowserRouter>

        <Routes>

          <Route element={<Login />} path='/' />

          <Route element={<Layout />} path='/home'> {/* This acts as the parent component here */}

            {/* Define all the child components here */}

          </Route>

        </Routes>

      </BrowserRouter>

    </MsalProvider>

  </React.StrictMode>
);
