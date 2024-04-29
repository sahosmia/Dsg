import "./sub-solutions.css";
import { SubSolutionItemListType, SubSolutionItemType } from "../../../types";
import SectionHeadingContent from "../../tools/SectionHeadingContent";
import ListItem from "../ListItem";

const SubSolutionsList = ({ items, title }: SubSolutionItemListType) => {
  return (
    <section className="py-20 light-white-bg">
      <div className="container">
        <SectionHeadingContent
          title={`${title} Solutions`}
          content="We are dedicated to delivering measurable results and driving growth and success for our clients across a wide range of industries."
        />
        <div className="row">
          {items.map((item) => (
            <SubSolutionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SubSolutionItem = ({ item }: SubSolutionItemType) => {
  return (
    <ListItem classList="col-md-6 col-xl-4">
      <div className="item">
        <h2 className="item_title">{item.title}</h2>
        <p className="item_content">{item.content}</p>
      </div>
    </ListItem>
  );
};

export default SubSolutionsList;
