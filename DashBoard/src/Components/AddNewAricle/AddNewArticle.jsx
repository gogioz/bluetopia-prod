import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNewArticle = () => {
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitleTrans, setSubTitleTrans] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTrans, setDescriptionTrans] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(image);

  const navigate = useNavigate();
  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleTrans", titleTrans);
    formData.append("subTitle", subTitle);
    formData.append("subTitleTrans", subTitleTrans);
    formData.append("description", description);
    formData.append("descriptionTrans", descriptionTrans);
    formData.append("image", image);
    axios
      .post("https://services.bluetopia.org/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="py-4  px-10 font-Camel-Bold">
      <div className="flex flex-col border-2 p-4 mx-auto  border-sky-400 rounded-xl  ">
        <h1 className="text-3xl my-4 text-center">Create New Article</h1>
        <form className="my-4 flex  space-x-5">
          <div className="w-[100%] flex flex-col">
            <label className="text-xl mt-4 text-gray-500">
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              Subitle
              <input
                type="text"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              Description
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
                required
              ></textarea>
            </label>
          </div>
          <div className="w-[100%] flex flex-col" dir="rtl">
            <label className="text-xl mt-4 text-gray-500">
              ترجمة العنوان
              <input
                type="text"
                value={titleTrans}
                onChange={(e) => setTitleTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>

            <label className="text-xl mt-4 text-gray-500">
              ترجمة العنوان الفرعي
              <input
                type="text"
                value={subTitleTrans}
                onChange={(e) => setSubTitleTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              ترجمة النص
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={descriptionTrans}
                onChange={(e) => setDescriptionTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
                required
              ></textarea>
            </label>
          </div>
        </form>
        <label
          htmlFor="image-upload-input"
          className="text-xl mt-4 text-gray-500"
        >
          Select Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="border-2 border-gray-500 px-4 py-2  w-full rounded-md outline-none"
            id="image-upload-input"
          />
        </label>
        <button
          className="p-2 bg-sky-300 m-8 text-white text-xl"
          onClick={handleSaveBook}
        >
          Save Article
        </button>
      </div>
    </div>
  );
};

export default AddNewArticle;
