import React from "react";
import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";

function MutualUsersModal({ commonUsers, openModal, close }) {
  return (
    <div>
      <Dialog
        isOpen={openModal}
        onDismiss={close}
        style={{ width: "40%" }}
        aria-label="Close Button"
      >
        <div>
          {commonUsers.map((user) => {
            return (
              <>
                <button className="close-button" onClick={close}>
                  <VisuallyHidden>Close</VisuallyHidden>
                  <span aria-hidden>x</span>
                </button>
                <div className="flex mx-auto">
                  <img
                    src={user.avatar_url}
                    alt="user"
                    className="img w-40 h-40 block self-center rounded-full shadow-md m-4"
                  />
                  <h1 className="justify-center">{user.login}</h1>
                </div>
              </>
            );
          })}
        </div>
      </Dialog>
    </div>
  );
}

export default MutualUsersModal;
