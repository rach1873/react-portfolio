import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.subject || !state.message) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "Please fill out every input!!",
        showConfirmButton: false,
        timer: 5000,
      });
      return;
    }
    try {
      const res = await axios.post(
        "https://formdata-19ae1ab96924.herokuapp.com/formdata",
        state
      );

      // alert("Message Received! Thanks");
      Swal.fire({
        position: "center",
        icon: "Success",
        title: "Message has been sent!!",
        showConfirmButton: false,
        timer: 2000,
      });

      setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center space-y-8 bg-gradient-to-r from-blue-600 to-emerald-600">
      <h1 className="text-blue-400">Please Send Me a Message</h1>
      <div className="container-2">
        <div className="c c-1"></div>
        <div className="c c-2"></div>
        <div className="n">BS</div>
      </div>
      <form
        className="flex flex-col space-y-2 text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Your Email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          value={state.subject}
          onChange={(e) => setState({ ...state, subject: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="text-white active:scale-75 duration-50 cursor-pointer"
        />
      </form>
    </main>
  );
};

export default Contact;
