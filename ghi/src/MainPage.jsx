import { NavLink } from 'react-router-dom';

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '');
const imageLogo = basename +'/images/GoFoodMe-Logo.png';

function MainPage() {
    return (
      <div>
      <div className="px-4 py-5 my-5 text-center">
        <img src={imageLogo} alt="" />
        <div className="col-lg-6 mx-auto">
          <p className="fs-2 fw-bold lead mb-4">
            Here to help you feed your neighbor
          </p>
          <NavLink to={"/post-form"}><button type="button" className="btn-lg btn-outline-success">Create Fundraiser</button></NavLink>
        </div>
      </div>
      </div>
    );
  }
  
  export default MainPage;