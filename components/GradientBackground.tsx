'use client'

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const MovingBackground = () => {

  const animate = {
    scale: [1, 1.05, 1.1, 1.05, 1],
    x: [0, 0, 10, 50, 10, 0],
    y: [0, 20, 30, 20, 0, 0],
  };

  return (
    <div className='overflow-hidden'>
      <motion.div
        className={`
          bg-[#532235] 
          absolute 
          -z-10 
          h-[35rem] 
          w-[35rem]
          sm:w-[50rem] 
          2xl:w-[70rem] 
          top-[0rem] 
          right-[-5rem] 
          sm:right-[-5rem] 
          md:right-[0rem] 
          lg:right-[5rem] 
          xl:right-[10rem] 
          2xl:right-[5rem]  
          rounded-full 
          blur-[10rem]  
        `}
        animate={animate}
        transition={{
          default: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <motion.div
        className={`
        bg-[#123853] 
        absolute 
        -z-10 
        h-[35rem] 
        w-[35rem] 
        sm:w-[45rem] 
        2xl:w-[70rem] 
        top-[0rem] 
        left-[-21rem] 
        sm:left-[-22rem] 
        md:left-[-10rem] 
        lg:left-[0rem] 
        xl:left-[5rem] 
        2xl:left-[5rem]
        rounded-full 
        blur-[10rem] 
        `}
        animate={animate}
        transition={{
          default: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
    </div>

  );
};


export default MovingBackground;
