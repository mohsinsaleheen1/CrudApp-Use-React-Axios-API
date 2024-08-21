import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://66c38fd1d057009ee9c0a617.mockapi.io/Crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-sky-800">
            Update Data
          </h1>
          <form
            onSubmit={handleUpdate}
            className="my-4 p-8 bg-sky-300 rounded-lg shadow-lg"
          >
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-2">Enter Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-3">Enter Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-2">Enter Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="mt-8">
              <input
                type="submit"
                value="Update"
                className="text-lg text-white bg-sky-700 hover:bg-sky-800 duration-300 w-full p-2 uppercase rounded-md font-semibold cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
