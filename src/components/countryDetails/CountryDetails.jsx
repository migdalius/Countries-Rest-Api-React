import "../countryDetails/countryDetails.css";

const CountryDetails = () => {
  return (
    <div className="CountryDetails__main-container">
      <div className="CountryDetails__button-container">
        <button className="CountryDetails__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="CountryDetails__content-container">
        <div>
          <img
            src="https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg"
            alt=""
            className="CountryDetails_image-flag"
          />
        </div>
        <div>
          <div className="CountryDetails_desc_container">
            <div className="CountryDetails_title">Belgium</div>
            <div className="Country-desc-container-flex">
              <div className="Country-text-container">
                <ul>
                  <li>
                    <b>Native Name:</b> Belgie
                  </li>
                  <li>
                    <b>Population:</b> Belgie
                  </li>
                  <li>
                    <b>Region:</b> Belgie
                  </li>
                  <li>
                    <b>Sub Region:</b> Belgie
                  </li>
                  <li>
                    <b>Capital:</b> Belgie
                  </li>
                </ul>
              </div>
              <div className="Country-text-container">
                <ul>
                  <li>
                    <b>Native Name:</b> Belgie
                  </li>
                  <li>
                    <b>Population:</b> Belgie
                  </li>
                  <li>
                    <b>Region:</b> Belgie
                  </li>
                </ul>
              </div>
            </div>
            <div className="Country__borders">
              <p>Border Countries: </p>
              <div className="Country__borders-button-container">
                <button>France</button>
                <button>Germany</button>
                <button>Netherlands</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
