import SectionHeadingContent from '../../tools/SectionHeadingContent'
import LeaderShipList from '../../Lists/LeaderShips/LeaderShipList'

const OurFirmLiderShip = () => {
  return (
   

       <section className="py-20">
      <div className="container">
        <SectionHeadingContent
          title="Our Leadership"
          content="We invest in ingenuity, empower collaboration, and bring together a focused breadth and depth of diverse talent to multiply our collective impact."
        />
        <LeaderShipList />
      </div>
    </section>
  
  )
}

export default OurFirmLiderShip