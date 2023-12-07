'use client'

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const MovingBackground = () => {

  const animate1 = {
    scale: [1, 1.05, 0.95],
    x: [0, 30, 60, 70, 60, 30],
    y: [0, 10, 30, 20, 0, 0],
    rotate: [360, 350, 340, 350, 350, 360],
    opacity: [0.95, 1, 0.925, 1, 0.925, 1],
    borderRadius: ["100%", "80%", "100%", "60%", "100%"],
  };
  const animate2 = {
    scale: [0.95, 1, 1.05 ],
    x: [20, -20, 0, 20, 40, 0],
    y: [0, 20, 10, 10, 20, 0],
    rotate: [350, 360, 350, 350, 340, 360],
    opacity: [1, 0.95, 1, 0.925, 1, 1],
    borderRadius: ["80%", "100%", "80%", "100%", "60%"],
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
      <div
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
      ></div>
      <div
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
      ></div>
      </motion.div>
    </div>

  );
};

export default MovingBackground;