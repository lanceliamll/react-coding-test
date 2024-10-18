import React from 'react';
import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Me from './pages/Me';
import MyCoupons from './pages/MyCoupons';
import Navigation from './components/Navigation';

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

console.log({ router })

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-coupons" element={<MyCoupons />} />
          <Route path="/me" element={<Me />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
