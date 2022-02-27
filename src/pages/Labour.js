import Navbar from "../components/Navbar";
import styles from "../css/Form.module.css";
import { useState } from "react";
import supabase from "../config/client";
import { Helmet } from "react-helmet";

function Labour() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [wages, setWages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  async function handleSubmit() {
    setLoading(true);
    setError("");
    setSuccess("");
    if (
      name === "" ||
      email === "" ||
      mobile === "" ||
      district === "" ||
      wages === ""
    ) {
      setError("Please fill all the required fields");
    } else {
      const labours = await supabase.from("labours").select();
      labours.data.forEach((data) => {
        if (data.email === email) {
          setError("Labour Already Exists");
        }
      });
      if (error === "") {
        console.log("in");
        console.log(error);
        await supabase
          .from("labours")
          .insert([{ name, email, mobile, district, wages }]);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            "Labour Successfully Registered, If a suitable farmer finds you you will get a call!"
          );
        }
      }
    }
    setLoading(false);
  }
  return (
    <>
      <Helmet>
        <title>Labour Registration</title>
      </Helmet>
      <Navbar />
      <div className={styles["main-container"]}>
        <div className={styles["form-container"]}>
          <h1>Labour's Registration</h1>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            type="text"
            placeholder="Mobile"
          />
          <input
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            type="text"
            placeholder="District"
          />
          <input
            value={wages}
            onChange={(e) => {
              setWages(e.target.value);
            }}
            type="text"
            placeholder="Wages / hr(in Rs.)"
          />
          {loading && (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          )}
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <div className="button-container">
            <div onClick={handleSubmit} className="primary-btn">
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Labour;
