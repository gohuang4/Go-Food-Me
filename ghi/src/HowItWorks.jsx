const imageLogo = '/images/GoFoodMe-Logo.png';
const image = '/images/Food-in-need.png';
const image2 = '/images/no-hunger.png';

function HowItWorks() {
    return (
    <div>
        <img src={imageLogo} className="mx-auto d-block" width="400"/>
      <div className="px-4 py-5 my-3 text-center">
        <h1>How Go Food Me Works</h1>
    </div>
    <div className="text-left my-5 py-3">
        <h5>Go Food Me is the best place to fundraise for your food needs.
        If you want to make sure that your donation money is going to feed a
        person then look no farther.</h5>
    </div>
    <div className="text-left my-5 py-3">
        <h3>"There is no exercise better for the heart than reaching down and lifting
            people up." -John Holmes
        </h3>
    </div>
    <div className="text-left my-5 py-3">
        <h5>
            Creating a fundraiser is simple. Sign up for a free Go Food Me Account, 
            Make a post describing your circumstances and what you need to buy food
            for yourself and your family, and that is it. Share the link for your 
            campaign on social media to get your fundraiser out there to as many people
            as possible.  
        </h5>
    </div>
    <div className="text-left my-5 py-3">
        <h3>"I don't want to live in the kind of world where we don't look out for each other.
        Not just the people that are close to us, but anybody who needs a helping hand. I can't 
        change the way anybody thinks, or what they choose to do, but I can do my bit" -Charles de Lint</h3>
    </div>
    </div>
    );
  }
  
  export default HowItWorks;