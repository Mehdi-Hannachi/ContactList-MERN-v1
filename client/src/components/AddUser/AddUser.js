import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";
import { addUser, editUser } from "../../JS/actions/userActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();
  const [adress, setAdress] = useState("");

  const isEdit = useSelector((state) => state.userReducer.isEdit);
  const user = useSelector((state) => state.userReducer.user);
  const msg = useSelector((state) => state.userReducer.msg);

  useEffect(() => {
    openModal();
    if (isEdit) {
      // setPerson(user);
      setFullName(user.fullName);
      setEmail(user.email);
      setTel(user.tel);
      setAdress(user.adress);
    } else {
      setFullName("");
      setEmail("");
      setTel("");
      setAdress("");
    }
  }, [isEdit, user]);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const add = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      tel,
      email,
      adress,
    };

    dispatch(addUser(newUser));
    // alert(msg);
    // closeModal();
  };

  console.log(user);

  const edit = (e) => {
    e.preventDefault();
    dispatch(editUser(user._id, { fullName, email, tel, adress }));
    closeModal();
  };

  return (
    <div>
      {/* <button onClick={openModal}>{isEdit ? "Edit User" : "Add User"}</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>

        <form>
          {msg ? <span>{msg.msg}</span> : null}
          <input
            type="text"
            s
            value={fullName}
            placeholder="FullName ... "
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email ..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={tel}
            placeholder="Num Tel ..."
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="text"
            value={adress}
            placeholder="Adress ..."
            onChange={(e) => setAdress(e.target.value)}
          />
          <button
            onClick={(e) => {
              isEdit ? edit(e) : add(e);
            }}
          >
            {isEdit ? "Edit" : "Add"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
