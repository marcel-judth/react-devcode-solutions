import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <h2>
        Products/ <span>Software</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Web-Development (Webshops, CMS, Portfolios, Business, ...)">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              tempore?
            </p>
          </div>
        </Toggle>

        <Toggle title="Desktop-Applications (accounting management, article management, dashboards, ...)">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              tempore?
            </p>
          </div>
        </Toggle>

        <Toggle title="App-Development (shops, blogs, ticket-management-systems, ...)">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              tempore?
            </p>
          </div>
        </Toggle>

        <Toggle title="Social-Media marketing (Instagram, Facebook, Twitter, ...)">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              tempore?
            </p>
          </div>
        </Toggle>

        <Toggle title="Get in Contact and present us your wisch.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              tempore?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
