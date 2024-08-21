import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66c38fd1d057009ee9c0a617.mockapi.io/Crud", {
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
            Create Data
          </h1>
          <form
            onSubmit={handleSubmit}
            className="my-4 p-8 bg-sky-300 rounded-lg shadow-lg"
          >
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-2">Enter Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                name={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-3">Enter Age:</label>
              <input
                type="number"
                name={age}
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="w-full my-4">
              <label className="text-lg font-semibold px-2">Enter Email:</label>
              <input
                type="text"
                name={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg px-3 py-[3px] rounded-md w-[200px] focus:outline-none focus:border-1 focus:outline-sky-400"
              />
            </div>
            <div className="mt-8">
              <input
                type="submit"
                value="create"
                className="text-lg text-white bg-sky-700 hover:bg-sky-800 duration-300 w-full p-2 uppercase rounded-md font-semibold cursor-pointer"
              />
            </div>
          </form>
          <div className="my-4">
          <Link to="/">
            <button className="text-lg text-white bg-sky-700 hover:bg-sky-800 duration-300 w-[200px] p-2 uppercase rounded-md font-semibold cursor-pointer">
              Read Data
            </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Create;
