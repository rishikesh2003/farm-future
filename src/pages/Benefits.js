import benefits from "../data/benefits";
import Navbar from "../components/Navbar";

function Benefits() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Benefits Provided by Government</h1>
      {benefits.map((benefit, index) => (
        <div className="benefits-card">
          <div className="center-image">
            <img src={`/benefits/${String(index)}.jpg`} alt="benefits" />
          </div>
          <p className="name">{benefit.name}</p>
          <p className="description">{benefit.description}</p>
          <div className="button-container">
            <a
              className="primary-btn"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={benefit.url}
            >
              More Details
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Benefits;
