import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import LabourCard from "../components/LabourCard";

function LabourHiring() {
  const [labours, setLabours] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function populateData() {
      setLoading(true);
      const { data } = await supabase.from("labours").select();
      await setLabours(data);
      setLoading(false);
    }
    populateData();
  }, []);
  const filteredData = labours.filter((labour) =>
    labour.district.toLowerCase().includes(search)
  );
  if (loading) {
    return (
      <div className="loading-container-l">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="search-bar">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type={"text"}
          placeholder="Search by district"
        />
      </div>
      <div className="cards">
        {filteredData &&
          filteredData.map((labour) => (
            <LabourCard key={labour.id} data={labour} />
          ))}
      </div>
    </>
  );
}

export default LabourHiring;
