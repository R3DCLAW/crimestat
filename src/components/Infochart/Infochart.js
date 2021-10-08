import "./Infochart.scss";
import { motion } from "framer-motion";

const Infochart = ({ closeInfochart, title, image, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="criminal-infochart"
    >
      <div className="criminal-content">
        <img
          className="criminal-image"
          width="150px"
          height="130px"
          alt="imagen del criminal"
          src={image}
        />
        <div className="criminal-name">{title}</div>
        <p className="criminal-description">{description}</p>
        <button className="close-button" onClick={closeInfochart}>
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default Infochart;
