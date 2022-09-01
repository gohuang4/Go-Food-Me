import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import HowItWorks from './HowItWorks'
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import PostForm from './PostForm';

function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <div className="container">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/post-form" element={<PostForm />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
