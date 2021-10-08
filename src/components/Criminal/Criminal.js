import "./Criminal.scss";
import { motion } from "framer-motion";

const Criminal = ({ title, description, image, toggleInfochart }) => {
  return (
    <div className="criminal" onClick={toggleInfochart}>
      <motion.div whileHover={{ scale: 1.05 }} className="card">
        <div>
          <img
            className="image"
            width="240px"
            height="220px"
            alt="imagen del criminal"
            src={image}
          />
        </div>
        <h2>{title}</h2>
      </motion.div>
    </div>
  );
};

export default Criminal;
