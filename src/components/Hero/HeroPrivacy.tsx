import HeroCard from "../tools/HeroCard/HeroCard"
import bg from "../../assets/hero/demo.png"


const HeroPrivacy = ({title}:{title:string}) => {

  return (
   
  <section className=" position-relative ">
    <div
        className="hero-industry-capability"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
      <div className="overlay-privacy">
        <div className="container">
          <div className="row">
            <div className="">
              <HeroCard
                
                title={title}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  
  
  )
}

export default HeroPrivacy