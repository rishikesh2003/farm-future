import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.showcase}>
        <Navbar />
        <div className={styles.content}>
          <h1>
            "To make agriculture sustainable, the grower <br /> has got to be
            able to make a profit."
          </h1>
          <div className="button-container">
            <a className="primary-btn" href={"/#about"}>
              About
            </a>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}

export default Home;
