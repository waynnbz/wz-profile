import Image from 'next/image';
import { Link } from 'react-scroll';
import { AiOutlineSwapRight as SwapRightIcon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';

type Props = {
  darker: boolean;
};

function Hero({ darker }: Props) {
  const { width } = useWindowSize();
  const isMobile = width < 1200;

  return (
    <div
      id="hero"
      className={`flex flex-col items-center h-screen justify-center text-left gap-8 pt-24 bg-slate-100 
      md:flex-row md:justify-between md:text-left md:gap-24 xl:px-64 md:px-32 md:py-0
      ${darker && 'darker'}
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
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-star font-VisueltPro
        text-3xl md:text-4xl xl:text-6xl leading-loose"
      >
        <Image
          src="/quote.svg"
          alt="quote"
          width="128"
          height="128"
          className="md:mb-8 md:w-fit md:h-fit w-[64px] h-[64px] mb-0"
        ></Image>
        <h2 className="leading-tight md:leading-0 whitespace-nowrap">
          Hi, I{"'"}m{' '}
          <span className="dark:decoration-brand-blue/60 decoration-brand-yellow/60  font-bold">
            Wei Peng
          </span>
          <br />
          Software Developer
        </h2>
        <p className="text-sm md:text-2xl xl:text-2xl font-Rubik font-normal text-[#AFADAE] mt-2 mb-4 md:mt-4 md:mb-16">
          Based in Singapore
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          // offset={-80}
          className="flex justify-start items-center -ml-3 px-5 w-12 h-12 rounded-full cursor-pointer
          md:w-16 md:h-16 md:px-8 md:-ml-5
          dark:bg-brand-blue/80 bg-brand-yellow/80
          hover:translate-x-2 md:hover:translate-x-4 hover:w-52 md:hover:w-[318px] transition-all duration-500 animate-pulse hover:animate-none
        "
        >
          <div className="text-xl md:text-3xl font-Rubik font-medium whitespace-nowrap flex items-center gap-2 md:gap-4 tracking-wide">
            View all works <SwapRightIcon className="scale-x-150" />
          </div>
        </Link>
      </motion.div>

      {/* eslint-disable @next/next/no-img-element */}
      <motion.img
        src="/web3Coder-lg.png"
        srcSet="/web3Coder-sm.png 480w, 
        /web3Coder-md.png 960w, 
        /web3Coder-lg.png 1340w"
        sizes="(min-width: 767px) 100vw,
        (min-width: 991px) 50vw,
        50vw"
        alt="web3 coder png"
        className="origin-bottom-right object-contain md:object-cover object-top overflow-visible w-3/5 min-w-[238px] sm:w-2/5 h-3/5"
        initial={{ x: isMobile ? 0 : 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{
          rotate: [0, 3, 1, 2, -1, 2, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 10,
          scale: { duration: 0.4 },
          x: { duration: 1 },
          y: { duration: 1 },
          opacity: { duration: 1 },
        }}
        // drag={isMobile ? false : true}
        // // drag
        // dragConstraints={{
        //   top: isMobile ? -50 : -200,
        //   left: isMobile ? -50 : -200,
        //   right: isMobile ? 50 : 200,
        //   bottom: isMobile ? 50 : 200,
        // }}
        // whileTap={{
        //   scale: 0.8,
        // }}
      />
    </div>
  );
}

export default Hero;
