import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import supabase from "../config/client";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

function Logout() {
  const history = useHistory();
  useEffect(() => {
    async function handleSignout() {
      await supabase.auth.signOut();
      history.push("/");
    }
    handleSignout();
  }, [history]);

  return (
    <>
      <Helmet>
        <title>Signout</title>
      </Helmet>
      <Navbar />

      <div
        style={{ height: "100vh", flexDirection: "column" }}
        className="loading-container"
      >
        <p style={{ padding: "20px 0", fontSize: "18px" }}>
          Securely Logging you out...
        </p>
        <div className="loader"></div>
      </div>
    </>
  );
}

export default Logout;
