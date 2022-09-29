import NavBar from "./components/Navbar/Navbar";
import Root from './pages/Root';
import Alert from 'react-bootstrap/Alert';

import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="*" element={<Alert variant='warning' className='mt-3'>
              <h1>404: Not found</h1>
              <div>This is not the page you're looking for...</div>
            </Alert>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
