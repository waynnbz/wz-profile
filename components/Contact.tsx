import React from 'react';
import { BsPhoneFill as PhoneIcon } from 'react-icons/bs';
import { FaEnvelope as EnvelopeIcon } from 'react-icons/fa';
import { RiWhatsappFill as WhatsappIcon } from 'react-icons/ri';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';

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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:waylonago@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      id="contact"
      className={`flex flex-col relative h-screen lg:gap-32 items-center justify-between text-left
    lg:flex-row 
    py-32 lg:py-48
    xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}
    `}
    >
      <div className="flex flex-col gap-8 justify-center items-center lg:items-start">
        <div className="text-3xl md:text-4xl xl:text-6xl font-bold mb-4 font-CircularStd">
          Contact
        </div>
        <div className="flex justify-center items-lef space-x-5">
          <div className="flex gap-2 items-center">
            <PhoneIcon className="text-[#F7AB0A] dark:text-[#3b82f680] h-7 w-7 animate-pulse" />
            {' | '}
            <WhatsappIcon className="text-[#25D366] ml-1 bg-white rounded-md h-7 w-7 animate-pulse" />
          </div>
          <p className="text-2xl">+65 8506 7073</p>
        </div>

        <div className="flex justify-center items-center space-x-5">
          <EnvelopeIcon className="text-[#F7AB0A] dark:text-[#3b82f680] h-7 w-7 animate-pulse" />
          <p className="text-2xl">waylonago@gmail.com</p>
        </div>

        <form
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
        </form>
      </div>

      <div className="relative w-full lg:w-1/2 h-full h-min-2/3">
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className="object-contain"
        />
      </div>
    </div>

    // <div
    //   id="contact"
    //   className="flex flex-col text-center h-screen  max-w-7xl px-10 justify-evenly mx-auto items-center "
    // >
    //   <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
    //     Contact
    //   </h3>

    //   <div className="flex flex-col space-y-10">
    //     <h4 className="text-4xl font-semibold text-center leading-tight">
    //       I have got just what you need.
    //       <br />
    //       <span className="decoration-[#F7AB0A]/50 dark:decoration-[#3b82f680]/50 underline">
    //         Lets Talk
    //       </span>
    //     </h4>

    //     <div className="space-y-10">
    //       <div className="flex items-center space-x-5 justify-center">
    //         <div className="flex gap-2 items-center">
    //           <PhoneIcon className="text-[#F7AB0A] dark:text-[#3b82f680] h-7 w-7 animate-pulse" />
    //           {' | '}
    //           <WhatsappIcon className="text-[#25D366] ml-1 bg-white rounded-md h-7 w-7 animate-pulse" />
    //         </div>
    //         <p className="text-2xl">+65 8506 7073</p>
    //       </div>

    //       <div className="flex items-center space-x-5 justify-center">
    //         <EnvelopeIcon className="text-[#F7AB0A] dark:text-[#3b82f680] h-7 w-7 animate-pulse" />
    //         <p className="text-2xl">waylonago@gmail.com</p>
    //       </div>

    //       {/* <form
    //         onSubmit={handleSubmit(onSubmit)}
    //         className="flex flex-col space-y-2 w-fit mx-auto"
    //       >
    //         <div className="flex space-x-2">
    //           <input
    //             {...register('name')}
    //             plaName="contactInput"
    //           type="text"
    //         />

    //         <textarea
    //           {...register('message')}
    //           placeholder="Message"
    //           className="contactInput"
    //         />
    //         <button
    //           type="submit"
    //           className="bg-[#F7AB0A]/50 dark:bg-[#3b82f680]/50  hover:bg-[#F7AB0A]/80 dark:hover:bg-[#3b82f680]/80 py-5 px-10 rounded-md font-bold text-lg"
    //         >
    //           Submit
    //         </button>
    //       </form> */}
    //     </div>
    //   </div>
    // </div>ssName="contactInput"
    //             type="text"
    //           />
    //           <input
    //             {...register('email')}
    //             placeholder="Email"
    //             className="contactInput"
    //             type="email"
    //           />
    //         </div>

    //         <input
    //           {...register('subject')}
    //           placeholder="Subject"
    //           className="contactInput"
    //           type="text"
    //         />

    //         <textarea
    //           {...register('message')}
    //           placeholder="Message"
    //           className="contactInput"
    //         />
    //         <button
    //           type="submit"
    //           className="bg-[#F7AB0A]/50 dark:bg-[#3b82f680]/50  hover:bg-[#F7AB0A]/80 dark:hover:bg-[#3b82f680]/80 py-5 px-10 rounded-md font-bold text-lg"
    //         >
    //           Submit
    //         </button>
    //       </form> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Contact;
