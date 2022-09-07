import { NavLink } from 'react-router-dom';

const imageIcon = '/images/GoFoodMe-Icon.png'
const imageLogo = '/images/GoFoodMe-Logo.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src={imageIcon} alt='' width="50"/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <nav className="navbar bg-light">
        </nav>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/fundraiser"><button className="btn btn-outline-success me-4 " type="button">Fundraiser</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/how-it-works"><button className="btn btn-outline-success me-4" type="button">How it Works</button></NavLink>
            </li>
            <div className="center">
            <img className="me-4" src={imageLogo} alt='' width="200"/>
            </div>
            <li className="nav-item">
              <NavLink className="nav-link" to="sign-in"><button className="btn btn-outline-success me-4" type="button">Sign In</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sign-up"><button className="btn btn-outline-success me-4" type="button">Sign Up</button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;