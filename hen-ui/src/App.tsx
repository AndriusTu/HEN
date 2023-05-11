import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Protected from './components/Protected';
import CreateParcelPage from './pages/createParcel/CreateParcelPage';
import { LoginPage } from './pages/login/LoginPage';
import ROUTES from './routes';
import authService from './services/api/authService';
import SeePendingDeliveries from './pages/seePendingDeliveries/SeePendingDeliveries';
import UpdateParcelStatus from './pages/updateParcelStatus/updateParcelStatus';
import GetParcelByIdPage from './pages/getParcelById/GetParcelByIdPage';
import CreateCourierPage from './pages/createCourier/CreateCourierPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path={ROUTES.CREATE_PARCEL}
          element={
            <Protected isLoggedIn={authService.isLoggedIn()}>
              <CreateParcelPage />
            </Protected>
          }
        />
        <Route
          path={ROUTES.GET_PARCEL}
          element={<GetParcelByIdPage />}
        />
        <Route
          path={ROUTES.PARCELS}
          element={
            <Protected isLoggedIn={authService.isLoggedIn()}>
              <SeePendingDeliveries />
            </Protected>
          }
        />
        <Route
          path={ROUTES.CREATE_COURIER}
          element={
            <Protected isLoggedIn={authService.isLoggedIn()}>
              <CreateCourierPage />
            </Protected>
          }
        />
        <Route
          path={ROUTES.PARCEL_STATUS_UPDATE}
          element={<UpdateParcelStatus />}
        />
        <Route
          path={ROUTES.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={
            <Navigate
              to={ROUTES.CREATE_PARCEL}
              replace
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
