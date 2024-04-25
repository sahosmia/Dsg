import { Link } from "react-router-dom";
import { solutions } from "../../../data/dummy";
import { SolutionItemType } from "../../../types";
import { FaArrowRight } from "react-icons/fa6";
import "./capability.css"

const CapabilityList = () => {
  return (
    <div className="row">
      {solutions.map((solution) => (
        <CapabilityItem key={solution.id} solution={solution} />
      ))}
    </div>
  );
};

const CapabilityItem = ({ solution }: SolutionItemType) => {
  return (
    <div className="col-md-6 col-xl-4">
      <Link
        to={`/capabilities/${solution.id}`}
        className='solutions_item'
      >
        <img className="w-100" src={solution.image} alt="" />
        <div className='solutions_box'>
          <h2 className='solutions_title'>{solution.title}</h2>
          <p className='solutions_content'>
            {solution.content}
          </p>
          <div className='solution_icon'>
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CapabilityList;
