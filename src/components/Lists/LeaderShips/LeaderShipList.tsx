import { leaderShips } from "../../../data/dummy";
import { LeaderShipItemType } from "../../../types";
import ListItem from "../ListItem";
import myStyle from "./LeaderShip.module.css";

const LeaderShipList = ({ quantity }: { quantity: number }) => {
  return (
    <div className="row">
      {leaderShips.slice(0, quantity).map((item) => (
        <LeaderShipItem key={item.id} leaderShip={item} />
      ))}
    </div>
  );
};

const LeaderShipItem = ({ leaderShip }: LeaderShipItemType) => {
  return (
    
    <ListItem classList="col-sm-6 col-md-4 col-xl-3" >
      <a href="#" className={myStyle.leadership_item}>
        <img className="w-100" src={leaderShip.photo} alt="" />
        <h2 className={myStyle.leadership_title}>{leaderShip.name}</h2>
        <h4 className={myStyle.leadership_designation}>
          {leaderShip.designation}
        </h4>
        <p className={myStyle.leadership_sector}>{leaderShip.sector}</p>
      </a>
    </ListItem>
  );
};
export default LeaderShipList;
