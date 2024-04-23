import SolutionsList from "../../Lists/Solutions/SolutionsList";
import SectionHeadingContent from "../../tools/SectionHeadingContent";

const SolutionsExploreHome = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <SectionHeadingContent
          title="Explore our solutions"
          content="We leverage 2,000 consultants, engineers and data scientists, to make
          the journey to becoming a digital business tangible, sustainable, and
          profitable."
        />
        <SolutionsList />
      </div>
    </section>
  );
};

export default SolutionsExploreHome;
