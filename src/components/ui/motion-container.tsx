"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const MotionContainer = ({
  children,
  className,
  delay = 0,
}: MotionContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
