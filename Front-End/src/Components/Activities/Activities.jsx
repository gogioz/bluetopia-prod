import { useEffect, useState } from "react";
import { fetchApiData } from "../../Redux/dataThunks";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Redux/dataSlice";
import { Link } from "react-router-dom";
import "./activities.css";

function Activities(lang) {
  const language = lang.lang;
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData.payload);
  const [renderedData, setRenderedData] = useState([]);
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

  useEffect(() => {
    const reversedData = apiData ? [...apiData].reverse() : "";
    if (reversedData.length > 0) {
      setRenderedData(reversedData.slice(0, 6));
    }
  }, [apiData]);

  const handleLoadMore = () => {
    const reversedData = apiData ? [...apiData].reverse() : "";

    const nextData = reversedData.slice(
      renderedData.length,
      renderedData.length + 3
    );
    setRenderedData([...renderedData, ...nextData]);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-2 bg-[#063242]">
      <div className="my-8  text-center">
        <h1 className="activity-title xs:text-4xl   sm:text-5xl 4xl:text-6xl font-Camel-ExtraBold text-[#8DF7A7] ">
          {language === "ar" ? "المقالات" : "Articles"}
        </h1>
      </div>
      <div
        className="xs:mx-2 lg:mx-6 xs:py-2 xl:mx-10 4xl:mx-20  flex flex-col justify-center items-center"
        id="articles"
      >
        <div className="grid xs:grid-cols-1 xs:gap-x-0 xs:gap-y-4   lg:gap-x-4 lg:grid-cols-[repeat(2,minmax(0,_1fr))]  xl:grid-cols-3 xl:gap-x-4 5xl:gap-x-[80px] 5xl:gap-y-[60px] pb-6">
          {renderedData
            ? renderedData.map((article) => (
                <Link
                  className=" bg-white  rounded-xl text-[#063242] hover:cursor-pointer  transition-transform duration-200  hover:-translate-y-1"
                  key={article._id}
                  to={`/activities/${article._id}`}
                >
                  <img
                    src={article.image}
                    alt=""
                    className="max-w-[100%] w-[100%] rounded-t-xl"
                  />
                  <div className="xs:p-3 5xl:p-[20px] flex flex-col justify-between  space-y-1">
                    <h3
                      className={`xs:text-xl m-0  5xl:text-2xl font-Camel-ExtraBold line-clamp-1 hover:line-clamp-none ${
                        language === "ar" ? "text-right line-clamp-none" : ""
                      }`}
                      dir={language === "ar" ? "rtl" : ""}
                    >
                      {language === "ar" ? article.titleTrans : article.title}
                    </h3>

                    <p
                      className={`xs:text-md leading-[1.5]  overflow-hidden font-Camel-Medium 5xl:text-xl text-[#063242] line-clamp-5 ${
                        language === "ar" ? "text-right" : ""
                      }`}
                      dir={language === "ar" ? "rtl" : ""}
                    >
                      {language === "ar"
                        ? article.descriptionTrans
                        : article.description}
                    </p>
                  </div>
                </Link>
              ))
            : ""}
        </div>
        {apiData
          ? apiData.length > renderedData.length && (
              <button
                className="xs:my-4 mt-4 px-6 py-2 bg-[#8DF7A7] text-[#063242] rounded font-Camel-ExtraBold hover:bg-[#7BE29B] transition-transform duration-200  hover:-translate-y-0.5"
                onClick={handleLoadMore}
              >
                {language === "ar" ? "للمزيد" : "Load More"}
              </button>
            )
          : ""}
      </div>
    </div>
  );
}

export default Activities;
