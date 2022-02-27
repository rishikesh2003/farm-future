import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import CropCard from "../components/CropCard";

function YourCrops() {
  const [cropData, setCropData] = useState([]);
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    async function populateData() {
      const user = await supabase.auth.user();

      const { data } = await supabase.from("crops").select();
      const filteredData = await data.filter(
        (data) => data.email === user.email
      );
      await setCropData(filteredData);
      await setMobile(user.user_metadata.mobile);
      console.log(data);
    }
    populateData();
  }, []);
  return (
    <>
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