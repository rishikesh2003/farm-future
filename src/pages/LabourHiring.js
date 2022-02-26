import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import LabourCard from "../components/LabourCard";

function LabourHiring() {
  const [labours, setLabours] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function populateData() {
      const { data } = await supabase.from("labours").select();
      await setLabours(data);
      await console.log(labours);
    }
    populateData();
  }, []);
  const filteredData = labours.filter((labour) =>
    labour.district.toLowerCase().includes(search)
  );
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
