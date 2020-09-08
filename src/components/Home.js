import React from "react";
import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    // keyframes - here limited frames
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1],
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      //yoyo allows us to repeat animations - here any number is the no. of keyframes(from original value)
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 animate={{}}>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{
            scale: 0.8,
            rotate: -90,
            transformOrigin: "100% 50%",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
