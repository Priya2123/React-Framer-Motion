import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -35],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        duration: 0.25,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  //useCycle: to toggle between different animations
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};
export default Loader;
