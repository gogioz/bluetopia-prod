import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../../Redux/dataThunks";
import { setData } from "../../../Redux/dataSlice";
import { arrowForwardCircle, arrowBackCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Carousel } from "react-responsive-carousel";
import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Slider = (lang) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const language = lang.lang.lang;
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData.payload);
  const loop = apiData?.slice(-5);
  const handleNextSlide = () => {
    if (currentSlide === loop.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(loop.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  useEffect(() => {
    dispatch(fetchApiData())
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching API data:", error);
      });
  }, [dispatch]);
  return (
    <div className="xs:mt-4 md:mt-10 relative">
      <button
        className="xs:hidden lg:block text-white font-bold  md:top-[50%] md:mx-2  rounded absolute xl:left-[10%] 4xl:left-[12%] "
        onClick={handlePrevSlide}
      >
        <IonIcon
          icon={arrowBackCircle}
          // size="large"
          className="pt-2 cursor-pointer"
          style={{ color: "#3aa0da", fontSize: 24 }}
        />
      </button>
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={3000}
        selectedItem={currentSlide}
        stopOnHover={true}
        className="xs:max-w-[100%] mx-auto lg:w-[90%] xl:max-w-[70%]    "
      >
        {apiData
          ? apiData.slice(-5).map((article) => (
              <div className="relative rounded-lg  " key={article._id}>
                <img
                  src={article.image}
                  alt=""
                  className="xs:rounded-none block xs:w-[100%] lg:px-2  lg:rounded-tl-[250px] lg:rounded-br-[250px] lg:rounded-bl-xl lg:rounded-tr-xl"
                />
                <div className="absolute  w-full bottom-8 hidden py-5 text-center bg-white md:block  text-[#3aa0da]">
                  <div className="flex justify-center items-center">
                    <h1
                      className={`5xl:text-3xl font-Camel-Bold xs:w-[90%] md:text-2xl  lg:text-4xl md:w-[70%]   line-clamp-0 md:line-clamp-1`}
                      dir={language === "ar" ? "rtl" : ""}
                    >
                      {language === "ar" ? article.titleTrans : article.title}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p
                      dir={language === "ar" ? "rtl" : ""}
                      className={`5xl:text-2xl font-Camel-Regular md:text-lg  xs:w-[90%] md:w-[70%] lg:text-2xl    line-clamp-0 md:line-clamp-1`}
                    >
                      {language === "ar"
                        ? article.subTitleTrans
                        : article.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </Carousel>
      <button
        className="xs:hidden  lg:block text-white font-bold  rounded md:top-[50%]   md:right-[1%] absolute xl:left-[78%] 4xl:left-[75%]"
        onClick={handleNextSlide}
      >
        <IonIcon
          icon={arrowForwardCircle}
          // size="large"
          className="5xl:pt-2 md:pt-2 cursor-pointer "
          style={{ color: "#3aa0da", fontSize: 24 }}
        />
      </button>
    </div>
  );
};
