import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Select from "react-select";
import seeds from "../data/seed";

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
  const data = seeds.filter(
    (seed) => seed.name.toLowerCase() === district.toLowerCase()
  );
  console.log(data);
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
      {district && (
        <div className="region-area">
          <h1>Selected District:</h1>
          <h2>{district}</h2>
          <h1>Crops Suitable for this region:</h1>
          {data[0].seeds.map((d, index) => (
            <>
              <li key={index}>{d[0].toUpperCase() + d.slice(1)}</li>
            </>
          ))}
          <h1>Possible diseases for this region:</h1>
          {data[0].diseases.map((d, index) => (
            <>
              <li key={index}>{d}</li>
            </>
          ))}
          <h1>Solution for the diseases:</h1>
          {data[0].solutions}
        </div>
      )}
    </>
  );
}

export default ProfitSeeds;
