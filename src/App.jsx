import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  const location = useLocation();

  if(location.pathname === "/") {
    location.pathname = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePage />} />
         <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
}
export default App;
