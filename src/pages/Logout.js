import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import supabase from "../config/client";
import { Helmet } from "react-helmet";

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
      <h1>Securely loggging you out....</h1>
    </>
  );
}

export default Logout;
