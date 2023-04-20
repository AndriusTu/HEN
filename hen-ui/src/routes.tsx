import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DeliveryPage from './pages/deliveries/DeliveryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DeliveryPage />,
  },
  {
    path: '/another-page',
    element: <div>Hello</div>,
  },
]);

export default router;
