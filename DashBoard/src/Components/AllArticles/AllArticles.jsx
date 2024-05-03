import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Activities() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-2 bg-[#063242]">
      <div className=" text-center my-6">
        <h1 className="text-6xl font-Camel-ExtraBold text-[#8DF7A7]">
          Articles
        </h1>
      </div>
      <div className="mx-10 my-10" id="articles">
        <div className="grid  grid-cols-3 gap-x-10 gap-y-10">
          {books
            ? books.map((article) => (
                <div
                  className="shadow-[0_2px_15px_rgba(0,0,0,0.1)] bg-white overflow-hidden rounded-[6px] duration-[.3s] hover:shadow-[0_2px_15px_rgba(0,0,0,0.2)] -translate-y-10 text-[#063242]"
                  key={article._id}
                >
                  <div className="p-[10px] flex flex-col justify-between  space-y-1">
                    <img src={`${article.image}`} alt="" />
                    <h3 className="m-0  text-3xl font-Camel-ExtraBold line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="leading-[1.5]  line-clamp-5 font-Camel-Medium text-xl text-[#063242] ">
                      {article.description}

                      <a>...</a>
                    </p>
                    <span className="self-end font-Camel-ExtraLight">
                      {article.publishDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 px-8 ">
                    <Link to={`/articles/${article._id}`}>
                      <button className="bg-transparent hover:bg-[#063242] text-[#063242] font-semibold hover:text-white py-2 px-4 border border-[#063242] hover:border-transparent rounded font-Camel-Medium">
                        Eidt
                      </button>
                    </Link>
                    <Link to={`/delete/${article._id}`}>
                      <button className="hover:bg-transparent bg-red-900 hover:text-red-900 font-semibold text-white py-2 px-4 border border-red-900 hover:border-transparent rounded font-Camel-Medium">
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Activities;
