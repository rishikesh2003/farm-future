import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { diseases } from "../data/diseases";
import { diseasesTamil } from "../data/diseases";
import { useState } from "react";
import { Link } from "react-router-dom";

function Diseases() {
  let data = diseases;
  const [tamil, setTamil] = useState(false);
  if (tamil) {
    data = diseasesTamil;
  } else {
    data = diseases;
  }
  return (
    <>
      <Helmet>
        <title>Disease Curing</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <h2 style={{ textAlign: "center" }}>Diseases</h2>
        <input
          onChange={() => {
            setTamil(!tamil);
          }}
          style={{ minWidth: "unset" }}
          type={"checkbox"}
        />{" "}
        Tamil{" "}
        <input
          onChange={() => {
            setTamil(false);
          }}
          style={{ minWidth: "unset" }}
          type={"checkbox"}
        />{" "}
        English
        <div className="cards">
          {data.map((data, index) => (
            <div
              key={index}
              style={{ width: "340px", minHeight: "350px" }}
              className="crop-card"
            >
              <div className="center-image">
                <img
                  style={{ height: "200px", width: "unset" }}
                  src={`/diseases/${index}.jpg`}
                  alt="disease"
                />
              </div>
              <p style={{ fontSize: "20px" }}>
                <span>Name:</span> {data.name}
              </p>
              <p>
                <span>Description:</span> {data.description}
              </p>
              <div style={{ padding: "20px" }} className="button-container">
                <Link className="primary-btn" to={`/disease-curing/${index}`}>
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Diseases;
