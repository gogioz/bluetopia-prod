import { arrowForwardCircle, arrowBackCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import bubble from "../../../assets/RahmaInABubble.png";
import { NavLink } from "react-router-dom";
function DiscoverSection(lang) {
  const language = lang.lang.lang;
  return (
    <div className="mt-16 py-2 bg-[#063242]">
      <section
        className={`flex xs:mx-2 xs:gap-y-2  xs:flex-col  lg:flex-row lg:mx-6 3xl:mx-16 3xl:py-4 5xl:my-6    xs:justify-center xs:items-center ${
          language === "ar" ? " justify-center " : ""
        } `}
        // dir={language === "ar" ? "rtl" : ""}
      >
        <div className="flex xs:justify-center xs:items-center lg:justify-start ">
          <img
            src={bubble}
            alt=""
            className="xs:w-[60%]  lg:w-[60%] xl:w-[50%] 3xl:w-[70%]"
          />
        </div>
        <div
          className={`xs:mt-6 md:flex md:flex-col xs:justify-center xs:items-center lg:items-start gap-y-4 
           ${language === "ar" ? "lg:items-end " : ""}
          `}
        >
          <h2 className="xs:text-2xl  xs:text-center  4xl:text-left md:text-4xl text-[#8DF7A7] xl:text-6xl 4xl:text-7xl font-Camel-ExtraBold 4xl:tracking-wide">
            {language === "ar" ? "حلم البلوتوبيا" : "The Bluetopia Dream"}
          </h2>
          <div className="flex justify-center items-center">
            <p
              className={`xs:text-xl xs:text-center  sm:w-[80%]   md:text-4xl md:w-[100%] text-white 3xl:text-5xl  4xl:text-5xl font-Camel-Regular ${
                language === "ar" ? " lg:text-right" : "lg:text-left"
              }`}
            >
              {language === "ar"
                ? "تعرف أكثر على: رؤيتنا، مهمتنا، و أهدافنا"
                : "Learn more about our: Vision, Mission & Objectives"}
            </p>
          </div>
          <NavLink
            to="discover"
            className={`xs:mt-2 flex xs:justify-center xs:items-center  lg:justify-start 5xl:mt-6 gap-x-3 ${
              language === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <p className="xs:text-xl  md:text-4xl text-[#8DF7A7] xl:text-5xl  4xl:text-6xl font-Camel-Bold">
              {language === "ar" ? "اكتشف" : "Discover"}
            </p>
            <IonIcon
              icon={language === "ar" ? arrowBackCircle : arrowForwardCircle}
              className="xs:pt-0  cursor-pointer text-lg"
              style={{ color: "#8DF7A7", fontSize: 24 }}
            />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
export default DiscoverSection;
