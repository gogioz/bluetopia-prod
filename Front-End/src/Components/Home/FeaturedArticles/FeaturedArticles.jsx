import { useEffect } from "react";
import { fetchApiData } from "../../../Redux/dataThunks";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../Redux/dataSlice";
import { Link } from "react-router-dom";

function FeaturedArticles(lang) {
  const language = lang.lang.lang;
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData.payload);

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

  // console.log(apiData); // Check the value of apiData

  return (
    <div className=" flex justify-center items-center flex-col ">
      <div
        className="xs:mt-0 bg-[#063242] 5xl:mt-20 "
        dir={language === "ar" ? "rtl" : ""}
      >
        <div className="xs:my-2 flex flex-col lg:space-y-6 justify-center items-center">
          <h3 className="xs:text-4xl xs:py-2 lg:text-7xl text-[#8DF7A7] font-Camel-Bold md:py-4">
            {language === "ar" ? "أهم القصص" : "Featured Articles"}
          </h3>
        </div>
        {apiData
          ? apiData
              .slice(-3)
              .reverse()
              .map((article) => (
                <div
                  className={`xs:mx-2  xs:py-2 flex xs:flex-col xs:transition-transform xs:duration-200 xs:hover:-translate-y-1  md:flex-row md:gap-x-2 5xl:mx-24 lg:my-10  `}
                  key={article._id}
                >
                  <div className="xs:w-[100%]  flex-none md:w-[45%] lg:w-[35%] 3xl:w-[30%] ">
                    <img
                      src={article.image}
                      alt=""
                      className="xs:rounded-none md:rounded-md  grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="xs:bg-white xs:text-[#063242] xs:gap-y-1 xs:pt-1 md:pt-0 xs:rounded-b-md xs:px-2 5xl:text-[#1d2820]  flex flex-col md:py-0 md:bg-transparent md:text-[#8DF7A7] md:justify-around ">
                    <h5
                      className={`xs:text-lg xs:font-Camel-ExtraBold lg:text-3xl 3xl:text-4xl 5xl:text-5xl  font-Camel-Medium line-clamp-1 md:text-[#8DF7A7]`}
                    >
                      {language === "ar" ? article.titleTrans : article.title}
                    </h5>
                    <p
                      className={`xs:font-Camel-Regular xs:text-md xs:pl-1 xs:w-[80%] md:text-white lg:text-2xl    5xl:font-Camel-Light line-clamp-3  lg:line-clamp-3 xl:line-clamp-5 4xl:w-[90%]`}
                    >
                      {language === "ar"
                        ? article.descriptionTrans
                        : article.description}
                    </p>
                    <Link
                      to={`/activities/${article._id}`}
                      className={`xs:font-Camel-ExtraBold md:text-[#8DF7A7] md:font-Camel-Regular lg:font-Camel-Medium flex `}
                      dir={language === "ar" ? "rtl" : ""}
                    >
                      {language === "ar" ? "للمزيد ..." : "Read more ..."}
                    </Link>
                  </div>
                </div>
              ))
          : ""}
      </div>
    </div>
  );
}
export default FeaturedArticles;
