import { useEffect } from "react";
import { fetchTeamData } from "../../Redux/teamThunks";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Redux/teamSlice";

function TeamSlider() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.teamData.payload);

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
  return (
    <div className="xs:py-3 sm:py-2 md:py-2 relative m-auto w-[100%] 2xl:py-5  overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 ">
      <div className="animate-team-slider xs:w-[calc(250px*25)] flex 2xl:w-[calc(250px*25)] gap-x-1">
        {apiData
          ? apiData.map((member, i) => (
              <div className="slide flex items-center justify-center" key={i}>
                <img src={member.images[0]} alt="" className=" " />
              </div>
            ))
          : ""}
        {apiData
          ? apiData.map((member, i) => (
              <div className="slide flex items-center justify-center" key={i}>
                <img src={member.images[0]} alt="" className="" />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default TeamSlider;
