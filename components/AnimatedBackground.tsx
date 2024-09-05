"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute right-0 w-[50%] rounded-bl-[60px] bg-pt-light-grayish-blue sm:w-[49%]"
      initial={{ height: 0 }}
      animate={{ height: 425 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}
