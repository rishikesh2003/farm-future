import styles from "../css/Form.module.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import FarmersSignup from "../components/FarmersSignup";
import MerchantsSignup from "../components/MerchantsSignup";
import supabase from "../config/client";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

function Signup() {
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
  const [chooser, setChooser] = useState(<FarmersSignup />);
  return (
    <>
      <Helmet>Farm Future | Signup</Helmet>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["form-container"]}>
          <div className={styles.chooser}>
            <div
              onClick={() => {
                setChooser(<FarmersSignup />);
              }}
              className={styles.choose}
            >
              Farmer's Sign Up
            </div>
            <div
              onClick={() => {
                setChooser(<MerchantsSignup />);
              }}
              className={styles.choose}
            >
              Merchant's Sign Up
            </div>
          </div>
          {chooser}
        </div>
      </div>
    </>
  );
}

export default Signup;
