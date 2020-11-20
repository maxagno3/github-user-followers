import React from "react";

function UserCard({ user }) {
  return (
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs mx-auto">
      <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
      <div className="flex justify-center -mt-8">
        <img
          src={user.avatar_url}
          className="img w-40 h-40 block self-center rounded-full shadow-md"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-sm bold font-sans">{user.login}</h3>
        <p className="mt-2 font-sans font-light text-grey-dark">{user.bio}</p>
      </div>
      <div className="flex justify-center pb-3 text-grey-dark">
        <div className="text-center mr-3 border-r pr-3">
          <h2>{user.followers}</h2>
          <span>Followers</span>
        </div>
        <div className="text-center">
          <h2>{user.following}</h2>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
