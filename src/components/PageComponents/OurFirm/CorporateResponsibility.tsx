import SectionHeading from "../../tools/Heading/SectionHeading";

import Corporate1 from "../../../assets/corporate/1.png";
import Corporate2 from "../../../assets/corporate/2.png";
import Corporate3 from "../../../assets/corporate/3.png";

const CorporateResponsibility = () => {
  return (
    <section className="light-white-bg py-20">
      <div className="container">
        <div className="row pb-3">
          <SectionHeading>Corporate Responsibility</SectionHeading>
        </div>

        <div className="row corporate-responsibility gap-4 gap-md-0">
          {data.map((item) => (
            <div key={item.id} className="col-md-6 col-xl-4">
              <div className="bg-white">
                <img className="w-100" src={item.image} alt="" />
                <div className="p-4">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    id: 1,
    title: "Initiatives",
    image: Corporate1,
    content:
      "We believe in giving back to the communities we serve thorough our corporate social responsibility program. Focusing on  volunteerism, donations, and partnerships, we strive to make a difference in the lives of those in need and help build stronger, more resilient communities.",
  },
  {
    id: 2,
    title: "Diverse Workforce",
    image: Corporate2,
    content:
      "We believe that diversity is a strength that drives innovation and better decision-making. We are committed to promoting diversity, equity, and inclusion in all aspects of our business, and we foster an environment that respects and values the unique perspectives and contributions of every individual.",
  },
  {
    id: 3,
    title: "Environmental Sustainability",
    image: Corporate3,
    content:
      "We are committed to minimising our environmental impact and promoting sustainable practices. We have implemented a number of initiatives to reduce our carbon footprint, including energy-efficient lighting and equipment, recycling programs, and a focus on paperless operations.",
  },
];

export default CorporateResponsibility;
