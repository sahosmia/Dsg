import { Link } from "react-router-dom";
import { solutions } from "../../../data/dummy";
import { SolutionItemType } from "../../../types";
import solutionsStyles from "./Capability.module.css";
import { FaArrowRight } from "react-icons/fa6";

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
        className={solutionsStyles.solutions_item}
      >
        <img className="w-100" src={solution.image} alt="" />
        <div className={solutionsStyles.solutions_box}>
          <h2 className={solutionsStyles.solutions_title}>{solution.title}</h2>
          <p className={solutionsStyles.solutions_content}>
            {solution.content}
          </p>
          <div className={solutionsStyles.solution_icon}>
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CapabilityList;
