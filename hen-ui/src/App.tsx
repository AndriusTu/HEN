import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Protected from './components/Protected';
import ROLES from './enums/roles';
import CreateCourierPage from './pages/createCourier/CreateCourierPage';
import CreateParcelPage from './pages/createParcel/CreateParcelPage';
import GetParcelByIdPage from './pages/getParcelById/GetParcelByIdPage';
import { LoginPage } from './pages/login/LoginPage';
import SeePendingDeliveries from './pages/seePendingDeliveries/SeePendingDeliveries';
import UpdateParcelStatus from './pages/updateParcelStatus/updateParcelStatus';
import ROUTES from './routes';

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
          path={ROUTES.GET_PARCEL}
          element={<GetParcelByIdPage />}
        />
        <Route
          path={ROUTES.PARCELS}
          element={
            <Protected acceptedRoles={[ROLES.COURIER]}>
              <SeePendingDeliveries />
            </Protected>
          }
        />
        <Route
          path={ROUTES.CREATE_COURIER}
          element={
            <Protected acceptedRoles={[ROLES.ADMIN]}>
              <CreateCourierPage />
            </Protected>
          }
        />
        <Route
          path={ROUTES.PARCEL_STATUS_UPDATE}
          element={<UpdateParcelStatus />}
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
      <Route
        path={ROUTES.LOGIN}
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;
