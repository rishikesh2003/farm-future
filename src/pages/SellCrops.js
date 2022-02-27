import Navbar from "../components/Navbar";
import styles from "../css/Form.module.css";
import { useState } from "react";
import supabase from "../config/client";
import { Helmet } from "react-helmet";

function SellCrop() {
  const [cropName, setCropName] = useState("");
  const [district, setDistrict] = useState("");
  const [hDate, setHDate] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit() {
    setLoading(true);
    setError("");
    setSuccess("");
    if (
      !cropName ||
      !district ||
      !hDate ||
      !price ||
      !quantity ||
      !description
    ) {
      setError("Please fill all the required fields");
    } else {
      const user = await supabase.auth.user();
      await supabase.from("crops").insert([
        {
          name: cropName,
          district: district,
          price: price,
          email: user.email,
          hDate: hDate,
          quantity: quantity,
          description: description,
          imgURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Wheat_close-up.JPG",
        },
      ]);
      setSuccess("Crop Listed Successfully");
    }
    setLoading(false);
  }
  return (
    <>
      <Helmet>
        <title>Sell Crops</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className={styles["main-container"]}>
        <div className={styles["form-container"]}>
          <h1>Crop Listing</h1>
          <input
            value={cropName}
            onChange={(e) => {
              setCropName(e.target.value);
            }}
            type="text"
            placeholder="Crop name"
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
            value={hDate}
            onChange={(e) => {
              setHDate(e.target.value);
            }}
            type="text"
            placeholder="Harvesting/Harvested Date (dd/mm/yyyy)"
          />
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            placeholder="Price (in Rs.)"
          />
          <input
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            type="text"
            placeholder="Quantity (in kgs)"
          />
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description"
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

export default SellCrop;
