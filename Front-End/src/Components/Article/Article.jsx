import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article(lang) {
  const language = lang.lang;
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitleTrans, setSubTitleTrans] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTrans, setDescriptionTrans] = useState("");
  const [image, setImage] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setTitleTrans(res.data.titleTrans);
        setSubTitle(res.data.subTitle);
        setSubTitleTrans(res.data.subTitleTrans);
        setDescription(res.data.description);
        setDescriptionTrans(res.data.descriptionTrans);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);
  console.log(image);

  const splitDesc = description.split("$");
  const splitDescTrans = descriptionTrans.split("$");
  return (
    <div className="flex  justify-center items-center mt-2 bg-white text-[#063242]">
      <div
        className="xs:mt-4 flex flex-col justify-center items-center xs:gap-y-2 xl:gap-y-4"
        id="article"
      >
        <h1
          className="xs:text-2xl xs:font-Camel-Bold md:font-Camel-ExtraBold m-0  lg:text-5xl lg:font-Camel-ExtraBold text-center  text-[#063242]"
          dir={language === "ar" ? "rtl" : ""}
        >
          {language === "ar" ? titleTrans : title}
        </h1>
        <img
          src={`../${image}`}
          alt=""
          className="xs:w-[100%]  xl:w-[50%] xs:px-2 md:px-4"
        />
        <div
          className={`xs:py-4 xs:px-2 md:px-4 xl:px-20 xl:py-6  flex flex-col justify-center ${
            language === "ar" ? "items-end" : "items-start"
          }    text-white`}
        >
          <h5
            className={`xs:text-2xl xs:font-Camel-Bold  text-[#063242] lg:text-4xl xl:text-5xl lg:font-Camel-Bold `}
            dir={language === "ar" ? "rtl" : ""}
          >
            {language === "ar" ? subTitleTrans : subTitle}
          </h5>
          <div
            className="xs:text-xl xs:font-Camel-Regular xs:leading-[1.2] xs:tracking-normal xs:py-2  md:text-2xl
            2xl:tracking-wider   xl:font-Camel-Medium lg:text-3xl text-[#063242] bg-white rounded-md md:py-4
          "
          >
            {language === "ar"
              ? splitDescTrans
                ? splitDescTrans.map((text, i) => (
                    <p key={i} className="pb-4 last:pb-0 text-right" dir="rtl">
                      {text}
                    </p>
                  ))
                : ""
              : splitDesc
              ? splitDesc.map((text, i) => (
                  <p key={i} className="pb-3 last:pb-0">
                    {text}
                  </p>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
