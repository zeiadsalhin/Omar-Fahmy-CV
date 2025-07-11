import React, { useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      },
    }),
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      'service_iqacdve',
      'template_e5p5a1f',
      formRef.current,
      'Mnh7QqDg3V880DDZu'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        // Show success toast notification
        toast.success('Your message has been sent successfully!', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        formRef.current?.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Something went wrong. Please try again later.', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    );
  };

  return (
    <motion.div
      className="about mt-20 -mb-5 flex-col justify-center text-center bg-blue-950 dark:bg-blue-950 dark:text-[#EAEAEA]"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl dark:text-[#EAEAEA] text-center font-bold p-5">Connect with me!</h1>

      <motion.div
        className="contact-info mt-10 space-y-4"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* WhatsApp */}
        <div className="flex justify-center items-center gap-1 mt-2">
          <img src="/whatsapp.svg" className="dark:invert w-[1.5rem]" width="100%" height="100%" alt="whatsapp" />
          <span>:</span>
          <a href="https://wa.me/201021259379" className="opacity-80 text-lg flex items-center gap-1 text-[#EAEAEA]">
            <span>+201021259379</span>
            <img src="/link.svg" className="dark:invert w-[1.1rem] ml-1" width="100%" height="100%" alt="link" />
          </a>
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-1 mt-2">
          <img src="/email.svg" className="dark:invert w-[1.5rem]" width="100%" height="100%" alt="email" />
          <span>:</span>
          <a href="mailto:omarhussain755@gmail.com" className="opacity-80 text-lg text-[#EAEAEA]">
            omarhussain755@gmail.com
          </a>
          <img src="/link.svg" className="dark:invert w-[1.1rem] ml-1" width="100%" height="100%" alt="link" />
        </div>
      </motion.div>

      <div className="w-[8rem] h-1 bg-[#99050D] mx-auto rounded mt-10"></div>

      <motion.form
        id="form"
        className="space-y-2 md:space-x-5 p-10"
        ref={formRef}
        onSubmit={sendEmail}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <input
          aria-label="Name"
          id="name"
          required
          className="bg-[#2C2C2C] dark:bg-gray-900 placeholder-current text-[#EAEAEA] p-2 rounded-md focus:outline-none md:w-1/5"
          placeholder="Name"
          type="text"
          name="from_name"
        />
        <input
          aria-label='Email'
          id="email"
          required
          className="bg-[#2C2C2C] dark:bg-gray-900 placeholder-current text-[#EAEAEA] p-2 rounded-md focus:outline-none md:w-1/5"
          placeholder="Email"
          type="email"
          name="reply_to"
        />
        <br />
        <br />
        <br />
        <label className="text-xl text-[#EAEAEA]">Message</label>
        <br />
        <textarea
          id="message"
          required
          className="bg-[#2C2C2C] dark:bg-gray-900 placeholder-current text-[#EAEAEA] p-3 resize-none rounded-md focus:outline-none w-full md:w-1/3"
          rows={5}
          placeholder="Your message"
          name="message"
        ></textarea>
        <br />
        <input
          className="px-5 py-2 rounded-md hover:cursor-pointer bg-blue-500 hover:bg-[#07c7c4]/80 text-[#EAEAEA]"
          type="submit"
          value="Send"
        />
      </motion.form>

      {/* Toast notifications container */}
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
