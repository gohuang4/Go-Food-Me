const imageLogo = '/images/GoFoodMe-Logo.png';

function MainPage() {
    return (
      <div className="px-4 py-5 my-5 text-center">
        <img src={imageLogo}/>
        <div className="col-lg-6 mx-auto">
          <p className="fs-2 fw-bold lead mb-4">
            Here to help you feed your neighbor
          </p>
        </div>
      </div>
    );
  }
  
  export default MainPage;