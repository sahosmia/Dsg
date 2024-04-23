import { HeroCardType } from "../../../types";
import heroCardStyle from "../HeroCard/HeroCard.module.css"

const HeroCard = ({ subtitle, title, content }: HeroCardType) => {
  return (
    <div className="col-sm-8 col-md-6 col-lg-4">
      <div className={heroCardStyle.hero_card}>
        {subtitle && <h6>{subtitle}</h6>}
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </div>
    </div>
  );
};

export default HeroCard;
