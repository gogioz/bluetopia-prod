import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditArticle() {
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitleTrans, setSubTitleTrans] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTrans, setDescriptionTrans] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  //   console.log(image);
  useEffect(() => {
    axios
      .get(`https://services.bluetopia.org/articles/${id}`)
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
      .put(`https://services.bluetopia.org/articles/${id}`, formData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("An error happened. Please check your  console");
        console.log(formData);
        console.log(err);
      });
  };
  return (
    <div className="pt-4 pb-20 flex px-10 justify-center items-center flex-col font-Camel-Bold">
      <h1 className="text-3xl mb-4 text-center font-Camel-Bold">
        Edit Article
      </h1>
      <div className="flex flex-col border-2 p-4 mx-auto  border-sky-400 rounded-xl justify-center items-center">
        <form className="my-4 flex  gap-x-5  font-Camel-Bold">
          <div className="w-[100%] flex flex-col ">
            <label className="text-2xl mt-4 text-gray-500">
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-2xl mt-4 text-gray-500">
              Description
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
                required
              >
                {" "}
                {description}
              </textarea>
            </label>

            <label className="text-2xl mt-4 text-gray-500">
              Sub Title
              <input
                type="text"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className="text-2xl mt-4 text-gray-500">
              Title Translation
              <input
                type="text"
                value={titleTrans}
                onChange={(e) => setTitleTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-2xl mt-4 text-gray-500">
              Description Translation
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

            <label className="text-2xl mt-4 text-gray-500">
              Sub Title Translation
              <input
                type="text"
                value={subTitleTrans}
                onChange={(e) => setSubTitleTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
          </div>
        </form>
        <label
          htmlFor="image-upload-input"
          className="text-2xl m-4 text-gray-500"
        >
          Select Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="border-2 border-gray-500 px-4 py-2 mt-2  w-full rounded-md outline-none"
            id="image-upload-input"
          />
        </label>

        <button
          className="px-8 py-4 bg-green-600 my-6  text-white text-2xl w-[20%] rounded-md"
          onClick={handleSaveBook}
        >
          Save Article
        </button>
      </div>
    </div>
  );
}

export default EditArticle;
