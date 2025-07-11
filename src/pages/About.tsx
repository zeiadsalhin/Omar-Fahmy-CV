import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";  // Import Toastify

// about page component
// display contact information and a form to send a message
const About: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_iqacdve",
        "template_e5p5a1f",
        formRef.current,
        "Mnh7QqDg3V880DDZu"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message Sent Successfully!");  // Display success notification
          formRef.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send the message. Please try again!");  // Display error notification
        }
      );
  };

  return (
    <div className="about py-10 flex flex-col items-center text-center dark:bg-blue-950 dark:text-[#EAEAEA] px-4 md:px-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold my-5">Connect with me!</h1>

      {/* Contact Info */}
      <div className="space-y-4 text-lg">
        {/* WhatsApp */}
        <div className="flex items-center gap-2 justify-center">
          <img src="/whatsapp.svg" alt="whatsapp" className="dark:invert w-6" />
          <span>:</span>
          <a
            href="https://wa.me/2001067564254"
            className="hover:underline flex items-center gap-1 text-blue-50/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            +2001067564254
            <img src="/link.svg" alt="link" className="dark:invert w-4" />
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 justify-center">
          <img src="/email.svg" alt="email" className="dark:invert w-6" />
          <span>:</span>
          <a
            href="mailto:omarhussain755@gmail.com"
            className="hover:underline flex items-center gap-1 text-blue-50/90"
          >
            omarhussain755@gmail.com
            <img src="/link.svg" alt="link" className="dark:invert w-4" />
          </a>
        </div>
      </div>

      {/* Message Form */}
      <h2 className="text-3xl font-bold mt-14 mb-6">Or leave me a message!</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl space-y-6 bg-blue-900/40 p-6 rounded-lg shadow-md"
      >
        {/* Name */}
        <div className="text-left">
          <label htmlFor="name" className="block mb-1 font-medium text-white">
            Name
          </label>
          <input
            id="name"
            name="from_name"
            type="text"
            required
            placeholder="Your name"
            className="w-full p-2 rounded-md bg-gray-900/90 text-white focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
        </div>

        {/* Email */}
        <div className="text-left">
          <label htmlFor="email" className="block mb-1 font-medium text-white">
            Email
          </label>
          <input
            id="email"
            name="reply_to"
            type="email"
            required
            placeholder="Your email"
            className="w-full p-2 rounded-md bg-gray-900/90 text-white focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
        </div>

        {/* Message */}
        <div className="text-left">
          <label htmlFor="message" className="block mb-1 font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Your message"
            className="w-full p-3 rounded-md resize-none bg-gray-900/90 text-white focus:outline-none focus:ring-2 focus:ring-[#FF2E63]"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-[#07c7c4]/80 text-white rounded-md transition"
          >
            Send
          </button>
        </div>
      </form>

      {/* Toast Container to render notifications */}
      <ToastContainer />
    </div>
  );
};

export default About;
