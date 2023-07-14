import { NavLink } from "react-router-dom";
import NavbarBootstrap from "react-bootstrap/Navbar";

const Navbar = () => {
  const getLinkStyle = (isActive) => ({
    color: isActive ? "gray" : "red",
  });

  return (
    <NavbarBootstrap className="d-flex justify-content-center align-items-center px-5">
      <div>
        <NavLink
          className="me-3"
          exact
          to="/"
          isActive={(match) => match?.isExact}
          style={getLinkStyle}
        >
          Home
        </NavLink>

        <NavLink
          className="me-3"
          to="/Pokemones"
          isActive={(match) => !!match}
          style={getLinkStyle}
        >
          Pokemones
        </NavLink>
      </div>
    </NavbarBootstrap>
  );
};

export default Navbar;