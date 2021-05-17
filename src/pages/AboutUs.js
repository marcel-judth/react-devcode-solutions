import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Wrapper
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  overflow: hidden;
`;

export default AboutUs;
