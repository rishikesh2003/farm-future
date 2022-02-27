import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import MerchantCropCard from "../components/MerchantCropCard";

function BuyCrops() {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    async function populateData() {
      setLoading(true);
      const { data } = await supabase.from("crops").select();
      await setCropData(data);
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
        <title>Buy Crops</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="cards">
        {cropData &&
          cropData.map((cropdata) => (
            <MerchantCropCard key={cropdata.id} data={cropdata} />
          ))}
      </div>
    </>
  );
}

export default BuyCrops;
