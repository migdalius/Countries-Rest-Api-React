import "../hero/hero.css";
import flags from "../flags/Flags";

const Hero = ({ country }) => {
  console.log(country);
  return (
    <section className="main">
      <div className="container">
        <div className="second-nav">
          <div className="seach-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="serch-icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="search"
              placeholder="Seach fro a country..."
              className="search-input"
            />
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Filter by Region
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <div className="dropdown-content">
              <a href="#">Africa</a>
              <a href="#">America</a>
              <a href="#">Asia</a>
              <a href="#">Europe</a>
              <a href="#">Oceania</a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
