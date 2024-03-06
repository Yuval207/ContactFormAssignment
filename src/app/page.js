"use client";
import { useRef } from "react";
import axios from "axios";
import Animation from "./animation.json";
import Lottie from "lottie-react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const messagesRef = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    toast.success("Message received Successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    const formEle = formRef.current;
    const formData = new FormData(formEle);
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbx4NDJukSvcU8LVy9QmBjAlFIMdh7WIoSt1qR-Hf7tBRspdJ7-bUu6083A_aV3WCOu1/exec",
        formData
      )
      .then((response) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
        messagesRef.current.value = "";
      })
      .catch((error) => {
        toast.error("Error Occured", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  }
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-t from-blue-500 to-purple-600 justify-evenly">
      <div className="md:w-1/4 md:ml-8">
        <Lottie animationData={Animation} />
      </div>
      <div className="shadow-md rounded-2xl bg-gradient-to-t from-gray-800 to-gray-900 p-8 max-w-md w-full -mr-20">
        <h1 className="text-4xl text-center mb-8 text-white">Contact Us</h1>
        <form
          className="flex flex-col items-center w-full"
          ref={formRef}
          onSubmit={(e) => submitForm(e)}
        >
          <input
            className="border-2 border-gray-600 bg-gray-800 rounded-md px-3 py-2 w-full mb-4 text-white placeholder-gray-400"
            placeholder="Your Name"
            name="Name"
            type="text"
            ref={nameRef}
            required
          />
          <input
            className="border-2 border-gray-600 bg-gray-800 rounded-md px-3 py-2 w-full mb-4 text-white placeholder-gray-400"
            placeholder="Your Email"
            name="Email"
            type="text"
            ref={emailRef}
            required
          />
          <input
            className="border-2 border-gray-600 bg-gray-800 rounded-md px-3 py-2 w-full mb-4 text-white placeholder-gray-400"
            placeholder="Your Phone Number"
            name="Phone"
            type="tel"
            ref={numberRef}
            required
          />
          <textarea
            className="border-2 border-gray-600 bg-gray-800 rounded-md px-3 py-2 w-full mb-4 text-white placeholder-gray-400"
            placeholder="Your Message"
            name="Message"
            type="text"
            ref={messagesRef}
            required
          />
          <input
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
