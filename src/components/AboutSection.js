// import home1 from '../img/marcel-judth.png';

import home1 from '../img/about-section.png';

import { About, Description, Image, Hide } from '../styles';
//Framer motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
const AboutSection = () => {
  const sendMail = () => {
    window.location.href = 'mailto:info@devcodesolutions.com';
  };

  const call = () => {
    window.location.href = 'tel:+4367682595032';
  };

  return (
    <About>
      <Description className="description">
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>Software-Firma</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              in <span>Villach</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any software solutions that you have. We have
          professionals with amazing skills
        </motion.p>
        <motion.button onClick={call} variants={fade} className="call-btn">
          Anrufen
        </motion.button>
        <motion.button onClick={sendMail} variants={fade} className="alt-btn">
          Kontakt
        </motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
