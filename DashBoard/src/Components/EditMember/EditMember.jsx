import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditMember = () => {
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");
  const [about1, setAbout1] = useState("");
  const [about2, setAbout2] = useState("");
  const [about1Trans, setAbout1Trans] = useState("");
  const [about2Trans, setAbout2Trans] = useState("");
  const [name, setName] = useState("");
  const [nameTrans, setNameTrans] = useState("");
  const [link, setLink] = useState("");
  const [images, setImages] = useState([]);

  const handleImagesChange = (e) => {
    setImages([...images, e.target.files[0]]);
  };
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://services.bluetopia.org/team/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setTitleTrans(res.data.titleTrans);
        setAbout1(res.data.about1);
        setAbout2(res.data.about2);
        setAbout1Trans(res.data.about1Trans);
        setAbout2Trans(res.data.about2Trans);
        setName(res.data.name);
        setNameTrans(res.data.nameTrans);
        setLink(res.data.link);
        setImages(res.data.images);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);

  const navigate = useNavigate();
  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleTrans", titleTrans);
    formData.append("about1", about1);
    formData.append("about2", about2);
    formData.append("about1Trans", about1Trans);
    formData.append("about2Trans", about2Trans);
    formData.append("name", name);
    formData.append("nameTrans", nameTrans);
    formData.append("link", link);
    images.forEach((file) => {
      formData.append("images", file);
    });

    axios
      .put(`https://services.bluetopia.org/team/${id}`, formData)
      .then(() => {
        navigate("/articles");
      })
      .catch((err) => {
        alert("An error happened. Please check your  console");
        console.log(formData);
        console.log(err);
      });
  };

  return (
    <div className="p-4 flex h-[90vh]  justify-center items-center font-Camel-Bold">
      <div className="flex flex-col border-2 p-4 mx-auto  border-sky-400 rounded-xl  ">
        <h1 className="text-3xl my-4 text-center">Create New Member</h1>
        <form className="my-4 flex  justify-between space-x-12">
          <div className="w-[50%] flex flex-col space-y-5">
            <label className="text-xl mt-4 text-gray-500">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
                required
              />
            </label>
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
              About 1
              <input
                type="text"
                value={about1}
                onChange={(e) => setAbout1(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              About 2
              <input
                type="text"
                value={about2}
                onChange={(e) => setAbout2(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              Linkedin Profile Link
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
          </div>
          <div className="w-[50%] flex flex-col space-y-5" dir="rtl">
            <label className="text-xl mt-4 text-gray-500">
              الأسم
              <input
                type="text"
                value={nameTrans}
                onChange={(e) => setNameTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
                required
                dir="rtl"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              المهنة
              <input
                type="text"
                dir="rtl"
                value={titleTrans}
                onChange={(e) => setTitleTrans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>

            <label className="text-xl mt-4 text-gray-500">
              معلومة رقم ١
              <input
                type="text"
                dir="rtl"
                value={about1Trans}
                onChange={(e) => setAbout1Trans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label className="text-xl mt-4 text-gray-500">
              معلومة رقم ٢
              <input
                type="text"
                dir="rtl"
                value={about2Trans}
                onChange={(e) => setAbout2Trans(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full rounded-md outline-none"
              />
            </label>
            <label
              htmlFor="image-upload-input"
              className="text-xl mt-4 text-gray-500"
            >
              Select Images
              <span className="text-md text-red-600 pl-3 pb-3">
                *the small one first
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImagesChange}
                className="border-2 border-gray-500 px-4 py-2  w-full rounded-md outline-none"
                id="image-upload-input"
              />
            </label>
          </div>
        </form>

        <button
          className="p-2 bg-sky-300 m-8 text-white text-xl"
          onClick={handleSaveBook}
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default EditMember;
