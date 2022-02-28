import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import { Link } from "react-router-dom";

function BuyNow({ match }) {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function populateData() {
      setLoading(true);

      const { data } = await supabase.from("crops").select();
      await data.forEach((d) => {
        if (d.email === match.params.email) {
          setCropData(d);
        }
      });
      setLoading(false);
    }
    populateData();
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="details">
        <h1>Buy Now</h1>
        <h2>Farmer's Details</h2>
        <div
          style={{ width: "300px", alignItems: "flex-start" }}
          className="card"
        >
          <p>
            <span>Name: </span>
            {cropData.farmer_name}
          </p>
          <p>
            <span>Mobile: </span>
            {cropData.mobile}
          </p>
          <p>
            <span>Email: </span>
            {cropData.email}
          </p>
          <p>
            <span>District: </span>
            {cropData.district}
          </p>
        </div>
        <h2>
          Before proceeding to buy please make sure you checked the basic
          instructions
        </h2>
        <div style={{ width: "200px" }} className="button-container">
          <Link to={"/instructions"} className="primary-btn">
            Instructions
          </Link>
        </div>
      </div>
    </>
  );
}

export default BuyNow;
