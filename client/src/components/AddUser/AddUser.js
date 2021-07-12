import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";
import { addUser } from "../../JS/actions/userActions";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();
  const [adress, setAdress] = useState("");

  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    tel: "",
    adress: "",
  });

  const isEdit = useSelector((state) => state.userReducer.isEdit);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (isEdit) {
      setPerson(user);
    } else {
      setPerson({
        fullName: "",
        email: "",
        tel: "",
        adress: "",
      });
    }
  }, [isEdit, user]);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //   useEffect(() => {
  //     openModal();
  //   }, []);

  const add = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      tel,
      email,
      adress,
    };

    dispatch(addUser(newUser));
  };

  const edit = () => {};

  return (
    <div>
      <button onClick={openModal}>{isEdit ? "Edit User" : "Add User"}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>

        <form>
          <input
            type="text"
            value={person.fullName}
            placeholder="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            value={person.email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={person.tel}
            placeholder="tel"
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="text"
            value={person.adress}
            placeholder="adress"
            onChange={(e) => setAdress(e.target.value)}
          />
          <button onClick={(e) => add(e)}>{isEdit ? "Edit" : "Add"}</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
