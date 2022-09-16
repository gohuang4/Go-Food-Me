import { Link } from 'react-router-dom'

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '');
const wolf = basename +'/images/wolf.png';

function Footer() {

  return(
    <footer className="text-center text-lg-start bg-light text-muted mt-auto">
      <section className="">
        <div className="container text-center text-md-start my-5">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Go Food Me
              </h6>
              <p>
                Here to help you feed your neighbor
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Contact Us
              </h6>
              <p>
                <a href="https://www.linkedin.com/in/nick-wagemann/"
                target="_blank" rel="noreferrer" className="text-reset">Nick Wagemann</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/huang-gordon/"
                target="_blank" rel="noreferrer" className="text-reset">Gordon Huang</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/jeremiah-dyck-922097229/"
                target="_blank" rel="noreferrer" className="text-reset">Jeremiah Dyck</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/hjlyuan/"
                target="_blank" rel="noreferrer" className="text-reset">Howard Vidal-Yuan</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/cameron-webbe-520777205/"
                target="_blank" rel="noreferrer" className="text-reset">Cameron Webbe</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-3">
                Useful links
              </h6>
              <p>
                <a href="https://gitlab.com/404-team-not-found1/go-food-me"
                target="_blank" rel="noreferrer" className="text-reset">Git</a>
              </p>
              <p>
                <Link to="/how-it-works" className="text-reset">How it Works</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">Want to make something like this click the link below</h6>
              <a href="https://www.hackreactor.com/"
                target="_blank" rel="noreferrer" className="text-reset">Join Hack Reactor</a>
            </div>

          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: '#02a95c'}}>
        <a className="text-reset fw-bold" href="https://gitlab.com/404-team-not-found1/go-food-me">&copy; 2022 Go Food Me</a>
        <div></div>
        <a className="text-reset fw-bold" href="go-food-me/wolf"><img src={wolf} alt="the wolf"/></a>
      </div>
    </footer>
    
  )
}

export default Footer;
