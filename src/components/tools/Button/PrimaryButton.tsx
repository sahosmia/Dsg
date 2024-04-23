import { Link } from "react-router-dom"
import { ButtonType } from "../../../types"

const PrimaryButton = ({children, url}:ButtonType) => {
  return (
    <Link to={url} className="primary-button">{children}</Link>
  )
}

export default PrimaryButton