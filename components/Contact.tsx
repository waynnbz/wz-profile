import React from 'react';
import { BsPhoneFill as PhoneIcon } from 'react-icons/bs';
import { FaEnvelope as EnvelopeIcon } from 'react-icons/fa';
import { RiWhatsappFill as WhatsappIcon } from 'react-icons/ri';

function Contact() {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center leading-tight">
          I have got just what you need.
          <br />
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <div className="flex gap-2 items-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              {' | '}
              <WhatsappIcon className="text-[#25D366] ml-1 bg-white rounded-md h-7 w-7 animate-pulse" />
            </div>
            <p className="text-2xl">+65 8506 7073</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">waylonago@gmail.com</p>
          </div>

          <form className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input placeholder="Name" className="contactInput" type="text" />
              <input placeholder="Email" className="contactInput" type="email" />
            </div>

            <input placeholder="Subject" className="contactInput" type="text" />

            <textarea placeholder="Message" className="contactInput" />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
