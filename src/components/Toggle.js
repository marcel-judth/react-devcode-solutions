import { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <motion.div className="question" layout onClick={() => settoggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
