import { useEffect, useRef, useState } from "react";

import {
  arrowForwardCircle,
  arrowBackCircle,
  logoLinkedin,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./Team.css";
import TeamSlider from "../TeamSlider/TeamSlider";
import { fetchTeamData } from "../../Redux/teamThunks";

import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Redux/teamSlice";

function PartnersLogo(lang) {
  const language = lang.lang;
  const dispatch = useDispatch();
  const sliderData = useSelector((state) => state.teamData.payload);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTeamData())
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching API data:", error);
      });
  }, [dispatch]);

  const handleNextSlide = () => {
    if (currentSlide === sliderData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(sliderData.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <>
      <TeamSlider />

      <div className="xs:h-[60vh] sm:h-[58vh]  md:h-full  flex xs:justify-center items-center   2 bg-[#063242] overflow-hidden">
        <button
          className="text-white font-bold  rounded"
          onClick={handlePrevSlide}
        >
          <IonIcon
            icon={arrowBackCircle}
            // size="large"
            className="pt-2 cursor-pointer xs:text-[24px] xl:text-[32px]"
            style={{ color: "#8DF7A7" }}
          />
        </button>
        {sliderData && sliderData.length > 0 && (
          <div
            key={sliderData[currentSlide]._id}
            className="xs:flex xs:flex-col-reverse xs:gap-y-4 md:py-5 xl:flex-row  2xl:justify-around 2xl:gap-x-4  xs:w-[70%] 2xl:flex-row xl:w-[80%] "
          >
            <div className=" xs:max-w-[100%] xl:w-[40%] flex justify-center items-center ">
              <img
                src={sliderData[currentSlide].images[1]}
                alt="Slider"
                className={`xs:w-[100%] sm:w-[70%] md:w-[60%] slide-animation xl:w-[75%] ${
                  currentSlide >= 0 ? "slide-animation-start" : ""
                }`}
                ref={slideRef}
              />
            </div>

            <div className="xs:px-0 xs:py-0 xl:px-8 xl:py-8 xl:w-[80%]  flex flex-col xs:justify-center xs:items-center xl:items-end">
              <div
                className={`xs:gap-y-2 xl:gap-y-6 text-animation ${
                  currentSlide >= 0 ? "slide-animation-start" : ""
                } text-[#8DF7A7] flex flex-col  `}
                ref={textRef}
                dir={language === "ar" ? "rtl" : ""}
              >
                <h2
                  className={`xs:text-2xl xs:text-center xl:text-left md:text-3xl xl:text-7xl  font-Camel-ExtraBold text-white ${
                    language === "ar" ? "xl:text-right" : ""
                  }`}
                >
                  {language === "ar"
                    ? sliderData[currentSlide].nameTrans
                    : sliderData[currentSlide].name}
                </h2>
                <p
                  className={`xs:text-lg xs:text-center  xs:tracking-tighter md:text-xl md:tracking-tight xl:text-4xl  xl:text-left font-Camel-ExtraBold ${
                    language === "ar" ? "xl:text-right" : ""
                  }`}
                  dir={language === "ar" ? "rtl" : ""}
                >
                  {language === "ar"
                    ? sliderData[currentSlide].titleTrans
                    : sliderData[currentSlide].title}
                </p>

                <p
                  className={`xs:hidden xl:block xl:text-3xl   text-wrap  font-Camel-Light ${
                    language === "ar" ? "text-right" : ""
                  }`}
                >
                  {language === "ar"
                    ? sliderData[currentSlide].about1Trans
                    : sliderData[currentSlide].about1}
                  <br />
                  {language === "ar"
                    ? sliderData[currentSlide].about2Trans
                    : sliderData[currentSlide].about2}
                </p>
                <a
                  href={sliderData[currentSlide].link}
                  target="_blank"
                  className={`xs:hidden xl:block ${
                    language === "ar" ? "self-start" : "self-start"
                  } `}
                >
                  <IonIcon
                    icon={logoLinkedin}
                    // size="large"
                    className=" xl:text-[32px] pt-2 cursor-pointer text-[#8DF7A7]  hover:text-white transition-transform duration-200  hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
        <button
          className="text-white  2xl:py-2 2xl:px-4 "
          onClick={handleNextSlide}
        >
          <IonIcon
            icon={arrowForwardCircle}
            // size="large"
            className="pt-2 cursor-pointer xs:text-[24px] xl:text-[32px]"
            style={{ color: "#8DF7A7" }}
          />
        </button>
      </div>
    </>
  );
}

export default PartnersLogo;
