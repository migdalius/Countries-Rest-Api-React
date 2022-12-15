import "../flags/flag.css";
import { useState } from "react";
import axios from "axios";
const Flags = () => {
  const [country, setCountry] = useState([]);
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => setCountry(response.data));

  console.log(country);
  const countryName = country.map((country, i) => {
    return (
      <div className="Flags__country-card">
        <div>
          <img src={country.flags.png} alt="" className="Flags__flag-icon" />
        </div>
        <div className="Flags__country-text">
          <h3 className="Flags__title-text">{country.name.common}</h3>
          <p>
            <b>Population:</b>{" "}
            {country.population
              .toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country?.capital ?? "Don't have"}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="Flags__container">
      <div className="Flags__country-container">{countryName}</div>
    </div>
  );
};

export default Flags;
