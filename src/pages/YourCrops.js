import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import CropCard from "../components/CropCard";
import { Helmet } from "react-helmet";

function YourCrops() {
  const [cropData, setCropData] = useState([]);
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    async function populateData() {
      setLoading(true);
      const user = await supabase.auth.user();

      const { data } = await supabase.from("crops").select();
      const filteredData = await data.filter(
        (data) => data.email === user.email
      );
      await setCropData(filteredData);
      await setMobile(user.user_metadata.mobile);
      setLoading(false);
    }
    populateData();
  }, []);
  if (loading) {
    return (
      <div className="loading-container-l">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Farm Future | Your Crops</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="cards">
        {cropData &&
          cropData.map((cropdata) => (
            <CropCard key={cropdata.id} data={cropdata} mobile={mobile} />
          ))}
      </div>
    </>
  );
}

export default YourCrops;
