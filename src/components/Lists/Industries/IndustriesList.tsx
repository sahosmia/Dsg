import { Link } from "react-router-dom";
import { industries } from "../../../data/dummy";
import { IndustrieItemType } from "../../../types";
import industriesStyle from "./Industries.module.css";

const IndustriesList = () => {
  return (
    <div className="row">
      {industries.map((industrie) => (
        <InsudtriesItem key={industrie.id} industrie={industrie} />
      ))}
    </div>
  );
};

const InsudtriesItem = ({ industrie }: IndustrieItemType) => {
  return (
    <div className="col-md-6 col-xl-4">
      <Link to={`/industries/${industrie.id}`} className={industriesStyle.item}>
        <img className="w-100" src={industrie.image} alt="" />

        <div className={industriesStyle.title_box}>
          <span className={industriesStyle.title} >{industrie.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default IndustriesList;
