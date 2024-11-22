import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_38rrm4s", // Replace with your EmailJS Service ID
        "template_5a57omc", // Replace with your EmailJS Template ID
        formData, // Pass in form data
        "xBAw19m9QvdpXnVGO" // Replace with your EmailJS User ID
      )
      .then(() => {
        setSubmissionStatus("Thank you for contacting!");
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setSubmissionStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="w-full   my-20 rounded-md xl:shadow-lg p-4 py-16 flex  justify-center">
      <div className="w-full max-w-3xl p-6 bg-white  rounded-lg">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-6">
          Contact Me!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 focus:ring-[#f8d203] border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-[#f8d203] focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d203]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f8d203] shadow-lg border font-bold text-white py-2 px-4 rounded-lg hover:bg-[#f7db3c] focus:outline-none focus:ring-2 focus:ring-[#f8d203]"
          >
            Submit
          </button>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            {submissionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
