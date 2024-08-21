import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApidata] = useState([]);
  function getData() {
    axios
      .get("https://66c38fd1d057009ee9c0a617.mockapi.io/Crud")
      .then((response) => {
        setApidata(response.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function handleDelete(id) {
    axios
      .delete(`https://66c38fd1d057009ee9c0a617.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  }
  function setDataToStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  return (
    <>
      <div className="flex justify-center flex-col my-10 items-center">
        <div className="my-4">
          <Link to="/create">
            <button className="text-lg text-white bg-sky-700 hover:bg-sky-800 duration-300 w-[200px] p-2 uppercase rounded-md font-semibold cursor-pointer">
              Create Data
            </button>
          </Link>
        </div>
        <table className="w-[1000px] rounded-full shadow-lg overflow-scroll">
          <thead className="border border-b-sky-900 bg-sky-300 text-white text-center">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">NAME</th>
              <th className="py-2">AGE</th>
              <th className="py-2">EMAIL</th>
              <th className="py-2">EDIT</th>
              <th className="py-2">DELETE</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {apidata.map((item) => {
              return (
                <tr
                  key={item.id}
                  className=" bg-sky-100 transition-all duration-300 border border-b-sky-300"
                >
                  <td className="py-2 text-lg">{item.id}</td>
                  <td className="py-2 text-lg">{item.e_name}</td>
                  <td className="py-2 text-lg">{item.e_age}</td>
                  <td className="py-2 text-lg">{item.e_email}</td>
                  <td className="py-2">
                    <Link to="/edit">
                      <button
                        onClick={() =>
                          setDataToStorage(
                            item.id,
                            item.e_name,
                            item.e_age,
                            item.e_email
                          )
                        }
                        className="text-lg text-white bg-green-400 hover:bg-green-500 duration-300 w-[130px] p-1 rounded-md font-semibold cursor-pointer"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => {
                        if (window.confirm("Are You Sure to delete Data")) {
                          handleDelete(item.id);
                        }
                      }}
                      className="text-lg text-white bg-red-400 hover:bg-red-500 duration-300 w-[130px] p-1 rounded-md font-semibold cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Read;
