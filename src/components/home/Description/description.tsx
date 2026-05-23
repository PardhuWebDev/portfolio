import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './anim';
import RoundedButton from '@/components/animations/roundedButton';
import Link from 'next/link';

export default function Description() {
  const phrase1 =
<<<<<<< HEAD
    'An AIML engineer building intelligent systems at the intersection of\n' +
    'Generative AI and full-stack engineering.\n\n ';

  const phrase2 =
    'Particularly interested in agentic architectures, LLM pipelines, and ' +
    'real-time data systems. I believe that AI and good engineering can be ' +
    'combined to create truly transformative products.';
=======
    'A software engineer with a passion for innovation and\n' +
    'cutting-edge technology.\n\n ';

  const phrase2 =
    'Particularly interested in the intersection of art, design, and ' +
    'software. I believe that these disciplines can be combined to ' +
    'create truly transformative experiences.';
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
<<<<<<< HEAD
      className="relative flex flex-col justify-center gap-12 p-8 sm:mt-[200px] sm:flex-row sm:p-20"
=======
      className="relative flex flex-col justify-center gap-12 p-8 sm:mt-[200px] sm:flex-row sm:p-20 "
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
    >
      <div className="space-y-4">
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase1.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase2.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 pb-3 font-light sm:text-lg"
        >
<<<<<<< HEAD
          MCA student specializing in Generative AI @ SRM Institute of Science
          &amp; Technology. Open to AIML / SDE engineering roles.
=======
          Currently the founding full stack software engineer @Catapult a DeFi
          startup.
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 text-lg font-light"
        >
<<<<<<< HEAD
          I&apos;ve shipped agentic systems using LangGraph and MCP, built
          full-stack products with FastAPI, React, and GCP, and I&apos;m always
          looking for harder problems to solve.
=======
          My projects have received multiple awards in the past, and I am always
          looking for new and innovative ways to use my skills to make a
          positive impact on the world.
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
        </motion.p>
        <div data-scroll-speed={0.1}>
          <Link href={'/about'}>
            <RoundedButton className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-destructive text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]">
              About me
            </RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
