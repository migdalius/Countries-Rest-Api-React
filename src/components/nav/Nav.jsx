import "../nav/nav.css";
import Toggle from "../toggle/Toggle";

const Nav = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="text-logo">Where in the world?</div>
        <Toggle />
      </nav>
    </header>
  );
};

export default Nav;
