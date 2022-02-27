import Navbar from "../components/Navbar";
import { AiOutlineCamera, AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
// import axios from "axios";
import { Helmet } from "react-helmet";

function DiseaseCuring() {
  const [img, setImg] = useState("");
  async function handleAI() {
    // const modelURL = "https://plant-disease-detector-pytorch.herokuapp.com/";
    // const obj = { image: img };
    // console.log(img);
    // const parsedData = JSON.stringify(obj);
    // console.log(parsedData);
    // const data = await axios.post(modelURL, parsedData);
    // await console.log(data);
  }
  return (
    <div>
      <Helmet>
        <title>Farm Future | Disease Curing</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="disease-curing">
        <div>
          <h1>Disease Curing</h1>

          <details>
            <summary>What does this do?</summary>
            <p>
              Our AI has been trained intensively to detect the plant disease
              and to provide solution to the disease.
            </p>
            <p></p>
          </details>
          <div className="button-holder">
            <div className="button-container">
              <input
                onChange={(e) => {
                  const Reader = new FileReader();
                  Reader.onload = function () {
                    setImg(Reader.result);
                    console.log(Reader.result);
                    handleAI();
                  };
                  Reader.readAsDataURL(e.target.files[0]);
                  setImg(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <div className="primary-btn">
                  <AiOutlineUpload /> Upload
                </div>
              </label>
            </div>
            <div className="button-container">
              <div className="primary-btn">
                <AiOutlineCamera /> Scan
              </div>
            </div>
          </div>
        </div>
        {img && <img src={img} alt="crop-disease" />}
        <div></div>
      </div>
    </div>
  );
}

export default DiseaseCuring;
