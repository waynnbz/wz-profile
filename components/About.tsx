import React from 'react';
import { useInView } from 'react-intersection-observer';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/theme';
import { useWindowSize } from 'react-use';

type Props = {
  darker: boolean;
};

function About({ darker }: Props) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const { isDarkMode } = useTheme();
  const { width } = useWindowSize();
  const isMobile = width < 1200;

  return (
    <div
      ref={ref}
      className={`flex flex-col-reverse relative h-fit gap-12 lg:gap-32 items-center justify-center text-left
    lg:grid lg:grid-cols-5
    
    py-24 md:py-48
    xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}
    `}
      id="about"
    >
      <motion.div
        initial={
          isMobile
            ? {
                opacity: 0,
              }
            : {
                x: -500,
              }
        }
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:col-span-2 flex relative justify-center text-center rounded-lg overflow-hidden"
      >
        <video loop autoPlay muted playsInline>
          <source src="/CompressedBurningComputer.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:col-span-3"
      >
        <div className="text-3xl md:text-4xl xl:text-6xl font-bold mb-10 font-CircularStd">
          About me
        </div>
        <RoughNotationGroup show={inView}>
          <div className="flex flex-col gap-8 text-xl md:text-2xl xl:text-3xl font-LeagueSpartan">
            <span>I love building solutions that help people.</span>
            <span>
              Two years working in{' '}
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#422c57' : '#ccb1e3'}
                animate={true}
                multiline={true}
              >
                Web/Mobile Development
              </RoughNotation>{' '}
              and{' '}
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#1d4f2d' : '#b1f0c5'}
                animate={true}
                multiline={true}
              >
                Product Ops
              </RoughNotation>
              . I am comfortable with{' '}
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#692b3f' : '#f7a3be'}
                animate={true}
                multiline={true}
              >
                Agile/Scrum
              </RoughNotation>{' '}
              development and
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#614d26' : '#ffe0a1'}
                animate={true}
                multiline={true}
              >
                CI/CD
              </RoughNotation>{' '}
              workflow.
            </span>
            <span>
              As a{' '}
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#422c57' : '#ccb1e3'}
                animate={true}
                multiline={true}
              >
                lifetime learner
              </RoughNotation>{' '}
              I tackle challenges and find practical solutions. I balance
              technology and{' '}
              <RoughNotation
                type="highlight"
                color={isDarkMode ? '#1d4f2d' : '#b1f0c5'}
                animate={true}
                multiline={true}
              >
                business logic
              </RoughNotation>{' '}
              in my work, aligning with company and customer needs.
            </span>
            <span>
              I am currently looking for a{' '}
              <RoughNotation
                type="underline"
                color={isDarkMode ? '#692b3f' : '#f7a3be'}
                animate={true}
                multiline={true}
              >
                Singapore-based
              </RoughNotation>{' '}
              developer role.{' '}
              <RoughNotation
                type="circle"
                color={isDarkMode ? '#3B82F6' : '#F7AB0A'}
                strokeWidth={2}
                padding={12}
                animate={true}
                multiline={true}
              >
                <span className="font-bold">Hire me?</span>
              </RoughNotation>
            </span>
          </div>
        </RoughNotationGroup>
      </motion.div>
    </div>
  );
}

export default About;
