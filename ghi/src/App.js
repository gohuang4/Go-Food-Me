import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import MainPage from './MainPage';
import HowItWorks from './HowItWorks';
import ListFundraisers from './ListFundraisers';
import HowItWorks from './HowItWorks'
import PostForm from './PostForm';

function App(props) {
  const basename = process.env.PUBLIC_URL;
  return (
    <BrowserRouter basename={basename}>
    <Nav />
    <div className="container">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/list-fundraisers" element={<ListFundraisers />} />
        <Route path="/post-form" element={<PostForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}



export default App;
