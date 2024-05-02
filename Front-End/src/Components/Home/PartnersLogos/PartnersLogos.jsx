import { fetchSponsersData } from "../../../Redux/partnersThunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "../../../Redux/partnersSlice";

function PartnersLogo() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.partnersData.payload);

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
  return (
    <div className="xs:w-[100%] xs:py-16 relative m-auto 5xl:w-[80%] 5xl:py-20 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="xs:w-[calc(250px*15)] animate-infinite-slider flex  xl:w-[calc(250px*20)] space-x-2">
        {apiData
          ? apiData.map((logo, i) => (
              <div
                className="slide flex w-[90%] items-center justify-center gap-x-2"
                key={i}
              >
                <img src={logo.logo} alt="" className="max-w-[100%] " />
              </div>
            ))
          : ""}
        {apiData
          ? apiData.map((logo, i) => (
              <div
                className="slide flex  w-[90%] items-center justify-center gap-x-2"
                key={i}
              >
                <img src={logo.logo} alt="" className="max-w-[100%] " />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
export default PartnersLogo;
