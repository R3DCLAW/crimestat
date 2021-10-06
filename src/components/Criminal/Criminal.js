import "./Criminal.scss";

const Criminal = ({ title, description, image }) => {
  return (
    <div className="criminal">
      <h2>{title}</h2>
      <div>
        <img width="200" alt="una imagen" src={image} />
      </div>
    </div>
  );
};

export default Criminal;
