import supabase from "../../config/client";
import { useEffect, useState } from "react";
import "../../css/Dashboard.css";
import { Link } from "react-router-dom";

function FarmerDash() {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function populateData() {
      const user = await supabase.auth.user();
      await setUser(user);
      console.log(user);
    }
    populateData();
  }, []);
  return (
    <div className="dashboard">
      <h1>Farmer Dashboard</h1>
      <hr />
      <h2>Links</h2>
      <div className="link-container">
        <li>
          <Link to={"/your-crops"}>Your Crops</Link>
        </li>
        <li>
          <Link to={"/seeds"}>Buy Seeds</Link>
        </li>
        <li>
          <Link to={"/disease-curing"}>Disease Curing</Link>
        </li>
        <li>
          <Link to={"/benefits"}>Benefits By Government</Link>
        </li>
        <li>
          <Link to={"/sell-crops"}>Sell Crops</Link>
        </li>
        <li>
          <Link to={"/labour-hiring"}>Labour Hiring</Link>
        </li>
      </div>
      <hr />
      <h2>Details</h2>
      {user.user_metadata !== undefined ? (
        <div>
          <p>Name: {user.user_metadata.name}</p>
          <p>Role: {user.user_metadata.role.toUpperCase()}</p>
          <p>Email {user.email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FarmerDash;
