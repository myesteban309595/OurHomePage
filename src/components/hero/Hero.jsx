import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { isMobile, isTablet } from 'react-device-detect';

import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }, 
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const cursorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  initial: {
    x: -200,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: [null, 100, 0],
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: isMobile ? 5:15,
    },
  },
};

const colors = ['#FFFF00','#0000FF', '#4B0082', '#8B00FF'];

const Hero = () => {
  const [text, setText] = useState('');
  const phrases = ['EngineeringSoluTech', 'Good Ideas', 'Innovations Solutions', 'Eficiency', 'Innovations Solutions'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [cursorVisibility, setCursorVisibility] = useState('visible');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (phraseIndex < phrases.length) {
        const currentPhrase = phrases[phraseIndex];

        if (charIndex < currentPhrase.length) {
          setText(prevText => prevText + currentPhrase[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          // Cambia a la siguiente frase o reinicia si alcanzamos el final
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
          setText('');

          // Cambia el color al finalizar una frase
          setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        }
      }

      // Alternar la visibilidad del cursor para el efecto de parpadeo
      setCursorVisibility(current => (current === 'visible' ? 'hidden' : 'visible'));
    }, 100);

    return () => clearInterval(typingInterval);
  }, [phraseIndex, charIndex, phrases, currentColorIndex]);

  const currentColor = colors[currentColorIndex];

  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            style={{ cursor: "pointer", color: currentColor }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.span style={{ display: 'inline' }} animate={{ opacity: 1 }}>
              {text}
            </motion.span>
          </motion.h2>
          <motion.h1
            variants={textVariants}
          >
            WEB DEVELOPMENT and engineering SERVICES
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt='' />
        </motion.div>
        {/* cursor parpadeante pero quedo horizontal */}
        {/* <motion.div
          className="cursor"
          style={{ visibility: cursorVisibility, backgroundColor: 'yellow', height: '2px' }}
          variants={cursorVariants}
          initial="visible"
          animate={cursorVisibility}
        /> */}
      </div>
      <motion.div className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Contact Us for services
      </motion.div> 
      <div className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        >
       {/* <Spline scene="https://prod.spline.design/vDsaW2raCsstKTEz/scene.splinecode" /> */}
       {/* <img src="/foto.png" alt='' /> */}
       <img src="/webdesign.png" alt='' />
      </div>
    </div>
  );
}

export default Hero;
