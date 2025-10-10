'use client'

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const MovingBackground = () => {

  // Simplified animations for better performance
  const animate1 = {
    scale: [1, 1.05, 1],
    x: [0, 30, 0],
    y: [0, 20, 0],
    opacity: 1,
  };
  const animate2 = {
    scale: [1, 1.05, 1],
    x: [0, -30, 0],
    y: [0, -20, 0],
    opacity: 1,
  };

  return (
    <div className='absolute top-0 w-full h-full overflow-hidden -z-10 blur-[4rem] '>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.2,
        }}
        className=''
      >
      <motion.div
        className={`
          bg-[#532235] 
          absolute 
          -z-10 
          h-[40rem] 
          w-[35rem]
          sm:w-[50rem] 
          2xl:w-[60rem] 
          top-[0rem] 
          right-[-5rem] 
          sm:right-[-5rem] 
          md:right-[0rem] 
          lg:right-[5rem] 
          xl:right-[10rem] 
          2xl:right-[10rem]  
          rounded-full 
          blur-[10rem]  
        `}
        animate={animate1}
        transition={{
          default: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      ></motion.div>
      <motion.div
        className={`
        bg-[#123853] 
        absolute 
        -z-10 
        h-[40rem] 
        w-[35rem] 
        sm:w-[45rem] 
        2xl:w-[55rem] 
        top-[0rem] 
        left-[-21rem] 
        sm:left-[-22rem] 
        md:left-[-10rem] 
        lg:left-[0rem] 
        xl:left-[5rem] 
        2xl:left-[10rem]
        rounded-full 
        blur-[10rem] 
        `}
        animate={animate2}
        transition={{
          default: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      ></motion.div>


      </motion.div>
    </div>

  );
};


export default MovingBackground;