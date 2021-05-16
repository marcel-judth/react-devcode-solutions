// import home1 from '../img/marcel-judth.png';

import { motion } from 'framer-motion';

import { About, Description, Image, Hide } from '../styles';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
import ScrollTop from '../components/ScrollTop';

import home1 from '../img/about-section.png';
import logo from '../img/logo.svg';

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
            <motion.h2 variants={titleAnim}>
              <span>DevCode</span> Solutions
            </motion.h2>
          </Hide>
          {/* <Hide className="hide">
            <motion.h2 variants={titleAnim}>
            </motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Softwarefirma spezialisiert auf die Entwicklung von{' '}
          <span>App-, Web- und Desktopanwendungen</span>.
        </motion.p>
        <motion.button onClick={call} variants={fade} className="call-btn">
          Call
        </motion.button>
        <motion.button onClick={sendMail} variants={fade} className="alt-btn">
          Mail
        </motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Image className="imageSmall">
        <motion.img
          variants={photoAnim}
          src={logo}
          alt="logo Devcode Solutions"
        />
      </Image>
      <Wave />
      <ScrollTop />
    </About>
  );
};

export default AboutSection;
