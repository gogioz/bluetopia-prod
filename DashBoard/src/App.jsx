import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import AllArticles from "./Components/AllArticles/AllArticles";
import AddNewArticle from "./Components/AddNewAricle/AddNewArticle";
import EditArticle from "./Components/EditArticle/EditArticle";
import DeleteBook from "./Components/DeleteArticle/DeleteArticle";
import Nav from "./Components/Nav/Nav";
import TeamMembers from "./Components/TeamMembers/TeamMembers";
import AddNewPartner from "./Components/AddNewPartner/AddNewPartner";
import EditMember from "./Components/EditMember/EditMember";
export default function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  const form = useRef();

  useEffect(() => {
    axios
      .get(`https://services.bluetopia.org/admins`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loginSubmit = function (e) {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    users.map((user) =>
      user.email === loginData.email && user.password === loginData.password
        ? setCheckUser(true)
        : alert("Wrong username or password. Try again!") && setCheckUser(false)
    );

    if (checkUser === false) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      {checkUser ? (
        <BrowserRouter>
          <Nav checkUser={setCheckUser} />
          <Routes>
            <Route path="/" element={<AllArticles />} index />
            <Route path="/addnewarticle" element={<AddNewArticle />} />
            <Route path="/addnewpartner" element={<AddNewPartner />} />
            <Route path="/articles/:id" element={<EditArticle />} />
            <Route path="/team/:id" element={<EditMember />} />
            <Route path="/delete/:id" element={<DeleteBook />} />
            <Route path="/team" element={<TeamMembers />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="flex  justify-center mt-60 font-Camel-Regular">
          <div className="flex flex-col justify-center my-2 mx-4 md:mx-0 space-y-8">
            <h2 className="text-4xl tracking-tight text-center">
              Log in into your account
            </h2>
            <form
              ref={form}
              className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
              onSubmit={loginSubmit}
            >
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block  tracking-wide text-gray-700 text-3xl mb-2">
                    UserName
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block  tracking-wide text-gray-700  text-3xl mb-2">
                    Password
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <button
                    type="submit"
                    className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 "
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
