import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import HowItWorks from './HowItWorks'

function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <div className="container">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
