import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.showcase}>
      <Navbar />
      <div className={styles.content}>
        <h1>
          "To make agriculture sustainable, the grower <br /> has got to be able
          to make a profit."
        </h1>
        <div className="button-container">
          <Link className="primary-btn" to={"/about"}>
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
