import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { diseases } from "../data/diseases";

function DiseasePage({ match }) {
  const id = match.params.id;
  const data = diseases[id];
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="center-image">
        <img height={300} src={`/diseases/${id}.jpg`} alt="diseases" />
      </div>
      <div style={{ padding: "20px", lineHeight: "2" }}>
        <h1>{data.name}</h1>
        <h2>Description</h2>
        <p style={{ fontSize: "20px" }}>{data.description}</p>
        <h2>Crops which will get affected:</h2>
        {data.crops.map((d) => (
          <li style={{ listStyle: "unset", fontSize: "20px" }}>{d}</li>
        ))}
        <h2>Solution:</h2>
        <p style={{ fontSize: "20px" }}>{data.solution}</p>
        <div className="button-container">
          <Link className="primary-btn" to={"/disease-curing"}>
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default DiseasePage;
