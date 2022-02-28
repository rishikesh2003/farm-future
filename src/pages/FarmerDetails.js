import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";

function BuyNow({ match }) {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function populateData() {
      setLoading(true);

      const { data } = await supabase.from("crops").select();
      await data.forEach((d) => {
        if (d.email === match.params.email) {
          setCropData(d);
        }
      });
      setLoading(false);
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
      <br />
      <br />
      <br />
      <h1>Buy Now</h1>
      <h2>Farmer's Details</h2>
      {cropData.farmer_name}
      {cropData.mobile}
      {cropData.email}
      {cropData.district}
    </>
  );
}

export default BuyNow;
