import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Team from "./Components/Team/Team";
import Activities from "./Components/Activities/Activities";
import { useState } from "react";
import logo from "./assets/logo1.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Article from "./Components/Article/Article";
import Discover from "./Components/Discover/Discover";
import Partners from "./Components/Partners/Partners";
import "./App.css";

function App() {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);

    setLang(selectedLanguage);
  };
  const handleNavLinks = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const ActiveLink = ({ isActive }) => {
  //   return { borderBottom: isActive ? "1px solid black" : "" };
  // };

  return (
    <div className="py-0 my-0 ">
      <BrowserRouter>
        <div>
          <nav className="xs:mx-6 5xl:mx-16 flex items-center justify-between my-2">
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                className="xs:w-[50%] sm:w-[60%] md:w-[70%]  xl:w-[80%] 4xl:w-[100%]"
              />
            </NavLink>
            <ul
              className={`xs:hidden lg:flex lg:text-2xl xl:text-3xl gap-x-4  font-Camel-Bold text-[#3aa0da] lg:pt-8 ${
                lang === "ar" ? "flex-row-reverse " : ""
              } `}
            >
              <NavLink className="" to="/discover">
                {t("Discover")}
              </NavLink>
              <NavLink className="" to="/team">
                {t("Team")}
              </NavLink>
              <NavLink className="" to="/partners">
                {t("Partners")}
              </NavLink>
              <NavLink className="" to="/activities">
                {t("Activities")}
              </NavLink>
              <NavLink className="" to="/contact">
                {t("Contact")}
              </NavLink>
              <select
                onChange={changeLanguage}
                className="outline-none  text-center"
              >
                <option value="en">En</option>
                <option value="ar">Ar</option>
              </select>
            </ul>
            <div className="pt-2 lg:hidden">
              <button
                id="menu-btn"
                className={` hamburger focus:outline-none 
             ${isMenuOpen ? "open" : ""}
            `}
                onClick={handleNavToggle}
                type="button"
              >
                <span className="hamburger-top "></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          <div
            id="menu"
            className={`  rounded-lg    
             ${isMenuOpen ? "" : "hidden"}
          `}
          >
            <ul className="flex flex-col items-center justify-center z-10 py-4 w-full  space-y-8  shadow-md bg-white  font-Camel-Bold text-2xl  rounded-md  text-[#3aa0da] ">
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className="w-full text-center"
                  to="/discover"
                >
                  {t("Discover")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className="w-full text-center"
                  to="/team"
                >
                  {t("Team")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className="w-full text-center"
                  to="/partners"
                >
                  {t("Partners")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className="w-full text-center"
                  to="/activities"
                >
                  {t("Activities")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className="w-full text-center"
                  to="/contact"
                >
                  {t("Contact")}
                </NavLink>
              </li>

              <li htmlFor="lang">
                <select
                  onChange={changeLanguage}
                  className="outline-none text-centr"
                  id="lang"
                >
                  <option value="en">En</option>

                  <option value="ar">Ar</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route index element={<Home lang={lang} />} path="/" />
          <Route path="discover" element={<Discover lang={lang} />} />
          <Route path="team" element={<Team lang={lang} />} />
          <Route path="/partners" element={<Partners lang={lang} />} />
          <Route path="activities" element={<Activities lang={lang} />} />
          <Route path="/activities/:id" element={<Article lang={lang} />} />
          <Route path="contact" element={<Contact lang={lang} />} />
        </Routes>
      </BrowserRouter>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
