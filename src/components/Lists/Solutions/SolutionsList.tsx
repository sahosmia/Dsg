import { solutions } from "../../../data/dummy";
import { SolutionItemType } from "../../../types";
import ListItem from "../ListItem";
import "./solutions.css";
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
    <ListItem classList="col-md-6 col-xl-4">
      <a href="#" className="solutions_item">
        <h2 className="solutions_title">{solution.title}</h2>
        <p className="solutions_content">{solution.content}</p>
        <div className="solution_icon">
          <FaArrowRight />
        </div>
      </a>
    </ListItem>
  );
};

export default SolutionsList;
