import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import Layout from './components/Layout';
import CreateParcelPage from './pages/createParcel/CreateParcelPage';
import SeePendingDeliveries from "./pages/seePendingDeliveries/SeePendingDeliveries";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path={ROUTES.CREATE_PARCEL}
          element={<CreateParcelPage />}
        />
        <Route
          path={ROUTES.PARCELS}
          element={<SeePendingDeliveries/>}
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
