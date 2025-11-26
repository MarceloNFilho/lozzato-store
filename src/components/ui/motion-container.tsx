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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
