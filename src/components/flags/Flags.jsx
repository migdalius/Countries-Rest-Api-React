import "../flags/flag.css";
import { useState } from "react";
import axios from "axios";
import CountryCard from "../countryCard/CountryCard";

const Flags = () => {
  const [country, setCountry] = useState([]);
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => setCountry(response.data));

  return (
    <div className="Flags__container">
      <div className="Flags__country-container">
        <CountryCard country={country} />
      </div>
    </div>
  );
};

export default Flags;
