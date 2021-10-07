import "./Criminal.scss";

const Criminal = ({ title, description, image }) => {
  return (
    <div className="criminal">
      <div className="card">
        <div>
          <img
            className="image"
            width="260px"
            height="240px"
            alt="imagen del criminal"
            src={image}
          />
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Criminal;
