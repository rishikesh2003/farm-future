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
    }
    populateData();
  }, []);
  return (
    <div className="dashboard">
      <h1>Farmer Dashboard</h1>

      <p className="agmark-h">
        Agmarknet <span>LIVE</span> Data in per Quintal(100Kgs)
      </p>
      <iframe
        width={"100%"}
        title="market-ticker"
        src="https://agmarknet.gov.in/agnew/namticker.aspx"
      />
      <h2>Links</h2>
      <div className="link-container">
        <li>
          <Link className="primary-btn" to={"/seeds"}>
            Seeds for your region
          </Link>
        </li>

        <li>
          <Link className="primary-btn" to={"/disease-curing"}>
            Disease Curing
          </Link>
        </li>
        <li>
          <Link className="primary-btn" to={"/your-crops"}>
            Your Crops
          </Link>
        </li>
        <li>
          <Link className="primary-btn" to={"/sell-crops"}>
            Sell Crops
          </Link>
        </li>
        <li>
          <Link className="primary-btn" to={"/labour-hiring"}>
            Labour Hiring
          </Link>
        </li>
        <li>
          <Link className="primary-btn" to={"/benefits"}>
            Benefits By Government
          </Link>
        </li>
      </div>
      <h2>Details</h2>
      {user.user_metadata !== undefined ? (
        <div>
          <p>Name: {user.user_metadata.name}</p>
          <p>Role: {user.user_metadata.role.toUpperCase()}</p>
          <p>Email {user.email}</p>
          <p>Mobile: {user.user_metadata.mobile}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FarmerDash;
