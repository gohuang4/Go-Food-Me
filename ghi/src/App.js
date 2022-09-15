import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import MainPage from './MainPage';
import HowItWorks from './HowItWorks'
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import PaymentForm from './PaymentForm';
import ListFundraisers from './ListFundraisers';
import PostForm from './PostForm';
import DetailFundraisers from './DetailFundraisers';
import UpdateForm from './UpdatePost';
import { AuthProvider } from './useToken';

function App(props) {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <AuthProvider>
      <BrowserRouter basename={basename}>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/list-fundraisers" element={<ListFundraisers />} />
          <Route path="/list-fundraisers/fundraisers/:id" element={<DetailFundraisers />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/payment-form" element={<PaymentForm />} />
          <Route path="/update-post/:id" element={<UpdateForm />} />
        </Routes>
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;
