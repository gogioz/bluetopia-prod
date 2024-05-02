import { fetchSponsersData } from "../../Redux/partnersThunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "../../Redux/partnersSlice";

function Partners(lang) {
  console.log(lang.lang);
  const language = lang.lang;
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.partnersData.payload);
  // const data = ap;

  useEffect(() => {
    dispatch(fetchSponsersData())
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching API data:", error);
      });
  }, [dispatch]);
  console.log(apiData);
  return (
    <div className="flex  items-center flex-col py-6 gap-y-4">
      <h1
        className="text-4xl font-Camel-Bold text-[#063242]"
        dir={language === "ar" ? "rtl" : ""}
      >
        {language === "ar" ? "شركائنا : " : "Our Partners:"}
      </h1>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:mx-10 lg:grid-cols-4  2xl:grid-cols-5  3xl:grid-cols-6 3xl:mx-20  gap-0">
        {apiData
          ? apiData.map((partner) => (
              <div
                key={partner._id}
                className="flex justify-center items-center xs:first:py-10 sm:first:pt-0  xs:first:row-span-2 md:first:col-span-2 md:first:row-span-1 "
              >
                <img
                  src={partner.logo}
                  alt=""
                  className="xs:w-[100%] sm:w-[90%] 4xl:w-[80%]"
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Partners;
