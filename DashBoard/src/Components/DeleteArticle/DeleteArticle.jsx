import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`https://services.bluetopia.org/articles/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("An error happened. Please check console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 font-Camel-Medium h-[80vh] flex  justify-center items-center">
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-3xl">Are you sure you want to delete this book?</h3>
        <div className="flex flex-col justify-center items-center">
          <button
            className="p-4  bg-red-900 text-white m-8 w-full text-xl rounded-full"
            onClick={handleDeleteBook}
          >
            Delete Article
          </button>
          <Link
            to="/articles"
            className="p-4 bg-green-600 text-white m-8 w-full text-center text-xl rounded-full"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
