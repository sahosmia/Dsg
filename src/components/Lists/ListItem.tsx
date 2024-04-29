import { motion } from "framer-motion";
import { downVariants } from "../../motion-variants";

const ListItem = ({children, classList}) => {
  return (
    <motion.div
      className={classList}
      variants={downVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >{children}</motion.div>
  )
}

export default ListItem