import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNewPartner = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const navigate = useNavigate();
  const handleSavePartner = () => {
    const formData = new FormData();

    formData.append("logo", image);
    axios
      .post("https://services.bluetopia.org/sponsers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        try {
          navigate("/");
          console.log(formData);
        } catch (err) {
          console.log(err);
        }
      });
  };

  return (
    <div className="h-[80vh] flex  justify-center items-center font-Camel-Bold">
      <div className="flex flex-col border-2 p-4 mx-auto  border-sky-400 rounded-xl justify-center items-center ">
        <h1 className="text-3xl my-4 text-center">Create New Partner</h1>
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
        <form className="my-4 flex  space-x-5"></form>
        <button
          className="px-8 py-4 bg-green-600 m-8 text-white text-xl rounded-xl w-[50%]"
          onClick={handleSavePartner}
        >
          Save Partner
        </button>
      </div>
    </div>
  );
};

export default AddNewPartner;
