import { solutions } from "../../../data/dummy";
import { SolutionItemType } from "../../../types";
import solutionsStyles from "./Solutions.module.css";
import { FaArrowRight } from "react-icons/fa6";

const SolutionsList = () => {
  return (
    <div className="row">
      {solutions.map((solution) => (
        <SolutionsItem key={solution.id} solution={solution} />
      ))}
    </div>
  );
};

const SolutionsItem = ({ solution }: SolutionItemType) => {
  return (
    <div className="col-md-6 col-xl-4">
      <a href="#" className={solutionsStyles.solutions_item}>
        <h2 className={solutionsStyles.solutions_title}>{solution.title}</h2>
        <p className={solutionsStyles.solutions_content}>{solution.content}</p>
        <div className={solutionsStyles.solution_icon}>
          <FaArrowRight />
        </div>
      </a>
    </div>
  );
};

export default SolutionsList;
