import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import supabase from "../config/client";
function Logout() {
  const history = useHistory();
  useEffect(() => {
    async function handleSignout() {
      await supabase.auth.signOut();
      history.push("/");
    }
    handleSignout();
  }, [history]);

  return <h1>Securely loggging you out....</h1>;
}

export default Logout;
