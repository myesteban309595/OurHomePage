import "./hero.scss"
import {motion} from "framer-motion"

const textVariants={
    initial:{
        x:-500, opacity: 0,
    },
    animate: {
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerCildren: 0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideVariants={
    initial:{
        x:0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration:15,
        },
    },
}

function Hero() {
  return (
    <div className='hero'>
     <div className="wrapper">
      <motion.div 
         className="textContainer" 
         variants={textVariants} 
         initial="initial" 
         animate="animate"
         >
        <motion.h2 variants={textVariants}>EngineeringSoluTech</motion.h2>
        <motion.h1 variants={textVariants}>WEB DEVELOPMENT and engineering SERVICES</motion.h1>
        <motion.div  variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <motion.button variants={textVariants}>Contact us</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt=''/>
      </motion.div>
    </div>
    <motion.div className="slidingTextContainer" 
      variants={slideVariants} 
      initial="initial" 
      animate="animate"
      >
     Write Us for your services
    </motion.div>
    <div className="imageContainer">
      <img src="/foto.png" alt=''/>
    </div>
    </div>
  )
}

export default Hero

