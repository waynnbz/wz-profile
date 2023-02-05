import React from 'react';
import { motion } from 'framer-motion';

function donut() {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center">
        <motion.div
          // whileHover={{ scale: 0.9 }}
          // initial={{ opacity: 0, scale: 2 }}
          // animate={{
          //   scale: [1, 2, 2, 1, 1],
          //   rotate: [0, 0, 270, 270, 0],
          //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          //   opacity: 1,
          // }}
          // transition={{ duration: 5.5 }}
          drag
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{
            scale: 0.5,
          }}
          className="w-36 h-36 bg-blue-500 rounded-3xl"
        ></motion.div>

        <motion.img
          src="web3Coder-sm.png"
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          
          // viewport={{ once: true }}
          animate={{
            rotate: [0, 15, -3, 22, -5, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 10,
            scale: { repeat: Infinity, duration: 5 },
            x: { duration: 1 },
          }}
          whileHover={{
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          whileDrag={{
            rotate: 390,
          }}
        ></motion.img>
      </div>
      <div className="bg-green-300 h-screen w-screen"></div>
    </div>
  );
}

export default donut;
