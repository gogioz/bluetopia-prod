import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Nav(setCheckUser) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinks = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mx-2 mt-10 flex justify-center items-center ">
      <ul
        className={`flex  gap-x-4 text-3xl font-Camel-ExtraBold text-[#3aa0da] `}
      >
        <li>
          <NavLink onClick={handleNavLinks} className="" to="/">
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavLinks} className="" to="/addnewarticle">
            Add New Article
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavLinks} className="" to="/team">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavLinks} className="" to="/addnewpartner">
            Add New Partner
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setCheckUser(false)} className="" to="/">
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
