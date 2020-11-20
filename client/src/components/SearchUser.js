import Axios from "axios";
import React, { useState } from "react";
import InputBox from "./InputBox";

function SearchUser(props) {
  const [userInput, setUserInput] = useState({ username: "", error: "" });

  const fetchUserData = (event) => {
    event.preventDefault();
    Axios.get(`/github/${userInput.username}`)
      .then(({ data }) => {
        if (props.title === "primary") {
          props.setPrimaryUser(data);
        } else if (props.title === "secondary") {
          props.setSecondaryUser(data);
        }
      })
      .catch((err) => setUserInput({ ...userInput, error: err }));
  };

  return (
    <div className="flex w-full flex-wrap items-stretch mb-3 mt-8">
      <form onSubmit={fetchUserData}>
        <InputBox
          placeholder="Enter username"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
          value={userInput.username}
          onChange={(event) =>
            setUserInput({ ...userInput, username: event.target.value })
          }
        />
        <button className="bg-yellow-300 hover:bg-blue-400 text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded my-4">
          Button
        </button>
        <small>{userInput?.error}</small>
      </form>
    </div>
  );
}

export default SearchUser;
