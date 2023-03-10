const CountryCard = (props) => {
  const country = props.country;

  return (
    <>
      {country.map((country, i) => (
        <div className="Flags__country-card">
          <div>
            <img src={country.flags.png} alt="" className="Flags__flag-icon" />
          </div>
          <div className="Flags__country-text">
            <a href={`/${country.name.common}`}>
              <h3 className="Flags__title-text">{country.name.common}</h3>
            </a>
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
      ))}
    </>
  );
};

export default CountryCard;

// const countryName = country.map((country, i) => {
//     return (
//       <div className="Flags__country-card">
//         <div>
//           <img src={country.flags.png} alt="" className="Flags__flag-icon" />
//         </div>
//         <div className="Flags__country-text">
//           <h3 className="Flags__title-text">{country.name.common}</h3>
//           <p>
//             <b>Population:</b>{" "}
//             {country.population
//               .toString()
//               .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
//           </p>
//           <p>
//             <b>Region:</b> {country.region}
//           </p>
//           <p>
//             <b>Capital:</b> {country?.capital ?? "Don't have"}
//           </p>
//         </div>
//       </div>
//     );
//   });
