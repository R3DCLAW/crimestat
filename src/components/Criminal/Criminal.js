import "./Criminal.scss";

const DEFAULT_CRIMINAL_PLACERHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a1/JacktheRipper1888.jpg";

const Criminal = () => {
  return (
    <div className="criminal">
      <h2>Jack El Destripador</h2>
      <div>
        <img
          width="200"
          alt="una imagen"
          src={DEFAULT_CRIMINAL_PLACERHOLDER_IMAGE}
        />
      </div>
    </div>
  );
};

export default Criminal;
