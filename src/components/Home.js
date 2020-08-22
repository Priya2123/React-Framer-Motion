import React from "react";
import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";

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

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2 animate={{}}>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
