import ButtonPink from "./ButtonPink/ButtonPink";
const HeroSection = (props) => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>{props.line}</p>
        <ButtonPink></ButtonPink>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      {/* <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image"/>
        </div> */}

    </main>
  );
};

export default HeroSection;
