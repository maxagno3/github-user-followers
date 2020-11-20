import Axios from "axios";
import React, { useState } from "react";
import MutualUsersModal from "./MutualUsersModal";
import SearchUser from "./SearchUser";
import UserCard from "./UserCard";
import "@reach/dialog/styles.css";

function Header() {
  const [primaryUser, setPrimaryUser] = useState("");
  const [secondaryUser, setSecondaryUser] = useState("");
  const [commonUsers, setCommonUsers] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);

  const fetchCommonUsers = () => {
    Axios.get(
      `/github/common?primaryUser=${primaryUser.login}&secondaryUser=${secondaryUser.login}`
    )
      .then(({ data }) => {
        setOpenModal(true);
        setCommonUsers(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="text-center">
        <h2 className="mt-8 text-4xl font-bold">Getting started:</h2>
        <div className="container w-2/4 mx-auto mt-8">
          <p>
            Here you need to enter usernames of two GitHub users and get the
            list of users who are being followed by the first user and are
            following the second user.
          </p>
        </div>
      </div>
      {commonUsers && (
        <MutualUsersModal
          commonUsers={commonUsers}
          openModal={openModal}
          close={close}
        />
      )}
      <div className="text-center mt-8">
        {primaryUser && secondaryUser && (
          <button
            className="hover:bg-blue-400 text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded my-4 bg-blue-200"
            onClick={fetchCommonUsers}
          >
            Common Users
          </button>
        )}
      </div>
      <div className="flex justify-evenly">
        <div>
          <SearchUser title="primary" setPrimaryUser={setPrimaryUser} />
          {primaryUser && <UserCard user={primaryUser} />}
        </div>
        <div>
          <SearchUser title="secondary" setSecondaryUser={setSecondaryUser} />
          {secondaryUser && <UserCard user={secondaryUser} />}
        </div>
      </div>
    </>
  );
}

export default Header;
