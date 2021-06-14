import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';
import TermsFooter from './TermsFooter';

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
      <TermsFooter />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  overflow: hidden;
`;

export default AboutUs;
