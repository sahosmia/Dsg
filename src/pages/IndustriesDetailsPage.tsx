import { useParams } from "react-router-dom";
import { getIndustryitem } from "../util";
import {
  Cta,
  Header,
  HeroIndustryCapability,
  SectionHeading,
  SectionParagraf,
  SolutionsExploreHome,
} from "../resource/component";

const IndustriesDetailsPage = () => {
  const { industrieId } = useParams();
  const data = getIndustryitem(industrieId);

  return (
    <>
      <Header />
      <HeroIndustryCapability
        bg={data.banner}
        title={data.title}
        content=" We are dedicated to delivering measurable results and driving
                  growth and success for our clients across a wide range of
                  industries."
      />

      <section className="py-20">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <SectionHeading>Overview</SectionHeading>
              <SectionParagraf>
                The technology, media, and telecommunications (TMT) sector is
                one of the most dynamic and rapidly evolving industries in the
                world. As businesses in this sector continue to embrace digital
                technologies, they are seeking innovative solutions to help them
                stay ahead of the competition. At Digital Solutions Group (DSG),
                we have extensive experience working with TMT companies to help
                them leverage the latest digital tools and techniques to achieve
                their goals.
              </SectionParagraf>
              <SectionParagraf>
                Businesses in the TMT sector are using digital technologies in a
                variety of ways, from improving customer engagement to
                streamlining operations and reducing costs. For example, many
                companies are using artificial intelligence (AI) and machine
                learning (ML) to automate routine tasks and gain insights from
                data. Others are leveraging cloud computing to enhance
                collaboration and agility, and to scale their infrastructure as
                needed. According to a report by IDC, spending on digital
                transformation in the TMT sector is expected to reach $1.3
                trillion by 2025.
              </SectionParagraf>

              <SectionHeading>How we can help</SectionHeading>
              <SectionParagraf>
                At DSG, we have worked with a range of TMT clients to provide
                customized solutions that address their unique challenges and
                opportunities. For example, we developed a mobile application
                for a media company that enabled them to deliver personalized
                content and advertising to users based on their preferences and
                behavior. We also helped a telecommunications provider
                streamline their customer service operations by implementing a
                chatbot solution that provided instant support to customers.{" "}
              </SectionParagraf>
              <SectionParagraf>
                By working closely with our clients and leveraging our technical
                expertise, we help TMT companies stay ahead of the curve and
                achieve their business objectives.
              </SectionParagraf>
            </div>
          </div>
        </div>
      </section>

      <SolutionsExploreHome />
      <Cta title="Connect with Us" btnText="Contact" url="/" />
    </>
  );
};

export default IndustriesDetailsPage;
