
const SectionHeading = ({children, isWhite = false}) => {
  return (
    <h1 className={`section-heading ${isWhite ? 'text-white' : ''}`}>{children}</h1>
  )
}

export default SectionHeading