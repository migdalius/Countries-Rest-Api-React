import "../countryDetails/countryDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetails = () => {
  const params = useParams();
  // const int = params.id.replace(/[^0-9]/g, "");
  const int = params.id;

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${int}`)
      .then((response) => setDetail(response.data));
  }, []);

  console.log(detail[0]);
  return (
    <div className="CountryDetails__main-container">
      <div className="CountryDetails__button-container">
        <a href="/">
          <button className="CountryDetails__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back
          </button>
        </a>
      </div>
      <div className="CountryDetails__content-container">
        <div>
          <img
            src={detail[0]?.flags.png}
            alt=""
            className="CountryDetails_image-flag"
          />
        </div>
        <div>
          <div className="CountryDetails_desc_container">
            <div className="CountryDetails_title">{detail[0]?.name.common}</div>
            <div className="Country-desc-container-flex">
              <div className="Country-text-container">
                <ul>
                  <li>
                    <b>Native Name:</b> {detail[0]?.name.official}
                  </li>
                  <li>
                    <b>Population:</b> {detail[0]?.population}
                  </li>
                  <li>
                    <b>Region:</b> {detail[0]?.region}
                  </li>
                  <li>
                    <b>Sub Region:</b> {detail[0]?.subregion}
                  </li>
                  <li>
                    <b>Capital:</b> {detail[0]?.capital}
                  </li>
                </ul>
              </div>
              <div className="Country-text-container">
                <ul>
                  <li>
                    <b>Top Level Domain:</b> {detail[0]?.tld}
                  </li>
                  <li>
                    <b>Curriencies:</b>
                  </li>
                  <li>
                    <b>Languages:</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Country__borders">
              <p>Border Countries: </p>
              <div className="Country__borders-button-container">
                {detail[0]?.borders?.map((d) => {
                  return (
                    <a href={d}>
                      <button>{d}</button>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
