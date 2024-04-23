import IndustriesList from "../../Lists/Industries/IndustriesList";
import SectionHeadingContent from "../../tools/SectionHeadingContent";

const IndustrieServeHome = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeadingContent
          title="Industries We Serve"
          content="We are dedicated to delivering measurable results and driving growth and success for our clients across a wide range of industries."
        />
        <IndustriesList />
      </div>
    </section>
  );
};

export default IndustrieServeHome;
