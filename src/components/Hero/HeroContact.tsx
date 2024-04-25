import HeroCard from "../tools/HeroCard/HeroCard";

const HeroContact = () => {
  return (
    <section className="our-firm-hero position-relative ">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="">
              <HeroCard
                
                title="Contact Us"
                content="We are dedicated to delivering measurable results and driving growth and success for our clients across a wide range of industries."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
