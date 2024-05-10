import { useEffect, useState } from "react";
import "./Team.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { arrowForwardCircle, arrowBackCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function TeamMembers() {
  const [team, setTeam] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide === team.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(team.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  useEffect(() => {
    axios
      .get("https://services.bluetopia.org/team")
      .then((res) => {
        setTeam(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(team);
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex justify-around items-center px-6  pb-10 pt-10 mx-0  bg-[#063242] w-[100%]">
        <button
          className="text-white font-bold  rounded"
          onClick={handlePrevSlide}
        >
          <IonIcon
            icon={arrowBackCircle}
            className="pt-2 cursor-pointer xs:text-[24px] xl:text-[32px]"
            style={{ color: "#8DF7A7" }}
          />
        </button>
        {team && team.length > 0 && (
          <div
            key={team[currentSlide]._id}
            className="flex justify-center  gap-x-4 w-[90%]"
          >
            <div className="px-4 py-8 w-[60%] overflow-hidden flex flex-col justify-center items-center">
              <div
                className={`text-animation ${
                  currentSlide >= 0 ? "slide-animation-start" : ""
                } text-[#8DF7A7] flex flex-col gap-y-4 `}
              >
                <h2 className={`text-8xl font-Camel-ExtraBold text-white `}>
                  {team[currentSlide].name}
                </h2>
                <p className={`text-5xl font-Camel-Bold `}>
                  {team[currentSlide].title}
                </p>

                <p className={`text-3xl  text-wrap  font-Camel-Light `}>
                  {team[currentSlide].about1}
                  <br />
                  {team[currentSlide].about2}
                </p>
                <Link to={`/team/${team[currentSlide]._id}`}>
                  <button className="bg-red hover:bg-[#063242] text-[#063242] font-semibold bg-[#8DF7A7] hover:text-white py-2 px-4 border border-[#063242] hover:border-transparent rounded font-Camel-Medium">
                    Eidt
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <button
          className="text-white font-bold  rounded"
          onClick={handleNextSlide}
        >
          <IonIcon
            icon={arrowForwardCircle}
            className="pt-2 cursor-pointer xs:text-[24px] xl:text-[32px]"
            style={{ color: "#8DF7A7" }}
          />
        </button>
      </div>
    </div>
  );
}

export default TeamMembers;
