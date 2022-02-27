import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Select from "react-select";

function ProfitSeeds() {
  const [district, setDistrict] = useState("");
  const options = [
    { value: "Ariyalur", label: "Ariyalur" },
    { value: "Chengalpattu", label: "Chengalpattu" },
    { value: "Chennai", label: "Chennai" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Cuddalore", label: "Cuddalore" },
    { value: "Dharmapuri", label: "Dharmapuri" },
    { value: "Dindigul", label: "Dindigul" },
    { value: "Erode", label: "Erode" },
    { value: "Kallakurichi", label: "Kallakurichi" },
    { value: "Kanchipuram", label: "Kanchipuram" },
    { value: "Kanyakumari", label: "Kanyakumari" },
    { value: "Karur", label: "Karur" },
    { value: "Krishnagari", label: "Krishnagiri" },
    { value: "Madurai", label: "Madurai" },
    { value: "Nagapattinam", label: "Nagapattinam" },
    { value: "Namakkal", label: "Namakkal" },
    { value: "Nilgiris", label: "Nilgiris" },
    { value: "Permabalur", label: "Permabalur" },
    { value: "Pudukottai", label: "Pudukottai" },
    { value: "Ramanathapuram", label: "Ramanathapuram" },
    { value: "Pudukottai", label: "Pudukottai" },
    { value: "Ranipet", label: "Ranipet" },
    { value: "Salem", label: "Salem" },
    { value: "Sivaganga", label: "Sivaganga" },
    { value: "Tenkasi", label: "Tenkasi" },
    { value: "Thanjavur", label: "Thanjavur" },
    { value: "Theni", label: "Theni" },
    { value: "Tuticorin", label: "Tuticorin" },
    { value: "Tiruchirappalli", label: "Tiruchirappalli" },
    { value: "Tirunelveli", label: "Tirunelveli" },
    { value: "Tirupathur", label: "Tirupathur" },
    { value: "Tiruppur", label: "Tiruppur" },
    { value: "Tiruvallur", label: "Tiruvallur" },
    { value: "Tiruvannamalai", label: "Tiruvannamalai" },
    { value: "Tiruvarur", label: "Tiruvarur" },
    { value: "Vellore", label: "Vellore" },
    { value: "Viluppuram", label: "Viluppuram" },
    { value: "Virudhunagar", label: "Virudhunagar" },
  ];
  return (
    <>
      <Helmet>
        <title>Buy Seeds</title>
      </Helmet>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="bar">
        <span style={{ fontWeight: "bold", marginRight: "10px" }}>
          Select District:{" "}
        </span>{" "}
        <Select
          value={district}
          onChange={(option) => {
            setDistrict(option.value);
          }}
          options={options}
        />
      </div>
    </>
  );
}

export default ProfitSeeds;
