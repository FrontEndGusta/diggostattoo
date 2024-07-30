import { motion, HTMLMotionProps, MotionProps } from 'framer-motion';
import React from 'react';

type FadeUpProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
};

const FadeUp: React.FC<FadeUpProps> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...props}  // Permite passar outras props para o motion.div
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
