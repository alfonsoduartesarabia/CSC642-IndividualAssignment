import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter,Routes, Route } from 'react-router-dom';
// import Home from './pages/home';
import Survey from './pages/survey';
import Verification from './pages/verification';
import VerificationRoute from './pages/verificationRoute';

function App() {
  return (
    <div className="App">
      {/* <Home>
      </Home> */}
        <HashRouter>
          <Routes>
            <Route path='/' element={<Survey/>} />
            <Route path='verification/*' element={
              <VerificationRoute>
                <Verification/>
              </VerificationRoute>
            } />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
