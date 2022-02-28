import supabase from "../../config/client";
import { useEffect, useState } from "react";
import "../../css/Dashboard.css";
import { Link } from "react-router-dom";

function MerchantDash() {
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
      <h1>Merchant Dashboard</h1>
      <hr />
      <p className="agmark-h">
        Agmarknet <span>LIVE</span> Data in per Quintal(100Kgs)
      </p>
      <iframe
        width={"100%"}
        title="market-ticker"
        src="https://agmarknet.gov.in/agnew/namticker.aspx"
      />
      <hr />
      <h2>Links</h2>
      <div className="link-container">
        <li>
          <Link className="primary-btn" to={"/buy-crops"}>
            Buy Crops
          </Link>
        </li>
        <li>
          <Link className="primary-btn" to={"/instructions"}>
            Instructions
          </Link>
        </li>
      </div>
      <hr />
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

export default MerchantDash;
