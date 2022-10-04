import NavBar from "./components/Navbar/Navbar";
import Root from './pages/Root';
import NotFound from './pages/Errors/NotFound';
import Profile from './pages/user/me/Profile';

import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import AuthenticationProvider from "./contexts/AuthenticationContext/AuthenticationContext";

function App() {
  const user = true;
  return (
    <AuthenticationProvider>
      <NavBar />
      <div className="container pt-2">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/user/me/profile" element={<Profile />} />
          <Route path="/login" element={<Navigate to='/' />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthenticationProvider>
  )
}

export default App
