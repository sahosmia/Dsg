import { SectionHeadingType } from "../../../types"

const SectionHeading = ({children, isWhite = false} : SectionHeadingType) => {
  return (
    <h1 className={`section-heading ${isWhite ? 'text-white' : ''}`}>{children}</h1>
  )
}

export default SectionHeading