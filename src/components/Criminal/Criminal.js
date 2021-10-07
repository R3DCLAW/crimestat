import "./Criminal.scss";

const Criminal = ({ title, description, image, toggleInfochart }) => {
  return (
    <div className="criminal" onClick={toggleInfochart}>
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
