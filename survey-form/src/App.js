import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Home from './pages/home';
import Survey from './pages/survey';
import Verification from './pages/verification';

function App() {
  return (
    <div className="App">
      {/* <Home>
      </Home> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Survey/>} />
            <Route path='verification/*' element={<Verification/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
