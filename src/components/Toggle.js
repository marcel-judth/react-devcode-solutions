import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Toggle = ({ children, title, icon }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <motion.div className="question" layout onClick={() => settoggle(!toggle)}>
      <div className="toogle-title-wrapper" layout>
        <motion.h4 layout>
          {icon} {title}
        </motion.h4>

        {toggle ? <IoIosArrowUp layout /> : <IoIosArrowDown layout />}
      </div>

      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
