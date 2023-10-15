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
        className={`bg-[#532235] absolute top-[-6rem] -z-10 right-[7rem] h-[31.25rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] `}
        animate={animate}
        transition={{
          default: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-[#123853] absolute top-[-1rem] -z-10 left-[-40rem] h-[31.25rem] w-[45rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]`}
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
