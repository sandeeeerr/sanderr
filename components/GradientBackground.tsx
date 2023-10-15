'use client'

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const MovingBackground = () => {

  const animate = {
    //scale: [1, 1.05, 1.1, 1.05, 1],
  //  x: [0, 0, 10, 50, 10, 0],
//    y: [0, 20, 30, 20, 0, 0],
  };

  return (
    <>
      <motion.div
        className={`bg-[#532235] absolute top-[-6rem] -z-10 lg:right-[10rem] xl:right-[20rem] 2xl:right-[25rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] md:right-[4rem] sm:right-0 `}
        animate={animate}
        transition={{
          default: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-[#123853] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 3xl:left-[10rem] 4xl:left-[-20rem]`}
        animate={animate}
        transition={{
          default: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
    </>

  );
};


export default MovingBackground;
