import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import supabase from "../config/client";
import LabourCard from "../components/LabourCard";
import { Helmet } from "react-helmet";

function LabourHiring() {
  const [labours, setLabours] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
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
    !checked
      ? labour.district.toLowerCase().includes(search)
      : labour.district.toLowerCase().includes(search) && labour.drone === "Yes"
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
      <Helmet>
        <title>Hire Labours</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="search-bar">
        <input
          className="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type={"text"}
          placeholder="Search by district"
        />{" "}
        <div style={{ marginLeft: "5px" }}>
          Know to Operate Drone?{" "}
          <input
            onChange={() => {
              setChecked(!checked);
            }}
            style={{ minWidth: "unset" }}
            type={"checkbox"}
          />
        </div>
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
