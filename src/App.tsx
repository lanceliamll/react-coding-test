import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Me from './pages/Me';
import MyCoupons from './pages/MyCoupons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-coupons",
    element: <MyCoupons />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/me",
    element: <Me />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
