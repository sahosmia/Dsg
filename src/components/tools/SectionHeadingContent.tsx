import { SectionHeadingContentType } from "../../types";
import SectionHeading from "./Heading/SectionHeading";
import SectionParagraf from "./Paragraf/SectionParagraf";

const SectionHeadingContent = ({ title, content }:SectionHeadingContentType) => {
  return (
    <div className="row">
      <div className="col-lg-9">
        <SectionHeading>{title}</SectionHeading>
        <SectionParagraf>{content}</SectionParagraf>
      </div>
    </div>
  );
};

export default SectionHeadingContent;
