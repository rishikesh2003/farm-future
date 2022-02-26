import styles from "../css/Form.module.css";
import Navbar from "../components/Navbar";
import FarmersLogin from "../components/FarmersLogin";
import MerchantsLogin from "../components/MerchantsLogin";
import { useEffect, useState } from "react";
import supabase from "../config/client";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  useEffect(() => {
    async function checkLoggedIn() {
      const user = supabase.auth.user();
      if (user) {
        history.push("/dashboard");
      }
    }
    checkLoggedIn();
  }, [history]);
  const [chooser, setChooser] = useState(<FarmersLogin />);
  return (
    <>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["form-container"]}>
          <div className={styles.chooser}>
            <div
              onClick={() => {
                setChooser(<FarmersLogin />);
              }}
              className={styles.choose}
            >
              Farmer's Login
            </div>
            <div
              onClick={() => {
                setChooser(<MerchantsLogin />);
              }}
              className={styles.choose}
            >
              Merchant's Login
            </div>
          </div>
          {chooser}
        </div>
      </div>
    </>
  );
}

export default Login;
