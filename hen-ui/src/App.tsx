import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path={ROUTES.CREATE_PARCEL}
          element={<div>create parcel</div>}
        />
        <Route
          path={ROUTES.PARCELS}
          element={<div>parcels</div>}
        />
        <Route
          path={ROUTES.ACCOUNTS}
          element={<div>accounts</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
