import SectionHeading from "./tools/Heading/SectionHeading";
import SectionParagraf from "./tools/Paragraf/SectionParagraf";
import IndustriesImage from "../assets/industries.png";
import PrimaryButton from "./tools/Button/PrimaryButton";

const Industries = () => {
  return (
    <div className="row align-items-center  flex-column flex-lg-row gap-5 gap-lg-0 ">
      <div className="col-lg-6">
        <img className="w-100" src={IndustriesImage} alt="industries" />
      </div>
      <div className="col-lg-5 offset-lg-1">
        <SectionHeading>Our Digital Capabilities </SectionHeading>
        <SectionParagraf>
          From healthcare to finance, retail to hospitality, our team of experts
          can deliver innovative solutions tailored to meet the unique needs of
          your business. Our proven track record of success and commitment to
          providing exceptional service make us the perfect partner for any
          organisation looking to succeed in the digital age.
        </SectionParagraf>
        <PrimaryButton url="industries">Browse by Industry</PrimaryButton>
      </div>
    </div>
  );
};

export default Industries;
