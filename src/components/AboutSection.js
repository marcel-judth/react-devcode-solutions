// import home1 from '../img/marcel-judth.png';

import { motion } from 'framer-motion';

import { About, Description, Image, Hide } from '../styles';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

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
            <motion.h2 variants={titleAnim}>Software-Firma</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              in <span>Villach</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Sie sind auf der Suche nach einer Website, die zu ihrem Corporate
          Design passt? Nach einer Desktop-Applikation die Ihren Arbeitsalltag
          erleichtern soll? Oder soll es doch eine mobile App sein? DevCode
          Solutions hilft Ihnen gerne dabei!
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
      <Image className="imageSmall">
        <motion.img
          variants={photoAnim}
          src={logo}
          alt="logo Devcode Solutions"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
