import { motion } from "motion/react";

export default function Block({ letter, blockColor }) {
  const colorMaps = {
    green: "bg-green-500",
    black: "bg-zinc-900",
    yellow: "bg-yellow-500",
  };

  return (
    <>
      <motion.div
        key={letter} // triggers animation when letter changes
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.25, 0.5, 1] }}
        transition={{ duration: 0.2, times: [0, 0.25, 0.5, 1] }}
        className={`md:w-16 md:h-16 w-12 h-12 ${
          blockColor ? colorMaps[blockColor] : `bg-zinc-800`
        }  
        rounded text-center text-white flex justify-center items-center uppercase text-base md:text-2xl font-bold`}
      >
        {letter}
      </motion.div>
    </>
  );
}
