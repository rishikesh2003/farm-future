import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from "../images/logo.jpeg";
import supabase from "../config/client";

function Navbar() {
  const user = supabase.auth.user();
  const [toggle, setHandleToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <img className={styles.logo} src={logo} alt="logo" />{" "}
        <h3> Farm Future</h3>
      </div>
      <div className={`${styles["nav-box"]} ${toggle ? styles.toggle : ""}`}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/labours"}>For Labours</Link>
        </li>
        {user && (
          <>
            <li>
              <Link className="primary-btn" to={"/dashboard"}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="primary-btn" to={"/logout"}>
                Logout
              </Link>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <Link className="primary-btn" to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="primary-btn" to={"/signup"}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </div>
      <div
        onClick={() => {
          setHandleToggle(!toggle);
        }}
        className={styles.burger}
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
