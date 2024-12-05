// ContactUs.js
import React, { useContext, useState } from "react";
import { FoodContext } from "../contexts/FoodContext";
import { toast } from "react-toastify";

const ContactUs = () => {


  const { handleFeedbackSubmission } = useContext(FoodContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  
  const handleChange = (e) => {
  
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata:", formData)
    if (formData?.name && formData?.email && formData?.message && formData?.phone) {
      handleFeedbackSubmission(formData)
    }
    else {
      toast.error("Fill all fields")
    }
  
  
  };


  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center sm:w-[70%] mb-8">
        We’d love to hear from you! Whether you have a question about our menu, services, or anything else, our team is ready to answer all your questions.
      </p>

      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[var(--primary-color)]"
            />
          </div>
          <div className="mb-4 text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[var(--primary-color)]"
            />
          </div>
          <div className="mb-4 text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="Your phone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[var(--primary-color)]"
            />
          </div>
          <div className="mb-4 text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              name="message"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[var(--primary-color)]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[var(--primary-color)] text-white font-semibold px-4 py-2 rounded-md w-full hover:bg-[var(--btn-hover-color)] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Or reach us directly at <a href="mailto:info@yourcafe.com" className="text-[var(--primary-color)] font-semibold">thenookcafe@gmail.com</a>
        </p>
        <p className="text-gray-600">
          Call us at <span className="text-[var(--primary-color)] font-semibold">+1 (123) 456-7890</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
