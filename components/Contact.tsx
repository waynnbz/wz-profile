import React from 'react';
import { BsPhoneFill as PhoneIcon } from 'react-icons/bs';
import { FaEnvelope as EnvelopeIcon } from 'react-icons/fa';
import { RiWhatsappFill as WhatsappIcon } from 'react-icons/ri';
import { RxLinkedinLogo as LinkedInIcon } from 'react-icons/rx';
import { SiTopcoder as TopCoderIcon } from 'react-icons/si';
import { RxGithubLogo as GithubIcon } from 'react-icons/rx';
import { motion } from 'framer-motion';

// import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useWindowSize } from 'react-use';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  darker: boolean;
};

function Contact({ darker }: Props) {
  const { width } = useWindowSize();
  const isMobile = width < 1200;
  // const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = formData => {
  //   window.location.href = `mailto:waylonago@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  // };

  return (
    <div
      id="contact"
      className={`flex flex-col relative h-[720px] gap-8 lg:gap-32 items-center justify-between text-left
    lg:flex-row 
    py-24 lg:py-36
    xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}
    `}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6 md:gap-8 justify-center items-center lg:items-start"
      >
        <div className="text-3xl md:text-4xl xl:text-6xl font-bold mb-4 font-CircularStd">
          Contact
        </div>
        <div className="flex justify-center items-lef space-x-5">
          <div className="flex gap-2 items-center">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            {' | '}
            <WhatsappIcon className="text-[#25D366] ml-1 bg-white rounded-md h-7 w-7 animate-pulse" />
          </div>
          <p className="text-lg md:text-2xl">+65 8506 7073</p>
        </div>

        <div
          onClick={() => {
            window.open(`mailto:waylonago@gmail.com`);
          }}
          className="flex justify-center items-center space-x-5 cursor-pointer hover:text-[#F7AB0A] hover:dark:text-[#3b82f680]"
        >
          <EnvelopeIcon className="h-7 w-7 animate-pulse" />
          <p className="text-lg md:text-2xl">waylonago@gmail.com</p>
        </div>

        <div className="w-full h-0.5 bg-slate-400"></div>

        <div className="flex flex-col text-center whitespace-nowrap md:text-left md:flex-row gap-6 md:gap-12 text-2xl xl:text-4xl font-bold font-CircularStd">
          let{"'"}s connect:
          <div className="flex gap-8 items-center text-lg font-normal font-sans">
            <GithubIcon
              onClick={() => {
                window.open(`https://github.com/waynnbz`);
              }}
              className="hover:text-[#F7AB0A] hover:dark:text-[#3b82f680] h-9 w-9 animate-pulse cursor-pointer"
            />
            {' | '}
            <TopCoderIcon
              onClick={() => {
                window.open(`https://www.topcoder.com/members/waynn`);
              }}
              className="hover:text-[#F7AB0A] hover:dark:text-[#3b82f680] h-9 w-9 animate-pulse cursor-pointer"
            />
            {' | '}
            <LinkedInIcon
              onClick={() => {
                window.open(`https://www.linkedin.com/in/wpzeng`);
              }}
              className="hover:text-[#F7AB0A] hover:dark:text-[#3b82f680] h-9 w-9 animate-pulse cursor-pointer"
            />
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-auto md:w-fit mx-auto mt-8"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A]/50 dark:bg-[#3b82f680]/50  hover:bg-[#F7AB0A]/80 dark:hover:bg-[#3b82f680]/80 py-5 px-10 rounded-md font-bold text-lg"
          >
            Submit
          </button>
        </form> */}
      </motion.div>

      <motion.div
        initial={
          isMobile
            ? {
                x: 0,
                opacity: 0,
              }
            : {
                x: 500,
              }
        }
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-1/2 lg:w-1/2 h-full h-min-2/3"
      >
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className="object-contain scale-150"
        />
      </motion.div>
    </div>
  );
}

export default Contact;
